import { useMemo } from 'react';
import { Boxes, Cpu, Server, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skills } from '~/data/portfolio';
import type { Skill } from '~/types';
import { SectionHeader } from '~/components/SectionHeader';
import { cn } from '~/lib/cn';

const iconMap: Record<string, LucideIcon> = {
  frontend: Cpu,
  backend: Server,
  devops: Boxes,
  craft: Wrench,
};

function SkillRow({ skill }: { skill: Skill }) {
  const tone = skill.level === 'primary' ? 'mint' : skill.level === 'working' ? 'sky' : 'neutral';
  return (
    <li
      className={cn(
        'group flex items-center justify-between gap-3 rounded-md px-3 py-2 transition-colors',
        'hover:bg-white/5'
      )}
    >
      <span className="text-sm text-ink">{skill.name}</span>
      <span
        className={cn(
          'font-mono text-[10px] uppercase tracking-[0.18em]',
          tone === 'mint' && 'text-mint',
          tone === 'sky' && 'text-sky',
          tone === 'neutral' && 'text-ink-mute'
        )}
      >
        {skill.level ?? 'familiar'}
      </span>
    </li>
  );
}

export function SkillsSection() {
  const groups = useMemo(() => skills, []);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-t border-white/5 py-20"
    >
      <SectionHeader index="02" label="Skills" hint="what i use day to day" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {groups.map((group) => {
          const Icon = iconMap[group.icon] ?? Cpu;
          return (
            <article
              key={group.category}
              className={cn(
                'group relative overflow-hidden rounded-xl border border-white/5 bg-navy-deep/50 p-5 transition-all duration-300',
                'hover:-translate-y-0.5 hover:border-leaf/40 hover:shadow-chip-hover'
              )}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-leaf/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <header className="mb-4 flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-navy ring-1 ring-mint/20 transition group-hover:ring-leaf/60"
                >
                  <Icon size={16} className="text-mint transition-colors group-hover:text-leaf" />
                </span>
                <h3 className="text-sm font-semibold tracking-tight text-ink">
                  {group.category}
                </h3>
                <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                  {group.items.length}
                </span>
              </header>

              <ul className="divide-y divide-white/5">
                {group.items.map((skill) => (
                  <SkillRow key={skill.name} skill={skill} />
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <p className="mt-8 max-w-[58ch] font-mono text-xs text-ink-mute">
        <span className="text-sky">note</span> ·{' '}
        <span className="text-ink-dim">
          levels are subjective. <span className="text-mint">primary</span> = ship in my sleep.
          <span className="text-sky"> working</span> = comfortable. <span className="text-ink-mute">familiar</span> = have shipped, will reread docs.
        </span>
      </p>
    </section>
  );
}