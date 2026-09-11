import { ArrowDownToLine, Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '~/components/icons/SocialIcons';
import { profile } from '~/data/portfolio';
import { Button } from '~/components/Button';
import { SectionHeader } from '~/components/SectionHeader';

export function HeroSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />

      <SectionHeader index="01" label="About" hint="who i am" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-sky/80">
            <span className="text-leaf">●</span> {profile.status.toLowerCase()}
          </p>

          <h1
            id="about-heading"
            className="mt-5 text-[2.5rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]"
          >
            <span className="text-ink">Hi, I&rsquo;m </span>
            <span className="text-mint">{profile.name}</span>
            <span className="text-ink">.</span>
            <br />
            <span className="mt-3 inline-block text-sky">I build software</span>{' '}
            <span className="text-ink">that doesn&rsquo;t get in the way.</span>
          </h1>

          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ink-dim">
            {profile.tagline}
          </p>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-dim container-prose">
            {profile.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              href={profile.resumeUrl}
              leftIcon={<ArrowDownToLine size={15} />}
            >
              Download resume
            </Button>
            <Button
              variant="outline"
              href="#projects"
              rightIcon={<ArrowRight size={14} />}
              className="!text-mint"
            >
              See selected work
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
              find me
            </span>
            <span aria-hidden className="h-px w-8 bg-white/10" />
            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                aria-label="GitHub"
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-dim ring-1 ring-white/10 transition hover:text-mint hover:ring-mint/40"
              >
                <GithubIcon className="h-[15px] w-[15px]" />
              </a>
              <a
                href={profile.linkedin}
                aria-label="LinkedIn"
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-dim ring-1 ring-white/10 transition hover:text-sky hover:ring-sky/40"
              >
                <LinkedinIcon className="h-[15px] w-[15px]" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-dim ring-1 ring-white/10 transition hover:text-leaf hover:ring-leaf/40"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>

        <aside className="lg:pt-2">
          <div className="surface rounded-xl p-6">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
              <span>~/stats</span>
              <span className="inline-flex items-center gap-1.5 text-leaf">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-leaf/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-leaf" />
                </span>
                live
              </span>
            </div>
            <dl className="mt-5 grid grid-cols-3 gap-2">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-navy/60 p-3 ring-1 ring-white/5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 font-mono text-2xl font-semibold text-mint">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 font-mono text-[11px] leading-relaxed text-ink-dim">
              <div className="flex justify-between border-b border-white/5 py-2">
                <span className="text-ink-mute">role</span>
                <span className="text-ink">{profile.role}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 py-2">
                <span className="text-ink-mute">based in</span>
                <span className="text-ink">{profile.location}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-ink-mute">email</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="focus-ring rounded text-sky link-underline"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}