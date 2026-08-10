import { GitBranch, Rocket, Target, User, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  /** Matches the `id` of the section it scrolls to. */
  id: string;
  label: string;
  icon: LucideIcon;
}

/** Single source of truth for navigation — desktop rail and mobile drawer both read this. */
export const navItems: NavItem[] = [
  { id: "overview", label: "Overview", icon: User },
  { id: "focus", label: "What I do", icon: Target },
  { id: "toolkit", label: "Toolkit", icon: Wrench },
  { id: "track", label: "Track record", icon: GitBranch },
  { id: "projects", label: "Projects", icon: Rocket },
];
