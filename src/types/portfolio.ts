export interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  category: 'Computer Vision' | 'Research' | 'Machine Learning' | 'NLP' | 'Software Engineering';
  shortDescription: string;
  fullDescription: string;
  problem: string;
  approach: string;
  myContribution: string;
  technologies: string[];
  links: {
    app?: string;
    github?: string;
    demo?: string;
    presentation?: string;
    videos?: string[];
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface LeadershipExperience {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  videoLink?: string;
  photoHighlights: {
    title: string;
    description: string;
    context: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  minor?: string;
  status: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}
