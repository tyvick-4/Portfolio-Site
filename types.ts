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
