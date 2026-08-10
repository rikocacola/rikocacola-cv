import { MapPin } from "lucide-react";
import Image from "next/image";

import { BrandIcon } from "@/components/common/brand-icon";
import { Panel } from "@/components/common/panel";
import type { Profile } from "@/types/profile";

export interface ProfileCardProps {
  profile: Profile;
  index?: number;
}

/** Who he is, in the fewest words that still say something specific. */
export function ProfileCard({ profile, index }: ProfileCardProps) {
  return (
    <Panel as="section" id="overview" index={index} aria-labelledby="overview-title">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <Image
          src={profile.avatar}
          alt={`Portrait of ${profile.name}`}
          width={112}
          height={112}
          priority
          className="border-brand-line-strong size-24 shrink-0 rounded-xl border object-cover sm:size-28"
        />

        <div className="min-w-0 flex-1">
          <p className="text-brand-accent font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            Overview
          </p>
          <h1
            id="overview-title"
            className="text-brand-ink mt-1 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {profile.name}
          </h1>
          <p className="text-brand-ink-muted mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="text-brand-ink">{profile.role}</span>
            <span aria-hidden className="text-brand-line-strong hidden sm:inline">
              /
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" aria-hidden />
              {profile.location} · {profile.timezone}
            </span>
          </p>

          <p className="text-brand-ink-muted mt-4 max-w-prose text-sm leading-relaxed">
            {profile.summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {profile.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-brand-line text-brand-ink-muted hover:border-brand-line-strong hover:text-brand-accent inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition-colors"
                >
                  <BrandIcon name={link.icon} className="size-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Panel>
  );
}
