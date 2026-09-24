import { useCallback } from "react";
import { Mail } from "lucide-react";
import { Logo } from "~/components/icons/Logo";
import { GithubIcon, LinkedinIcon } from "~/components/icons/SocialIcons";
import { useScrollProgress } from "~/hooks/useScrollProgress";
import { navItems, profile } from "~/data/portfolio";
import type { SectionId } from "~/types";
import { cn } from "~/lib/cn";

interface SidebarProps {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}

export function Sidebar({ active, onNavigate }: SidebarProps) {
  const scrollProgress = useScrollProgress();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: SectionId) => {
      e.preventDefault();
      onNavigate(id);
    },
    [onNavigate],
  );

  return (
    <aside
      aria-label="Primary"
      className="sticky top-0 hidden h-dvh w-[450px] shrink-0 flex-col justify-between border-r border-white/5 bg-navy py-8 pl-8 pr-6 shadow-sidebar-glow lg:flex"
    >
      <span
        aria-hidden
        className="absolute inset-y-0 right-0 w-px overflow-hidden"
      >
        <span
          className="block w-px origin-top bg-gradient-to-b from-mint via-sky to-leaf"
          style={{ transform: `scaleY(${scrollProgress})`, opacity: 0.45 }}
        />
      </span>
      <div>
        <a
          href="#about"
          onClick={(e) => handleClick(e, "about")}
          className="focus-ring group flex items-center gap-2.5"
        >
          <span
            aria-hidden
            className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-navy-deeper ring-1 ring-mint/30 transition group-hover:ring-mint/70"
          >
            <Logo size={36} className="h-9 w-9" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-ink">
              {profile.handle}
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
              {profile.role}
            </span>
          </span>
        </a>

        <p className="mt-6 max-w-[14rem] font-mono text-[11px] leading-relaxed text-ink-mute">
          <span className="text-sky">$</span> whoami
          <br />
          <span className="text-mint">{profile.location}</span>
          <span className="text-ink-mute"> · </span>
          <span className="text-leaf">{profile.status.toLowerCase()}</span>
        </p>

        <nav className="mt-12" aria-label="Section navigation">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
            Navigation
          </div>
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "focus-ring group relative flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
                      isActive
                        ? "text-mint"
                        : "text-ink-dim hover:bg-white/5 hover:text-ink",
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full transition-all duration-300",
                        isActive ? "bg-mint" : "bg-transparent",
                      )}
                    />
                    <span
                      className={cn(
                        "font-mono text-xs transition-colors",
                        isActive ? "text-mint" : "text-sky/70",
                      )}
                    >
                      {item.index}
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute xl:inline">
                      {item.hint}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div>
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          Elsewhere
        </div>
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
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </aside>
  );
}
