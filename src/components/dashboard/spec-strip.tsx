import { Panel } from "@/components/common/panel";
import { StatItem } from "@/components/common/stat-item";
import type { Stat } from "@/types/profile";

export interface SpecStripProps {
  stats: Stat[];
  index?: number;
  className?: string;
}

/** Four facts, evenly weighted. No hero number, because none of these is one. */
export function SpecStrip({ stats, index, className }: SpecStripProps) {
  return (
    <Panel index={index} className={className}>
      {/*
        Two columns, not four. This sits in the narrow column, and four would
        squeeze every value into an ellipsis.
      */}
      <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
        {stats.map((stat) => (
          <StatItem
            key={stat.label}
            label={stat.label}
            value={stat.value}
            note={stat.note}
          />
        ))}
      </dl>
    </Panel>
  );
}
