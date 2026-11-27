export interface CareerHighlight {
  metric: string;
  description: string;
  details: string;
}

export interface CaseStudyResult {
  metric: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroVideo?: string; // Optional video that takes precedence over heroImage
  company: string;
  role: string;
  duration: string;
  tags: string[];
  metaDescription: string; // ≤155 chars for search snippets
  overview: string;
  problem: string;
  approach: string[];
  challenges: string[];
  results: CaseStudyResult[];
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface RecentContribution {
  title: string;
  source: string; // e.g. "Discord Blog"
  date: string; // display date, e.g. "Nov 16, 2026"
  datePublished: string; // ISO date for structured data
  summary: string;
  href: string; // external post URL
  ctaLabel: string;
  image?: string; // self-hosted JPG in /public/images with a .webp sibling; a glow panel shows when absent
  imageAlt?: string;
  tags: string[];
}
