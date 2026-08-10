import { Panel } from "@/components/common/panel";
import { SectionHeader } from "@/components/common/section-header";

export interface FocusListProps {
  items: string[];
  index?: number;
}

/** The day-to-day. Concrete responsibilities, not adjectives. */
export function FocusList({ items, index }: FocusListProps) {
  return (
    <Panel as="section" id="focus" index={index} aria-labelledby="focus-title">
      <SectionHeader
        id="focus-title"
        eyebrow="What I do"
        title="Day to day"
        description="Where my time actually goes."
      />
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed">
            <span
              aria-hidden
              className="bg-brand-accent mt-2 size-1.5 shrink-0 rounded-full"
            />
            <span className="text-brand-ink-muted">{item}</span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
