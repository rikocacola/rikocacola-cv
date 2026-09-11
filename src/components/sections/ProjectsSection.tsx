import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '~/components/icons/SocialIcons';
import { projects } from '~/data/portfolio';
import type { ProjectItem as ProjectItemType } from '~/types';
import { SectionHeader } from '~/components/SectionHeader';
import { Chip } from '~/components/Chip';
import { cn } from '~/lib/cn';

const statusTone: Record<NonNullable<ProjectItemType['status']>, { tone: 'mint' | 'sky' | 'leaf' | 'neutral'; label: string }> = {
  shipped: { tone: 'leaf', label: 'shipped' },
  wip: { tone: 'sky', label: 'in progress' },
  archived: { tone: 'neutral', label: 'archived' },
};

function ProjectCard({ project }: { project: ProjectItemType }) {
  const status = project.status ? statusTone[project.status] : null;

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
          {project.year}
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

      <p className="mt-3 text-sm leading-relaxed text-ink-dim">{project.description}</p>

      {project.highlights?.length ? (
        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute"
            >
              <span aria-hidden className="h-1 w-1 rounded-full bg-mint" />
              {h}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>

      <footer className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4">
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-ink-dim transition hover:bg-mint/10 hover:text-mint"
          >
            <ArrowUpRight size={13} />
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
            {project.demo ? <GithubIcon className="h-[13px] w-[13px]" /> : <ExternalLink size={13} />}
            Source
          </a>
        ) : null}
      </footer>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 border-t border-white/5 py-20"
    >
      <SectionHeader index="04" label="Projects" hint="things i've built" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}