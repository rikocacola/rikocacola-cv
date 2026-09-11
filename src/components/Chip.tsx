import type { ReactNode } from 'react';
import { cn } from '~/lib/cn';

interface ChipProps {
  children: ReactNode;
  className?: string;
  tone?: 'mint' | 'sky' | 'leaf' | 'neutral';
}

const toneStyles: Record<NonNullable<ChipProps['tone']>, string> = {
  mint: 'text-mint ring-mint/30 hover:ring-mint/70 hover:bg-mint/10',
  sky: 'text-sky ring-sky/30 hover:ring-sky/70 hover:bg-sky/10',
  leaf: 'text-leaf ring-leaf/30 hover:ring-leaf/70 hover:bg-leaf/10',
  neutral: 'text-ink-dim ring-white/10 hover:ring-white/30 hover:bg-white/5',
};

export function Chip({ children, className, tone = 'neutral' }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] ring-1 transition-colors duration-200',
        toneStyles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}