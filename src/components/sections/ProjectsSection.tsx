'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { PROJECTS, PROJECT_CATEGORIES } from '@/constants/projects';
import type { ProjectCategory } from '@/constants/projects';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filtered = PROJECTS.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory,
  );

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Title */}
        <motion.div {...fadeInUp} className="text-center mb-16 md:mb-[72px]">
          <span className="inline-block text-sm font-semibold text-rose-500 uppercase tracking-widest mb-3">
            Projects
          </span>
          <h2 className="text-heading-1 text-neutral-900 dark:text-white mb-4">
            프로젝트 포트폴리오
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            아이디어를 현실로 만들어낸 작업들을 소개합니다
          </p>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #f43f5e, #a855f7)' }} />
        </motion.div>

        {/* Filter tabs */}
        <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'text-white shadow-lg shadow-rose-200/50 dark:shadow-rose-900/30 scale-105'
                  : 'glass-card text-neutral-600 dark:text-neutral-300 hover:scale-105'
              }`}
              style={
                activeCategory === cat
                  ? { background: 'linear-gradient(135deg, #f43f5e, #a855f7)' }
                  : undefined
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10"
          >
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                variants={staggerItem}
                className="glass-card rounded-2xl min-h-[34rem] flex flex-col group hover:shadow-2xl hover:shadow-rose-100/40 dark:hover:shadow-rose-900/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <div className="relative min-h-60 sm:min-h-64 rounded-t-2xl overflow-hidden bg-gradient-to-br from-rose-50 to-purple-50 dark:from-rose-950/20 dark:to-purple-950/20">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-neutral-900 text-xs font-semibold hover:bg-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white transition-colors"
                        style={{ background: 'linear-gradient(135deg, #f43f5e, #a855f7)' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                    )}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #f43f5e, #a855f7)' }}
                    >
                      ⭐ Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-heading-2 text-neutral-900 dark:text-white mb-3 font-bold">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-[1.8]">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-2.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="max-w-full px-3 py-1.5 rounded-full text-xs font-medium bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
