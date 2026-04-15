# TripCoreX.com

Static marketing site for **TripCoreX** — a dark-mode “AI Development Studio” positioning the **operator-engineer** model: humans set intent and refine outcomes; AI accelerates execution.

## Stack

- **Vue 3** + **Vite** + **TypeScript**
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **lucide-vue-next** icons
- **GSAP** for subtle technical-mode motion (terminal marquee)

## Features

- **Dual-view toggle** (header): **The Architect** (technical copy + code snippets) vs **The Operator** (plain-English reliability and cost framing).
- **Bento grid** modules covering philosophy, MinnDrive case study, refactor credibility, enterprise dashboards, and fleet-tested reliability.
- **Simulated “Live pulse”** ticker styled like `dhakgilim/*` commit activity (no GitHub token required).
- **SEO** tags in `index.html` for Twin Cities / Chaska positioning.

## Local development

```bash
npm ci
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## GitHub Pages (dhakgilim/tripcorex)

1. Create the repository **`dhakgilim/tripcorex`** and push this project as the **repository root** (so `package.json` sits at the repo root).
2. **Settings → Pages → Build and deployment**: set **Source** to **Deploy from a branch**, branch **`gh-pages`**, folder **`/` (root)**.
3. Ensure **`public/CNAME`** contains `tripcorex.com` (included); Vite copies it into **`dist/`** on build. Point DNS **CNAME** for `tripcorex.com` at GitHub Pages per GitHub’s documentation.
4. Push to **`main`** (or **`master`**). `.github/workflows/deploy.yml` runs `npm run build` and pushes **`dist/`** to the **`gh-pages`** branch using [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages).

`vite.config.ts` uses `base: '/'`, which matches a **custom domain** at the site root. If you ever publish only as `https://dhakgilim.github.io/tripcorex/`, set `base: '/tripcorex/'` in Vite and adjust asset paths accordingly.

## License

Private / all rights reserved unless otherwise stated by the owner.
