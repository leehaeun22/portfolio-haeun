'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Layers3 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/constants/projects';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div {...fadeInUp} className="section-heading">
          <span className="section-eyebrow">Projects</span>
          <h2 className="mb-4 text-heading-1 text-neutral-900 dark:text-white">
            실제 문제를 다룬 프로젝트
          </h2>
          <p className="section-description">
            프로젝트의 핵심 목적, 역할, 주요 기술을 빠르게 확인할 수 있도록 정리했습니다.
          </p>
          <div className="section-line" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-7 lg:grid-cols-2 xl:gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              variants={staggerItem}
              className="surface-card group flex h-full flex-col overflow-hidden border-neutral-200/80 bg-white shadow-[0_14px_45px_rgba(24,24,27,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100/40 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-rose-900/50 dark:hover:shadow-rose-900/20"
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-rose-50 via-white to-purple-50 dark:from-rose-950/30 dark:via-neutral-950 dark:to-purple-950/30">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-rose-500 shadow-sm dark:bg-neutral-900/80">
                        <Layers3 size={22} />
                      </div>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
                        {project.category}
                      </p>
                      <p className="mt-2 text-lg font-bold text-neutral-900 dark:text-white">
                        {project.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose-500">
                  {project.category} · {project.period}
                </p>

                <div className="mt-4">
                  <h3 className="text-2xl font-bold leading-tight text-neutral-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-base font-medium leading-snug text-neutral-500 dark:text-neutral-400">
                    {project.subtitle}
                  </p>
                </div>

                <p className="mt-4 line-clamp-2 text-sm leading-[1.65] text-neutral-600 dark:text-neutral-300">
                  {project.description}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
                  <span className="font-semibold text-neutral-400 dark:text-neutral-500">Role · </span>
                  <span className="font-medium">{project.role}</span>
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-600 dark:bg-rose-950/30 dark:text-rose-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.detailUrl}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-rose-500 transition-colors hover:text-violet-500"
                >
                  프로젝트 보기
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
