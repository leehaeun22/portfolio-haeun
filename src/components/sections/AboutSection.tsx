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

const ABOUT_INTRO =
  'AI와 웹 기술을 활용해 사용자의 개입을 줄이고 반복적인 작업을 자동화하는 시스템에 관심이 있습니다. 강화학습 기반 웹 결함 탐지 프로젝트를 진행하며 모델 설계, 웹 시스템 구현, 실험 및 결과 분석을 함께 경험했고, 문제를 단순히 해결하는 데 그치지 않고 원인을 구조적으로 분석하고 개선하는 과정을 중요하게 생각합니다.';

function SectionTitle() {
  return (
    <motion.div {...fadeInLeft} className="section-heading">
      <span className="section-eyebrow">ABOUT ME</span>
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

        <div className="about-layout">
          <motion.div {...scaleIn} className="about-image-column">
            <div className="about-profile-card surface-card">
              <div className="about-profile-badge surface-card">
                <p className="about-profile-name text-neutral-900 dark:text-white">{PROFILE.name}</p>
                <p className="about-profile-major text-rose-500">{PROFILE.major}</p>
              </div>

              <div className="about-avatar-box">
                <Image
                  src="/avatar.png"
                  alt="이하은 프로필 사진"
                  width={320}
                  height={320}
                  className="h-full w-full rounded-[1rem] object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="about-content-column">
            <motion.div {...fadeInRight} className="about-intro-wrap">
              <p className="about-intro text-neutral-600 dark:text-neutral-300">{ABOUT_INTRO}</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="about-info-grid"
            >
              {INFO_CARDS.map(({ icon: Icon, label, value }) => (
                <motion.div key={label} variants={staggerItem} className="about-info-card surface-card">
                  <div className="about-info-icon bg-rose-50 text-rose-500 dark:bg-rose-950/30">
                    <Icon size={18} />
                  </div>
                  <div className="about-info-content">
                    <p className="about-info-label text-neutral-400">{label}</p>
                    <p className="about-info-value text-neutral-900 dark:text-white">{value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
