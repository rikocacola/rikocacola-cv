import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  /** Short mono label above the title. Names the section, doesn't decorate it. */
  eyebrow?: string;
  title: string;
  description?: string;
  /** Rendered opposite the title — a link, count, or control. */
  action?: ReactNode;
  /** Set when the heading labels a region, so `aria-labelledby` can point here. */
  id?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  id,
  className,
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-start justify-between gap-4", className)}>
      <div className="min-w-0">
        {eyebrow ? (
          <p className="text-brand-accent font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <Heading
          id={id}
          className="text-brand-ink mt-1 text-xl font-semibold tracking-tight"
        >
          {title}
        </Heading>
        {description ? (
          <p className="text-brand-ink-muted mt-1.5 text-sm leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
