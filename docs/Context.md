# Project Context & State Tracker

> **[AI Agent Instruction]**
> - 이 파일은 프로젝트의 현재 진행 상태를 나타내는 **단일 진실 공급원(SSOT, Single Source of Truth)** 이다.
> - 에이전트는 매 작업이 완료될 때마다 **[Progress Log]**, **[Current Priority]**, 그리고 **[Risk Registry]** 를 업데이트해야 한다.
> - 모든 작업은 이 파일의 `Global Constraints`를 최우선으로 준수한다.
> - 본 문서에 명시되지 않은 아키텍처 변경 및 주요 기술적 결정은 반드시 사용자의 승인을 받아야 한다.

---

## 1. Project Overview

| Key              | Value                                                             |
| :--------------- | :---------------------------------------------------------------- |
| **Project Name** | 개인 포트폴리오 웹 페이지                                        |
| **Codename**     | `portfolio`                                                       |
| **Description**  | 개발자 개인의 기술 스택, 프로젝트 경험, 경력 사항을 시각적으로 소개하는 프리미엄 포트폴리오 웹 페이지 |
| **Current Phase**| Phase 1 — 기획 및 프로젝트 스캐폴딩                               |
| **Active Focus** | 포트폴리오 프론트엔드 (Next.js SSG)                               |
| **Excluded**     | CMS 대시보드 (Phase 3 예정)                                       |
| **Repository**   | 단일 리포지토리                                                    |
| **License**      | MIT                                                                |

---

## 2. Technology Stack

### 2.1 Frontend
| Layer        | Tech & Version                      | Notes                               |
| :----------- | :---------------------------------- | :---------------------------------- |
| Framework    | Next.js 15                          | App Router, SSG/ISR 중심            |
| Language     | TypeScript 5.x                      | strict: true                        |
| Styling      | Tailwind CSS                        | 유틸리티 클래스만 사용              |
| UI Library   | 커스텀 섹션 블록 컴포넌트           | Lucide React 아이콘                 |
| Animation    | Framer Motion                       | 스크롤 트리거 애니메이션            |
| Font         | Pretendard / Inter                  | Google Fonts CDN                    |

### 2.2 Backend (최소)
| Layer        | Tech & Version                      | Notes                               |
| :----------- | :---------------------------------- | :---------------------------------- |
| API          | Next.js API Routes                  | Contact Form 전용                   |
| Email        | Resend / Nodemailer                 | 문의 메일 발송                      |

### 2.3 Infrastructure & DevOps
| Layer        | Technology                          | Notes                               |
| :----------- | :---------------------------------- | :---------------------------------- |
| Hosting      | Vercel                              | Next.js 최적화 배포                 |
| CI/CD        | GitHub Actions + Vercel             | main 브랜치 자동 배포               |
| Domain       | 커스텀 도메인                       | Vercel DNS 연동                     |
| Analytics    | Vercel Analytics / GA4              | 방문자 추적                         |

---

## 3. Environment Strategy

| Environment  | Branch           | URL Pattern                      | Purpose                  | Auto Deploy |
| :----------- | :--------------- | :------------------------------- | :----------------------- | :---------- |
| **Local**    | `*`              | `localhost:3000`                 | 로컬 개발 및 디버깅      | -           |
| **Preview**  | `feature/*`      | `*.vercel.app`                   | PR 프리뷰 배포           | ✅           |
| **Production**| `main`          | `www.[domain]`                   | 실 서비스 운영           | ✅           |

---

## 4. Active Documentation Status

| File                             | Status     | Owner   | Last Updated | Notes                                         |
| :------------------------------- | :--------- | :------ | :----------- | :-------------------------------------------- |
| `Context.md`                     | ✅ Active  | Agent   | 자동 갱신    | SSOT — 매 작업 완료 시 자동 업데이트          |
| `Architecture_Convention.md`     | ✅ Active  | Agent   | -            | 디렉토리 구조, 네이밍 규칙, 코드 컨벤션 문서  |
| `PRD.md`                         | 🔄 Draft   | User    | -            | 포트폴리오 요구사항 정의서                    |
| `SRS.md`                         | 🔄 Draft   | Agent   | -            | 소프트웨어 요구사항 명세                      |
| `External_Design.md`             | 🔄 Draft   | Agent   | -            | 포트폴리오 디자인 시스템                      |
| `Internal_Dashboard_Design.md`   | ⏸️ To-Do   | -       | -            | CMS 대시보드 (Phase 3 예정)                   |

*(상태 코드: ✅ Active, 🔄 Draft, ⏸️ To-Do, ❄️ Frozen)*

---

## 5. Progress Log (Milestones)

### Phase 1 — 기획 및 프로젝트 스캐폴딩 🔄
- [x] 프로젝트 명세 문서 작성 (PRD, SRS, Design)
- [ ] Next.js 프로젝트 초기화 및 Tailwind 설정
- [ ] 디자인 토큰 설정 (tailwind.config.ts)
- [ ] 공통 레이아웃 (Header, Footer, Navigation) 구현

### Phase 2 — 포트폴리오 섹션 개발 ⏸️
- [ ] Hero 섹션 구현
- [ ] About 섹션 구현
- [ ] Skills 섹션 구현
- [ ] Projects 섹션 구현 (필터링 포함)
- [ ] Experience / Education 섹션 구현
- [ ] Contact 섹션 구현 (이메일 전송 API 포함)
- [ ] Dark Mode 토글 구현
- [ ] 반응형 최적화
- [x] 2026-06-16: 포트폴리오 섹션 카드/폼/타임라인 레이아웃 안정화 및 반응형 간격 개선
- [x] 2026-09-30: 포트폴리오 전체 UI 정리 — 공통 섹션 폭/여백/제목/카드 스타일 통일, Hero/About/Skills/Projects/Experience/Contact/Footer 취업용 콘텐츠 방향 반영
- [x] 2026-09-30: Projects 샘플 콘텐츠 제거 및 RAWD/IEUM/Smart Parking/UROP 프로젝트 카드와 상세 페이지 SSG 라우트 추가
- [x] 2026-09-30: Research 섹션 추가 및 Resume 버튼을 `/resume` 정적 페이지로 연결하여 깨진 PDF 링크 제거
- [x] 2026-09-30: 프로덕션 빌드 검증 — `/`, `/resume`, `/projects/rawd`, `/projects/ieum-chat`, `/projects/smart-parking-manager`, `/projects/urop-fake-web` 정적 생성 확인

### Phase 3 — 최적화 및 배포 ⏸️
- [x] 2026-09-30: Vercel 배포 준비 — package.json/package-lock.json Git 제외 해제, 산출물·로그·환경 파일 제외, 프로덕션 빌드 및 타입 검사 통과
- [x] 2026-09-30: GitHub 새 저장소 `leehaeun22/portfolio-haeun` 생성 및 main 브랜치 push 완료
- [x] 2026-09-30: Vercel 프로젝트 `portfolio-haeun` 생성, GitHub 저장소 연결, Production 배포 완료 (`https://portfolio-haeun-orpin.vercel.app`)
- [ ] SEO 최적화 (메타태그, OG, JSON-LD, sitemap)
- [ ] 성능 최적화 (Lighthouse 90+ 달성)
- [ ] Vercel 배포 및 커스텀 도메인 연결
- [ ] CMS 대시보드 (선택)

---

## 6. Current Priority (Next Action)

| Priority | Target               | Task                                                                     | Blocker / Requirement          |
| :------- | :------------------- | :----------------------------------------------------------------------- | :----------------------------- |
| **P0**   | 실제 콘텐츠 검증     | 이력서 기준 학교/학과/기간/논문/수상명/이메일/GitHub 링크 확정            | 최신 이력서·프로젝트 원자료 필요 |
| **P1**   | 프로젝트 이미지      | RAWD/IEUM/Smart Parking 실제 화면 캡처 적용                               | 스크린샷 자산 필요             |
| **P2**   | 반응형 시각 검수     | 1440/1024/768/mobile 실제 브라우저 화면 확인                              | 브라우저 렌더링 확인 필요      |
| **P3**   | Contact 연동         | Contact Form API 및 이메일 발송 연동                                     | 이메일 서비스 설정 필요        |

---

## 7. Risk Registry

| ID    | Risk                                      | Impact | Probability | Mitigation                                              | Status    |
| :---- | :---------------------------------------- | :----- | :---------- | :------------------------------------------------------- | :-------- |
| RSK-1 | 포트폴리오 콘텐츠(프로젝트 데이터) 부재   | High   | Medium      | 샘플 콘텐츠 제거, 사용자 제공 체크리스트 기반 대표 프로젝트 반영 | Mitigating |
| RSK-2 | 이미지 자산 부족                          | Medium | High        | Stock 이미지 제거, 실제 캡처 제공 전까지 코드 기반 프로젝트 비주얼 사용 | Mitigating |
| RSK-3 | 카드/폼 반응형 시각 회귀 가능성           | Medium | Medium      | 빌드 검증 후 주요 뷰포트에서 브라우저 시각 확인          | Mitigating |
| RSK-4 | Vercel 미인증 및 배포 저장소 미확정       | High   | High        | 계정 인증, 새 GitHub 저장소 생성, Vercel 연결 및 Production 배포 완료 | Resolved  |

---

## 8. Global Constraints & Context Flags

| Flag                   | Value   | Description                                                                                   |
| :--------------------- | :------ | :-------------------------------------------------------------------------------------------- |
| `STRICT_CONVENTION`    | `true`  | 모든 파일/폴더 생성 및 네이밍은 `Architecture_Convention.md`의 규칙을 엄격히 따름             |
| `STRICT_TYPESCRIPT`    | `true`  | `any` 타입 사용 금지. 모든 변수/함수에 명시적 타입 정의 필수                                  |
| `UI_MOBILE_FIRST`      | `true`  | 모바일 퍼스트 반응형 디자인                                                                    |
| `FLAG_NO_CMS`          | `true`  | CMS 대시보드(Internal) 코드 생성을 현재 단계에서 차단                                         |
| `DARK_MODE`            | `true`  | 다크 모드 지원 필수                                                                            |
