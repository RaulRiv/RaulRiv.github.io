#!/usr/bin/env bash
# PORT-016 — Portfolio: arrancar entorno de desarrollo
# Uso: bash scripts/dev.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

GREEN='\033[0;32m'; NC='\033[0m'

# ── Node: activar versión correcta ───────────────────────────────────────────
if command -v nvm &>/dev/null; then
    nvm use 2>/dev/null || true
fi

echo "=== Portfolio — Dev ==="
echo "  FE → http://localhost:3000"
echo "  Ctrl+C para parar"
echo ""

npm run dev 2>&1 | while IFS= read -r line; do
    echo -e "${GREEN}[FE]${NC} $line"
done
