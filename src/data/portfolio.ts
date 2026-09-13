import type {
  NavItem,
  SkillGroup,
  ExperienceItem,
  ProjectItem,
  BlogPost,
} from "~/types";

export const navItems: NavItem[] = [
  { id: "about", label: "About", index: "01", hint: "who i am" },
  { id: "skills", label: "Skills", index: "02", hint: "what i use" },
  {
    id: "experiences",
    label: "Experience",
    index: "03",
    hint: "where i worked",
  },
  { id: "projects", label: "Projects", index: "04", hint: "what i built" },
  { id: "blog", label: "Blog", index: "05", hint: "what i wrote" },
];

export const profile = {
  name: "Riko Chair Nugroho",
  handle: "richnugroho",
  role: "Software Engineer",
  location: "Jakarta, ID",
  status: "Available for new roles",
  tagline:
    "I build reliable web platforms — calm APIs underneath, considered interfaces on top.",
  email: "riko.devmail@gmail.com",
  github: "https://github.com/rikocacola",
  linkedin: "https://linkedin.com/in/rikocacola",
  resumeUrl: "/resume.pdf",
  bio: [
    "I'm a software engineer focused on the parts of a product that nobody notices when they work, and everybody notices when they don't.",
    "Most of my time is spent in the seam between frontend experience and backend systems — designing APIs that don\u2019t leak their shape, shipping interfaces that stay fast as the surface area grows, and keeping builds honest enough that I can sleep at night.",
  ],
  stats: [
    { value: "5+", label: "years shipping" },
    { value: "15+", label: "projects shipped" },
  ],
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "frontend",
    items: [
      { name: "TypeScript", level: "primary" },
      { name: "React", level: "primary" },
      { name: "Next.js", level: "primary" },
      { name: "React Router 7", level: "working" },
      { name: "Tailwind CSS", level: "primary" },
      { name: "TanStack Query", level: "primary" },
    ],
  },
  {
    category: "Backend",
    icon: "backend",
    items: [
      { name: "Node.js", level: "working" },
      { name: "PostgreSQL", level: "working" },
      { name: "REST / OpenAPI", level: "working" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "devops",
    items: [
      { name: "Docker", level: "primary" },
      { name: "GitHub Actions", level: "working" },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "astra-international",
    role: "Co-Lead Frontend Developer",
    company: "Astra International",
    location: "Jakarta - Hybrid",
    period: "May 2022 — Present",
    current: true,
    bullets: [
      "Developed and maintained multiple web applications supporting automotive and internal business operations across Astra Group companies.",
      "Partnered closely with UI/UX designers and business stakeholders to turn ambiguous requirements into scalable, consistent interfaces.",
      "Integrated frontend applications with backend services and APIs, including SAP-backed workflows where the data shapes didn't always cooperate.",
      "Co-led a small frontend team across three concurrent projects, each on a different stack (Next.js, React, SAPUI5), with shared design and release conventions.",
      "Built reusable project boilerplates and shared component libraries that standardized architecture and cut setup time for new projects across teams.",
      "Improved application performance, maintainability, and SEO — through lazy-loaded routes, code-splitting, and consistent metadata patterns.",
      "Researched and evaluated modern frameworks and SAP frontend technologies (SAPUI5, Fiori) to inform tooling decisions for future projects.",
    ],
    stack: ["Next.js", "TypeScript", "React.JS", "SAPUI5", "Docker"],
  },
  {
    id: "tilabs",
    role: "Frontend / Odoo Developer",
    company: "TILabs",
    location: "Jakarta",
    period: "June 2021 — May 2022",
    bullets: [
      "Developed and customized Odoo ERP modules to match client-specific requirements across multiple engagements — covering inventory, manufacturing, and point-of-sale.",
      "Enhanced existing ERP functionality and contributed to feature improvements that fed back into the company's shared module library.",
      "Collaborated with internal teams — sales, operations, and project leads — to scope and deliver tailored enterprise solutions on time.",
      "Built a storefront web app that wired directly into the existing Odoo backend, replacing the previous manual order flow.",
    ],
    stack: ["Javascript", "Odoo/Phython"],
  },
  {
    id: "freelance",
    role: "Frontend Developer (Freelance)",
    company: "Confidental Company",
    location: "Jakarta - Hybrid",
    period: "March 2025 — August 2026",
    bullets: [
      "Built a greenfield web platform end-to-end — from requirements and architecture through to launch and the first month in production.",
    ],
    stack: ["React"],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "crm-outbound-astraworld",
    title: "CRM Outbound — Astraworld",
    description:
      "An internal web application used by the Astraworld team and its extended partners to manage tenants, campaigns, users, roles & permissions, agent assignments, data supplies, notifications, and a built-in telephony system.",
    contributions: [
      {
        title: "Project Setup & Architecture",
        description:
          "Bootstrapped the application boilerplate to match the latest Astra International standards and engineering guidelines.",
      },
      {
        title: "Technical Leadership",
        description:
          "Led a 3-person frontend team — ran code reviews, aligned frontend goals with adjacent teams, and drove the architectural decisions for the CRM.",
      },
      {
        title: "Feature Development",
        description:
          "Built and shipped 10+ production-ready features covering tenants, campaigns, users, roles & permissions, data supplies, notifications, and telephony.",
      },
      {
        title: "Operations & Deployment",
        description:
          "Partnered with the Operations team to configure Nginx, Docker, and the deployment pipeline so releases stayed boring.",
      },
    ],
    stack: ["Next.js", "TanStack Query", "Tailwind CSS", "Firebase FCM"],
    status: "shipped",
    confidential: true,
    category: "work",
  },
  {
    id: "auto2000-digiroom",
    title: "Auto2000 — Digiroom",
    description:
      "A platform that surfaces Toyota product information, aftersales services, promotions, and internal campaigns for Auto2000 customers and staff.",
    contributions: [
      {
        title: "UI & Component Development",
        description:
          "Built responsive, reusable frontend components to keep the user experience consistent across devices and breakpoints.",
      },
      {
        title: "API Integration",
        description:
          "Integrated backend REST APIs with frontend services for smooth data flow and reliable application logic.",
      },
      {
        title: "Performance & SEO",
        description:
          "Optimized application speed, rendering efficiency, and SEO practices to improve both user experience and search visibility.",
      },
      {
        title: "Cross-Functional Collaboration",
        description:
          "Worked closely with UI/UX designers and business stakeholders to turn design concepts and requirements into functional features.",
      },
    ],
    stack: ["Next.js", "Redux", "Turborepo"],
    status: "shipped",
    confidential: true,
    category: "work",
  },
  {
    id: "osp-auto2000",
    title: "OSP — Auto2000",
    description:
      "An internal operational platform used by Auto2000 employees to monitor and manage customer transactions end to end.",
    contributions: [
      {
        title: "Frontend Leadership",
        description:
          "Served as Co-Lead Frontend Developer, helping shape the core architecture and streamline the team's development workflows.",
      },
      {
        title: "Feature & API Development",
        description:
          "Built core application features and integrated complex backend APIs to deliver seamless transaction flows.",
      },
      {
        title: "Code Quality & Standards",
        description:
          "Ran regular code reviews to keep quality, consistency, and best practices high across the team.",
      },
    ],
    stack: ["Next.js", "Redux", "Turborepo"],
    status: "shipped",
    confidential: true,
    category: "work",
  },
  {
    id: "sap-ui5-fiori",
    title: "SAP UI5 / Fiori",
    description:
      "Built multiple enterprise applications using SAP UI5 and Fiori within Astra International, from internal tooling to production-ready line-of-business apps.",
    contributions: [
      {
        title: "SAP UI5 & Fiori Leadership",
        description:
          "Led and mentored the team on SAP UI5 and Fiori, establishing best practices and technical guidance for the wider group.",
      },
      {
        title: "Architecture & Strategy",
        description:
          "Evaluated project requirements and joined feasibility discussions for adopting SAP UI5 in upcoming business applications.",
      },
      {
        title: "Research & Feasibility",
        description:
          "Explored and prototyped SAP UI5 capabilities to figure out how to integrate them into existing workflows.",
      },
      {
        title: "Production Development",
        description:
          "Developed, optimized, and prepared high-quality SAP UI5 code for production deployment across Astra subsidiaries.",
      },
    ],
    stack: ["SAPUI5", "JavaScript"],
    status: "shipped",
    confidential: true,
    category: "work",
  },
];

export const posts: BlogPost[] = [
  // {
  //   id: "scrollytelling-is-mostly-just-scrolling",
  //   title: "Scrollytelling is mostly just scrolling",
  //   excerpt:
  //     'Most "interactive" scrollytelling patterns are a video essay in disguise. A short defense of less, with notes on where the pattern actually earns its keep.',
  //   date: "2025-03-14",
  //   readingTime: "6 min",
  //   tag: "Craft",
  //   href: "#",
  // },
  // {
  //   id: "small-teams-dont-need-monorepos",
  //   title: "Small teams don\u2019t need monorepos",
  //   excerpt:
  //     "A monorepo is a tool, not a default. A field guide for the moment a small team is about to adopt one for the wrong reasons.",
  //   date: "2025-01-22",
  //   readingTime: "9 min",
  //   tag: "Architecture",
  //   href: "#",
  // },
  // {
  //   id: "writing-a-postmortem-people-will-actually-read",
  //   title: "Writing a postmortem people will actually read",
  //   excerpt:
  //     "If your postmortems read like legal documents, nobody will read them. Here is the template I have been refining for two years.",
  //   date: "2024-11-03",
  //   readingTime: "7 min",
  //   tag: "Process",
  //   href: "#",
  // },
  // {
  //   id: "four-years-of-react-still",
  //   title: "Four years of React, still",
  //   excerpt:
  //     "Why I keep coming back to React after flirting with everything else, and what would actually make me leave.",
  //   date: "2024-08-18",
  //   readingTime: "5 min",
  //   tag: "React",
  //   href: "#",
  // },
];
