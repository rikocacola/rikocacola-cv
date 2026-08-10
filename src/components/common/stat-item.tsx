import { cn } from "@/lib/utils";

export interface StatItemProps {
  label: string;
  value: string;
  note?: string;
  className?: string;
}

/**
 * A labelled figure. Deliberately not a big-number-with-gradient card — the
 * value sits at the same weight as everything else and the label does the
 * explaining.
 */
export function StatItem({ label, value, note, className }: StatItemProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <dt className="text-brand-ink-muted font-mono text-[0.68rem] tracking-[0.16em] uppercase">
        {label}
      </dt>
      <dd className="mt-1.5">
        <span className="text-brand-ink block truncate text-lg font-semibold">
          {value}
        </span>
        {note ? (
          <span className="text-brand-ink-muted block truncate text-xs">
            {note}
          </span>
        ) : null}
      </dd>
    </div>
  );
}
