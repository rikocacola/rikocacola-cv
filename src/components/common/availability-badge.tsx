import { cn } from "@/lib/utils";
import type { Availability } from "@/types/profile";

export interface AvailabilityBadgeProps {
  status: Availability;
  note: string;
  className?: string;
}

const statusStyles: Record<Availability, { dot: string; text: string }> = {
  available: { dot: "bg-brand-accent", text: "text-brand-accent" },
  open: { dot: "bg-brand-accent", text: "text-brand-accent" },
  unavailable: { dot: "bg-brand-ink-muted", text: "text-brand-ink-muted" },
};

/**
 * Availability, stated plainly. The dot pulses only when there's something to
 * signal — a steady dot for "unavailable" says the same thing more honestly.
 */
export function AvailabilityBadge({
  status,
  note,
  className,
}: AvailabilityBadgeProps) {
  const styles = statusStyles[status];
  const isOpen = status !== "unavailable";

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span className="relative flex size-2 shrink-0" aria-hidden>
        {isOpen ? (
          <span
            className={cn(
              "absolute inline-flex size-full animate-ping rounded-full opacity-60",
              styles.dot,
            )}
          />
        ) : null}
        <span
          className={cn(
            "relative inline-flex size-2 rounded-full",
            styles.dot,
          )}
        />
      </span>
      <span className={cn("font-mono text-xs", styles.text)}>{note}</span>
    </span>
  );
}
