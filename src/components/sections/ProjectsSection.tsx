import { useMemo, useState } from 'react';
import { Lock, Sparkles } from 'lucide-react';
import { projects } from '~/data/portfolio';
import type { ProjectItem as ProjectItemType } from '~/types';
import { SectionHeader } from '~/components/SectionHeader';
import { Chip } from '~/components/Chip';
import { cn } from '~/lib/cn';

type ProjectCategory = NonNullable<ProjectItemType['category']>;

interface CategoryDescriptor {
  id: ProjectCategory;
  label: string;
  hint: string;
}

const categories: CategoryDescriptor[] = [
  { id: 'work', label: 'Work', hint: 'things i built at a company' },
  { id: 'personal', label: 'Personal', hint: 'things i built on my own time' },
];

const statusTone: Record<
  NonNullable<ProjectItemType['status']>,
  { tone: 'mint' | 'sky' | 'leaf' | 'neutral'; label: string }
> = {
  shipped: { tone: 'leaf', label: 'shipped' },
  wip: { tone: 'sky', label: 'in progress' },
  archived: { tone: 'neutral', label: 'archived' },
};

function TabBar({
  active,
  onChange,
  counts,
}: {
  active: ProjectCategory;
  onChange: (id: ProjectCategory) => void;
  counts: Record<ProjectCategory, number>;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="inline-flex items-center gap-1 rounded-lg border border-white/5 bg-navy-deep/40 p-1"
    >
      {categories.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onChange(cat.id)}
            className={cn(
              'focus-ring inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold transition-all duration-200',
              isActive
                ? 'bg-mint/15 text-mint ring-1 ring-mint/40'
                : 'text-ink-dim hover:bg-white/5 hover:text-ink'
            )}
          >
            <span>{cat.label}</span>
            <span
              className={cn(
                'rounded px-1.5 py-0.5 font-mono text-[10px] tabular-nums',
                isActive
                  ? 'bg-mint/20 text-mint'
                  : 'bg-white/5 text-ink-mute'
              )}
            >
              {counts[cat.id]}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectItemType }) {
  const status = project.status ? statusTone[project.status] : null;
  const isConfidential =
    project.confidential ?? (!project.repo && !project.demo);

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl border border-white/5 bg-navy-deep/40 p-6 transition-all duration-300',
        'hover:-translate-y-1 hover:border-sky/40 hover:bg-navy-deep/70 hover:shadow-card-hover'
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <header className="mb-4 flex items-center justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          Project
        </span>
        {status ? (
          <span
            className={cn(
              'inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em]',
              status.tone === 'leaf' && 'text-leaf',
              status.tone === 'mint' && 'text-mint',
              status.tone === 'sky' && 'text-sky',
              status.tone === 'neutral' && 'text-ink-mute'
            )}
          >
            <span
              className={cn(
                'h-1.5 w-1.5 rounded-full',
                status.tone === 'leaf' && 'bg-leaf',
                status.tone === 'mint' && 'bg-mint',
                status.tone === 'sky' && 'bg-sky',
                status.tone === 'neutral' && 'bg-ink-mute'
              )}
            />
            {status.label}
          </span>
        ) : null}
      </header>

      <h3 className="text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-mint">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-dim">
        {project.description}
      </p>

      {project.contributions?.length ? (
        <div className="mt-5 rounded-lg border border-white/5 bg-navy/40 p-4">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-sky/80">
            Key Contributions
          </div>
          <ul className="space-y-3">
            {project.contributions.map((c) => (
              <li key={c.title} className="text-sm leading-relaxed text-ink-dim">
                <span className="font-semibold text-ink">{c.title}:</span>{' '}
                {c.description}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>

      <footer className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4">
        {isConfidential ? (
          <span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
            <Lock size={12} />
            Confidential
          </span>
        ) : (
          <>
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-ink-dim transition hover:bg-mint/10 hover:text-mint"
              >
                Live demo
              </a>
            ) : null}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-ink-dim transition hover:bg-sky/10 hover:text-sky"
              >
                Source
              </a>
            ) : null}
          </>
        )}
      </footer>
    </article>
  );
}

function EmptyPersonal() {
  return (
    <div className="grid place-items-center rounded-2xl border border-dashed border-white/10 bg-navy-deep/30 p-10 text-center sm:p-14">
      <span
        aria-hidden
        className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy ring-1 ring-mint/20"
      >
        <Sparkles size={18} className="text-mint" />
      </span>
      <h3 className="text-lg font-semibold text-ink">Nothing to show here — yet.</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-dim">
        I keep a small list of side projects in a separate file so they don&rsquo;t muddy
        the work shelf. Adding a few over the coming weeks.
      </p>
      <a
        href="#blog"
        className="focus-ring mt-5 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs text-sky transition hover:bg-sky/10"
      >
        Read what I&rsquo;m thinking about instead →
      </a>
    </div>
  );
}

export function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory>('work');

  const counts = useMemo(() => {
    const work = projects.filter((p) => (p.category ?? 'work') === 'work').length;
    const personal = projects.filter((p) => p.category === 'personal').length;
    return { work, personal } satisfies Record<ProjectCategory, number>;
  }, []);

  const visible = useMemo(
    () => projects.filter((p) => (p.category ?? 'work') === active),
    [active]
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 border-t border-white/5 py-20"
    >
      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader index="04" label="Projects" hint="things i've built" className="mb-0" />
        <TabBar active={active} onChange={setActive} counts={counts} />
      </div>

      <p className="mb-8 max-w-md text-sm text-ink-mute">
        <span className="text-sky">// </span>
        {categories.find((c) => c.id === active)?.hint}
      </p>

      {visible.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <EmptyPersonal />
      )}
    </section>
  );
}