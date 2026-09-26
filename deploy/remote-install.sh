#!/usr/bin/env bash
set -euo pipefail

echo "==> Install Node 20 if missing (host only; Docker untouched)"
if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi
node -v
npm -v

echo "==> Install pm2 if missing"
if ! command -v pm2 >/dev/null 2>&1; then
  npm install -g pm2
fi

echo "==> Create isolated app dir (NOT gayatri)"
mkdir -p /var/www/rankedbyapril
cd /var/www/rankedbyapril

if [ -d .git ]; then
  git fetch origin
  git reset --hard origin/master
else
  git clone https://github.com/siddardhapabbu5-dot/rankedbyapril.git .
fi

echo "==> Env"
if [ ! -f .env.production.local ]; then
  cp .env.example .env.production.local
  sed -i 's|NEXT_PUBLIC_SITE_URL=.*|NEXT_PUBLIC_SITE_URL=https://rankedbyapril.com|' .env.production.local
fi

echo "==> Build"
npm ci
npm run build

echo "==> Start ONLY pm2 process rankedbyapril on 3001"
cd /var/www/rankedbyapril
if pm2 describe rankedbyapril >/dev/null 2>&1; then
  pm2 delete rankedbyapril || true
fi
PORT=3001 pm2 start npm --name rankedbyapril -- start
pm2 save
pm2 startup systemd -u root --hp /root >/tmp/pm2-startup.txt 2>&1 || true

echo "==> Verify gayatri docker still up"
docker ps --format '{{.Names}} {{.Status}}' | grep gayatri || echo 'WARN: gayatri container check'

echo "==> Create NEW nginx site only (do not touch gayatri)"
cat > /etc/nginx/sites-available/rankedbyapril << 'NGINX'
server {
    listen 80;
    listen [::]:80;
    server_name rankedbyapril.com www.rankedbyapril.com;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX

ln -sfn /etc/nginx/sites-available/rankedbyapril /etc/nginx/sites-enabled/rankedbyapril

test -L /etc/nginx/sites-enabled/gayatri
test -f /etc/nginx/sites-available/gayatri

nginx -t
systemctl reload nginx

echo "==> PM2 list"
pm2 list

echo "==> Local smoke"
curl -s -o /dev/null -w "rankedbyapril_local:%{http_code}\n" http://127.0.0.1:3001/ || true
curl -s -o /dev/null -w "gayatri_local:%{http_code}\n" -H 'Host: gayatriconvention.com' http://127.0.0.1/ || true

echo DONE
