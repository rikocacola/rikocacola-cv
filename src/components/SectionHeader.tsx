import type { ReactNode } from 'react';
import { cn } from '~/lib/cn';

interface SectionHeaderProps {
  index: string;
  label: string;
  hint?: string;
  className?: string;
  children?: ReactNode;
}

export function SectionHeader({ index, label, hint, className, children }: SectionHeaderProps) {
  return (
    <header className={cn('mb-10 flex items-baseline gap-4', className)}>
      <span
        aria-hidden
        className="font-mono text-sm tracking-tight text-sky/80"
      >
        {index}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        <span className="text-mint">{label}</span>
        {hint ? (
          <span className="ml-3 text-base font-normal text-ink-mute">// {hint}</span>
        ) : null}
      </h2>
      {children ? <div className="ml-auto">{children}</div> : null}
    </header>
  );
}