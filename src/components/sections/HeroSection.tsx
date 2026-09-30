'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Github, Mail } from 'lucide-react';
import Image from 'next/image';
import { PROFILE } from '@/constants/profile';
import { fadeInUp } from '@/utils/animations';

const ROLES = ['프론트엔드 개발자', 'UI/UX 디자이너', '크리에이티브 메이커'];

export function HeroSection() {
  const handleScrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-28 sm:py-32"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background:
            'linear-gradient(135deg, #fff1f2 0%, #fdf4ff 30%, #f0f9ff 60%, #fff1f2 100%)',
        }}
      />
      <div className="dark:block hidden absolute inset-0 animate-gradient"
        style={{
          background: 'linear-gradient(135deg, #1a0010 0%, #12001a 30%, #001214 60%, #1a0010 100%)',
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl animate-float pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f43f5e, #a855f7)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7, #06b6d4)', animationDelay: '2s' }}
      />

      {/* Floating particles */}
      {['🌸', '✨', '🎨', '💫', '🌟'].map((emoji, i) => (
        <div
          key={i}
          className="absolute text-2xl opacity-30 animate-float pointer-events-none select-none"
          style={{
            top: `${15 + i * 15}%`,
            left: `${5 + i * 18}%`,
            animationDelay: `${i * 0.8}s`,
            fontSize: `${1 + (i % 3) * 0.4}rem`,
          }}
        >
          {emoji}
        </div>
      ))}

      <div className="relative section-container text-center z-10">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex justify-center mb-10 sm:mb-12"
        >
          <div className="relative">
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full animate-pulse-glow flex items-center justify-center overflow-hidden"
              style={{ border: '4px solid transparent', background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #f43f5e, #a855f7) border-box' }}
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
            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-neutral-900 rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1 shadow-lg border border-rose-100 dark:border-rose-900/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-neutral-600 dark:text-neutral-300">활동 중</span>
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div {...fadeInUp} className="mb-5 sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/40">
            <Sparkles size={14} />
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
          입니다 👋
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
              className="px-4 py-1.5 rounded-full text-sm font-medium glass-card text-neutral-600 dark:text-neutral-300"
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
          className="text-body-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mb-12 whitespace-pre-line"
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
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex min-h-12 items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-rose-200/50 dark:hover:shadow-rose-900/30"
            style={{ background: 'linear-gradient(135deg, #f43f5e, #a855f7)' }}
          >
            <Mail size={16} />
            연락하기
          </button>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center gap-2 px-8 py-3.5 rounded-full font-semibold glass-card text-neutral-700 dark:text-neutral-200 transition-all duration-200 hover:scale-105 hover:shadow-lg border border-rose-100/50 dark:border-rose-900/20"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 hover:text-rose-500 transition-colors animate-bounce-y"
          aria-label="아래로 스크롤"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ArrowDown size={20} />
        </motion.button>
      </div>
    </section>
  );
}
