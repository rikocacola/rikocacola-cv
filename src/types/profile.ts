/** Domain types for the profile dashboard. */

export type Availability = "available" | "open" | "unavailable";

/** Brand marks that exist as assets in public/images/logo. */
export type SocialIcon = "github" | "linkedin";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  location: string;
  timezone: string;
  availability: Availability;
  /** Short line shown beside the status dot. Keep it factual. */
  availabilityNote: string;
  avatar: string;
  /** 2–3 sentences: what he does and who he does it for. */
  summary: string;
  /** Concrete things he's responsible for day to day. */
  focus: string[];
  resumeUrl: string;
  links: SocialLink[];
}

export interface Stat {
  label: string;
  value: string;
  /** Optional qualifier rendered under the value. */
  note?: string;
}

export type SkillLevel = "core" | "working" | "familiar";

export interface Skill {
  name: string;
  logo: string;
  level: SkillLevel;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Release {
  /** Semantic tag for this chapter of the career. Order carries meaning. */
  version: string;
  company: string;
  title: string;
  placement?: string;
  startDate: string;
  /** `null` means current. */
  endDate: string | null;
  logo: string;
  /** What actually shipped during this release. */
  shipped: string[];
  stack: string[];
}

export interface Project {
  title: string;
  description: string;
  href?: string;
  source?: string;
  status: "live" | "archived" | "building";
  stack: string[];
}
