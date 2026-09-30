import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '@/constants/projects';

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | 이하은 포트폴리오`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <section className="section-padding soft-gradient-surface">
        <div className="section-container">
          <Link
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition-colors hover:text-rose-500 dark:text-neutral-300"
          >
            <ArrowLeft size={16} />
            프로젝트 목록으로 돌아가기
          </Link>

          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
            <div>
              <span className="section-eyebrow">{project.category}</span>
              <h1 className="text-display-2 text-neutral-950 dark:text-white">{project.title}</h1>
              <p className="mt-3 text-2xl font-bold text-rose-500">{project.subtitle}</p>
              <p className="mt-6 max-w-2xl text-body-lg text-neutral-600 dark:text-neutral-300">
                {project.longDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold text-neutral-700 transition-colors hover:text-rose-500 dark:text-neutral-200"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-button flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold text-white"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
              </div>
            </div>

            <div className="surface-card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-rose-50 via-white to-purple-50 p-8 dark:from-rose-950/30 dark:via-neutral-950 dark:to-purple-950/30">
                <div className="flex h-full flex-col justify-between rounded-2xl border border-rose-100 bg-white/75 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/75">
                  <div className="flex items-center justify-between text-xs font-semibold text-neutral-500">
                    <span>{project.period}</span>
                    <span>{project.team}</span>
                  </div>
                  <div>
                    <p className="gradient-text text-4xl font-extrabold">{project.title}</p>
                    <p className="mt-3 max-w-md text-lg font-semibold leading-snug text-neutral-800 dark:text-neutral-100">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {project.outcomes.slice(0, 3).map((outcome) => (
                      <div
                        key={outcome}
                        className="rounded-2xl bg-white px-3 py-3 text-center text-xs font-bold text-neutral-700 shadow-sm dark:bg-neutral-950 dark:text-neutral-200"
                      >
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container grid gap-8 lg:grid-cols-3">
          <article className="surface-card p-7">
            <h2 className="text-heading-2 text-neutral-950 dark:text-white">문제 정의</h2>
            <p className="mt-4 text-sm leading-[1.7] text-neutral-600 dark:text-neutral-300">
              사람이 직접 웹 페이지를 반복 탐색하며 오류를 찾는 과정은 시간이 많이 들고 누락 가능성이 있습니다.
              이 프로젝트는 탐색과 결함 후보 수집을 자동화하는 흐름을 목표로 합니다.
            </p>
          </article>

          <article className="surface-card p-7">
            <h2 className="text-heading-2 text-neutral-950 dark:text-white">담당 역할</h2>
            <p className="mt-4 text-sm leading-[1.7] text-neutral-600 dark:text-neutral-300">
              {project.role}
            </p>
          </article>

          <article className="surface-card p-7">
            <h2 className="text-heading-2 text-neutral-950 dark:text-white">결과</h2>
            <ul className="mt-4 space-y-2 text-sm leading-[1.7] text-neutral-600 dark:text-neutral-300">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>• {outcome}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-padding subtle-section">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-eyebrow">Stack</span>
            <h2 className="text-heading-1 text-neutral-950 dark:text-white">사용 기술</h2>
            <p className="section-description">
              프로젝트 맥락에 맞춰 AI 실험, 웹 구현, 데이터 저장과 운영 도구를 함께 사용했습니다.
            </p>
            <div className="section-line" />
          </div>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-rose-100 bg-white px-4 py-2 text-sm font-semibold text-rose-600 dark:border-rose-900/30 dark:bg-neutral-900 dark:text-rose-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
