import type {
  Profile,
  Project,
  Release,
  SkillGroup,
  Stat,
} from "@/types/profile";

/**
 * Hardcoded for now — swap this module for a fetch/CMS layer later without
 * touching any component. Nothing under src/components imports this file
 * directly; the page reads it and passes data down as props.
 */

export const profile: Profile = {
  name: "Riko Chair Nugroho",
  shortName: "Riko",
  role: "Frontend Developer",
  location: "Jakarta, Indonesia",
  timezone: "GMT+7",
  availability: "open",
  availabilityNote: "Open to interesting frontend work",
  avatar: "/images/profile.jpg",
  summary:
    "I build and lead frontend work on internal business applications — the kind of software people use all day to do their jobs. Right now I lead the frontend team for Astra International's sales operation platform, where the interface has to stay fast and legible under real operational load.",
  focus: [
    "Leading a frontend team and reviewing what ships",
    "Building sales operation tooling used daily by internal teams",
    "Turning dense business workflows into interfaces people can move through quickly",
    "Keeping the component layer consistent as the product grows",
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1yqZbxHRPnCyzWJRPfEUnU4qYYY1sZfLp/view",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/rikocacola",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/riko-chair-nugroho/",
      icon: "linkedin",
    },
  ],
};

export const stats: Stat[] = [
  { label: "Building since", value: "2021", note: "5 years in" },
  { label: "Current role", value: "Lead", note: "Frontend team" },
  { label: "Primary stack", value: "React", note: "Next.js, TypeScript" },
  { label: "Based in", value: "Jakarta", note: "GMT+7" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Building interfaces",
    skills: [
      { name: "React", logo: "/images/logo/icon-react.png", level: "core" },
      { name: "Next.js", logo: "/images/logo/icon-next.png", level: "core" },
      {
        name: "JavaScript",
        logo: "/images/logo/icon-javascript.png",
        level: "core",
      },
      { name: "Vue", logo: "/images/logo/icon-vue.png", level: "working" },
      {
        name: "jQuery",
        logo: "/images/logo/icon-jquery.png",
        level: "familiar",
      },
    ],
  },
  {
    title: "Markup and styling",
    skills: [
      { name: "HTML", logo: "/images/logo/icon-html.png", level: "core" },
      { name: "CSS", logo: "/images/logo/icon-css.png", level: "core" },
      { name: "Sass", logo: "/images/logo/icon-sass.png", level: "working" },
    ],
  },
  {
    title: "Workflow",
    skills: [{ name: "Git", logo: "/images/logo/icon-git.png", level: "core" }],
  },
];

/**
 * Career history as a release log — newest first. The version tags are the
 * page's organising device: each entry is a chapter with a scope, and the
 * order genuinely matters.
 */
export const releases: Release[] = [
  {
    version: "v2.0",
    company: "Vlink Consulting Indonesia & 360 Teknologi Indonesia",
    title: "Frontend Developer",
    placement: "Astra International",
    startDate: "May 2022",
    endDate: null,
    logo: "/images/company/astra.png",
    shipped: [
      "Took over as lead of the frontend development team",
      "Built and maintained the Astra International sales operation web application",
      "Set the shared component conventions the team builds against",
    ],
    stack: ["React", "Next.js", "TypeScript"],
  },
  {
    version: "v1.0",
    company: "Technology Innovation Labs",
    title: "Frontend Developer",
    startDate: "June 2021",
    endDate: "May 2022",
    logo: "/images/company/tilabs.jpg",
    shipped: [
      "Built and modified Odoo modules for a sister company",
      "Delivered websites for external clients",
    ],
    stack: ["JavaScript", "Sass", "Odoo"],
  },
];

export const projects: Project[] = [
  {
    title: "Kambing Cup",
    description:
      "Tournament manager for competitions between Muslim employees across the Astra Group — fixtures, standings, and results in one place.",
    href: "http://kc.amaliah.id/",
    source: "https://github.com/rikocacola/kambing-cup-v2",
    status: "live",
    stack: ["React Router 7", "Golang", "Firebase"],
  },
  {
    title: "Jelajah Agi",
    description:
      "Travel discovery site for finding destinations by criteria, with place details and trip notes.",
    href: "http://jelajah.amaliah.id/",
    source: "https://github.com/rikocacola/jelajah-agi",
    status: "live",
    stack: ["Next.js", "Firebase", "Supabase"],
  },
];
