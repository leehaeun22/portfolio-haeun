// 경력/학력 데이터 (constants/experience.ts)
import type { ExperienceItem } from '@/interfaces/experience.types';

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'edu-1',
    type: 'education',
    period: '2023.03 — 현재',
    organization: '홍익대학교',
    role: '컴퓨터공학과 재학',
    description:
      '소프트웨어 개발, 데이터베이스, 웹 시스템, AI 분야를 중심으로 컴퓨터공학 전반을 학습하고 있습니다.',
    tags: ['AI', 'Software Engineering', 'Web', 'Database'],
  },
  {
    id: 'research-1',
    type: 'research',
    period: '2026.06 — 현재',
    organization: 'RAWD 연구 프로젝트',
    role: 'Team Leader / AI & Web',
    description:
      '강화학습 기반 자율 웹 탐색 agent를 설계하고 PPO 및 PPO+DQN Hybrid 접근을 통해 웹 결함 탐지 실험을 진행했습니다.',
    tags: ['PPO', 'DQN', 'BrowserGym', 'Playwright', 'Experiment'],
  },
  {
    id: 'research-2',
    type: 'research',
    period: '2025 — 2026',
    organization: 'UROP Fake Web Research',
    role: 'Hybrid RL 설계 / Experiment',
    description:
      'Fake Web 탐색 환경에서 observation, action, reward 설계를 실험하며 웹 자동 탐색 메커니즘을 연구했습니다.',
    tags: ['Hybrid RL', 'Observation Design', 'Reward Design', 'Python'],
  },
  {
    id: 'award-1',
    type: 'award',
    period: '확인 필요',
    organization: '해커톤 / 수상 경험',
    role: '프로젝트 참여 및 발표',
    description:
      '정확한 행사명과 수상명은 이력서 기준으로 확인 후 반영할 예정입니다. 현재는 과장 없이 경험 항목으로만 표시합니다.',
    tags: ['Hackathon', 'Presentation', 'Team Project'],
  },
];
