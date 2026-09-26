#!/usr/bin/env bash
# Deploy rankedbyapril to Hostinger VPS WITHOUT touching other PM2/nginx apps.
# Usage (on VPS as deploy user):
#   APP_DIR=/var/www/rankedbyapril PORT=3001 DOMAIN=rankedbyapril.com bash deploy/deploy-vps.sh

set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/rankedbyapril}"
PORT="${PORT:-3001}"
PM2_NAME="${PM2_NAME:-rankedbyapril}"
REPO="${REPO:-https://github.com/siddardhapabbu5-dot/rankedbyapril.git}"
DOMAIN="${DOMAIN:-}"

echo "==> Isolated deploy"
echo "    APP_DIR=$APP_DIR"
echo "    PORT=$PORT"
echo "    PM2_NAME=$PM2_NAME"
echo "    (will not delete/restart other PM2 processes)"

mkdir -p "$APP_DIR"
cd "$APP_DIR"

if [ -d .git ]; then
  echo "==> git pull"
  git fetch origin
  git reset --hard origin/master
else
  echo "==> git clone into $APP_DIR"
  git clone "$REPO" .
fi

if [ ! -f .env.production.local ] && [ ! -f .env.local ]; then
  echo "==> Creating .env.production.local from example (edit SITE_URL)"
  cp .env.example .env.production.local
  if [ -n "$DOMAIN" ]; then
    sed -i "s|NEXT_PUBLIC_SITE_URL=.*|NEXT_PUBLIC_SITE_URL=https://${DOMAIN}|" .env.production.local
  fi
fi

# Persist client edits outside the git checkout
CONTENT_DIR_DEFAULT="/var/www/rankedbyapril-data"
mkdir -p "$CONTENT_DIR_DEFAULT"
ENV_FILE=".env.production.local"
[ -f .env.local ] && ENV_FILE=".env.local"
if ! grep -q '^CONTENT_DIR=' "$ENV_FILE" 2>/dev/null; then
  echo "CONTENT_DIR=$CONTENT_DIR_DEFAULT" >> "$ENV_FILE"
fi
if ! grep -q '^ADMIN_PASSWORD=.\+' "$ENV_FILE" 2>/dev/null; then
  echo "WARN: Set ADMIN_PASSWORD in $ENV_FILE so the client can use /admin"
fi

echo "==> npm ci && build"
npm ci
npm run build

if command -v pm2 >/dev/null 2>&1; then
  if pm2 describe "$PM2_NAME" >/dev/null 2>&1; then
    echo "==> pm2 restart $PM2_NAME only"
    PORT="$PORT" pm2 restart "$PM2_NAME" --update-env
  else
    echo "==> pm2 start $PM2_NAME on port $PORT"
    PORT="$PORT" pm2 start npm --name "$PM2_NAME" -- start
  fi
  pm2 save
  echo "==> PM2 list (existing apps should still be online):"
  pm2 list
else
  echo "WARN: pm2 not found. Start manually: PORT=$PORT npm start"
fi

echo "==> Done. Point Nginx for $DOMAIN -> 127.0.0.1:$PORT (separate site conf)."
