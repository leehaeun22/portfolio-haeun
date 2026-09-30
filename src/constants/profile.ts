// 이하은 개인 프로필 데이터 (constants/profile.ts)

export const PROFILE = {
  name: '이하은',
  nameEn: 'Lee Haeun',
  university: '홍익대학교',
  major: '컴퓨터공학과',         // 전공 — 실제 전공으로 교체하세요
  year: '2학년',
  email: 'haeun@example.com',    // 실제 이메일로 교체하세요
  github: 'https://github.com/haeunlee',
  instagram: 'https://instagram.com/haeunlee',
  blog: '',
  location: '서울, 대한민국',
  bio: `안녕하세요! 홍익대학교에 재학 중인 이하은입니다.\n창의적인 아이디어로 세상에 가치를 더하는 것을 좋아합니다.\n디자인과 기술의 경계에서 새로운 가능성을 탐구하고 있어요.`,
  bioShort: '홍익대학교에서 꿈을 키우는 이하은입니다 ✨',
  availableForWork: true,
  avatarEmoji: '/avatar.png',    // public 폴더에 저장된 아바타
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
