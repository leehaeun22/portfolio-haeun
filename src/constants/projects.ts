// 프로젝트 데이터 (constants/projects.ts)
import type { ProjectData } from '@/interfaces/project.types';

export const PROJECTS: ProjectData[] = [
  {
    id: 'rawd',
    slug: 'rawd',
    title: 'RAWD',
    subtitle: '강화학습 기반 웹 결함 자동 탐지 시스템',
    period: '2026.06 – Present',
    team: 'Team Project',
    role: 'Team Leader · RL Design · Web · Experiment',
    description:
      'URL 입력만으로 웹사이트를 자율 탐색해 런타임 결함 후보를 탐지하는 AI Test Agent',
    longDescription:
      'RAWD는 웹페이지를 탐색하는 agent가 observation, action, reward를 기반으로 결함 가능성이 높은 상태를 찾아내도록 설계한 프로젝트입니다. 모델 설계, 웹 시스템 구현, 실험 환경 구성, 탐지 결과 분석을 연결한 연구 프로젝트로 진행했습니다.',
    tags: ['Python', 'PPO', 'DQN', 'Playwright', 'React'],
    outcomes: ['테스트 사이트 5개', '삽입 오류 29개', '결함 후보 20개 탐지'],
    category: 'AI / Research',
    githubUrl: 'https://github.com/leehaeun22',
    liveUrl: '',
    detailUrl: '/projects/rawd',
    featured: false,
  },
  {
    id: 'ieum-chat',
    slug: 'ieum-chat',
    title: 'IEUM AI Chatbot',
    subtitle: 'RAG 기반 질의응답 챗봇',
    period: '2025',
    team: 'Team Project',
    role: 'Backend · DB · CRUD',
    description:
      '사용자 질문과 관련 정보를 검색하고 LLM 응답으로 연결하는 RAG 기반 챗봇',
    longDescription:
      'IEUM AI Chatbot은 사용자 질문을 받아 관련 데이터를 검색하고 OpenAI API를 통해 응답을 생성하는 흐름을 구현한 프로젝트입니다. 데이터 저장 구조와 CRUD 기능, Spring Boot 연동을 함께 다뤘습니다.',
    tags: ['RAG', 'OpenAI API', 'Spring Boot', 'React'],
    outcomes: ['질문-검색-응답 흐름 구현', 'DB 기반 콘텐츠 관리', 'CRUD 기능 구현'],
    category: 'AI / Web',
    githubUrl: 'https://github.com/leehaeun22',
    liveUrl: '',
    detailUrl: '/projects/ieum-chat',
    featured: false,
  },
  {
    id: 'smart-parking',
    slug: 'smart-parking-manager',
    title: 'Smart Parking Manager',
    subtitle: 'CCTV 기반 주차 공간 탐지 시스템',
    period: '2025',
    team: 'Team Project',
    role: 'Web · Data Integration',
    description:
      'CCTV 탐지 결과를 기반으로 관리자가 주차 공간 상태를 확인하는 시스템',
    longDescription:
      'Smart Parking Manager는 영상 기반 주차 공간 탐지 결과를 웹 화면에서 확인할 수 있도록 만든 프로젝트입니다. 탐지 결과가 사용자에게 이해 가능한 정보로 전달되도록 화면 구조와 데이터 흐름을 설계했습니다.',
    tags: ['Computer Vision', 'React', 'Spring Boot', 'REST API'],
    outcomes: ['주차 공간 상태 표시', '관리 화면 구성', '탐지 결과 데이터 연동'],
    category: 'Web',
    githubUrl: 'https://github.com/leehaeun22',
    liveUrl: '',
    detailUrl: '/projects/smart-parking-manager',
    featured: false,
  },
  {
    id: 'urop-fake-web',
    slug: 'urop-fake-web',
    title: 'UROP Fake Web Research',
    subtitle: 'Hybrid RL 기반 웹 탐색 메커니즘 연구',
    period: '2025 – 2026',
    team: 'Research Project',
    role: 'Observation · Action · Reward Design · Experiment',
    description:
      'Fake Web 환경에서 agent의 웹 탐색 방식과 Hybrid RL 구조를 연구하는 프로젝트',
    longDescription:
      'UROP Fake Web Research는 실제 웹 탐색 문제를 단순화한 환경에서 observation, action, reward 설계가 agent 행동에 미치는 영향을 실험한 프로젝트입니다. PPO와 DQN 기반 접근을 비교하며 RAWD 연구 방향과 연결했습니다.',
    tags: ['PPO', 'DQN', 'Hybrid RL', 'Python'],
    outcomes: ['웹 탐색 action 설계', 'reward 구조 실험', 'RAWD 연구 방향 검토'],
    category: 'Research',
    githubUrl: 'https://github.com/leehaeun22',
    liveUrl: '',
    detailUrl: '/projects/urop-fake-web',
    featured: false,
  },
];

export const PROJECT_CATEGORIES = ['All', 'AI', 'Web', 'Research'] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
