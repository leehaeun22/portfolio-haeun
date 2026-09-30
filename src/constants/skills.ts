// 기술 스택 데이터 (constants/skills.ts)
import type { SkillCategory } from '@/interfaces/skill.types';

export const SKILLS: SkillCategory[] = [
  {
    category: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Python', levelLabel: 'Main', description: 'AI 실험과 자동화 로직 구현' },
      { name: 'Java', levelLabel: 'Experienced', description: '객체지향 설계와 서버 개발 학습' },
      { name: 'JavaScript', levelLabel: 'Experienced', description: '웹 UI와 브라우저 자동화 구현' },
      { name: 'TypeScript', levelLabel: 'Used', description: 'Next.js 포트폴리오 구현' },
    ],
  },
  {
    category: 'AI / ML',
    icon: 'Brain',
    skills: [
      { name: 'Reinforcement Learning', levelLabel: 'Research', description: '웹 탐색 agent 설계' },
      { name: 'PPO', levelLabel: 'Research', description: '자율 탐색 정책 학습 실험' },
      { name: 'DQN', levelLabel: 'Research', description: 'Hybrid RL 구조 검토' },
      { name: 'RAG', levelLabel: 'Used', description: '검색 기반 응답 흐름 구현' },
      { name: 'OpenAI API', levelLabel: 'Used', description: 'LLM 응답 생성 연동' },
    ],
  },
  {
    category: 'Web / Backend',
    icon: 'PanelsTopLeft',
    skills: [
      { name: 'React', levelLabel: 'Experienced', description: '컴포넌트 기반 UI 구현' },
      { name: 'Next.js', levelLabel: 'Used', description: '정적 포트폴리오 배포' },
      { name: 'Spring Boot', levelLabel: 'Used', description: 'REST API 서버 연동' },
      { name: 'REST API', levelLabel: 'Experienced', description: '클라이언트-서버 데이터 흐름 설계' },
      { name: 'HTML/CSS', levelLabel: 'Experienced', description: '반응형 레이아웃 구현' },
    ],
  },
  {
    category: 'Database / Tools',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', levelLabel: 'Used', description: '프로젝트 데이터 저장 구조 설계' },
      { name: 'MySQL', levelLabel: 'Used', description: '관계형 데이터 모델링 학습' },
      { name: 'Git / GitHub', levelLabel: 'Experienced', description: '버전 관리와 협업' },
      { name: 'Docker', levelLabel: 'Used', description: '개발 환경 구성 경험' },
      { name: 'Playwright', levelLabel: 'Research', description: '웹 자동 탐색과 테스트 실행' },
      { name: 'BrowserGym', levelLabel: 'Research', description: '웹 agent 실험 환경 활용' },
    ],
  },
  {
    category: 'Collaboration',
    icon: 'UsersRound',
    skills: [
      { name: 'Team Leadership', levelLabel: 'Experienced', description: '팀 리딩과 역할 조율' },
      { name: 'Problem Solving', levelLabel: 'Experienced', description: '원인 분석 중심의 개선' },
      { name: 'Research', levelLabel: 'Research', description: '실험 설계와 결과 정리' },
      { name: 'Technical Writing', levelLabel: 'Used', description: '보고서와 발표 자료 작성' },
    ],
  },
];
