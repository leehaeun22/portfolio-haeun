// 수상 및 연구 성과 데이터 (constants/awards.ts)
import type { AwardItem, PublicationItem } from '@/interfaces/award.types';

export const AWARDS: AwardItem[] = [
  {
    id: 'opencv-zoo-encouragement',
    date: '2025.10',
    title: '장려상',
    organization: 'OpenCV Zoo 기반 머신러닝·딥러닝 영상분석 실무 프로젝트',
    description: 'OpenCV Zoo 기반 영상분석 실무 프로젝트 장려상',
  },
  {
    id: 'ieum-paper-award',
    date: '2025.12',
    title: '우수논문상',
    organization: 'IEUM · 한국인터넷정보학회',
    description: 'IEUM 활동 및 논문 성과를 통해 우수논문상 수상',
  },
  {
    id: 'hongik-club-award',
    date: '2026.02',
    title: '우수동아리상',
    organization: '홍익대학교 · 총장상',
    description: 'IEUM 동아리 활동 성과로 우수동아리상 수상',
  },
  {
    id: 'ask-2026-bronze',
    date: '2026.05',
    title: '동상',
    organization: 'ASK 2026 · 한국정보처리학회',
    description: '웹 애플리케이션 자동 런타임 결함 탐지 관련 연구로 동상 수상',
  },
  {
    id: 'hongik-president-citation',
    date: '2026.07',
    title: '표창장',
    organization: '홍익대학교 · 총장상',
    description: '교내외 기술 성과를 통해 학교 명예에 기여한 공로로 표창',
  },
  {
    id: 'sejong-ax-hackathon-grand-prize',
    date: '2026.08',
    title: '대상',
    organization: '세종 AX 해커톤',
    description: '세종 AX 해커톤 대상 수상',
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'qscc-ii-ux-paper',
    date: '2025.07',
    title: '디지털시대의 사용자경험(UX) 개선을 위한 스큐어모피즘 기반 QSCC-II 웹 애플리케이션 연구',
    conference: '한국인터넷정보학회',
    award: '우수논문상',
  },
  {
    id: 'rl-web-defect-detection-paper',
    date: '2026.05',
    title: '웹 애플리케이션의 자동 런타임 결함 탐지를 위한 강화학습 기반 지능형 에이전트 메커니즘',
    conference: 'ASK 2026 · 한국정보처리학회',
    award: '동상',
  },
  {
    id: 'intcom-2026-ppo-web-defect-verification',
    date: '2026.07',
    title: 'An Autonomous Multi-Layer Web Defect Verification Mechanism Using PPO-Based Agent Exploration',
    conference: 'INTCOM 2026',
  },
];
