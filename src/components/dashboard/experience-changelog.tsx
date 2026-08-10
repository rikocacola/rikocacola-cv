import Image from "next/image";

import { Chip } from "@/components/common/chip";
import { Panel } from "@/components/common/panel";
import { SectionHeader } from "@/components/common/section-header";
import { cn } from "@/lib/utils";
import type { Release } from "@/types/profile";

export interface ExperienceChangelogProps {
  releases: Release[];
  index?: number;
}

/**
 * The signature element: career history rendered as a release log.
 *
 * Version tags earn their place here because the content genuinely is an
 * ordered sequence — each role has a scope and supersedes the last — and
 * because shipping releases is the vernacular of the work itself. The `+`
 * markers read as changelog additions: what this release added.
 */
export function ExperienceChangelog({
  releases,
  index,
}: ExperienceChangelogProps) {
  return (
    <Panel as="section" id="track" index={index} aria-labelledby="track-title">
      <SectionHeader
        id="track-title"
        eyebrow="Track record"
        title="Release log"
        description="Where I've worked, and what each stretch actually shipped."
      />

      <ol className="mt-6">
        {releases.map((release, i) => {
          const isCurrent = release.endDate === null;
          const isLast = i === releases.length - 1;

          return (
            <li key={release.version} className="flex gap-4 sm:gap-5">
              {/* Version gutter — tag plus the rule that threads the entries together. */}
              <div className="flex w-14 shrink-0 flex-col items-center sm:w-16">
                <span
                  className={cn(
                    "rounded-md border px-1.5 py-1 font-mono text-[0.7rem] font-medium",
                    isCurrent
                      ? "border-brand-line-strong bg-brand-accent/10 text-brand-accent"
                      : "border-brand-line text-brand-ink-muted",
                  )}
                >
                  {release.version}
                </span>
                {!isLast ? (
                  <span
                    aria-hidden
                    className="bg-brand-line mt-2 w-px flex-1 rounded-full"
                  />
                ) : null}
              </div>

              <div className={cn("min-w-0 flex-1", !isLast && "pb-8")}>
                <div className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white/90 p-1">
                    <Image
                      src={release.logo}
                      alt=""
                      width={28}
                      height={28}
                      className="size-7 object-contain"
                    />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-brand-ink text-base leading-snug font-semibold">
                      {release.title}
                      {release.placement ? (
                        <span className="text-brand-accent font-normal">
                          {" "}
                          @ {release.placement}
                        </span>
                      ) : null}
                    </h3>
                    <p className="text-brand-ink-muted text-sm">
                      {release.company}
                    </p>
                    <p className="text-brand-ink-muted mt-1 font-mono text-xs">
                      {release.startDate} — {release.endDate ?? "Present"}
                      {isCurrent ? (
                        <span className="text-brand-accent"> · current</span>
                      ) : null}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {release.shipped.map((item) => (
                    <li
                      key={item}
                      className="text-brand-ink-muted flex gap-2.5 text-sm leading-relaxed"
                    >
                      <span
                        aria-hidden
                        className="text-brand-accent shrink-0 font-mono select-none"
                      >
                        +
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {release.stack.map((tech) => (
                    <li key={tech}>
                      <Chip>{tech}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </Panel>
  );
}
