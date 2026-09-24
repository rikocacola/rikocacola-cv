# Spec: Tabbed Blog + SQLite CMS on React Router 7

## 0. Architecture shift

| Today | After |
|---|---|
| Vite SPA + `react-router-dom` (SPA mode) | React Router 7 framework mode (SSR) |
| nginx serves `dist/` | Node 22 serves `build/server` + `build/client` |
| `src/data/portfolio.ts` holds posts | SQLite file at `/data/cv.db` (mounted volume) |
| Single Docker stage copying `dist/` -> nginx | Multi-stage Dockerfile ending in `node` runtime |

`better-sqlite3` is synchronous, has a Node 22 prebuilt binary, and is the right tool for a single-author low-traffic CMS. SQLite is used **server-side only** via the `.server.ts` convention; nothing in the client bundle.

## 1. SPA -> framework mode migration

- `package.json`
  - add: `@react-router/dev`, `@react-router/node`, `@react-router/serve`, `better-sqlite3`, `react-markdown`, `remark-gfm`, `@types/better-sqlite3`
  - dev script: `react-router dev` (replaces `vite`)
  - build script: `react-router build` (replaces `vite build`)
- `vite.config.ts` -> swap `@vitejs/plugin-react` for `@react-router/dev/vite`
- new `react-router.config.ts` -> `{ ssr: true }`
- delete `src/App.tsx` (current programmatic `createBrowserRouter`)
- new `src/routes.ts` (explicit route config, matches current `/` + `*` shape)
- `src/layouts/PortfolioLayout.tsx` becomes a **pathless layout route** so all current sections stay in place
- `src/routes/NotFound.tsx` becomes a route module (already in place, just gets a default export)
- `Dockerfile` rewritten to Node runtime + `react-router build`
- `nginx.conf` deleted (or kept as optional reverse proxy; recommend deleting)
- `.gitignore` add: `data/*.db`, `data/*.db-journal`, `.env`

Note: `lucide-react: ^1.45.0` in `package.json` looks wrong (current is `0.46x`). Flagging only; not part of this spec.

## 2. Database layer (server-only)

### `src/db.server.ts`
- Singleton `Database` instance (lazy open, closed on process exit)
- Path from `process.env.DATABASE_PATH` (default `/data/cv.db`)
- `PRAGMA journal_mode = WAL;` and `PRAGMA foreign_keys = ON;`
- `runMigrations()` called once at boot

### Schema

```sql
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  body TEXT NOT NULL DEFAULT '',
  type TEXT NOT NULL CHECK (type IN ('general','book')),
  tag TEXT NOT NULL DEFAULT '',
  date TEXT NOT NULL, -- ISO yyyy-mm-dd
  reading_time TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published')),
  book_author TEXT,
  book_rating INTEGER CHECK (book_rating BETWEEN 1 AND 5),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_posts_status_date ON posts (status, date DESC);
CREATE INDEX IF NOT EXISTS idx_posts_type ON posts (type, status, date DESC);
```

### `src/posts.server.ts` (pure functions, no HTTP)
- `listPublishedPosts(type?)`
- `getPublishedPostBySlug(slug)`
- `listAllPosts()` (admin)
- `createPost(input)`, `updatePost(id, input)`, `deletePost(id)`
- `slugify(title)` -> kebab-case, append `-2`/`-3` on collision

### `src/seed.server.ts`
Reads `src/data/seed-posts.ts` (the 4 commented drafts from `portfolio.ts`, adapted with `type: 'general'` and short markdown bodies). Inserts only when `posts` is empty. Runs once on boot.

## 3. Frontend: BlogSection with two tabs

Mirror `ProjectsSection.tsx`: state, counts, TabBar in the section header row, hint line under the header, conditional grid/empty.

### `src/types/index.ts`
```ts
export type PostType = 'general' | 'book';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  type: PostType;
  tag: string;
  date: string;
  readingTime: string;
  bookAuthor?: string;
  bookRating?: 1 | 2 | 3 | 4 | 5;
}
```

### `src/components/sections/BlogSection.tsx`
- `useState<PostType>('general')`
- Loader returns `posts: BlogPost[]` (loader lives in the route module, component receives posts as a prop)
- `counts = { general: ..., book: ... }` via `useMemo`
- Tab descriptors:
  - `{ id: 'general', label: 'General', hint: 'notes on craft' }`
  - `{ id: 'book',    label: 'Book Reviews', hint: 'what i read and what stuck' }`
- Card body differs per type:
  - **General** card -> current `PostCard` look (Calendar + Clock footer, tag chip)
  - **Book Review** card -> adds author line (`- {bookAuthor}`) and a star rating row; tag chip can be the genre; same date/reading-time footer
- Empty states per tab (separate copy per tab so the "drafts in flight" line doesn't appear under Book Reviews)

### `src/components/StarRating.tsx`
Takes `value: 1|2|3|4|5`, renders 5 lucide `Star` icons (filled = mint, empty = ink-mute). `aria-label="4 out of 5 stars"`.

## 4. Routes

### `src/routes.ts` (explicit config, mirrors current shape)
```
index('routes/_index.tsx')                          // renders PortfolioLayout at "/"
layout('layouts/portfolio.tsx', [                    // pathless, wraps current sections
  route('blog',           'routes/blog.tsx'),
  route('blog/:slug',     'routes/blog.$slug.tsx'),
  route('admin',          'routes/admin._index.tsx'),
  route('admin/new',      'routes/admin.new.tsx'),
  route('admin/:id/edit', 'routes/admin.$id.edit.tsx'),
])
route('*', 'routes/$.tsx')                          // NotFound
```

`PortfolioLayout` stays a pathless layout, keeps rendering every section in order (Hero -> Skills -> Experiences -> Projects -> Blog -> Footer). No UX regression.

### `src/routes/blog.tsx`
- `loader` -> `listPublishedPosts()` (returns all, component filters by tab)
- Renders `<BlogSection posts={posts} />`

### `src/routes/blog.$slug.tsx`
- `loader` -> `getPublishedPostBySlug(params.slug)` (throws 404 Response if missing)
- Renders post body via `<ReactMarkdown remarkPlugins={[remarkGfm]}>`
- Custom renderers for `h1/h2/h3`, `p`, `a`, `code`, `pre`, `blockquote`, `ul/ol` to match site typography (mint/sky palette, mono font for code)
- 404 for unknown slugs (reuse `NotFound` or a softer variant)

### `src/routes/admin._index.tsx`
- `loader` -> `requireAdmin(request)` then `listAllPosts()` (drafts + published)
- Renders table of posts with Edit / Delete buttons + a "New post" link

### `src/routes/admin.new.tsx` & `src/routes/admin.$id.edit.tsx`
- `loader` -> `requireAdmin(request)` (+ fetch existing post for edit)
- `action` -> `requireAdmin(request)` + `createPost` / `updatePost` / `deletePost` based on `_intent` form field
- Form fields: title, slug (auto-generated, editable), excerpt, type (radio), tag, date, readingTime, body (markdown textarea with live preview)
- Book-only fields `bookAuthor` + `bookRating` shown when `type === 'book'`
- Markdown preview pane reuses the same renderer as the public post page

### `src/lib/auth.server.ts`
- `requireAdmin(request: Request): Response | void` -> parses `Authorization: Basic ...`, compares against `process.env.ADMIN_USER` / `process.env.ADMIN_PASS` using `crypto.timingSafeEqual`
- On failure: `new Response('Auth required', { status: 401, headers: { 'WWW-Authenticate': 'Basic realm="cv-admin"' } })`
- Tiny `verifyBasicAuth(header, user, pass)` helper, unit-testable in isolation

## 5. Markdown rendering

- `react-markdown@^9` + `remark-gfm@^4`
- Component map in `src/components/Markdown.tsx`:
  - `h1/h2/h3` -> tracking-tight, mint `h1`, sky `h2`, ink `h3`
  - `p` -> `text-ink-dim leading-relaxed`
  - `a` -> mint with `link-underline`
  - `code` (inline) -> `bg-navy-deep/60 text-mint rounded px-1 py-0.5 font-mono text-[0.9em]`
  - `pre` -> wraps `code` in `bg-navy-deeper border border-white/5 rounded-lg p-4 overflow-x-auto`
  - `blockquote` -> left border mint, `text-ink-dim italic`
  - `ul/ol` -> `text-ink-dim list-outside ml-5`
  - `hr` -> `border-white/10`
- Used in both `routes/blog.$slug.tsx` and the admin form preview

## 6. Deployment

### `Dockerfile` (rewritten)
```
# ---- build ----
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build   # react-router build -> build/server + build/client

# ---- run ----
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000 \
    DATABASE_PATH=/data/cv.db
COPY package*.json ./
RUN npm ci --omit=dev && npm rebuild better-sqlite3
COPY --from=build /app/build ./build
RUN mkdir -p /data
EXPOSE 3000
CMD ["node", "./build/server/index.js"]
```

### `.dockerignore` -> add `data/` so a local `cv.db` never gets baked in

### Volume
`/data` mounted to a host volume or named docker volume so SQLite persists across restarts.

### Env vars
- `ADMIN_USER` (required for `/admin/*`)
- `ADMIN_PASS` (required)
- `DATABASE_PATH` (default `/data/cv.db`)
- `PORT` (default `3000`)

## 7. Sidebar / nav touch-up

The sidebar's `navItems` still points to `#blog` (a hash on the current page). After this change, the public blog lives at `/blog` and posts at `/blog/:slug`. Two options:
- (a) Leave as-is -> `#blog` still scrolls to the in-page section; `/blog/:slug` is the post page
- (b) Make `Blog` a top-level link to `/blog` and add an in-page anchor for the existing section if both are still wanted

Recommendation: **(a)** to keep this scoped; wire `/blog` as a real route later.

## 8. Order of work (stop at any milestone)

1. **Skeleton** -> framework mode, existing site renders identically with SSR + new Node Dockerfile.
2. **DB layer + seed** -> `db.server.ts`, `posts.server.ts`, `seed.server.ts`, migrations on boot, seed the 4 commented drafts.
3. **Tabs in BlogSection** -> loader-fed component, General/Book Review tabs, `StarRating` component. Section now reads from SQLite through a loader.
4. **Public post page** -> `/blog/:slug` with markdown rendering.
5. **Admin auth + CRUD** -> `requireAdmin`, `/admin` index, `/admin/new`, `/admin/:id/edit` with form + markdown preview.
6. **Polish** -> per-tab empty states, 404 handling, reduced-motion sanity, `aria-current` on tabs.

## 9. Out of scope (call out if you want any)

- Image upload pipeline (book covers are URLs only)
- Search / tag filtering on the public blog
- RSS feed
- Pagination on the public list
- Migrating from SQLite
- Fixing `lucide-react@^1.45.0` version pin
- Wiring sidebar `Blog` link to `/blog`
