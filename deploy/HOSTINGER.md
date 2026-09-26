# Hostinger VPS deploy — rankedbyapril (safe side-by-side)

This deploys **rankedbyapril** next to any existing site. It never overwrites
another project's directory, PM2 name, or Nginx site.

## Isolation rules (do not change)

| Resource | Existing project (leave alone) | rankedbyapril |
|----------|--------------------------------|---------------|
| App dir  | wherever it already is         | `/var/www/rankedbyapril` |
| PM2 name | existing name                  | `rankedbyapril` |
| Port     | usually `3000`                 | `3001` |
| Nginx    | existing `*.conf`              | `rankedbyapril.conf` only |

## What we need from you

1. VPS IP (or hostname)
2. SSH user (often `root` or `uXXXXX`)
3. SSH key or password (prefer key)
4. Domain for this site (e.g. `rankedbyapril.com` or a subdomain)
5. Confirm existing app port (if not 3000, tell us)

Then we can run the deploy for you over SSH.

## Manual deploy (you or agent)

```bash
# On VPS — once
sudo mkdir -p /var/www/rankedbyapril
sudo chown -R $USER:$USER /var/www/rankedbyapril

# Clone (or pull) into ITS OWN folder only
cd /var/www/rankedbyapril
git clone https://github.com/siddardhapabbu5-dot/rankedbyapril.git .

cp .env.example .env.production.local
# edit: NEXT_PUBLIC_SITE_URL=https://YOUR_DOMAIN

npm ci
npm run build

# Start on port 3001 — does not stop other PM2 apps
PORT=3001 pm2 start npm --name rankedbyapril -- start
pm2 save
```

Nginx (new file only — do not edit the other project's conf):

```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN www.YOUR_DOMAIN;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -sf /etc/nginx/sites-available/rankedbyapril.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
# SSL later: sudo certbot --nginx -d YOUR_DOMAIN -d www.YOUR_DOMAIN
```

## Client content editor (`/admin`)

Password-protected page editing at `https://YOUR_DOMAIN/admin`.

On the VPS, keep editable JSON **outside** the app repo so `git reset` / redeploy
never wipes client corrections:

```bash
sudo mkdir -p /var/www/rankedbyapril-data
sudo chown -R $USER:$USER /var/www/rankedbyapril-data
```

In `/var/www/rankedbyapril/.env.production.local` (or PM2 env):

```bash
ADMIN_PASSWORD=choose-a-strong-password
ADMIN_SECRET=long-random-string
CONTENT_DIR=/var/www/rankedbyapril-data
NEXT_PUBLIC_SITE_URL=https://YOUR_DOMAIN
```

Then restart only this app: `pm2 restart rankedbyapril`.

Share with the client: URL `https://YOUR_DOMAIN/admin` + the `ADMIN_PASSWORD`.

## Updates (later)

```bash
cd /var/www/rankedbyapril
git pull
npm ci
npm run build
pm2 restart rankedbyapril   # only this process — CONTENT_DIR data is untouched
```
