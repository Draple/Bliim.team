# Subir proyecto a https://github.com/Draple/Bliim.team
# Ejecutar: clic derecho en este archivo -> "Ejecutar con PowerShell"
# O en PowerShell: .\subir-a-github.ps1

$ErrorActionPreference = "Stop"
$projectPath = $PSScriptRoot
Set-Location $projectPath

Write-Host "Carpeta del proyecto: $projectPath" -ForegroundColor Cyan
Write-Host ""

# Comprobar si Git está instalado
$git = Get-Command git -ErrorAction SilentlyContinue
if (-not $git) {
    Write-Host "ERROR: Git no está instalado o no está en el PATH." -ForegroundColor Red
    Write-Host "Instala Git desde: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Luego cierra y vuelve a abrir la terminal y ejecuta este script de nuevo." -ForegroundColor Yellow
    Read-Host "Pulsa Enter para salir"
    exit 1
}

Write-Host "Git encontrado. Inicializando y subiendo..." -ForegroundColor Green

if (-not (Test-Path ".git")) {
    git init
    git add .
    git commit -m "Initial commit: landing Bliim.team"
    git branch -M main
    git remote add origin https://github.com/Draple/Bliim.team.git
    Write-Host ""
    Write-Host "Primera vez: Git te pedira usuario y contraseña de GitHub." -ForegroundColor Yellow
    Write-Host "Usa tu usuario y como contraseña un Personal Access Token (no la de la cuenta)." -ForegroundColor Yellow
    Write-Host "Crear token: https://github.com/settings/tokens" -ForegroundColor Cyan
    Write-Host ""
    git push -u origin main
} else {
    git add .
    git status
    $msg = git diff --cached --quiet 2>$null; if ($LASTEXITCODE -ne 0) { git commit -m "Update landing Bliim.team" }
    $rem = git remote get-url origin 2>$null
    if (-not $rem) { git remote add origin https://github.com/Draple/Bliim.team.git }
    git branch -M main 2>$null
    git push -u origin main
}

Write-Host ""
Write-Host "Listo. Repositorio: https://github.com/Draple/Bliim.team" -ForegroundColor Green
Read-Host "Pulsa Enter para salir"
