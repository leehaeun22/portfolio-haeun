import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Layers3 } from 'lucide-react';
import { PROJECTS } from '@/constants/projects';
import type { ProjectData } from '@/interfaces/project.types';

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function splitDescription(description: string) {
  const sentences = description.match(/[^.!?。！？]+[.!?。！？]?/g) ?? [description];

  if (sentences.length <= 2) {
    return [description];
  }

  const midpoint = Math.ceil(sentences.length / 2);
  return [sentences.slice(0, midpoint).join(' ').trim(), sentences.slice(midpoint).join(' ').trim()];
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="detail-section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="text-heading-1 text-neutral-950 dark:text-white">{title}</h2>
      {description ? (
        <p className="detail-section-description text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
      ) : null}
      <div className="section-line" />
    </div>
  );
}

function ProjectPreview({ project }: { project: ProjectData }) {
  return (
    <div className="detail-preview-card surface-card">
      <div className="detail-preview-media bg-gradient-to-br from-rose-50 via-white to-purple-50 dark:from-rose-950/30 dark:via-neutral-950 dark:to-purple-950/30">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        ) : (
          <div className="detail-preview-placeholder">
            <div className="detail-preview-icon bg-white/90 text-rose-500 shadow-sm dark:bg-neutral-900/90">
              <Layers3 size={22} />
            </div>
            <p className="detail-preview-category text-rose-500">{project.category}</p>
            <p className="detail-preview-title text-neutral-950 dark:text-white">{project.title}</p>
            <p className="detail-preview-subtitle text-neutral-500 dark:text-neutral-400">
              Project Preview
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="detail-card surface-card">
      <h2 className="detail-card-title text-neutral-950 dark:text-white">{title}</h2>
      <div className="detail-card-body text-neutral-600 dark:text-neutral-300">{children}</div>
    </article>
  );
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

  const descriptionParagraphs = splitDescription(project.longDescription);

  return (
    <main className="detail-page min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <section className="detail-hero soft-gradient-surface">
        <div className="section-container">
          <Link href="/#projects" className="detail-back-link">
            <ArrowLeft size={16} />
            프로젝트 목록으로 돌아가기
          </Link>

          <div className="detail-hero-grid">
            <div className="detail-hero-copy">
              <span className="section-eyebrow">{project.category}</span>
              <h1 className="detail-title text-neutral-950 dark:text-white">{project.title}</h1>
              <p className="detail-subtitle text-rose-500">{project.subtitle}</p>

              <div className="detail-description">
                {descriptionParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-neutral-600 dark:text-neutral-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="detail-meta-grid">
                <div className="detail-meta-item">
                  <span>Period</span>
                  <strong>{project.period}</strong>
                </div>
                <div className="detail-meta-item">
                  <span>Type</span>
                  <strong>{project.team}</strong>
                </div>
                <div className="detail-meta-item detail-meta-wide">
                  <span>Role</span>
                  <strong>{project.role}</strong>
                </div>
              </div>

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-inline-link"
                >
                  <Github size={17} />
                  GitHub 보기
                  <ExternalLink size={14} />
                </a>
              ) : null}
            </div>

            <ProjectPreview project={project} />
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="section-container">
          <div className="detail-stats-grid">
            {project.metrics.map((metric) => (
              <div key={`${metric.value}-${metric.label}`} className="detail-stat-card surface-card">
                <strong className="gradient-text">{metric.value}</strong>
                <span className="text-neutral-500 dark:text-neutral-400">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="section-container">
          <div className="detail-info-grid">
            <DetailCard title="문제 정의">
              <div className="detail-paragraph-stack">
                {project.problem.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </DetailCard>

            <DetailCard title="담당 역할">
              <ul className="detail-list">
                {project.roleDetails.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailCard>

            <DetailCard title="결과">
              <ul className="detail-list">
                {project.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailCard>
          </div>
        </div>
      </section>

      <section className="detail-section subtle-section">
        <div className="section-container">
          <SectionTitle
            eyebrow="Architecture"
            title="프로젝트 동작 흐름"
            description="입력부터 결과 확인까지의 핵심 흐름을 간단한 단계로 정리했습니다."
          />

          <div className="detail-process-grid">
            {project.architecture.map((step, index) => (
              <div key={`${step}-${index}`} className="detail-process-step surface-card">
                <span className="detail-step-number">{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
                {index < project.architecture.length - 1 ? (
                  <ArrowRight className="detail-step-arrow" size={16} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="section-container">
          <SectionTitle
            eyebrow="Stack"
            title="사용 기술"
            description="프로젝트 구현에 사용한 주요 언어, 프레임워크, 도구입니다."
          />

          <div className="detail-stack-grid">
            {project.tags.map((tag) => (
              <span key={tag} className="detail-tech-card surface-card text-neutral-800 dark:text-neutral-100">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section subtle-section">
        <div className="section-container">
          <SectionTitle
            eyebrow="Key Features"
            title="핵심 기능과 기여"
            description="프로젝트에서 구현한 주요 기능과 기여 내용을 정리했습니다."
          />

          <div className="detail-feature-grid">
            {project.features.map((feature, index) => (
              <article key={feature.title} className="detail-feature-card surface-card">
                <span className="detail-feature-index">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-neutral-950 dark:text-white">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-cta-section">
        <div className="section-container">
          <div className="detail-cta surface-card">
            <div>
              <span className="section-eyebrow">Next</span>
              <h2 className="text-heading-2 text-neutral-950 dark:text-white">다른 프로젝트도 확인해보세요</h2>
            </div>
            <div className="detail-cta-actions">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-button detail-button-primary gradient-button"
                >
                  <Github size={17} />
                  GitHub 보기
                </a>
              ) : null}
              <Link href="/#projects" className="detail-button detail-button-secondary">
                프로젝트 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
