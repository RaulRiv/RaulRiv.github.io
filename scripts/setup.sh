#!/usr/bin/env bash
# PORT-016 — Portfolio: setup completo del entorno de desarrollo
# Uso: bash scripts/setup.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
ok()   { echo -e "${GREEN}[OK]${NC}  $*"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $*"; }
err()  { echo -e "${RED}[ERR]${NC}  $*"; exit 1; }

echo "=== Portfolio — Setup ==="

# ── Node: activar versión correcta ───────────────────────────────────────────
if command -v nvm &>/dev/null; then
    nvm use 2>/dev/null || warn "nvm use falló — asegúrate de usar Node 22 (.nvmrc)"
else
    warn "nvm no encontrado — asegúrate de usar Node 22 (.nvmrc)"
fi

# ── Instalar dependencias Node ────────────────────────────────────────────────
echo "Instalando dependencias Node..."
npm install --silent
ok "Dependencias Node instaladas"

# ── Copiar .env si no existe ──────────────────────────────────────────────────
if [[ ! -f ".env" ]]; then
    if [[ -f ".env.example" ]]; then
        cp .env.example .env
        ok ".env creado desde .env.example"
    else
        warn "No existe .env.example — crea .env manualmente"
    fi
else
    ok ".env ya existe"
fi

echo ""
echo "=== Setup completado ==="
echo "Arranca el entorno con:  bash scripts/dev.sh"
