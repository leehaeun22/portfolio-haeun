'use client';

import { motion } from 'framer-motion';
import { Activity, FlaskConical, GraduationCap } from 'lucide-react';
import { EXPERIENCE } from '@/constants/experience';
import type { ExperienceType } from '@/interfaces/experience.types';
import { fadeInUp } from '@/utils/animations';

const TYPE_CONFIG: Record<ExperienceType, { icon: React.ElementType; dotClass: string }> = {
  education: {
    icon: GraduationCap,
    dotClass: 'border-rose-300 bg-rose-50 text-rose-500 dark:border-rose-900/50 dark:bg-rose-950/30',
  },
  research: {
    icon: FlaskConical,
    dotClass:
      'border-purple-300 bg-purple-50 text-purple-500 dark:border-purple-900/50 dark:bg-purple-950/30',
  },
  activity: {
    icon: Activity,
    dotClass:
      'border-purple-300 bg-purple-50 text-purple-500 dark:border-purple-900/50 dark:bg-purple-950/30',
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding subtle-section">
      <div className="section-container">
        <motion.div {...fadeInUp} className="section-heading">
          <span className="section-eyebrow">Experience</span>
          <h2 className="mb-4 text-heading-1 text-neutral-900 dark:text-white">경험과 성장</h2>
          <p className="section-description">
            학교, 연구 프로젝트, 개발 경험을 시간순으로 정리했습니다.
          </p>
          <div className="section-line" />
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-4 top-0 w-0.5 rounded-full bg-gradient-to-b from-rose-400 via-purple-400 to-transparent sm:left-5" />

          <div className="space-y-5 pl-12 sm:pl-16">
            {EXPERIENCE.map((item, index) => {
              const config = TYPE_CONFIG[item.type];
              const Icon = config.icon;

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative"
                >
                  <div
                    className={`absolute -left-[2.95rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border-2 shadow-sm sm:-left-[3.7rem] ${config.dotClass}`}
                  >
                    <Icon size={14} />
                  </div>

                  <div className="surface-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-100/20 dark:hover:shadow-rose-900/10 sm:p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose-500">
                          {item.category}
                        </p>
                        <h3 className="mt-2 text-xl font-bold leading-tight text-neutral-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                          {item.subtitle}
                        </p>
                      </div>
                      <p className="shrink-0 text-right text-xs font-semibold text-neutral-400">
                        {item.period}
                      </p>
                    </div>

                    <p className="mt-3 text-sm leading-[1.6] text-neutral-600 dark:text-neutral-300">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
