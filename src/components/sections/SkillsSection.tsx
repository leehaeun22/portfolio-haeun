'use client';

import { motion } from 'framer-motion';
import {
  Atom,
  Bot,
  Box,
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
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5"
        >
          {SKILLS.map((skill) => {
            const SkillIcon = ICONS[skill.icon as keyof typeof ICONS] ?? Code2;

            return (
              <motion.div
                key={skill.name}
                variants={staggerItem}
                className="surface-card group flex min-h-[104px] flex-col items-center justify-center gap-3 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100/40 dark:hover:border-rose-900/50 dark:hover:shadow-rose-900/20"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-violet-500 group-hover:text-white dark:bg-rose-950/30">
                  <SkillIcon size={20} />
                </span>
                <span className="text-sm font-semibold leading-snug text-neutral-800 dark:text-neutral-100">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
