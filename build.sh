#!/bin/bash

set -euo pipefail

APP_NAME="MC Server Manager"
BUNDLE_ID="com.flariethx.mcservermanager"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "==> Перевірка Python"
if ! command -v python3 >/dev/null 2>&1; then
  echo "Python 3 не знайдено. Встанови його спочатку (див. інструкцію)." >&2
  exit 1
fi

echo "==> Створення віртуального середовища (.venv)"
python3 -m venv .venv
source .venv/bin/activate

echo "==> Встановлення залежностей"
pip install --upgrade pip
pip install -r requirements.txt

echo "==> Конвертація іконки у .icns (якщо ще не зроблено)"
if [ ! -f "icon.icns" ] && [ -f "icon.png" ]; then
  mkdir -p icon.iconset
  sizes=(16 32 64 128 256 512)
  for size in "${sizes[@]}"; do
    sips -z "$size" "$size" icon.png --out "icon.iconset/icon_${size}x${size}.png" >/dev/null
    double=$((size * 2))
    sips -z "$double" "$double" icon.png --out "icon.iconset/icon_${size}x${size}@2x.png" >/dev/null
  done
  iconutil -c icns icon.iconset -o icon.icns
  rm -rf icon.iconset
fi

echo "==> Збірка .app через PyInstaller"
pyinstaller --noconfirm --windowed --clean \
  --name "$APP_NAME" \
  --icon "icon.icns" \
  --osx-bundle-identifier "$BUNDLE_ID" \
  --add-data "web:web" \
  manager.py

APP_PATH="dist/${APP_NAME}.app"
DMG_PATH="dist/${APP_NAME// /-}.dmg"

if [ ! -d "$APP_PATH" ]; then
  echo "Помилка: .app не було створено, перевір лог PyInstaller вище." >&2
  exit 1
fi

echo "==> Пакування у .dmg"
rm -f "$DMG_PATH"

if command -v create-dmg >/dev/null 2>&1; then
  create-dmg \
    --volname "$APP_NAME" \
    --window-pos 200 120 \
    --window-size 640 400 \
    --icon-size 110 \
    --icon "${APP_NAME}.app" 170 190 \
    --app-drop-link 470 190 \
    "$DMG_PATH" \
    "$APP_PATH" || true
fi

if [ ! -f "$DMG_PATH" ]; then
  STAGING_DIR="$(mktemp -d)"
  cp -R "$APP_PATH" "$STAGING_DIR/"
  ln -s /Applications "$STAGING_DIR/Applications"
  hdiutil create -volname "$APP_NAME" -srcfolder "$STAGING_DIR" -ov -format UDZO "$DMG_PATH"
  rm -rf "$STAGING_DIR"
fi

echo ""
echo "✅ Готово!"
echo "   Застосунок: $APP_PATH"
echo "   Образ .dmg: $DMG_PATH"
echo ""
echo "Примітка: застосунок не підписаний Apple Developer ID, тому при першому"
echo "запуску macOS Gatekeeper може попросити підтвердити відкриття через"
echo "Системні налаштування → Конфіденційність і безпека → 'Все одно відкрити'."