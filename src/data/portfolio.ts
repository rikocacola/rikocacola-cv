import type { NavItem, SkillGroup, ExperienceItem, ProjectItem, BlogPost } from '~/types';

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', index: '01', hint: 'who i am' },
  { id: 'skills', label: 'Skills', index: '02', hint: 'what i use' },
  { id: 'experiences', label: 'Experience', index: '03', hint: 'where i worked' },
  { id: 'projects', label: 'Projects', index: '04', hint: 'what i built' },
  { id: 'blog', label: 'Blog', index: '05', hint: 'what i wrote' },
];

export const profile = {
  name: 'Riko Cacola',
  handle: 'rikocacola',
  role: 'Software Engineer',
  location: 'Jakarta, ID',
  status: 'Available for new roles',
  tagline: 'I build reliable web platforms — calm APIs underneath, considered interfaces on top.',
  email: 'hello@rikocacola.dev',
  github: 'https://github.com/rikocacola',
  linkedin: 'https://linkedin.com/in/rikocacola',
  resumeUrl: '/resume.pdf',
  bio: [
    "I'm a software engineer focused on the parts of a product that nobody notices when they work, and everybody notices when they don't.",
    'Most of my time is spent in the seam between frontend experience and backend systems — designing APIs that don\u2019t leak their shape, shipping interfaces that stay fast as the surface area grows, and keeping builds honest enough that I can sleep at night.',
  ],
  stats: [
    { value: '5+', label: 'years shipping' },
    { value: '30+', label: 'projects shipped' },
    { value: '12', label: 'products in prod' },
  ],
};

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: 'frontend',
    items: [
      { name: 'TypeScript', level: 'primary' },
      { name: 'React', level: 'primary' },
      { name: 'Next.js', level: 'primary' },
      { name: 'Vue 3', level: 'working' },
      { name: 'Tailwind CSS', level: 'primary' },
      { name: 'TanStack Query', level: 'working' },
      { name: 'Framer Motion', level: 'working' },
      { name: 'Storybook', level: 'working' },
    ],
  },
  {
    category: 'Backend',
    icon: 'backend',
    items: [
      { name: 'Node.js', level: 'primary' },
      { name: 'Go', level: 'working' },
      { name: 'PostgreSQL', level: 'primary' },
      { name: 'Redis', level: 'working' },
      { name: 'GraphQL', level: 'working' },
      { name: 'REST / OpenAPI', level: 'primary' },
      { name: 'Prisma', level: 'working' },
      { name: 'gRPC', level: 'familiar' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: 'devops',
    items: [
      { name: 'Docker', level: 'primary' },
      { name: 'GitHub Actions', level: 'working' },
      { name: 'AWS (ECS, RDS, S3)', level: 'working' },
      { name: 'Cloudflare', level: 'working' },
      { name: 'Terraform', level: 'familiar' },
      { name: 'Grafana / Loki', level: 'familiar' },
    ],
  },
  {
    category: 'Craft',
    icon: 'craft',
    items: [
      { name: 'System design', level: 'primary' },
      { name: 'Accessibility (a11y)', level: 'working' },
      { name: 'Testing strategy', level: 'working' },
      { name: 'Technical writing', level: 'working' },
      { name: 'Mentoring', level: 'working' },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'lattica',
    role: 'Senior Software Engineer',
    company: 'Lattica',
    location: 'Remote',
    period: '2023 — Present',
    current: true,
    bullets: [
      'Lead the rewrite of the merchant dashboard from a 4-year-old AngularJS codebase into a modular Next.js + tRPC stack, cutting TTI on the orders view from 3.4s to 0.9s.',
      'Designed the eventing pipeline that powers real-time inventory across 12 retail partners; reduced reconciliation drift from ~3% of orders to under 0.2%.',
      'Run a fortnightly architecture review with three product squads; wrote the engineering RFC template and review checklist we still use.',
    ],
    stack: ['Next.js', 'TypeScript', 'tRPC', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    id: 'northern-labs',
    role: 'Full-Stack Engineer',
    company: 'Northern Labs',
    location: 'Singapore',
    period: '2021 — 2023',
    bullets: [
      'Built the first version of the internal observability product used by 60+ engineers; owned the Go ingestion service and the React query layer on top.',
      'Replaced a legacy cron-driven worker with a Temporal workflow that surfaced 4 long-standing data correctness bugs in its first two weeks.',
      'Mentored two junior engineers through their first production incident rotations.',
    ],
    stack: ['Go', 'React', 'Temporal', 'ClickHouse', 'gRPC'],
  },
  {
    id: 'freelance',
    role: 'Software Engineer (Contract)',
    company: 'Independent',
    location: 'Jakarta',
    period: '2019 — 2021',
    bullets: [
      'Shipped web platforms for three early-stage startups — one marketplace, one B2B SaaS, one media publication.',
      'Owned the full lifecycle: discovery, scoping, build, deploy, and the awkward first month in production.',
    ],
    stack: ['Node.js', 'React', 'Vue', 'Postgres', 'Vercel'],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'kelp',
    title: 'Kelp — Quiet analytics',
    description:
      'A privacy-first analytics product for indie teams. <2KB script, no cookies, schema you can read.',
    stack: ['TypeScript', 'ClickHouse', 'Hono', 'Cloudflare Workers'],
    highlights: ['~14M events/day', 'p95 ingest < 40ms', 'MIT licensed'],
    repo: 'https://github.com/rikocacola/kelp',
    demo: 'https://kelp.rikocacola.dev',
    status: 'shipped',
    year: '2024',
  },
  {
    id: 'meridian',
    title: 'Meridian — Schedule, but humane',
    description:
      'A scheduling tool for distributed teams that respects time zones, deep-work blocks, and async-first culture.',
    stack: ['Next.js', 'tRPC', 'Postgres', 'Resend'],
    highlights: ['Drag-to-rebook', 'Time zone heatmap', 'Calendar sync'],
    repo: 'https://github.com/rikocacola/meridian',
    demo: 'https://meridian.rikocacola.dev',
    status: 'shipped',
    year: '2024',
  },
  {
    id: 'lumen-rss',
    title: 'Lumen — A reader for the rest of us',
    description:
      'An RSS reader that treats long-form writing like long-form writing. No infinite scroll, no engagement metrics.',
    stack: ['Vue 3', 'Go', 'SQLite', 'Tailscale'],
    highlights: ['Offline-first', 'OPML import', 'Keyboard-first'],
    repo: 'https://github.com/rikocacola/lumen',
    status: 'shipped',
    year: '2023',
  },
  {
    id: 'forge-ts',
    title: 'forge-ts — Scaffolding without surprises',
    description:
      'A small CLI that scaffolds TypeScript services with sensible defaults: structured logs, healthchecks, graceful shutdown, tests wired in.',
    stack: ['TypeScript', 'Node.js', 'Clack'],
    highlights: ['8 templates', 'ESM-first', 'Zero runtime deps'],
    repo: 'https://github.com/rikocacola/forge-ts',
    status: 'shipped',
    year: '2023',
  },
  {
    id: 'tidewatch',
    title: 'Tidewatch — Uptime that tells the truth',
    description:
      'A status page generator that pulls from your real healthchecks instead of pretending it does.',
    stack: ['Go', 'HTMX', 'SQLite'],
    highlights: ['Incident timeline', 'Subscriber notifications', 'Self-hosted'],
    repo: 'https://github.com/rikocacola/tidewatch',
    status: 'wip',
    year: '2025',
  },
  {
    id: 'atlas-notes',
    title: 'Atlas — Notes that stay findable',
    description:
      'A local-first note app with a tiny search index and bi-directional links. Built to outlast my next laptop.',
    stack: ['Tauri', 'Rust', 'React'],
    repo: 'https://github.com/rikocacola/atlas',
    status: 'wip',
    year: '2025',
  },
];

export const posts: BlogPost[] = [
  {
    id: 'scrollytelling-is-mostly-just-scrolling',
    title: 'Scrollytelling is mostly just scrolling',
    excerpt:
      'Most "interactive" scrollytelling patterns are a video essay in disguise. A short defense of less, with notes on where the pattern actually earns its keep.',
    date: '2025-03-14',
    readingTime: '6 min',
    tag: 'Craft',
    href: '#',
  },
  {
    id: 'small-teams-dont-need-monorepos',
    title: 'Small teams don\u2019t need monorepos',
    excerpt:
      'A monorepo is a tool, not a default. A field guide for the moment a small team is about to adopt one for the wrong reasons.',
    date: '2025-01-22',
    readingTime: '9 min',
    tag: 'Architecture',
    href: '#',
  },
  {
    id: 'writing-a-postmortem-people-will-actually-read',
    title: 'Writing a postmortem people will actually read',
    excerpt:
      'If your postmortems read like legal documents, nobody will read them. Here is the template I have been refining for two years.',
    date: '2024-11-03',
    readingTime: '7 min',
    tag: 'Process',
    href: '#',
  },
  {
    id: 'four-years-of-react-still',
    title: 'Four years of React, still',
    excerpt:
      'Why I keep coming back to React after flirting with everything else, and what would actually make me leave.',
    date: '2024-08-18',
    readingTime: '5 min',
    tag: 'React',
    href: '#',
  },
];