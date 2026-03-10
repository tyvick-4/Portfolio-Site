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

export type ContentBlockType = 'h2' | 'h3' | 'p' | 'p-bold-lead' | 'hr' | 'em';

export interface ContentBlock {
  type: ContentBlockType;
  // Plain text for most blocks; may contain <strong> / <em> inline HTML for 'p' blocks
  content: string;
}

export interface WritingPost {
  slug: string;
  title: string;
  subtitle: string;
  publishedAt: string; // ISO date string, e.g. "2026-03-10"
  readMinutes: number;
  tags: string[];
  excerpt: string;
  body: ContentBlock[];
}
