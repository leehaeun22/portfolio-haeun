'use client';

import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';
import { AWARDS } from '@/constants/awards';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';

export function AwardsSection() {
  return (
    <section id="awards" className="section-padding">
      <div className="section-container">
        <motion.div {...fadeInUp} className="section-heading">
          <span className="section-eyebrow">Awards</span>
          <h2 className="mb-4 text-heading-1 text-neutral-900 dark:text-white">수상 및 성과</h2>
          <p className="section-description">
            프로젝트와 활동을 통해 얻은 주요 성과입니다.
          </p>
          <div className="section-line" />
        </motion.div>

        {AWARDS.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {AWARDS.map((award) => (
              <motion.article
                key={award.id}
                variants={staggerItem}
                className="surface-card border-rose-100/80 bg-white p-6 shadow-[0_10px_32px_rgba(24,24,27,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100/35 dark:border-neutral-800 dark:bg-neutral-950"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-950/30">
                  <Trophy size={20} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-neutral-900 dark:text-white">
                  {award.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-rose-500">{award.organization}</p>
                <p className="mt-1 text-xs font-semibold text-neutral-400">{award.date}</p>
                <p className="mt-4 text-sm leading-[1.6] text-neutral-600 dark:text-neutral-300">
                  {award.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            {...fadeInUp}
            className="surface-card mx-auto max-w-3xl border-rose-100/80 bg-white p-6 text-center shadow-[0_10px_32px_rgba(24,24,27,0.04)] dark:border-neutral-800 dark:bg-neutral-950"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-950/30">
              <Award size={22} />
            </div>
            <p className="mt-4 text-sm leading-[1.6] text-neutral-500 dark:text-neutral-400">
              정확한 수상명, 기관명, 날짜 확인 후 실제 성과를 추가할 예정입니다.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
