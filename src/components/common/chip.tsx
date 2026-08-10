import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ChipTone = "neutral" | "accent" | "info";

export interface ChipProps {
  children: ReactNode;
  tone?: ChipTone;
  className?: string;
}

const toneStyles: Record<ChipTone, string> = {
  neutral: "border-brand-line text-brand-ink-muted",
  accent: "border-brand-line-strong text-brand-accent",
  info: "border-brand-info/30 text-brand-info",
};

/** Small inline tag for technologies and short metadata. */
export function Chip({ children, tone = "neutral", className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs whitespace-nowrap",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
