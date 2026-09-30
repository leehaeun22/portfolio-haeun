import Link from 'next/link';
import { ArrowLeft, Github, Mail } from 'lucide-react';
import { EXPERIENCE } from '@/constants/experience';
import { PROFILE } from '@/constants/profile';
import { PROJECTS } from '@/constants/projects';
import { SKILLS } from '@/constants/skills';

export const metadata = {
  title: 'Resume | 이하은',
  description: '이하은 소프트웨어 개발 포트폴리오 이력 요약',
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <section className="section-padding">
        <div className="section-container max-w-5xl">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition-colors hover:text-rose-500 dark:text-neutral-300"
          >
            <ArrowLeft size={16} />
            포트폴리오로 돌아가기
          </Link>

          <header className="surface-card p-8 sm:p-10">
            <p className="section-eyebrow">Resume</p>
            <h1 className="text-display-2">{PROFILE.nameEn}</h1>
            <p className="mt-3 text-xl font-bold text-rose-500">Software Engineer</p>
            <p className="mt-5 max-w-3xl text-body-lg text-neutral-600 dark:text-neutral-300">
              {PROFILE.bioShort}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="surface-card flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold text-neutral-700 transition-colors hover:text-rose-500 dark:text-neutral-200"
              >
                <Mail size={16} />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold text-neutral-700 transition-colors hover:text-rose-500 dark:text-neutral-200"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </header>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <section className="surface-card p-7">
              <h2 className="text-heading-2">Skills</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-rose-100 px-3 py-1 text-xs font-semibold text-neutral-700 dark:border-neutral-800 dark:text-neutral-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>

            <section className="surface-card p-7">
              <h2 className="text-heading-2">Experience</h2>
              <div className="mt-5 space-y-5">
                {EXPERIENCE.map((item) => (
                  <article
                    key={item.id}
                    className="border-b border-neutral-200 pb-5 last:border-b-0 last:pb-0 dark:border-neutral-800"
                  >
                    <p className="text-xs font-semibold text-neutral-500">{item.period}</p>
                    <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                    <p className="text-sm font-semibold text-rose-500">{item.subtitle}</p>
                    <p className="mt-2 text-sm leading-[1.7] text-neutral-600 dark:text-neutral-300">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <section className="surface-card mt-8 p-7">
            <h2 className="text-heading-2">Projects</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {PROJECTS.map((project) => (
                <article
                  key={project.id}
                  className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800"
                >
                  <p className="text-xs font-semibold text-neutral-500">{project.period}</p>
                  <h3 className="mt-1 text-lg font-bold">{project.title}</h3>
                  <p className="text-sm font-semibold text-rose-500">{project.subtitle}</p>
                  <p className="mt-2 text-sm leading-[1.7] text-neutral-600 dark:text-neutral-300">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
