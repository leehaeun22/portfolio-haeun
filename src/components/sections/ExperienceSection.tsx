'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Activity, Award } from 'lucide-react';
import { EXPERIENCE } from '@/constants/experience';
import type { ExperienceType } from '@/interfaces/experience.types';
import { fadeInUp } from '@/utils/animations';

const TYPE_CONFIG: Record<
  ExperienceType,
  { icon: React.ElementType; color: string; bg: string; label: string }
> = {
  education: { icon: GraduationCap, color: '#f43f5e', bg: 'rgba(244,63,94,0.1)', label: '학력' },
  activity: { icon: Activity, color: '#a855f7', bg: 'rgba(168,85,247,0.1)', label: '활동' },
  award: { icon: Award, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', label: '수상' },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
      <div className="section-container">
        {/* Title */}
        <motion.div {...fadeInUp} className="text-center mb-16 md:mb-[72px]">
          <span className="inline-block text-sm font-semibold text-rose-500 uppercase tracking-widest mb-3">
            Experience
          </span>
          <h2 className="text-heading-1 text-neutral-900 dark:text-white mb-4">
            경력 & 학력 타임라인
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            지금까지 걸어온 길을 소개합니다
          </p>
          <div
            className="mt-4 w-16 h-1 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #f43f5e, #a855f7)' }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5 rounded-full"
            style={{ background: 'linear-gradient(to bottom, #f43f5e, #a855f7, transparent)' }}
          />

          <div className="space-y-10 sm:space-y-12 pl-16 sm:pl-24">
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
                    className="absolute -left-12 sm:-left-14 top-8 w-11 h-11 rounded-full flex items-center justify-center shadow-lg"
                    style={{ background: config.bg, border: `2px solid ${config.color}` }}
                  >
                    <Icon size={18} style={{ color: config.color }} />
                  </div>

                  {/* Card */}
                  <div className="glass-card min-h-56 p-6 sm:p-8 rounded-2xl hover:shadow-xl hover:shadow-rose-100/20 dark:hover:shadow-rose-900/10 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <span
                          className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2"
                          style={{ background: config.bg, color: config.color }}
                        >
                          {config.label}
                        </span>
                        <h3 className="font-bold text-neutral-900 dark:text-white text-lg leading-tight">
                          {item.organization}
                        </h3>
                        <p
                          className="text-sm font-semibold mt-0.5"
                          style={{
                            background: 'linear-gradient(135deg, #f43f5e, #a855f7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {item.role}
                        </p>
                      </div>
                      <span className="text-xs text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded-full whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-[1.75] mb-6">
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
