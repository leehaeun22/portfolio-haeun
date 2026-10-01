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
      'URL 입력만으로 웹사이트를 자율 탐색하고, 사용자 인터랙션과 런타임 상태 변화를 관찰해 결함 가능성이 높은 후보를 탐지하는 AI Test Agent 프로젝트입니다. PPO 기반 탐색 정책을 설계하고 BrowserGym과 Playwright 환경에서 실험을 수행했으며, 탐지 결과를 자동 보고서로 연결하는 구조를 구현했습니다.',
    tags: ['Python', 'PPO', 'DQN', 'BrowserGym', 'Playwright', 'React', 'Spring Boot', 'PostgreSQL'],
    outcomes: ['테스트 사이트 5개', '삽입 오류 29개', '결함 후보 20개 탐지'],
    category: 'AI / Research',
    githubUrl: 'https://github.com/leehaeun22',
    liveUrl: '',
    detailUrl: '/projects/rawd',
    featured: false,
    problem: [
      '기존 웹 테스트는 사람이 직접 시나리오를 작성하거나 반복적으로 페이지를 탐색해야 하기 때문에 준비 시간이 길고 누락 가능성이 있습니다.',
      'RAWD는 URL 입력만으로 AI agent가 웹페이지를 자율 탐색하고, 행동 전후의 UI / DOM / Network / Console 변화를 수집하여 결함 후보를 자동 탐지하는 것을 목표로 설계했습니다.',
    ],
    roleDetails: [
      'Team Leader',
      'PPO 기반 탐색 정책 설계',
      'Observation / Action / Reward 구조 설계',
      'BrowserGym / Playwright 실험 환경 구성',
      '탐지 실험 및 결과 분석',
      'Web Report 구조 설계 및 통합',
    ],
    results: [
      '테스트 사이트 5개에서 실험 수행',
      '삽입 오류 29개 중 결함 후보 20개 탐지',
      'URL 입력 기반 자동 탐색 및 결과 리포트 생성',
      '수동 / 시나리오 기반 테스트와 비교 실험 수행',
    ],
    metrics: [
      { value: '5', label: 'Test Sites' },
      { value: '29', label: 'Injected Defects' },
      { value: '20', label: 'Detected' },
    ],
    architecture: [
      'URL Input',
      'Browser Agent',
      'Observation',
      'PPO Policy',
      'Action',
      'Evidence Collection',
      'Defect Candidate Detection',
      'Auto Report',
    ],
    features: [
      {
        title: 'Autonomous Exploration',
        description: 'URL 입력 후 PPO 기반 agent가 자율적으로 웹페이지를 탐색합니다.',
      },
      {
        title: 'Runtime Evidence Collection',
        description: 'UI / DOM / Network / Console 변화를 수집해 행동 전후 상태를 기록합니다.',
      },
      {
        title: 'Defect Candidate Detection',
        description: '상태 변화와 실행 증거를 바탕으로 결함 가능성이 높은 후보를 탐지합니다.',
      },
      {
        title: 'Auto Reporting',
        description: '탐지 결과와 증거를 자동 보고서 형태로 정리합니다.',
      },
    ],
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
      'IEUM AI Chatbot은 사용자 질문을 받아 관련 정보를 검색하고 OpenAI API 기반 LLM 응답으로 연결하는 RAG 챗봇 프로젝트입니다. Spring Boot 기반 API와 데이터베이스 구조를 설계하고, CRUD 흐름과 프론트엔드 화면을 연동해 질문과 응답이 자연스럽게 이어지는 구조를 구현했습니다.',
    tags: ['RAG', 'OpenAI API', 'Spring Boot', 'React'],
    outcomes: ['질문-검색-응답 흐름 구현', 'DB 기반 콘텐츠 관리', 'CRUD 기능 구현'],
    category: 'AI / Web',
    githubUrl: 'https://github.com/leehaeun22',
    liveUrl: '',
    detailUrl: '/projects/ieum-chat',
    featured: false,
    problem: [
      '사용자가 필요한 정보를 빠르게 찾으려면 여러 문서와 데이터를 직접 확인해야 하는 부담이 있습니다.',
      'IEUM AI Chatbot은 질문과 관련 문서를 검색한 뒤 LLM 응답으로 연결해 정보 탐색 시간을 줄이는 것을 목표로 했습니다.',
    ],
    roleDetails: [
      'Backend API 설계',
      'DB 구조 설계 및 CRUD 구현',
      'RAG 응답 흐름 연동',
      'Spring Boot와 React 화면 연결',
    ],
    results: [
      '사용자 질문 기반 검색 및 응답 흐름 구현',
      '콘텐츠 관리용 CRUD 기능 구현',
      'RAG와 OpenAI API를 활용한 챗봇 응답 구조 설계',
    ],
    metrics: [
      { value: 'RAG', label: 'Retrieval Flow' },
      { value: 'CRUD', label: 'Content Management' },
      { value: 'API', label: 'LLM Integration' },
    ],
    architecture: ['Question Input', 'Document Search', 'Context Builder', 'OpenAI API', 'LLM Response', 'Chat UI'],
    features: [
      { title: 'RAG Question Flow', description: '사용자 질문과 관련 정보를 검색해 응답 맥락을 구성합니다.' },
      { title: 'LLM Integration', description: 'OpenAI API를 통해 검색 결과 기반 답변을 생성합니다.' },
      { title: 'Content CRUD', description: '문서와 데이터 관리 기능을 백엔드에서 처리합니다.' },
      { title: 'Chat Interface', description: 'React 화면에서 질문과 응답 흐름을 확인할 수 있습니다.' },
    ],
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
      'Smart Parking Manager는 CCTV 기반 주차 공간 탐지 결과를 관리자가 한 화면에서 확인할 수 있도록 구성한 웹 관리 시스템입니다. 탐지 결과 데이터를 화면 상태로 연결하고, 주차 공간의 사용 가능 여부를 빠르게 파악할 수 있도록 관리 UI와 API 연동 구조를 설계했습니다.',
    tags: ['Computer Vision', 'React', 'Spring Boot', 'REST API'],
    outcomes: ['주차 공간 상태 표시', '관리자 화면 구성', '탐지 결과 데이터 연동'],
    category: 'Web',
    githubUrl: 'https://github.com/leehaeun22',
    liveUrl: '',
    detailUrl: '/projects/smart-parking-manager',
    featured: false,
    problem: [
      '주차 공간 상태를 실시간으로 확인하기 어렵다면 관리자는 현장 확인이나 수동 관리에 의존하게 됩니다.',
      'Smart Parking Manager는 CCTV 탐지 결과를 웹 화면과 연결해 주차 공간 상태를 빠르게 확인하는 관리 흐름을 만드는 것을 목표로 했습니다.',
    ],
    roleDetails: [
      '관리자 웹 화면 구현',
      '탐지 결과 데이터 연동',
      'REST API 기반 상태 표시 흐름 설계',
      '주차 공간 UI 상태 관리',
    ],
    results: [
      '탐지 결과 기반 주차 공간 상태 표시',
      '관리자용 웹 화면 구성',
      '프론트엔드와 백엔드 데이터 흐름 연결',
    ],
    metrics: [
      { value: 'CCTV', label: 'Detection Source' },
      { value: 'REST', label: 'Data API' },
      { value: 'Web', label: 'Admin View' },
    ],
    architecture: ['CCTV Detection', 'Data API', 'Status Mapping', 'Admin Dashboard', 'Parking State View'],
    features: [
      { title: 'Parking Status View', description: '탐지 결과를 기반으로 주차 공간 상태를 시각화합니다.' },
      { title: 'Data Integration', description: '탐지 데이터와 웹 화면 상태를 연결합니다.' },
      { title: 'Admin Dashboard', description: '관리자가 필요한 정보를 한 화면에서 확인하도록 구성합니다.' },
      { title: 'REST API Flow', description: 'Spring Boot API와 React 화면 간 데이터 흐름을 정리합니다.' },
    ],
  },
  {
    id: 'local-code-wiki-rag',
    slug: 'local-code-wiki-rag',
    title: 'Local-Code-Wiki-RAG',
    subtitle: 'RAG 기반 코드베이스 문서화 및 질의응답 플랫폼',
    period: '2025',
    team: 'Personal Project',
    role: 'Full Stack · AI Integration',
    description:
      'GitHub 저장소를 분석해 코드 문서를 생성하고, RAG 챗봇으로 코드베이스 이해를 돕는 개발자 온보딩 플랫폼',
    longDescription:
      'Local-Code-Wiki-RAG는 GitHub 저장소의 소스 코드를 분석해 코드 문서를 자동 생성하고, RAG 기반 챗봇을 통해 개발자가 코드베이스를 빠르게 이해할 수 있도록 돕는 개발자 온보딩 플랫폼입니다. React와 FastAPI를 연결하고 ChromaDB 기반 검색 구조를 활용해 코드 문서화와 질의응답 흐름을 구성했습니다.',
    tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'ChromaDB'],
    outcomes: ['코드 문서 자동 생성', 'RAG 기반 질의응답', '개발자 온보딩 지원'],
    category: 'AI / Developer Tool',
    githubUrl: 'https://github.com/leehaeun22/Local-Code-Wiki-RAG',
    liveUrl: '',
    detailUrl: '/projects/local-code-wiki-rag',
    featured: false,
    problem: [
      '새로운 코드베이스에 합류한 개발자는 구조와 핵심 흐름을 파악하기 위해 많은 파일을 직접 읽어야 합니다.',
      'Local-Code-Wiki-RAG는 저장소 분석, 문서 생성, RAG 기반 질의응답을 연결해 코드베이스 이해 시간을 줄이는 것을 목표로 했습니다.',
    ],
    roleDetails: [
      'Full Stack 구조 설계',
      'GitHub 저장소 분석 흐름 구현',
      'FastAPI 기반 AI API 연동',
      'ChromaDB 검색 구조 구성',
      'React 기반 문서 / 챗봇 UI 구현',
    ],
    results: [
      '저장소 기반 코드 문서 생성 흐름 구현',
      'RAG 챗봇을 통한 코드 질의응답 구조 구현',
      '개발자 온보딩을 지원하는 문서화 UI 구성',
    ],
    metrics: [
      { value: 'RAG', label: 'Code Q&A' },
      { value: 'Docs', label: 'Auto Wiki' },
      { value: 'AI', label: 'Onboarding Tool' },
    ],
    architecture: ['GitHub Repository', 'Code Parser', 'Document Generator', 'Vector Store', 'RAG Chatbot', 'Developer UI'],
    features: [
      { title: 'Repository Analysis', description: 'GitHub 저장소의 파일과 코드 구조를 분석합니다.' },
      { title: 'Auto Documentation', description: '분석 결과를 기반으로 코드베이스 문서를 생성합니다.' },
      { title: 'RAG Chatbot', description: 'ChromaDB 검색 결과를 활용해 코드 질문에 답변합니다.' },
      { title: 'Developer Onboarding', description: '새로운 개발자가 프로젝트 구조를 빠르게 이해하도록 돕습니다.' },
    ],
  },
];

export const PROJECT_CATEGORIES = ['All', 'AI', 'Web', 'Research', 'Developer Tool'] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
