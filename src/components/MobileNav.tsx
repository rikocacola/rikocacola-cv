import { useCallback, useEffect } from 'react';
import { Mail, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '~/components/icons/SocialIcons';
import { navItems, profile } from '~/data/portfolio';
import type { SectionId } from '~/types';
import { cn } from '~/lib/cn';
import { useLockBodyScroll } from '~/hooks/useLockBodyScroll';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}

export function MobileNav({ open, onClose, active, onNavigate }: MobileNavProps) {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const handleClick = useCallback(
    (id: SectionId) => {
      onNavigate(id);
      onClose();
    },
    [onNavigate, onClose]
  );

  return (
    <div
      aria-hidden={!open}
      className={cn(
        'fixed inset-0 z-40 lg:hidden',
        open ? 'pointer-events-auto' : 'pointer-events-none'
      )}
    >
      <div
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-navy-deeper/80 backdrop-blur-sm transition-opacity duration-200',
          open ? 'opacity-100' : 'opacity-0'
        )}
      />

      <aside
        role="dialog"
        aria-label="Mobile navigation"
        className={cn(
          'absolute inset-y-0 left-0 flex w-[82%] max-w-[360px] flex-col bg-navy shadow-sidebar-glow transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <div className="font-mono text-sm tracking-tight text-mint">~/menu</div>
          <button
            onClick={onClose}
            aria-label="Close navigation"
            className="focus-ring -mr-2 inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-dim hover:bg-white/5 hover:text-ink"
          >
            <X size={16} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={cn(
                      'focus-ring group flex w-full items-center gap-3 rounded-md px-3 py-3 text-left transition-colors',
                      isActive
                        ? 'bg-white/5 text-mint'
                        : 'text-ink-dim hover:bg-white/5 hover:text-ink'
                    )}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className="font-mono text-xs text-sky/70">{item.index}</span>
                    <span className="font-medium">{item.label}</span>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                      {item.hint}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-white/5 px-6 py-5">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
            reach out
          </div>
          <div className="flex items-center gap-2">
<a
                href={profile.github}
                aria-label="GitHub"
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-dim ring-1 ring-white/10 transition hover:text-mint hover:ring-mint/40"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                aria-label="LinkedIn"
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-dim ring-1 ring-white/10 transition hover:text-sky hover:ring-sky/40"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-dim ring-1 ring-white/10 transition hover:text-leaf hover:ring-leaf/40"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}