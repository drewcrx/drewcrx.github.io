@echo off
setlocal
cd /d "%~dp0"

echo.
echo ============================================
echo   Andrew Benjamin - Premium Portfolio
echo ============================================
echo.

if not exist package.json (
  echo [ERROR] No se encontro package.json en esta carpeta.
  echo Extrae el ZIP completo y ejecuta este archivo desde la raiz del proyecto.
  pause
  exit /b 1
)

where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js no esta instalado o no esta en PATH.
  echo Instala Node.js 20.19+ o 22.12+ y vuelve a intentarlo.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Instalando dependencias...
  call npm install
  if errorlevel 1 (
    echo.
    echo [ERROR] npm install fallo. Revisa tu conexion o el mensaje anterior.
    pause
    exit /b 1
  )
)

echo.
echo Iniciando Vite...
call npm run dev
