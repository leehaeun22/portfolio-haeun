// 이하은 개인 프로필 데이터 (constants/profile.ts)

export const PROFILE = {
  name: '이하은',
  nameEn: 'Lee Haeun',
  university: '홍익대학교',
  major: '소프트웨어융합과',
  year: '재학 중',
  email: 'haeum2004@naver.com',
  github: 'https://github.com/leehaeun22',
  instagram: '',
  blog: '',
  location: '서울, 대한민국',
  bio: `AI와 웹 기술을 활용해 사용자의 개입을 줄이고 반복적인 작업을 자동화하는 시스템에 관심이 있습니다.\n강화학습 기반 웹 결함 탐지 프로젝트를 진행하며 모델 설계, 웹 시스템 구현, 실험 및 결과 분석을 함께 경험했습니다.\n문제를 단순히 해결하는 데 그치지 않고 원인을 구조적으로 분석하고 개선하는 과정을 중요하게 생각합니다.`,
  bioShort: 'AI와 웹 기술을 활용해 실제 문제를 해결하는 소프트웨어 개발자입니다.',
  availableForWork: true,
  profileImage: '/%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.png',
  avatarEmoji: '/%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.png',
} as const;

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: PROFILE.github,
    icon: 'github',
  },
  {
    name: 'Instagram',
    url: PROFILE.instagram,
    icon: 'instagram',
  },
  {
    name: 'Email',
    url: `mailto:${PROFILE.email}`,
    icon: 'mail',
  },
] as const;
