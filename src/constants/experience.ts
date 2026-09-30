// 경험 데이터 (constants/experience.ts)
import type { ExperienceItem } from '@/interfaces/experience.types';

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'edu-1',
    type: 'education',
    period: '2023.03 – Present',
    category: 'Education',
    title: '홍익대학교',
    subtitle: '소프트웨어융합과 재학',
    description: '소프트웨어 개발, 데이터베이스, 웹 시스템, AI 관련 분야를 학습',
    tags: ['Software Engineering', 'Web', 'Database', 'AI'],
  },
  {
    id: 'research-1',
    type: 'research',
    period: '2026.06 – Present',
    category: 'Research / Project',
    title: 'RAWD 연구 프로젝트',
    subtitle: 'Team Leader · AI / Web',
    description:
      '강화학습 기반 자율 웹 탐색 agent를 설계하고 웹 런타임 결함 탐지 실험을 진행',
    tags: ['PPO', 'DQN', 'BrowserGym', 'Playwright'],
  },
  {
    id: 'research-2',
    type: 'research',
    period: '2025 – 2026',
    category: 'Research',
    title: 'UROP Fake Web Research',
    subtitle: 'Hybrid RL Design · Experiment',
    description:
      'Fake Web 환경에서 Observation, Action, Reward 구조와 Hybrid RL 기반 웹 탐색 메커니즘을 연구',
    tags: ['Hybrid RL', 'PPO', 'DQN', 'Experiment'],
  },
];
