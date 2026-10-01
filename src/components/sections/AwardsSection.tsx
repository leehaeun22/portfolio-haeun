'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { AWARDS, PUBLICATIONS } from '@/constants/awards';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';

export function AwardsSection() {
  return (
    <section id="awards" className="section-padding">
      <div className="section-container">
        <motion.div {...fadeInUp} className="section-heading">
          <span className="section-eyebrow">AWARDS</span>
          <h2 className="mb-4 text-heading-1 text-neutral-900 dark:text-white">수상 및 성과</h2>
          <p className="section-description">프로젝트, 연구, 논문을 통해 얻은 주요 성과입니다.</p>
          <div className="section-line" />
        </motion.div>

        <div className="space-y-20">
          <motion.div {...fadeInUp}>
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-500">Awards & Honors</p>
              <h3 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-white">수상 내역</h3>
            </div>

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
                  className="surface-card flex h-full flex-col border-rose-100/80 bg-white px-6 py-6 shadow-[0_10px_32px_rgba(24,24,27,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100/35 dark:border-neutral-800 dark:bg-neutral-950 sm:px-7 lg:px-[30px]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-950/30">
                    <Trophy size={19} />
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-neutral-900 dark:text-white">
                    {award.title}
                  </h4>
                  <p className="mt-2.5 text-sm font-semibold leading-[1.45] text-neutral-700 dark:text-neutral-200">
                    {award.organization}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold text-rose-500">{award.date}</p>
                  <p className="mt-2.5 text-sm leading-[1.55] text-neutral-600 dark:text-neutral-300">
                    {award.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-500">Publications</p>
              <h3 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-white">논문 및 연구 성과</h3>
            </div>

            <div className="surface-card overflow-hidden border-rose-100/80 bg-white px-6 py-2 shadow-[0_10px_32px_rgba(24,24,27,0.04)] dark:border-neutral-800 dark:bg-neutral-950 sm:px-8 lg:px-[30px]">
              {PUBLICATIONS.map((publication, index) => (
                <article
                  key={publication.id}
                  className={index === PUBLICATIONS.length - 1 ? 'py-5 sm:py-[22px]' : 'border-b border-neutral-100 py-5 dark:border-neutral-800 sm:py-[22px]'}
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose-500">
                        {publication.date}
                      </p>
                      <h4 className="mt-2 text-base font-bold leading-[1.45] text-neutral-900 dark:text-white sm:text-lg">
                        {publication.title}
                      </h4>
                      <p className="mt-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {publication.conference}
                      </p>
                      {publication.award ? (
                        <p className="mt-2 text-sm font-bold text-purple-500">{publication.award}</p>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
