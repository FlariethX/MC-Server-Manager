# 🧩 MC Server Manager

> Керуй своїм Minecraft-сервером (Paper/Bukkit) з одного акуратного вікна — без баток, без чорних консолей, без зайвих рухів.

Десктопний застосунок для Windows, який об'єднує запуск сервера, консоль, файловий провідник і редактор конфігів в одному місці. Один `.exe` — і Java-сервер під повним контролем.

![status](https://img.shields.io/badge/platform-Windows-0078D6?style=flat-square)
![status](https://img.shields.io/badge/build-PyInstaller-c900fb?style=flat-square)
![status](https://img.shields.io/badge/UI-pywebview-e070ff?style=flat-square)

---

## ✨ Можливості

🚀 **Керування сервером**
Старт / рестарт / коректний стоп (`stop`), автовизначення Java та її версії на комп'ютері.

🖥️ **Консоль наживо**
Повний лог сервера в реальному часі + рядок для введення команд, як у звичайній консолі.

📁 **Файловий провідник**
Навігація по папці сервера, створення, перейменування та видалення файлів і папок прямо в застосунку.

📝 **Редактор конфігів**
Кілька вкладок одночасно, підсвітка синтаксису YAML/properties, швидка вставка PlaceholderAPI-плейсхолдерів і UTF-8 символів.

📦 **Один файл**
Все запаковано в один `.exe` — на комп'ютері користувача не потрібен ані Python, ані додаткові бібліотеки.

---

## 🛠️ Вимоги

- 🪟 Windows
- ☕ Java 17+ — потрібна лише для самого Minecraft-сервера, не для застосунку

---

## ⬇️ Встановлення

Завантаж готовий `.exe` з [Releases](../../releases) і запусти — усе інше застосунок зробить сам.

---

## 🔨 Збірка з вихідного коду

```bash
git clone https://github.com/<your-username>/<repo>.git
cd <repo>
build.bat
```

`build.bat` сам підтягне залежності (`pywebview`, `pyinstaller`) і збере готовий `MC Server Manager.exe` у папці `dist\`.

---

## 📂 Структура проєкту

```
.
├── manager.py          — бекенд: pywebview API, робота з процесом сервера й файлами
├── requirements.txt    — Python-залежності для збірки
├── build.bat           — скрипт збірки в .exe (PyInstaller, --onefile)
├── icon.ico            — іконка застосунку
└── web/                — інтерфейс
    ├── index.html
    ├── splash.html
    ├── style.css
    ├── splash.css
    └── app.js
```

---

## ⚙️ Технології

- [pywebview](https://pywebview.flowrl.com/) — нативне вікно + міст Python ↔ JS
- Ванільний HTML/CSS/JS без фреймворків
- [PyInstaller](https://pyinstaller.org/) — збірка в один `.exe`

---

<p align="center">Зроблено для зручного налаштування локальних Minecraft-серверів 🎮</p>
