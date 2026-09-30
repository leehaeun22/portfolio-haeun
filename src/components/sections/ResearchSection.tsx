'use client';

import { motion } from 'framer-motion';
import { Beaker, BrainCircuit, ChartNoAxesCombined, FileText, Workflow } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';

const RESEARCH_POINTS = [
  {
    icon: BrainCircuit,
    title: 'Research Topic',
    description:
      '웹 페이지를 자율 탐색하는 AI Test Agent가 런타임 결함 후보를 발견하도록 observation, action, reward 구조를 설계했습니다.',
  },
  {
    icon: Workflow,
    title: 'Method',
    description:
      'PPO 기반 탐색 정책을 중심으로 BrowserGym과 Playwright 환경에서 웹 상호작용을 실험하고, PPO+DQN Hybrid 접근을 검토했습니다.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Result',
    description:
      '테스트 사이트 5개에서 삽입 오류 29개를 기준으로 결함 후보 20개를 탐지하며 자동 탐색 방식의 가능성을 확인했습니다.',
  },
  {
    icon: FileText,
    title: 'Paper / Report',
    description:
      '정확한 논문 제목과 제출 학회 정보는 최신 이력서 기준으로 확인 후 반영할 예정입니다.',
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="section-padding">
      <div className="section-container">
        <motion.div {...fadeInUp} className="section-heading">
          <span className="section-eyebrow">Research</span>
          <h2 className="text-heading-1 text-neutral-900 dark:text-white">
            AI Test Agent & Reinforcement Learning
          </h2>
          <p className="section-description">
            RAWD와 UROP 연구 경험을 하나의 흐름으로 묶어, 웹 자동 탐색 문제를 어떻게 정의하고
            실험했는지 보여줍니다.
          </p>
          <div className="section-line" />
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-stretch">
          <motion.div
            {...fadeInUp}
            className="surface-card flex min-h-full flex-col justify-between overflow-hidden p-7 sm:p-8"
          >
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-950/30">
                  <Beaker size={22} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-rose-500">
                    Architecture
                  </p>
                  <h3 className="text-heading-2 text-neutral-950 dark:text-white">
                    URL 입력부터 자동 보고서까지
                  </h3>
                </div>
              </div>

              <div className="grid gap-3">
                {['URL Input', 'Browser Agent', 'RL Policy', 'Defect Candidate', 'Auto Report'].map(
                  (step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 rounded-2xl border border-rose-100 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <span className="gradient-button flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-neutral-900 dark:text-white">{step}</p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {index === 0 && '사용자가 분석할 웹사이트 주소를 입력합니다.'}
                          {index === 1 && 'agent가 실제 브라우저 환경에서 페이지를 관찰합니다.'}
                          {index === 2 && '강화학습 정책이 다음 탐색 행동을 선택합니다.'}
                          {index === 3 && '오류 가능성이 있는 상태와 이벤트를 수집합니다.'}
                          {index === 4 && '탐지 결과를 사람이 확인할 수 있는 보고서로 정리합니다.'}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {RESEARCH_POINTS.map(({ icon: Icon, title, description }) => (
              <motion.article key={title} variants={staggerItem} className="surface-card p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-500 dark:bg-rose-950/30">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950 dark:text-white">{title}</h3>
                </div>
                <p className="text-sm leading-[1.7] text-neutral-600 dark:text-neutral-300">
                  {description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
