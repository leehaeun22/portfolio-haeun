// Experience type definitions

export type ExperienceType = 'education' | 'research' | 'activity';

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  period: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}
