'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Brain, Code2, GraduationCap, UserRound } from 'lucide-react';
import { PROFILE } from '@/constants/profile';
import { fadeInLeft, fadeInRight, scaleIn, staggerContainer, staggerItem } from '@/utils/animations';

const INFO_CARDS = [
  { icon: GraduationCap, label: '학교', value: PROFILE.university },
  { icon: Code2, label: '전공', value: PROFILE.major },
  { icon: Brain, label: '관심 분야', value: 'AI / Web / Software Engineering' },
  { icon: UserRound, label: 'Role', value: 'Software Engineer' },
];

const STATS = [
  { value: '4+', label: 'Projects' },
  { value: '29', label: 'Test Defects' },
  { value: '20', label: 'Detected' },
];

function SectionTitle() {
  return (
    <motion.div {...fadeInLeft} className="section-heading">
      <span className="section-eyebrow">About Me</span>
      <h2 className="text-heading-1 text-neutral-900 dark:text-white">문제를 구조로 이해하는 개발자</h2>
      <p className="section-description">
        AI agent, 웹 시스템, 데이터 흐름을 연결해 반복 작업을 줄이는 서비스에 관심이 있습니다.
      </p>
      <div className="section-line" />
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <SectionTitle />

        <div className="grid grid-cols-1 items-center gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:gap-10">
          {/* Image side */}
          <motion.div {...scaleIn} className="flex justify-center">
            <div className="relative">
              <div
                className="surface-card relative flex h-64 w-64 items-center justify-center overflow-hidden md:h-72 md:w-72"
              >
                <Image
                  src="/avatar.png"
                  alt="이하은 프로필 사진"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="surface-card absolute -right-4 -top-4 px-4 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-xs font-bold text-neutral-900 dark:text-white">{PROFILE.name}</p>
                    <p className="text-xs text-rose-500">{PROFILE.major}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <div>
            <motion.div {...fadeInRight} className="space-y-4 mb-8">
              {PROFILE.bio.split('\n').map((line, i) => (
                <p key={i} className="text-body-lg text-neutral-600 dark:text-neutral-300">
                  {line}
                </p>
              ))}
            </motion.div>

            {/* Info cards */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {INFO_CARDS.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="surface-card flex items-center gap-3 p-5"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-rose-50 dark:bg-rose-950/30">
                    <Icon size={16} className="text-rose-500" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">{label}</p>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">{value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="mt-5 grid grid-cols-3 gap-4"
            >
              {STATS.map(({ value, label }) => (
                <motion.div key={label} variants={staggerItem} className="surface-card p-5 text-center">
                  <p className="gradient-text text-3xl font-bold">{value}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
