'use client';

import { motion } from 'framer-motion';
import { FolderKanban, Github } from 'lucide-react';
import Image from 'next/image';
import { PROFILE } from '@/constants/profile';
import { fadeInUp } from '@/utils/animations';

const ROLES = ['AI', 'Software Engineer', 'Web Developer'];

export function HeroSection() {
  return (
    <section id="hero" className="hero-section soft-gradient-surface">
      <div className="section-container hero-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="hero-avatar-stack"
        >
          <div className="hero-avatar-frame">
            <Image
              src="/avatar.png"
              alt="이하은 프로필 이미지"
              width={160}
              height={160}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </div>

          <div className="hero-status-badge">
            <span className="hero-status-dot" />
            <span className="hero-pill-text">활동 중</span>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="hero-school-row">
          <span className="hero-pill hero-school-pill">
            <span className="hero-pill-text">
              {PROFILE.university} {PROFILE.major} {PROFILE.year}
            </span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-title text-display-1"
        >
          안녕하세요, <span className="gradient-text">{PROFILE.name}</span>입니다
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="hero-role-list"
        >
          {ROLES.map((role) => (
            <span key={role} className={role === 'AI' ? 'hero-pill hero-role-pill hero-role-pill-ai' : 'hero-pill hero-role-pill'}>
              <span className="hero-pill-text">{role}</span>
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="hero-bio"
        >
          {PROFILE.bioShort}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="hero-actions"
        >
          <button
            type="button"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-button hero-button-primary gradient-button"
          >
            <span className="hero-button-icon">
              <FolderKanban size={18} />
            </span>
            <span className="hero-button-text">프로젝트 보기</span>
          </button>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button hero-button-secondary"
          >
            <span className="hero-button-icon">
              <Github size={18} />
            </span>
            <span className="hero-button-text">GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
