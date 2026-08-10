import { ArrowUpRight } from "lucide-react";

import { BrandIcon } from "@/components/common/brand-icon";
import { Chip } from "@/components/common/chip";
import { Panel } from "@/components/common/panel";
import { SectionHeader } from "@/components/common/section-header";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/profile";

export interface ProjectGridProps {
  projects: Project[];
  index?: number;
}

const statusCopy: Record<Project["status"], string> = {
  live: "Live",
  building: "In progress",
  archived: "Archived",
};

/** Side projects. Each card links out to the thing itself, not a case study. */
export function ProjectGrid({ projects, index }: ProjectGridProps) {
  return (
    <Panel
      as="section"
      id="projects"
      index={index}
      aria-labelledby="projects-title"
    >
      <SectionHeader
        id="projects-title"
        eyebrow="Projects"
        title="Built on the side"
        description="Things I've shipped outside of client work."
      />

      <ul className="mt-6 grid gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <li key={project.title}>
            <article className="border-brand-line hover:border-brand-line-strong flex h-full flex-col rounded-lg border p-4 transition-colors">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-brand-ink text-base font-semibold">
                  {project.title}
                </h3>
                <span
                  className={cn(
                    "shrink-0 font-mono text-[0.65rem] tracking-wide uppercase",
                    project.status === "live"
                      ? "text-brand-accent"
                      : "text-brand-ink-muted",
                  )}
                >
                  {statusCopy[project.status]}
                </span>
              </div>

              <p className="text-brand-ink-muted mt-2 flex-1 text-sm leading-relaxed">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <Chip>{tech}</Chip>
                  </li>
                ))}
              </ul>

              <div className="border-brand-line mt-4 flex items-center gap-4 border-t pt-3">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-brand-ink-muted hover:text-brand-accent inline-flex items-center gap-1.5 text-sm transition-colors"
                  >
                    Visit site
                    <ArrowUpRight className="size-3.5" aria-hidden />
                    <span className="sr-only">— {project.title}</span>
                  </a>
                ) : null}
                {project.source ? (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-brand-ink-muted hover:text-brand-accent inline-flex items-center gap-1.5 text-sm transition-colors"
                  >
                    <BrandIcon name="github" className="size-3.5" />
                    Source
                    <span className="sr-only">— {project.title}</span>
                  </a>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
