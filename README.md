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

## Docker

The image builds from Next's standalone output and runs as an unprivileged
user on port 3000.

```bash
docker build -t rikocacola-cv .
docker run --rm -p 3000:3000 rikocacola-cv
```

To bake in the deployed origin (used for metadata and OG URLs):

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://your-domain \
  -t rikocacola-cv .
```

`NEXT_PUBLIC_*` values are inlined into the client bundle at build time, so
that has to be a build arg — setting it at `docker run` has no effect.

`GET /api/health` returns `{"status":"ok"}` and backs the container
healthcheck.

## CI/CD

| Workflow | Trigger | Does |
|---|---|---|
| `.github/workflows/ci.yml` | PRs, pushes to `main` | Typecheck, lint, build; audits dependencies; builds the image and smoke-tests it |
| `.github/workflows/publish.yml` | Pushes to `main`, `v*` tags, manual | Builds and pushes to GHCR with a signed provenance attestation |

Published images land at `ghcr.io/rikocacola/rikocacola-cv`:

```bash
docker pull ghcr.io/rikocacola/rikocacola-cv:latest
```

Tagged `latest` on `main`, plus the branch name, the full commit SHA, and
semver tags when you push a `v*` tag.

Verify an image was built by this repo:

```bash
gh attestation verify oci://ghcr.io/rikocacola/rikocacola-cv:latest \
  --owner rikocacola
```

Optional repository variable `SITE_URL` sets `NEXT_PUBLIC_SITE_URL` for
published images.

## Docs

- `CLAUDE.md` — architecture, design tokens, and security posture
- `AGENTS.md` — conventions to follow when changing the code

The previous CV site (Next.js 13, Pages Router) is on the `main` branch.
