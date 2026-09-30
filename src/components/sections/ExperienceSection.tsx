'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Activity, Award, FlaskConical } from 'lucide-react';
import { EXPERIENCE } from '@/constants/experience';
import type { ExperienceType } from '@/interfaces/experience.types';
import { fadeInUp } from '@/utils/animations';

const TYPE_CONFIG: Record<
  ExperienceType,
  { icon: React.ElementType; dotClass: string; badgeClass: string; label: string }
> = {
  education: {
    icon: GraduationCap,
    dotClass: 'border-rose-400 bg-rose-50 text-rose-500 dark:bg-rose-950/30',
    badgeClass: 'bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400',
    label: '학력',
  },
  research: {
    icon: FlaskConical,
    dotClass: 'border-purple-400 bg-purple-50 text-purple-500 dark:bg-purple-950/30',
    badgeClass: 'bg-purple-50 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400',
    label: '연구',
  },
  activity: {
    icon: Activity,
    dotClass: 'border-purple-400 bg-purple-50 text-purple-500 dark:bg-purple-950/30',
    badgeClass: 'bg-purple-50 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400',
    label: '활동',
  },
  award: {
    icon: Award,
    dotClass: 'border-amber-400 bg-amber-50 text-amber-500 dark:bg-amber-950/30',
    badgeClass: 'bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400',
    label: '수상',
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding subtle-section">
      <div className="section-container">
        {/* Title */}
        <motion.div {...fadeInUp} className="section-heading">
          <span className="section-eyebrow">Experience</span>
          <h2 className="text-heading-1 text-neutral-900 dark:text-white mb-4">
            학습과 연구의 흐름
          </h2>
          <p className="section-description">
            AI test agent 연구, 웹 시스템 구현, 컴퓨터공학 학습 경험을 시간순으로 정리했습니다.
          </p>
          <div className="section-line" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Center line */}
          <div
            className="absolute bottom-0 left-5 top-0 w-0.5 rounded-full bg-gradient-to-b from-rose-400 via-purple-400 to-transparent sm:left-6"
          />

          <div className="space-y-6 pl-14 sm:pl-20">
            {EXPERIENCE.map((item, index) => {
              const config = TYPE_CONFIG[item.type];
              const Icon = config.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[3.35rem] top-7 flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-md sm:-left-[4.55rem] ${config.dotClass}`}
                  >
                    <Icon size={16} />
                  </div>

                  {/* Card */}
                  <div className="surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100/20 dark:hover:shadow-rose-900/10 sm:p-7">
                    {/* Header */}
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <span
                          className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${config.badgeClass}`}
                        >
                          {config.label}
                        </span>
                        <h3 className="text-xl font-bold leading-tight text-neutral-900 dark:text-white">
                          {item.organization}
                        </h3>
                        <p className="gradient-text mt-1 text-sm font-semibold">
                          {item.role}
                        </p>
                      </div>
                      <span className="text-xs text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded-full whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mb-5 text-sm leading-[1.7] text-neutral-600 dark:text-neutral-300">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
