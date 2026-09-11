export type SectionId = 'about' | 'skills' | 'experiences' | 'projects' | 'blog';

export interface NavItem {
  id: SectionId;
  label: string;
  index: string;
  hint: string;
}

export interface Skill {
  name: string;
  level?: 'primary' | 'working' | 'familiar';
}

export interface SkillGroup {
  category: string;
  icon: 'frontend' | 'backend' | 'devops' | 'craft';
  items: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  stack: string[];
  highlights?: string[];
  repo?: string;
  demo?: string;
  status?: 'shipped' | 'wip' | 'archived';
  year: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tag: string;
  href: string;
}