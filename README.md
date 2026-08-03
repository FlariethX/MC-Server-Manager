# 🧩 MC Server Manager

> Керуй своїм локальним Minecraft-сервером з одного акуратного вікна — без баток, без чорних консолей, без зайвих рухів.

Застосунок для Windows/MacOS, який об'єднує запуск сервера, консоль, файловий провідник і редактор конфігів в одному місці. Один `.exe`/`.dmg` — і Java-сервер під повним контролем.

![Windows](https://img.shields.io/badge/platform-Windows-e070ff?style=flat-square)  ![Windows](https://img.shields.io/badge/platform-MacOS-e070ff?style=plastic)
![status](https://img.shields.io/badge/build-PyInstaller-c900fb?style=flat-square)
![status](https://img.shields.io/badge/UI-pywebview-e070ff?style=flat-square)

<img width="692" height="397" alt="зображення" src="https://github.com/user-attachments/assets/21b509be-51a9-4937-a0f6-70e5a04332e3" />
<img width="1920" height="1003" alt="зображення" src="https://github.com/user-attachments/assets/dd0a4dfc-dcae-4fb6-9361-0db97f5ff2b4" />
<img width="1920" height="1004" alt="зображення" src="https://github.com/user-attachments/assets/fff30037-e841-42ac-9c4f-211b9b645b45" />

---

## ✨ Можливості

🚀 **Керування сервером**
Старт / рестарт / коректний стоп (`stop`), автовизначення Java та її версії на комп'ютері.

🖥️ **Консоль наживо**
Повний лог сервера в реальному часі + рядок для введення команд, як у звичайній консолі.

📁 **Файловий провідник**
Навігація по папці сервера, створення, перейменування та видалення файлів і папок прямо в застосунку.

<img width="620" height="459" alt="зображення" src="https://github.com/user-attachments/assets/f1ca8694-cee7-4c41-b356-82007eab518b" />
<img width="432" height="454" alt="зображення" src="https://github.com/user-attachments/assets/e9bca393-79f2-4edd-9370-717d89d4e2ed" />

📝 **Редактор конфігів**
Кілька вкладок одночасно, підсвітка синтаксису YAML/properties, швидка вставка PlaceholderAPI-плейсхолдерів і UTF-8 символів.

<img width="1101" height="969" alt="зображення" src="https://github.com/user-attachments/assets/eeaee025-e865-4747-9ee3-07e06ef12e6d" />
<img width="1100" height="966" alt="зображення" src="https://github.com/user-attachments/assets/4d34362f-9e4f-4c39-a138-4bdc1091b80d" />

📦 **Один файл**
Все запаковано в один `.exe` — на комп'ютері користувача не потрібен ані Python, ані додаткові бібліотеки.

---

## 🛠️ Вимоги

- 🪟 Windows
- ☕ Java 17+ — потрібна лише для самого Minecraft-сервера, не для застосунку

---

## ⬇️ Встановлення

Завантаж готовий `.exe`/`.dmg` з [Releases](../../releases) і запусти — усе інше застосунок зробить сам.

---

## 🔨 Збірка з вихідного коду

```bash
git clone https://github.com/FlariethX/MC-Server-Manager.git
cd MC-Server-Manager
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
