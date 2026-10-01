'use client';

import { motion } from 'framer-motion';
import { Building2, FlaskConical, GraduationCap } from 'lucide-react';
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
    icon: Building2,
    dotClass:
      'border-pink-300 bg-pink-50 text-pink-500 dark:border-pink-900/50 dark:bg-pink-950/30',
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding subtle-section">
      <div className="section-container">
        <motion.div {...fadeInUp} className="section-heading">
          <span className="section-eyebrow">EXPERIENCE</span>
          <h2 className="mb-4 text-heading-1 text-neutral-900 dark:text-white">경험과 성장</h2>
          <p className="section-description">
            학업, 연구, 교내 활동 경험을 시간순으로 정리했습니다.
          </p>
          <div className="section-line" />
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-4 top-0 w-0.5 rounded-full bg-gradient-to-b from-rose-400 via-purple-400 to-transparent sm:left-5" />

          <div className="experience-list flex flex-col gap-4 pl-12 sm:pl-16">
            {EXPERIENCE.map((item, index) => {
              const config = TYPE_CONFIG[item.type];
              const Icon = config.icon;

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="relative"
                >
                  <div
                    className={`absolute -left-[2.95rem] top-5 flex h-8 w-8 items-center justify-center rounded-full border-2 shadow-sm sm:-left-[3.7rem] ${config.dotClass}`}
                  >
                    <Icon size={14} />
                  </div>

                  <div className="experience-card surface-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-100/20 dark:hover:shadow-rose-900/10">
                    <div className="experience-content min-w-0 space-y-0">
                      <p className="m-0 text-xs font-bold uppercase tracking-[0.16em] text-rose-500">
                        {item.category}
                      </p>
                      <h3 className="m-0 mt-1.5 text-lg font-bold leading-tight text-neutral-900 dark:text-white sm:text-xl">
                        {item.title}
                      </h3>
                      {item.subtitle ? (
                        <p className="m-0 mt-1.5 text-sm font-semibold leading-snug text-neutral-500 dark:text-neutral-400">
                          {item.subtitle}
                        </p>
                      ) : null}

                      {item.description ? (
                        <p className="m-0 mt-2 text-sm leading-[1.55] text-neutral-600 dark:text-neutral-300">
                          {item.description}
                        </p>
                      ) : null}

                      {item.tags.length > 0 ? (
                        <div className="experience-keywords">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="max-w-full rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium leading-normal text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <div className="experience-date shrink-0 text-left text-xs font-semibold leading-relaxed text-neutral-400 sm:text-right">
                      {item.period}
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
