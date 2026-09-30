// 기술 스택 데이터 (constants/skills.ts)
import type { SkillCategory } from '@/interfaces/skill.types';

export const SKILLS: SkillCategory[] = [
  {
    category: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Python', icon: 'FileCode2' },
      { name: 'Java', icon: 'Coffee' },
      { name: 'JavaScript', icon: 'Braces' },
      { name: 'TypeScript', icon: 'FileCode2' },
    ],
  },
  {
    category: 'AI / ML',
    icon: 'Brain',
    skills: [
      { name: 'Reinforcement Learning', icon: 'Network' },
      { name: 'PPO', icon: 'Cpu' },
      { name: 'DQN', icon: 'Bot' },
      { name: 'RAG', icon: 'Search' },
      { name: 'OpenAI API', icon: 'Bot' },
    ],
  },
  {
    category: 'Web / Backend',
    icon: 'PanelsTopLeft',
    skills: [
      { name: 'React', icon: 'Atom' },
      { name: 'Next.js', icon: 'Layers' },
      { name: 'Spring Boot', icon: 'Server' },
      { name: 'REST API', icon: 'Route' },
      { name: 'HTML/CSS', icon: 'Code2' },
    ],
  },
  {
    category: 'Database / Tools',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'MySQL', icon: 'Database' },
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'Github' },
      { name: 'Docker', icon: 'Box' },
      { name: 'Playwright', icon: 'TestTubeDiagonal' },
      { name: 'BrowserGym', icon: 'Globe' },
    ],
  },
];
