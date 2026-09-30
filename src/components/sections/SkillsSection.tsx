'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/constants/skills';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
      <div className="section-container">
        {/* Section title */}
        <motion.div {...fadeInUp} className="text-center mb-16 md:mb-[72px]">
          <span className="inline-block text-sm font-semibold text-rose-500 uppercase tracking-widest mb-3">
            Skills
          </span>
          <h2 className="text-heading-1 text-neutral-900 dark:text-white mb-4">
            기술 스택 & 역량
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            다양한 프로젝트를 통해 쌓은 기술들입니다
          </p>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #f43f5e, #a855f7)' }} />
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10"
        >
          {SKILLS.map((category) => (
            <motion.div
              key={category.category}
              variants={staggerItem}
              className="glass-card min-h-80 p-6 sm:p-8 rounded-2xl hover:shadow-xl hover:shadow-rose-100/30 dark:hover:shadow-rose-900/20 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-heading-2 text-neutral-900 dark:text-white font-bold">
                  {category.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="mb-5 last:mb-0">
                    <div className="flex justify-between items-center gap-4 mb-2">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-rose-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #f43f5e, #a855f7)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
