# rankedbyapril

Premium corporate digital agency website for **rankedbyapril** — SEO, AI SEO / GEO, websites, and organic growth.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 · Framer Motion · Radix / shadcn-style UI
- MDX blog (`content/blog`) · next-mdx-remote
- Dark / light mode · Schema.org · Sitemap · Robots

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |

## Project structure

```
app/           # Routes, layouts, API, sitemap, robots
components/    # UI, layout, home, blog, forms, seo
content/blog/  # MDX posts
hooks/         # Client hooks
lib/           # Config, SEO, schema, blog, data, Sanity stub
public/        # Static assets
styles/        # Global CSS (Tailwind v4 theme)
types/         # Shared TypeScript types
```

## Brand

Brand palette: Deep Navy (`#18233A`), Coral Pink (`#F05A78`), Warm Off-White (`#FAF8F5`), White (`#FFFFFF`), Soft Gray (`#667085`).

## Integrations (env)

See `.env.example` for Analytics, Search Console, CRM webhooks, Calendly, and Sanity CMS.
