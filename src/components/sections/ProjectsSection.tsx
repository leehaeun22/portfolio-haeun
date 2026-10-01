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
        <motion.div {...fadeInUp} className="section-heading mb-10">
          <span className="section-eyebrow">PROJECTS</span>
          <h2 className="mb-4 text-heading-1 text-neutral-900 dark:text-white">프로젝트</h2>
          <div className="section-line" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="project-grid grid grid-cols-1 gap-7 lg:grid-cols-2 xl:gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              variants={staggerItem}
              className="project-card surface-card group border-neutral-200/80 bg-white shadow-[0_10px_32px_rgba(24,24,27,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100/35 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-rose-900/50 dark:hover:shadow-rose-900/20"
            >
              <div className="project-media bg-gradient-to-br from-rose-50 via-white to-purple-50 dark:from-rose-950/30 dark:via-neutral-950 dark:to-purple-950/30">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="project-media-inner">
                    <div className="project-media-icon bg-white/85 text-rose-500 shadow-sm dark:bg-neutral-900/85">
                      <Layers3 size={18} />
                    </div>
                    <p className="project-media-category text-rose-500">{project.category}</p>
                    <p className="project-media-title text-neutral-900 dark:text-white">{project.title}</p>
                  </div>
                )}
              </div>

              <div className="project-content">
                <p className="project-meta text-rose-500">
                  {project.category} · {project.period}
                </p>

                <h3 className="project-title text-neutral-900 dark:text-white">{project.title}</h3>
                <p className="project-subtitle text-neutral-500 dark:text-neutral-400">
                  {project.subtitle}
                </p>

                <p className="project-description text-neutral-600 dark:text-neutral-300">
                  {project.description}
                </p>

                <p className="project-role text-neutral-700 dark:text-neutral-200">
                  <span className="font-semibold text-neutral-400 dark:text-neutral-500">Role · </span>
                  <span className="font-medium">{project.role}</span>
                </p>

                <div className="project-tech">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="project-tech-chip bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={project.detailUrl} className="project-link text-rose-500 hover:text-violet-500">
                  프로젝트 보기
                  <ArrowRight
                    size={15}
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
