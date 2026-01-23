
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  subrole?: string;
}

export interface Project {
  title: string;
  period: string;
  tagline?: string;
  description: string[];
  tags: string[];
  image: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}
