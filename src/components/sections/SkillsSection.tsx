'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, Database, PanelsTopLeft, UsersRound } from 'lucide-react';
import { SKILLS } from '@/constants/skills';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';

const ICONS = {
  Brain,
  Code2,
  Database,
  PanelsTopLeft,
  UsersRound,
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding subtle-section">
      <div className="section-container">
        {/* Section title */}
        <motion.div {...fadeInUp} className="section-heading">
          <span className="section-eyebrow">Skills</span>
          <h2 className="text-heading-1 text-neutral-900 dark:text-white mb-4">
            기술 스택과 연구 경험
          </h2>
          <p className="section-description">
            퍼센트 대신 실제 프로젝트에서의 사용 맥락을 기준으로 기술을 정리했습니다.
          </p>
          <div className="section-line" />
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8"
        >
          {SKILLS.map((category) => {
            const Icon = ICONS[category.icon as keyof typeof ICONS] ?? Code2;

            return (
              <motion.div
                key={category.category}
                variants={staggerItem}
                className="surface-card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100/30 dark:hover:shadow-rose-900/20 sm:p-8"
              >
              {/* Category header */}
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-950/30">
                  <Icon size={20} />
                </span>
                <h3 className="text-heading-2 text-neutral-900 dark:text-white font-bold">
                  {category.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="grid gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-2xl border border-rose-100/80 bg-white/70 p-4 dark:border-neutral-800 dark:bg-neutral-900/60"
                  >
                    <div className="mb-1.5 flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                        {skill.name}
                      </span>
                      <span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-600 dark:bg-rose-950/30 dark:text-rose-400">
                        {skill.levelLabel}
                      </span>
                    </div>
                    {skill.description && (
                      <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
