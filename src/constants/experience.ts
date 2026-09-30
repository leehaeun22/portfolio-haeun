// 경력/학력 데이터 (constants/experience.ts)
import type { ExperienceItem } from '@/interfaces/experience.types';

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'edu-1',
    type: 'education',
    period: '2023.03 — 현재',
    organization: '홍익대학교',
    role: '컴퓨터공학과 재학',
    description: '소프트웨어 개발, 알고리즘, 데이터구조 등 컴퓨터과학 전반을 공부하고 있습니다. 창의적 사고와 기술 역량을 함께 키우고 있습니다.',
    tags: ['Computer Science', 'Algorithm', 'Software Engineering'],
  },
  {
    id: 'activity-1',
    type: 'activity',
    period: '2024.03 — 현재',
    organization: '홍익대학교 웹 개발 동아리',
    role: '프론트엔드 개발 팀원',
    description: '팀 프로젝트에서 Next.js를 활용한 프론트엔드 개발을 담당했습니다. 다양한 사람들과 협업하며 커뮤니케이션 역량을 키웠습니다.',
    tags: ['Next.js', 'React', 'Team Collaboration'],
  },
  {
    id: 'activity-2',
    type: 'activity',
    period: '2024.07 — 2024.08',
    organization: 'UX 스터디 그룹',
    role: '스터디원',
    description: '사용자 경험(UX) 연구 방법론, 프로토타이핑, 사용성 테스트 등을 학습했습니다. 실제 앱 리디자인 프로젝트에 참여했습니다.',
    tags: ['UX Research', 'Figma', 'Prototyping'],
  },
  {
    id: 'activity-3',
    type: 'award',
    period: '2024.11',
    organization: '교내 해커톤',
    role: '우수상 수상',
    description: '48시간 해커톤에서 캠퍼스 내 식당 혼잡도를 실시간 확인할 수 있는 앱을 제작해 우수상을 수상했습니다.',
    tags: ['Hackathon', 'React Native', 'Real-time'],
  },
];
