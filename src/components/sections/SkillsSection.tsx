'use client';

import { motion } from 'framer-motion';
import {
  Atom,
  Bot,
  Box,
  Brain,
  Braces,
  Code2,
  Coffee,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Globe,
  Layers,
  Network,
  PanelsTopLeft,
  Route,
  Search,
  Server,
  TestTubeDiagonal,
} from 'lucide-react';
import { SKILLS } from '@/constants/skills';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';

const ICONS = {
  Atom,
  Bot,
  Box,
  Brain,
  Braces,
  Code2,
  Coffee,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Globe,
  Layers,
  Network,
  PanelsTopLeft,
  Route,
  Search,
  Server,
  TestTubeDiagonal,
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding subtle-section">
      <div className="section-container">
        <motion.div {...fadeInUp} className="section-heading">
          <span className="section-eyebrow">Skills</span>
          <h2 className="mb-4 text-heading-1 text-neutral-900 dark:text-white">기술 스택</h2>
          <p className="section-description">
            사용해본 언어, 프레임워크, 도구를 정리했습니다.
          </p>
          <div className="section-line" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:gap-6"
        >
          {SKILLS.map((category) => {
            const CategoryIcon = ICONS[category.icon as keyof typeof ICONS] ?? Code2;

            return (
              <motion.div
                key={category.category}
                variants={staggerItem}
                className="surface-card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100/30 dark:hover:shadow-rose-900/20"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-950/30">
                    <CategoryIcon size={19} />
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const SkillIcon = ICONS[skill.icon as keyof typeof ICONS] ?? Code2;

                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-full border border-rose-100/80 bg-white/80 px-3.5 py-2 text-sm font-medium text-neutral-700 shadow-[0_8px_24px_rgba(24,24,27,0.035)] transition-colors duration-200 hover:border-rose-200 hover:text-rose-600 dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-200 dark:hover:border-rose-900/60 dark:hover:text-rose-300"
                      >
                        <SkillIcon size={15} className="text-rose-500" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
