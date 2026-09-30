'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Layers3 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/constants/projects';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Title */}
        <motion.div {...fadeInUp} className="section-heading">
          <span className="section-eyebrow">Projects</span>
          <h2 className="text-heading-1 text-neutral-900 dark:text-white mb-4">
            실제 문제를 다룬 프로젝트
          </h2>
          <p className="section-description">
            연구형 AI 프로젝트와 웹 시스템 구현 경험을 문제, 역할, 성과 중심으로 정리했습니다.
          </p>
          <div className="section-line" />
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 xl:grid-cols-2"
        >
            {PROJECTS.map((project) => (
              <motion.article
                key={project.id}
                variants={staggerItem}
                className="surface-card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100/40 dark:hover:shadow-rose-900/20"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-rose-50 via-white to-purple-50 dark:from-rose-950/30 dark:via-neutral-950 dark:to-purple-950/30">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="flex h-full flex-col justify-between p-7">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-rose-600 shadow-sm dark:bg-neutral-900/80 dark:text-rose-400">
                          {project.category}
                        </span>
                        <Layers3 className="text-rose-400" size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">
                          {project.title}
                        </p>
                        <p className="mt-2 max-w-md text-2xl font-bold leading-tight text-neutral-900 dark:text-white">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  )}

                  {project.featured && (
                    <div className="gradient-button absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white">
                      Featured
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                    <span>{project.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.team}</span>
                  </div>

                  <h3 className="mb-2 text-heading-2 font-bold text-neutral-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm font-semibold text-rose-500">{project.subtitle}</p>
                  <p className="mb-5 text-sm leading-[1.7] text-neutral-600 dark:text-neutral-300">
                    {project.description}
                  </p>

                  <div className="mb-5 rounded-2xl border border-rose-100 bg-rose-50/60 p-4 dark:border-rose-900/30 dark:bg-rose-950/20">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-rose-500">
                      My Role
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
                      {project.role}
                    </p>
                  </div>

                  <div className="mb-6 grid gap-2 sm:grid-cols-3">
                    {project.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="rounded-2xl border border-neutral-200 bg-white px-3 py-3 text-center text-xs font-semibold text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                      >
                        {outcome}
                      </div>
                    ))}
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="max-w-full px-3 py-1.5 rounded-full text-xs font-medium bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="surface-card flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold text-neutral-700 transition-all hover:text-rose-500 dark:text-neutral-200"
                      >
                        <Github size={15} />
                        GitHub
                      </a>
                    )}
                    <Link
                      href={project.detailUrl}
                      className="gradient-button flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-rose-200/50"
                    >
                      Detail
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
