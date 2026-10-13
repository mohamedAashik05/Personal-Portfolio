export type SpecializationCategory = 'frontend' | 'backend' | 'fullstack-ai';

export type ProjectCategory = 'all' | 'react' | 'dotnet' | 'mern' | 'ai';

export type ProjectStatus = 'completed' | 'in-progress' | 'research';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  categoryFilter: ('react' | 'dotnet' | 'mern' | 'ai')[];
  status: ProjectStatus;
  statusLabel: string;
  featured: boolean;
  description: string;
  highlights: string[];
  techTags: string[];
  architecture?: {
    frontend?: string;
    backend?: string;
    database?: string;
    security?: string;
    aiOrSpecial?: string;
  };
  metricsOrScope?: string;
  githubUrl?: string;
  liveUrl?: string;
  hasVerifiedLink: boolean;
  mockupType: 'qr-attendance' | 'prompt-catalyst' | 'replate' | 'leave-management' | 'documind' | 'agrismart';
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'tools' | 'fundamentals';
  levelDescription?: string;
  usedInProjects?: string[];
  iconName?: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Specialization {
  id: SpecializationCategory;
  title: string;
  subtitle: string;
  description: string;
  techFocus: string[];
  coreCapabilities: string[];
  architecturalPillars: {
    title: string;
    detail: string;
  }[];
  primaryProjectIds: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  status: string;
}

export interface Certification {
  title: string;
  issuer: string;
  score: string;
  period: string;
  gradeBadge: string;
}

export interface Publication {
  title: string;
  journal: string;
  volume: string;
  date: string;
  publicationId: string;
  summary: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  educationSummary: string;
  cgpa: string;
  positioning: string;
  availability: string;
  email: string;
  phone: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUsername: string;
  linkedinUrl: string;
  leetcodeUsername: string;
  leetcodeUrl: string;
  resumeFileName: string;
  resumeFilePath: string;
}
