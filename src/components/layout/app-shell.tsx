import { FileText } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import { AvailabilityBadge } from "@/components/common/availability-badge";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteNav } from "@/components/layout/site-nav";
import { Button } from "@/components/ui/button";
import type { Availability } from "@/types/profile";

export interface AppShellProps {
  name: string;
  role: string;
  availability: Availability;
  availabilityNote: string;
  resumeUrl: string;
  children: ReactNode;
}

/**
 * Topbar + navigation rail + content column. Owns every layout decision so
 * the page below only has to worry about sections.
 */
export function AppShell({
  name,
  role,
  availability,
  availabilityNote,
  resumeUrl,
  children,
}: AppShellProps) {
  return (
    <div className="min-h-dvh">
      <a
        href="#overview"
        className="bg-brand-accent text-[color:var(--brand-contrast)] sr-only rounded-md px-3 py-2 text-sm font-medium focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>

      <header className="border-brand-line bg-brand-base/85 sticky top-0 z-40 border-b backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-350 items-center gap-3 px-4 sm:px-6">
          <MobileNav />

          <div className="flex min-w-0 items-center gap-2.5">
            <Image
              src="/rcn-icon.svg"
              alt=""
              width={28}
              height={28}
              priority
              className="size-7 shrink-0"
            />
            <div className="min-w-0 leading-tight">
              <p className="text-brand-ink truncate text-sm font-semibold">
                {name}
              </p>
              <p className="text-brand-ink-muted truncate font-mono text-[0.68rem] tracking-wide">
                {role}
              </p>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <AvailabilityBadge
              status={availability}
              note={availabilityNote}
              className="hidden md:inline-flex"
            />
            <Button
              asChild
              size="sm"
              className="bg-brand-accent text-[color:var(--brand-contrast)] hover:bg-brand-accent-strong font-medium"
            >
              <a href={resumeUrl} target="_blank" rel="noreferrer noopener">
                <FileText aria-hidden />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-350 gap-8 px-4 sm:px-6">
        <aside className="hidden w-14 shrink-0 py-8 lg:block xl:w-56">
          <div className="sticky top-24">
            <SiteNav variant="rail" />
          </div>
        </aside>

        <main className="min-w-0 flex-1 py-8">{children}</main>
      </div>
    </div>
  );
}
