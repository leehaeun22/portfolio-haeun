'use client';

import { motion } from 'framer-motion';
import { ArrowDown, FolderKanban, Github } from 'lucide-react';
import Image from 'next/image';
import { PROFILE } from '@/constants/profile';
import { fadeInUp } from '@/utils/animations';

const ROLES = ['AI', 'Software Engineer', 'Web Developer'];

export function HeroSection() {
  const handleScrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="soft-gradient-surface relative flex min-h-screen items-center justify-center overflow-hidden py-28 sm:py-32"
    >
      <div className="relative section-container text-center z-10">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-8 flex justify-center sm:mb-10"
        >
          <div className="relative">
            <div
              className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-[3px] border-rose-200 bg-white shadow-lg shadow-rose-100/60 md:h-36 md:w-36"
            >
              <Image
                src="/avatar.png"
                alt="이하은 프로필 이미지"
                width={160}
                height={160}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            {/* Status badge */}
            <div className="absolute -bottom-1 -right-2 flex items-center gap-1 rounded-full border border-rose-100 bg-white px-3 py-1 text-xs font-semibold shadow-lg dark:border-rose-900/30 dark:bg-neutral-900">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-neutral-600 dark:text-neutral-300">활동 중</span>
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div {...fadeInUp} className="mb-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-medium text-rose-600 shadow-sm dark:border-rose-800/40 dark:bg-rose-950/30 dark:text-rose-400">
            {PROFILE.university} {PROFILE.major} {PROFILE.year}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-display-1 mb-6"
        >
          안녕하세요,{' '}
          <span className="gradient-text">{PROFILE.name}</span>
          입니다
        </motion.h1>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {ROLES.map((role) => (
            <span
              key={role}
              className="surface-card px-4 py-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-300"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-body-lg mx-auto mb-10 max-w-2xl whitespace-pre-line text-neutral-600 dark:text-neutral-300"
        >
          {PROFILE.bioShort}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-5"
        >
          <button
            onClick={() =>
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="gradient-button flex h-12 items-center gap-2 rounded-full px-8 font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-rose-200/50 dark:hover:shadow-rose-900/30"
          >
            <FolderKanban size={16} />
            프로젝트 보기
          </button>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card flex h-12 items-center gap-2 rounded-full px-8 font-semibold text-neutral-700 transition-all duration-200 hover:scale-105 hover:shadow-lg dark:text-neutral-200"
          >
            <Github size={16} />
            GitHub
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={handleScrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-neutral-400 transition-colors hover:text-rose-500"
          aria-label="아래로 스크롤"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ArrowDown size={20} />
        </motion.button>
      </div>
    </section>
  );
}
