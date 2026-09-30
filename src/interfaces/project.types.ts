// Project type definitions

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
}
