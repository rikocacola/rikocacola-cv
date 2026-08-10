import { LogoTile } from "@/components/common/logo-tile";
import { Panel } from "@/components/common/panel";
import { SectionHeader } from "@/components/common/section-header";
import type { SkillGroup } from "@/types/profile";

export interface SkillKitProps {
  groups: SkillGroup[];
  index?: number;
  className?: string;
}

/**
 * Tools grouped by what they're for, each labelled with how often it's used.
 * Grouping beats one flat grid — it says something about how the work is
 * organised rather than just listing logos.
 */
export function SkillKit({ groups, index, className }: SkillKitProps) {
  return (
    <Panel
      as="section"
      id="toolkit"
      index={index}
      className={className}
      aria-labelledby="toolkit-title"
    >
      <SectionHeader
        id="toolkit-title"
        eyebrow="Toolkit"
        title="What I build with"
        description="Grouped by what each tool is for."
      />

      <div className="mt-6 space-y-6">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-brand-ink-muted font-mono text-[0.68rem] tracking-[0.16em] uppercase">
              {group.title}
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <LogoTile
                    name={skill.name}
                    logo={skill.logo}
                    level={skill.level}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Panel>
  );
}
