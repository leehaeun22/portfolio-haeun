'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, GraduationCap, Heart, Sparkles } from 'lucide-react';
import { PROFILE } from '@/constants/profile';
import { fadeInLeft, fadeInRight, scaleIn, staggerContainer, staggerItem } from '@/utils/animations';

const INFO_CARDS = [
  { icon: GraduationCap, label: '학교', value: PROFILE.university },
  { icon: Heart, label: '전공', value: PROFILE.major },
  { icon: MapPin, label: '위치', value: PROFILE.location },
  { icon: Sparkles, label: '학년', value: PROFILE.year },
];

const STATS = [
  { value: '4+', label: '프로젝트' },
  { value: '10+', label: '기술 스택' },
  { value: '1', label: '수상 경력' },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.div {...fadeInLeft} className="mb-16 md:mb-[72px]">
      <span className="inline-block text-sm font-semibold text-rose-500 uppercase tracking-widest mb-3">
        About Me
      </span>
      <h2 className="text-heading-1 text-neutral-900 dark:text-white">{children}</h2>
      <div className="mt-4 w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #f43f5e, #a855f7)' }} />
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Image side */}
          <motion.div {...scaleIn} className="flex justify-center">
            <div className="relative">
              {/* Decorative background */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #f43f5e, #a855f7)' }}
              />
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden glass-card flex items-center justify-center"
                style={{ border: '2px solid rgba(244,63,94,0.2)' }}
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
                className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌸</span>
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
            <SectionTitle>저를 소개합니다 ✨</SectionTitle>

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
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
            >
              {INFO_CARDS.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="glass-card p-4 rounded-2xl flex items-center gap-3"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(244,63,94,0.15), rgba(168,85,247,0.15))' }}
                  >
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
              className="flex gap-8"
            >
              {STATS.map(({ value, label }) => (
                <motion.div key={label} variants={staggerItem} className="text-center">
                  <p
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #f43f5e, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {value}
                  </p>
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
