@echo off
python -m pip install --upgrade pyinstaller pywebview
python -m PyInstaller --noconfirm --onefile --windowed --name "MC Server Manager" --icon "icon.ico" --add-data "web;web" --add-data "icon.ico;." manager.py
echo.
echo Готово. Файл .exe шукай у dist\MC Server Manager.exe
pause