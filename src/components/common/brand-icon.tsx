import Image from "next/image";

import { cn } from "@/lib/utils";
import type { SocialIcon } from "@/types/profile";

/**
 * Brand marks live as SVGs in public/ rather than as icon-font glyphs — these
 * are the original assets from the previous site, and their fill is already
 * the brand accent (#34F5C5).
 */
const brandIcons: Record<SocialIcon, { src: string; label: string }> = {
  github: { src: "/images/logo/github-light-green.svg", label: "GitHub" },
  linkedin: { src: "/images/logo/linkedin-light-green.svg", label: "LinkedIn" },
};

export interface BrandIconProps {
  name: SocialIcon;
  className?: string;
  size?: number;
}

export function BrandIcon({ name, className, size = 16 }: BrandIconProps) {
  const icon = brandIcons[name];

  return (
    <Image
      src={icon.src}
      alt=""
      width={size}
      height={size}
      aria-hidden
      className={cn("shrink-0 object-contain", className)}
    />
  );
}
