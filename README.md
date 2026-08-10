# rikocacola-cv

Personal profile dashboard for Riko Chair Nugroho — frontend developer, Jakarta.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and shadcn/ui.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — `/` redirects to `/dashboard`, the only page.

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Typecheck |

## Content

Everything on the page comes from `src/data/profile.ts`. Edit that file to
change what's shown — no component needs touching.

## Docs

- `CLAUDE.md` — architecture, design tokens, and security posture
- `AGENTS.md` — conventions to follow when changing the code

The previous CV site (Next.js 13, Pages Router) is on the `main` branch.
