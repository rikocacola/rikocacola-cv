import { BrandIcon } from "@/components/common/brand-icon";
import type { SocialLink } from "@/types/profile";

export interface SiteFooterProps {
  name: string;
  links: SocialLink[];
}

/** Closes the page: who wrote it, and where to find him. */
export function SiteFooter({ name, links }: SiteFooterProps) {
  return (
    <footer className="border-brand-line mt-8 border-t pt-6 pb-10">
      <div className="text-brand-ink-muted flex flex-col items-start justify-between gap-4 text-sm sm:flex-row sm:items-center">
        <p className="font-mono text-xs">
          {name} — built with Next.js and Tailwind CSS
        </p>
        <ul className="flex items-center gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-brand-accent inline-flex items-center gap-2 transition-colors"
              >
                <BrandIcon name={link.icon} className="size-4" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
