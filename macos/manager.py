import glob
import json
import os
import re
import shutil
import subprocess
import sys
import threading
import time
import zipfile
from datetime import datetime

import webview

ALLOWED_EXTENSIONS = (".yml", ".yaml", ".properties", ".json", ".txt", ".conf")
JAVA_LAUNCH_ARGS = ["-Xmx2G", "-jar"]
JAVA_LAUNCH_TAIL = ["nogui"]
JAVA_VERSION_PATTERN = re.compile(r'version\s+"([^"]+)"')
SERVER_VERSION_PATTERNS = (
    re.compile(r"\(MC:\s*([^)]+)\)"),
    re.compile(r"Starting minecraft server version\s+(\S+)"),
    re.compile(r"This server is running \S+ version\s+(\S+)"),
)

IS_WINDOWS = os.name == "nt"
IS_MAC = sys.platform == "darwin"

WINDOWS_JAVA_GLOBS = (
    r"C:\Program Files\Java\*\bin\java.exe",
    r"C:\Program Files\Eclipse Adoptium\*\bin\java.exe",
    r"C:\Program Files\Microsoft\jdk-*\bin\java.exe",
    r"C:\Program Files (x86)\Java\*\bin\java.exe",
)

# Типові місця встановлення JDK на macOS (Homebrew, Adoptium/Temurin, Oracle, Azul і т.д.)
MAC_JAVA_GLOBS = (
    "/Library/Java/JavaVirtualMachines/*/Contents/Home/bin/java",
    "/opt/homebrew/opt/openjdk*/bin/java",
    "/opt/homebrew/opt/openjdk/bin/java",
    "/usr/local/opt/openjdk*/bin/java",
    "/usr/local/opt/openjdk/bin/java",
)


def get_resource_dir():
    if getattr(sys, "frozen", False):
        return getattr(sys, "_MEIPASS", os.path.dirname(sys.executable))
    return os.path.dirname(os.path.abspath(__file__))


def get_app_dir():
    if getattr(sys, "frozen", False):
        # На macOS зібраний .app має вигляд:
        # MC Server Manager.app/Contents/MacOS/MC Server Manager
        # Тому "домашньою" теку застосунку логічніше рахувати теку .app,
        # а не Contents/MacOS, інакше користувач побачить службові файли бандла.
        exe_dir = os.path.dirname(sys.executable)
        if IS_MAC and os.path.basename(os.path.dirname(exe_dir)) == "Contents":
            app_bundle = os.path.dirname(os.path.dirname(exe_dir))
            return os.path.dirname(app_bundle)
        return exe_dir
    return os.path.dirname(os.path.abspath(__file__))


def _java_home_via_helper():
    """На macOS є офіційна утиліта для пошуку встановлених JDK."""
    if not IS_MAC:
        return None
    try:
        result = subprocess.run(
            ["/usr/libexec/java_home"], capture_output=True, text=True, timeout=5
        )
    except Exception:
        return None
    if result.returncode != 0:
        return None
    home = (result.stdout or "").strip()
    if not home:
        return None
    candidate = os.path.join(home, "bin", "java")
    return candidate if os.path.isfile(candidate) else None


def find_java_executable():
    found = shutil.which("java")
    if found:
        return found

    java_home = os.environ.get("JAVA_HOME")
    if java_home:
        candidate = os.path.join(java_home, "bin", "java.exe" if IS_WINDOWS else "java")
        if os.path.isfile(candidate):
            return candidate

    if IS_WINDOWS:
        for pattern in WINDOWS_JAVA_GLOBS:
            matches = sorted(glob.glob(pattern))
            if matches:
                return matches[-1]
        return None

    if IS_MAC:
        via_helper = _java_home_via_helper()
        if via_helper:
            return via_helper
        for pattern in MAC_JAVA_GLOBS:
            matches = sorted(glob.glob(pattern))
            if matches:
                return matches[-1]
        return None

    # Linux/інші unix-системи — типові шляхи пакетних менеджерів
    for pattern in ("/usr/lib/jvm/*/bin/java", "/opt/java/*/bin/java"):
        matches = sorted(glob.glob(pattern))
        if matches:
            return matches[-1]

    return None


def detect_java_version(java_executable: str) -> str:
    if not java_executable:
        return ""
    try:
        run_kwargs = {}
        if IS_WINDOWS:
            run_kwargs["creationflags"] = subprocess.CREATE_NO_WINDOW
        result = subprocess.run(
            [java_executable, "-version"], capture_output=True, text=True, timeout=5, **run_kwargs
        )
    except Exception:
        return ""
    output = (result.stdout or "") + (result.stderr or "")
    match = JAVA_VERSION_PATTERN.search(output)
    return match.group(1) if match else ""


def extract_server_version(line: str):
    for pattern in SERVER_VERSION_PATTERNS:
        match = pattern.search(line)
        if match:
            return match.group(1).strip()
    return None


def detect_jar_version(jar_path: str) -> str:
    if not jar_path or not os.path.isfile(jar_path):
        return ""
    try:
        with zipfile.ZipFile(jar_path) as jar:
            if "version.json" in jar.namelist():
                with jar.open("version.json") as version_file:
                    data = json.load(version_file)
                    version = data.get("name") or data.get("id")
                    if version:
                        return str(version)
    except (OSError, zipfile.BadZipFile, json.JSONDecodeError, KeyError):
        pass
    match = re.search(r"(\d+\.\d+(?:\.\d+)?)", os.path.basename(jar_path))
    return match.group(1) if match else ""


def format_file_size(num_bytes: int) -> str:
    if num_bytes < 1024:
        return f"{num_bytes} Б"
    kilobytes = num_bytes / 1024
    if kilobytes < 1024:
        return f"{kilobytes:.1f} КБ"
    megabytes = kilobytes / 1024
    return f"{megabytes:.1f} МБ"


def format_modified_time(timestamp: float) -> str:
    return datetime.fromtimestamp(timestamp).strftime("%d.%m.%Y %H:%M")


class Api:
    def __init__(self):
        self.window = None
        script_dir = get_app_dir()
        default_jar = os.path.join(script_dir, "server.jar")
        self.server_jar_path = default_jar if os.path.isfile(default_jar) else ""
        self.server_dir = script_dir if self.server_jar_path else ""
        self.current_browse_dir = self.server_dir
        self.jar_core_version = detect_jar_version(self.server_jar_path)
        self.server_process: "subprocess.Popen | None" = None
        self.reader_thread: "threading.Thread | None" = None
        self.current_file_path: "str | None" = None
        self.java_executable = None
        self.java_version = ""
        self.server_version: "str | None" = None
        self._console_buffer = []
        self._console_lock = threading.Lock()
        threading.Thread(target=self._console_flush_loop, daemon=True).start()

    def set_window(self, window):
        self.window = window

    def _push(self, js_call: str):
        if self.window is not None:
            try:
                self.window.evaluate_js(js_call)
            except Exception:
                pass

    def _append_console(self, text: str):
        with self._console_lock:
            self._console_buffer.append(text)

    def _console_flush_loop(self):
        while True:
            time.sleep(0.12)
            with self._console_lock:
                if not self._console_buffer:
                    continue
                chunk = "".join(self._console_buffer)
                self._console_buffer.clear()
            self._push(f"appendConsoleText({json.dumps(chunk)})")

    def get_initial_state(self):
        return {
            "jarPath": self.server_jar_path,
            "jarName": os.path.basename(self.server_jar_path) if self.server_jar_path else "",
            "dirName": os.path.basename(self.server_dir) if self.server_dir else "",
            "running": self.server_process is not None,
            "javaVersion": self.java_version,
            "serverVersion": self.server_version,
            "jarVersion": self.jar_core_version,
        }

    def browse_jar(self):
        initial_dir = self.server_dir if self.server_dir else os.path.expanduser("~")
        result = self.window.create_file_dialog(
            webview.FileDialog.OPEN,
            directory=initial_dir,
            file_types=("Java Archive (*.jar)", "Усі файли (*.*)"),
        )
        if not result:
            return None
        selected_path = result[0]
        self.server_jar_path = selected_path
        self._set_server_root(os.path.dirname(selected_path))
        self.server_version = None
        self.jar_core_version = detect_jar_version(selected_path)
        return {
            "jarPath": self.server_jar_path,
            "jarName": os.path.basename(self.server_jar_path),
            "dirName": os.path.basename(self.server_dir),
            "jarVersion": self.jar_core_version,
        }

    def set_jar_path(self, jar_path: str):
        jar_path = (jar_path or "").strip()
        if not jar_path or not os.path.isfile(jar_path):
            return {"success": False}
        self.server_jar_path = jar_path
        self._set_server_root(os.path.dirname(jar_path))
        self.server_version = None
        self.jar_core_version = detect_jar_version(jar_path)
        return {
            "success": True,
            "jarName": os.path.basename(jar_path),
            "dirName": os.path.basename(self.server_dir),
            "jarVersion": self.jar_core_version,
        }

    def _set_server_root(self, folder_path: str):
        self.server_dir = folder_path
        self.current_browse_dir = folder_path

    def start_server(self, jar_path: str):
        if self.server_process is not None:
            return {"success": False, "message": "Процес сервера вже активний."}
        jar_path = (jar_path or "").strip()
        if not jar_path:
            return {"success": False, "message": "Спочатку оберіть ядро."}
        if not os.path.isfile(jar_path):
            return {"success": False, "message": f"Файл ядра сервера не знайдено за шляхом:\n{jar_path}"}

        if not self.java_executable:
            self.java_executable = find_java_executable()
        if not self.java_executable:
            return {
                "success": False,
                "message": (
                    "Java не знайдено на цьому комп'ютері.\n\n"
                    "Встановіть Java (JDK/JRE 17 або новішу, наприклад з adoptium.net, "
                    "або командою `brew install openjdk` на macOS) і переконайтесь, що вона "
                    "додана до PATH, або задайте змінну середовища JAVA_HOME."
                ),
            }

        self.server_jar_path = jar_path
        launch_dir = os.path.dirname(jar_path) or self.server_dir
        self._set_server_root(launch_dir)
        self.server_version = None
        self.jar_core_version = detect_jar_version(jar_path)

        command = [self.java_executable] + JAVA_LAUNCH_ARGS + [jar_path] + JAVA_LAUNCH_TAIL

        popen_kwargs = {}
        if IS_WINDOWS:
            popen_kwargs["creationflags"] = subprocess.CREATE_NO_WINDOW

        try:
            self.server_process = subprocess.Popen(
                command,
                cwd=launch_dir,
                stdin=subprocess.PIPE,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                encoding="utf-8",
                errors="replace",
                bufsize=1,
                **popen_kwargs,
            )
        except OSError as error:
            self.server_process = None
            return {
                "success": False,
                "message": f"Не вдалося запустити сервер (java: {self.java_executable}):\n{error}",
            }

        self._append_console("[Менеджер] Сервер запускається...\n")
        self.reader_thread = threading.Thread(target=self._read_server_output, daemon=True)
        self.reader_thread.start()

        return {
            "success": True,
            "pid": self.server_process.pid,
            "dirName": os.path.basename(self.server_dir),
            "jarName": os.path.basename(self.server_jar_path),
            "jarVersion": self.jar_core_version,
        }

    def stop_server(self):
        if self.server_process is None or self.server_process.stdin is None:
            return {"success": False, "message": "Сервер зараз не запущено."}
        try:
            self.server_process.stdin.write("stop\n")
            self.server_process.stdin.flush()
        except (OSError, ValueError) as error:
            return {"success": False, "message": f"Не вдалося надіслати команду зупинки:\n{error}"}
        self._append_console("[Менеджер] Надіслано команду зупинки сервера...\n")
        return {"success": True}

    def restart_server(self):
        if self.server_process is None:
            return {"success": False, "message": "Сервер зараз не запущено."}
        jar_path = self.server_jar_path
        self._append_console("[Менеджер] Перезапуск сервера...\n")
        self._push("onServerRestarting()")
        threading.Thread(target=self._restart_worker, args=(jar_path,), daemon=True).start()
        return {"success": True}

    def _restart_worker(self, jar_path: str):
        try:
            if self.server_process is not None and self.server_process.stdin is not None:
                self.server_process.stdin.write("stop\n")
                self.server_process.stdin.flush()
        except (OSError, ValueError):
            pass

        reader_thread = self.reader_thread
        if reader_thread is not None:
            reader_thread.join(timeout=60)

        if self.server_process is not None:
            try:
                self.server_process.kill()
            except Exception:
                pass
        self.server_process = None

        result = self.start_server(jar_path)
        if result.get("success"):
            self._push(f"onServerRestarted({json.dumps(result)})")
        else:
            message = result.get("message", "Не вдалося перезапустити сервер.")
            self._push(f"onRestartFailed({json.dumps(message)})")

    def send_command(self, command_text: str):
        if self.server_process is None or self.server_process.stdin is None:
            return {"success": False, "message": "Неможливо надіслати команду — сервер зараз не запущено."}
        command_text = (command_text or "").strip()
        if not command_text:
            return {"success": False}
        try:
            self.server_process.stdin.write(command_text + "\n")
            self.server_process.stdin.flush()
        except (OSError, ValueError) as error:
            return {"success": False, "message": f"Не вдалося надіслати команду:\n{error}"}
        self._append_console(f"> {command_text}\n")
        return {"success": True}

    def _read_server_output(self):
        process = self.server_process
        if process is None or process.stdout is None:
            return
        try:
            for line in process.stdout:
                self._append_console(line)
                if self.server_version is None:
                    version = extract_server_version(line)
                    if version:
                        self.server_version = version
                        self._push(f"onServerVersionDetected({json.dumps(version)})")
        except (OSError, ValueError):
            pass
        finally:
            process.wait()
            self._append_console("[Менеджер] Процес сервера завершено.\n")
            self.server_process = None
            self._push("onServerStopped()")

    def navigate_into(self, folder_path: str):
        self.current_browse_dir = folder_path
        return self.list_current_dir()

    def navigate_up(self):
        if self.current_browse_dir and self.current_browse_dir != self.server_dir:
            self.current_browse_dir = os.path.dirname(self.current_browse_dir.rstrip(os.sep))
        return self.list_current_dir()

    def refresh_files(self):
        return self.list_current_dir()

    def list_current_dir(self):
        if not self.server_dir or not os.path.isdir(self.server_dir):
            return {"ready": False}
        if not self.current_browse_dir or not os.path.isdir(self.current_browse_dir):
            self.current_browse_dir = self.server_dir

        at_root = os.path.normpath(self.current_browse_dir) == os.path.normpath(self.server_dir)
        try:
            entries = sorted(os.listdir(self.current_browse_dir))
        except OSError as error:
            return {
                "ready": True, "error": str(error), "path": self.current_browse_dir,
                "atRoot": at_root, "folders": [], "files": [],
            }

        folders, files = [], []
        for entry in entries:
            full_path = os.path.join(self.current_browse_dir, entry)
            if os.path.isdir(full_path):
                folders.append({"name": entry, "path": full_path})
            elif entry.lower().endswith(ALLOWED_EXTENSIONS):
                try:
                    stat_result = os.stat(full_path)
                    size_text = format_file_size(stat_result.st_size)
                    modified_text = format_modified_time(stat_result.st_mtime)
                except OSError:
                    size_text, modified_text = "—", "—"
                files.append({"name": entry, "path": full_path, "size": size_text, "modified": modified_text})

        return {
            "ready": True, "path": self.current_browse_dir, "atRoot": at_root,
            "folders": folders, "files": files,
        }

    def load_file(self, file_path: str):
        try:
            with open(file_path, "r", encoding="utf-8") as file_handle:
                content = file_handle.read()
        except UnicodeDecodeError:
            return {"success": False, "message": "Файл не є текстовим у кодуванні UTF-8 і не може бути відкритий."}
        except OSError as error:
            return {"success": False, "message": f"Не вдалося відкрити файл:\n{error}"}
        self.current_file_path = file_path
        return {"success": True, "content": content, "name": os.path.basename(file_path)}

    def save_file(self, file_path: str, content: str):
        if not file_path:
            return {"success": False, "message": "Немає відкритого текстового файлу для збереження."}
        try:
            with open(file_path, "w", encoding="utf-8") as file_handle:
                file_handle.write(content)
        except OSError as error:
            return {"success": False, "message": f"Не вдалося зберегти файл:\n{error}"}
        self._append_console(f"[Менеджер] Файл збережено: {file_path}\n")
        return {"success": True}

    def create_folder(self, parent_dir: str, name: str):
        name = (name or "").strip()
        if not name:
            return {"success": False, "message": "Введіть назву папки."}
        if any(sep in name for sep in ("/", "\\")) or name in (".", ".."):
            return {"success": False, "message": "Назва папки містить недопустимі символи."}
        if not parent_dir or not os.path.isdir(parent_dir):
            return {"success": False, "message": "Поточна папка недоступна."}
        new_path = os.path.join(parent_dir, name)
        if os.path.exists(new_path):
            return {"success": False, "message": f"«{name}» вже існує."}
        try:
            os.makedirs(new_path)
        except OSError as error:
            return {"success": False, "message": f"Не вдалося створити папку:\n{error}"}
        self._append_console(f"[Менеджер] Створено папку: {new_path}\n")
        return {"success": True, "path": new_path}

    def create_file(self, parent_dir: str, name: str):
        name = (name or "").strip()
        if not name:
            return {"success": False, "message": "Введіть назву файлу."}
        if any(sep in name for sep in ("/", "\\")) or name in (".", ".."):
            return {"success": False, "message": "Назва файлу містить недопустимі символи."}
        if not name.lower().endswith(ALLOWED_EXTENSIONS):
            return {
                "success": False,
                "message": "Дозволені розширення файлів: " + ", ".join(ALLOWED_EXTENSIONS),
            }
        if not parent_dir or not os.path.isdir(parent_dir):
            return {"success": False, "message": "Поточна папка недоступна."}
        new_path = os.path.join(parent_dir, name)
        if os.path.exists(new_path):
            return {"success": False, "message": f"«{name}» вже існує."}
        try:
            with open(new_path, "w", encoding="utf-8"):
                pass
        except OSError as error:
            return {"success": False, "message": f"Не вдалося створити файл:\n{error}"}
        self._append_console(f"[Менеджер] Створено файл: {new_path}\n")
        return {"success": True, "path": new_path}

    def delete_entry(self, path: str):
        path = (path or "").strip()
        if not path or not os.path.exists(path):
            return {"success": False, "message": "Елемент не знайдено."}
        if self.server_dir and os.path.normpath(path) == os.path.normpath(self.server_dir):
            return {"success": False, "message": "Неможливо видалити кореневу папку сервера."}
        try:
            if os.path.isdir(path):
                shutil.rmtree(path)
            else:
                os.remove(path)
        except OSError as error:
            return {"success": False, "message": f"Не вдалося видалити:\n{error}"}
        if self.current_file_path and os.path.normpath(self.current_file_path) == os.path.normpath(path):
            self.current_file_path = None
        self._append_console(f"[Менеджер] Видалено: {path}\n")
        return {"success": True}

    def rename_entry(self, path: str, new_name: str):
        path = (path or "").strip()
        new_name = (new_name or "").strip()
        if not path or not os.path.exists(path):
            return {"success": False, "message": "Елемент не знайдено."}
        if not new_name:
            return {"success": False, "message": "Введіть нову назву."}
        if any(sep in new_name for sep in ("/", "\\")) or new_name in (".", ".."):
            return {"success": False, "message": "Назва містить недопустимі символи."}
        if self.server_dir and os.path.normpath(path) == os.path.normpath(self.server_dir):
            return {"success": False, "message": "Неможливо перейменувати кореневу папку сервера."}
        parent_dir = os.path.dirname(path)
        new_path = os.path.join(parent_dir, new_name)
        if os.path.exists(new_path):
            return {"success": False, "message": f"«{new_name}» вже існує."}
        try:
            os.rename(path, new_path)
        except OSError as error:
            return {"success": False, "message": f"Не вдалося перейменувати:\n{error}"}
        if self.current_file_path and os.path.normpath(self.current_file_path) == os.path.normpath(path):
            self.current_file_path = new_path
        self._append_console(f"[Менеджер] Перейменовано: {path} -> {new_path}\n")
        return {"success": True, "newPath": new_path, "newName": new_name}

    def detect_environment(self):
        self.java_executable = find_java_executable()
        self.java_version = detect_java_version(self.java_executable)
        self._push(f"onJavaVersionDetected({json.dumps(self.java_version)})")

    def is_server_running(self):
        return self.server_process is not None

    def force_stop_server(self):
        if self.server_process is not None:
            try:
                if self.server_process.stdin is not None:
                    self.server_process.stdin.write("stop\n")
                    self.server_process.stdin.flush()
                self.server_process.wait(timeout=10)
            except Exception:
                try:
                    self.server_process.kill()
                except Exception:
                    pass
        return {"success": True}


def main():
    api = Api()

    web_dir = os.path.join(get_resource_dir(), "web")
    index_path = os.path.join(web_dir, "index.html")
    splash_path = os.path.join(web_dir, "splash.html")

    splash_width, splash_height = 560, 340
    splash_x = splash_y = None
    try:
        screens = webview.screens
        if screens:
            screen = screens[0]
            splash_x = int((screen.width - splash_width) / 2)
            splash_y = int((screen.height - splash_height) / 2)
    except Exception:
        pass

    splash = webview.create_window(
        "MC Server Manager",
        splash_path,
        width=splash_width,
        height=splash_height,
        x=splash_x,
        y=splash_y,
        resizable=False,
        frameless=True,
        easy_drag=True,
        on_top=True,
        background_color="#19191c",
    )

    window = webview.create_window(
        "MC Server Manager",
        index_path,
        js_api=api,
        width=1440,
        height=860,
        min_size=(1120, 660),
        background_color="#19191c",
        maximized=True,
        hidden=True,
    )

    api.set_window(window)

    def on_closing():
        try:
            if api.is_server_running():
                api.force_stop_server()
        except Exception:
            pass
        return True

    window.events.closing += on_closing

    SPLASH_MIN_SECONDS = 10

    def boot_sequence():
        started_at = time.time()
        api.detect_environment()
        remaining = SPLASH_MIN_SECONDS - (time.time() - started_at)
        if remaining > 0:
            time.sleep(remaining)
        try:
            window.show()
        except Exception:
            pass
        try:
            splash.destroy()
        except Exception:
            pass

    # На macOS pywebview обов'язково має стартувати з головного потоку,
    # тому GUI-бекенд обираємо явно (webkit — нативний варіант для Mac).
    gui_backend = "cocoa" if IS_MAC else None
    webview.start(boot_sequence, debug=False, gui=gui_backend)


if __name__ == "__main__":
    main()
