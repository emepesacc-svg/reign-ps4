@echo off
chcp 65001 >nul
cd /d "%~dp0"
python download_game_artwork.py
echo.
echo انتهى تجهيز الصور. راجع ARTWORK_REPORT_AR.txt
pause
