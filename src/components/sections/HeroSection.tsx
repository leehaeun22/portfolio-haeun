'use client';

import { motion } from 'framer-motion';
import { FolderKanban, Github } from 'lucide-react';
import Image from 'next/image';
import { PROFILE } from '@/constants/profile';
import { fadeInUp } from '@/utils/animations';

const ROLES = ['AI', 'Software Engineer', 'Web Developer'];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="soft-gradient-surface relative flex min-h-[calc(100vh-4.5rem)] items-center justify-center overflow-hidden px-0 py-24 sm:py-28"
    >
      <div className="section-container z-10 flex flex-col items-center text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-3 flex justify-center"
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
            <div className="absolute bottom-0 right-0 flex items-center gap-1.5 rounded-full border border-rose-100 bg-white px-2.5 py-1 text-[12px] font-semibold leading-none shadow-lg dark:border-rose-900/30 dark:bg-neutral-900">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-neutral-600 dark:text-neutral-300">활동 중</span>
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div {...fadeInUp} className="mb-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-medium text-rose-600 shadow-sm dark:border-rose-800/40 dark:bg-rose-950/30 dark:text-rose-400">
            {PROFILE.university} {PROFILE.major} {PROFILE.year}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 h-auto max-w-4xl text-display-1 leading-[1.16]"
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
          className="mb-5 flex flex-wrap items-center justify-center gap-3"
        >
          {ROLES.map((role) => (
            <span
              key={role}
              className="surface-card inline-flex min-h-8 items-center rounded-full px-3 py-1.5 text-[15px] font-medium leading-none text-neutral-600 dark:text-neutral-300"
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
          className="mx-auto mb-7 max-w-[680px] text-center text-[18px] leading-[1.6] text-neutral-600 dark:text-neutral-300"
        >
          {PROFILE.bioShort}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() =>
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="gradient-button inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-rose-200/50 dark:hover:shadow-rose-900/30"
          >
            <FolderKanban size={18} />
            프로젝트 보기
          </button>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold text-neutral-700 transition-all duration-200 hover:scale-105 hover:shadow-lg dark:text-neutral-200"
          >
            <Github size={18} />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
