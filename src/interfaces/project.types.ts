// Project type definitions

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  team: string;
  role: string;
  description: string;
  longDescription: string;
  tags: string[];
  outcomes: string[];
  category: string;
  imageUrl?: string;
  githubUrl: string;
  liveUrl: string;
  detailUrl: string;
  featured: boolean;
  problem: string[];
  roleDetails: string[];
  results: string[];
  metrics: ProjectMetric[];
  architecture: string[];
  features: ProjectFeature[];
}
