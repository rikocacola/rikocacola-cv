import Image from "next/image";

import { cn } from "@/lib/utils";
import type { SkillLevel } from "@/types/profile";

export interface LogoTileProps {
  name: string;
  logo: string;
  level: SkillLevel;
  className?: string;
}

const levelCopy: Record<SkillLevel, string> = {
  core: "Daily",
  working: "Regular",
  familiar: "Occasional",
};

/**
 * A tool, with how much it actually gets used. The level label is the point —
 * a bare logo grid tells you nothing a reader can act on.
 */
export function LogoTile({ name, logo, level, className }: LogoTileProps) {
  return (
    <div
      className={cn(
        "group border-brand-line hover:border-brand-line-strong hover:bg-brand-raised flex items-center gap-3 rounded-lg border p-3 transition-colors",
        className,
      )}
    >
      {/*
        Light plate behind the mark. Several of these logos are near-black
        (Next.js, jQuery) and vanish against the navy without it.
      */}
      <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-white/90 p-1">
        <Image
          src={logo}
          alt=""
          width={24}
          height={24}
          className="size-6 object-contain"
        />
      </span>
      <div className="min-w-0">
        <p className="text-brand-ink truncate text-sm font-medium">{name}</p>
        <p
          className={cn(
            "truncate font-mono text-[0.65rem] tracking-wide uppercase",
            level === "core" ? "text-brand-accent" : "text-brand-ink-muted",
          )}
        >
          {levelCopy[level]}
        </p>
      </div>
    </div>
  );
}
