// Skill type definitions

export interface Skill {
  name: string;
  levelLabel: 'Main' | 'Experienced' | 'Used' | 'Research';
  description?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}
