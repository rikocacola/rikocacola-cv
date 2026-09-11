import { profile } from '~/data/portfolio';

export function Footer() {
  return (
    <footer className="mt-12 border-t border-white/5 pb-12 pt-8">
      <div className="flex flex-col items-start justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="text-leaf">●</span>
          <span>{profile.status}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>built with react, tailwind, and a lot of coffee</span>
        </div>
        <div className="flex items-center gap-3">
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </div>
    </footer>
  );
}