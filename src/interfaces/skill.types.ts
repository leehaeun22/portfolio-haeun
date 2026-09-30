// Skill type definitions

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}
