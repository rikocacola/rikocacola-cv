# Project context

Personal profile dashboard for **Riko Chair Nugroho**, a frontend developer in
Jakarta. One page, `/dashboard`, that answers "who is this and what does he do."

This replaced a Next.js 13 Pages Router / SCSS-modules CV site. That version
still exists on the `main` branch; nothing here is a migration of it — only the
brand (palette, typeface, image assets) carried over.

Agent working agreements live in `AGENTS.md`.

## Stack

| | |
|---|---|
| Next.js | 16.3.0, App Router, Turbopack |
| React | 19.2.8 |
| TypeScript | 5, strict |
| Tailwind CSS | v4 — CSS-first, configured in `src/app/globals.css`. **There is no `tailwind.config.js`** |
| Components | shadcn/ui on Radix primitives (the `radix-ui` package) |
| Icons | `lucide-react` for UI icons; brand marks (GitHub, LinkedIn) are SVGs in `public/images/logo/` |
| Package manager | npm. `package-lock.json` is the only lockfile |

Commands: `npm run dev` · `npm run build` · `npm run lint` · `npx tsc --noEmit`

## Directory map

```
src/
  app/
    layout.tsx            fonts, metadata, viewport
    globals.css           design tokens + base layer  ← all colour lives here
    page.tsx              redirects to /dashboard
    dashboard/page.tsx    the only real page; the only file that reads data
  components/
    ui/                   shadcn primitives — regenerated, don't hand-edit
    common/               generic, prop-driven building blocks
    layout/               AppShell, SiteNav, MobileNav, SiteFooter
    dashboard/            the page's sections
  data/profile.ts         hardcoded content
  types/profile.ts        Profile, Stat, Skill, Release, Project
  hooks/                  useActiveSection
  lib/utils.ts            cn()
```

## The two rules that matter

**1. Absolute imports.** Everything crosses directories via `@/…`. Relative
parent imports (`../`) are an ESLint error outside `src/components/ui/`.

```ts
import { Panel } from "@/components/common/panel";   // yes
import { Panel } from "../common/panel";             // error
```

**2. Data flows one way.** `src/data/profile.ts` is imported by
`app/dashboard/page.tsx` and nowhere else. Every component takes its data as
props. This is what makes the sections reusable — swapping the hardcoded module
for a fetch or a CMS should touch exactly one file.

`common/` holds pieces with no knowledge of this résumé (`Panel`,
`SectionHeader`, `StatItem`, `Chip`, `LogoTile`, `BrandIcon`,
`AvailabilityBadge`). `dashboard/` composes them into specific sections.

## Design tokens

Defined once in `src/app/globals.css`. Never write a hex value in a component.

| Token | Value | Role |
|---|---|---|
| `--brand-base` | `#24374a` | page background (brand navy, darkened) |
| `--brand-surface` | `#2f455c` | panels — the brand navy, verbatim |
| `--brand-raised` | `#395268` | hover / nested surfaces |
| `--brand-accent` | `#34f5c5` | primary accent — verbatim |
| `--brand-accent-strong` | `#21d0b2` | hover / pressed — verbatim |
| `--brand-info` | `#1dcdfe` | secondary accent — verbatim |
| `--brand-ink` | `#e8f4f1` | body text |
| `--brand-ink-muted` | `#8fa6b8` | labels, metadata |
| `--brand-line` / `--brand-line-strong` | accent at 14% / 32% | hairlines |

The values marked *verbatim* come from the old site's `styles/globals.css`. The
rest are derived from them, so the dashboard has enough surface hierarchy to
work as a dashboard.

Brand tokens are namespaced `--brand-*` because shadcn's semantic tokens use
the same words differently — shadcn's `--muted` is a *background*, ours is
text. The shadcn names (`--background`, `--card`, `--primary`, …) are mapped
onto the brand scale in the same file.

Type: **Kumbh Sans** via `next/font/google`, self-hosted. Mono is the stack the
old site used for tech tags (`SF Mono`, `Fira Code`, …), reserved for dates,
version tags, labels, and figures. Base 18px / 1.6, matching the old site.

## Design intent

The organising idea is that experience reads as a **release log** —
`v1.0`/`v2.0` tags, `+` markers for what each role shipped. Version numbering
earns its place because the content genuinely is an ordered sequence, and
because shipping releases is the vernacular of the subject's own work. That
section is the one bold element; everything else stays flat and quiet — no
gradients, no glow, motion limited to a single page-load stagger and hover
transitions.

Several brand logos (Next.js, jQuery) are near-black and vanish against the
navy, so `LogoTile` and the changelog put them on a light plate. Don't remove
those without re-checking contrast.

## Security posture

- `next.config.ts` sets CSP, HSTS, `X-Frame-Options: DENY`, `nosniff`,
  `Referrer-Policy`, `Permissions-Policy`, and disables `poweredByHeader`.
- The CSP is first-party-only. Adding any third-party script, font, or image
  origin means updating it — don't loosen it silently. `unsafe-eval` is
  development-only (React's dev overlay needs it).
- `images.remotePatterns` is empty on purpose: every asset is local, which
  closes the image-optimizer SSRF surface. Prefer local assets.
- No `dangerouslySetInnerHTML` anywhere. Keep it that way.
- External links carry `rel="noreferrer noopener"`.

## Current scope

Static and hardcoded. No backend, no auth, no database, no analytics. Charts
were deliberately left out — with no real metrics they would be invented
numbers.
