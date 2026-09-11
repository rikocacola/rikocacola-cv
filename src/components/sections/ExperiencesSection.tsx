import { experiences } from '~/data/portfolio';
import type { ExperienceItem as ExperienceItemType } from '~/types';
import { SectionHeader } from '~/components/SectionHeader';
import { Chip } from '~/components/Chip';

function ExperienceItem({ item, isLast }: { item: ExperienceItemType; isLast: boolean }) {
  return (
    <li className="relative grid grid-cols-[24px_1fr] gap-x-4 pb-12 last:pb-0 sm:grid-cols-[28px_1fr]">
      <div aria-hidden className="relative">
        <span
          className={`absolute left-1/2 top-2 -translate-x-1/2 inline-flex h-3 w-3 rounded-full ring-4 ${
            item.current
              ? 'bg-leaf shadow-[0_0_0_4px_rgba(33,208,178,0.18)] ring-navy'
              : 'bg-sky/80 ring-navy'
          }`}
        />
        {!isLast ? (
          <span className="absolute left-1/2 top-6 h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/15 via-white/5 to-transparent" />
        ) : null}
      </div>

      <article
        className={`group rounded-xl border border-white/5 bg-navy-deep/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-leaf/30 hover:shadow-chip-hover sm:p-6 ${
          item.current ? 'ring-1 ring-leaf/20' : ''
        }`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold tracking-tight text-ink">
            {item.role}
            <span className="text-ink-mute"> · </span>
            <span className="text-sky">{item.company}</span>
          </h3>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            <span>{item.period}</span>
            {item.current ? (
              <span className="inline-flex items-center gap-1 text-leaf">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-leaf/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-leaf" />
                </span>
                now
              </span>
            ) : null}
          </div>
        </div>

        <p className="mt-1 font-mono text-xs text-ink-mute">{item.location}</p>

        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-dim">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="relative pl-5">
              <span
                aria-hidden
                className="absolute left-0 top-2 inline-block h-px w-3 bg-mint/60"
              />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.stack.map((tech) => (
            <Chip key={tech} tone={item.current ? 'leaf' : 'neutral'}>
              {tech}
            </Chip>
          ))}
        </div>
      </article>
    </li>
  );
}

export function ExperiencesSection() {
  return (
    <section
      id="experiences"
      aria-labelledby="experiences-heading"
      className="scroll-mt-24 border-t border-white/5 py-20"
    >
      <SectionHeader index="03" label="Experience" hint="where i've been" />

      <ol className="mt-2">
        {experiences.map((item, idx) => (
          <ExperienceItem
            key={item.id}
            item={item}
            isLast={idx === experiences.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}