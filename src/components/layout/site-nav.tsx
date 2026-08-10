"use client";

import { useMemo } from "react";

import { navItems } from "@/components/layout/nav-items";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export interface SiteNavProps {
  /** Called after a link is chosen — lets the mobile drawer close itself. */
  onNavigate?: () => void;
  /** `rail` hides labels below `xl`; `stacked` always shows them. */
  variant?: "rail" | "stacked";
  className?: string;
}

export function SiteNav({
  onNavigate,
  variant = "rail",
  className,
}: SiteNavProps) {
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const active = useActiveSection(ids);

  return (
    <nav aria-label="Sections" className={className}>
      <ul className="flex flex-col gap-1">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;

          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={onNavigate}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-brand-raised text-brand-accent"
                    : "text-brand-ink-muted hover:bg-brand-raised/60 hover:text-brand-ink",
                )}
              >
                {/* Active marker doubles as the icon's left rule. */}
                <span
                  aria-hidden
                  className={cn(
                    "h-5 w-0.5 shrink-0 rounded-full transition-colors",
                    isActive ? "bg-brand-accent" : "bg-transparent",
                  )}
                />
                <Icon className="size-4 shrink-0" aria-hidden />
                <span
                  className={cn(
                    "truncate",
                    variant === "rail" && "hidden xl:inline",
                  )}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
