import { Menu, Terminal } from 'lucide-react';
import { profile } from '~/data/portfolio';

interface MobileBarProps {
  onOpen: () => void;
}

export function MobileBar({ onOpen }: MobileBarProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/5 bg-navy/90 px-5 py-3 backdrop-blur lg:hidden">
      <a href="#about" className="flex items-center gap-2.5">
        <span
          aria-hidden
          className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-navy-deeper ring-1 ring-mint/30"
        >
          <Terminal size={14} className="text-mint" />
        </span>
        <span className="font-mono text-sm font-semibold tracking-tight text-ink">
          {profile.handle}
        </span>
      </a>
      <button
        type="button"
        onClick={onOpen}
        aria-label="Open navigation"
        className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-dim ring-1 ring-white/10 transition hover:bg-white/5 hover:text-mint hover:ring-mint/40"
      >
        <Menu size={16} />
      </button>
    </header>
  );
}