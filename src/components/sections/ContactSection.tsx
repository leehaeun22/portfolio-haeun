'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { PROFILE } from '@/constants/profile';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: '이메일',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/leehaeun22',
    href: PROFILE.github,
  },
  {
    icon: Globe,
    label: 'Portfolio',
    value: 'portfolio-haeun-orpin.vercel.app',
    href: 'https://portfolio-haeun-orpin.vercel.app',
  },
];

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = '이름을 입력해주세요';
    if (!form.email.trim()) newErrors.email = '이메일을 입력해주세요';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = '유효한 이메일 형식이 아닙니다';
    if (!form.subject.trim()) newErrors.subject = '제목을 입력해주세요';
    if (!form.message.trim()) newErrors.message = '메시지를 입력해주세요';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    // 실제 메일 전송 API 연동 시 여기에 fetch 추가
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full min-h-12 px-5 py-3.5 rounded-xl border text-sm leading-relaxed transition-all duration-200 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-400 ${
      errors[field]
        ? 'border-red-400'
        : 'border-neutral-200 dark:border-neutral-700 hover:border-rose-300 dark:hover:border-rose-700'
    }`;

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <motion.div {...fadeInUp} className="section-heading">
          <span className="section-eyebrow">CONTACT</span>
          <h2 className="mb-4 text-heading-1 text-neutral-900 dark:text-white">
            함께 문제를 해결할 기회를 기다립니다
          </h2>
          <p className="section-description">
            AI와 웹 시스템을 함께 만드는 기회, 프로젝트 제안, 채용 관련 연락을 환영합니다.
          </p>
          <div className="section-line" />
        </motion.div>

        <div className="contact-layout">
          <motion.div {...fadeInLeft} className="contact-info-column">
            <div>
              <h3 className="mb-2 text-heading-2 font-bold text-neutral-900 dark:text-white">
                연락처 정보
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                아래 채널로도 언제든 연락 가능합니다.
              </p>
            </div>

            <div className="contact-info-list">
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-info-item surface-card group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-100/30 dark:hover:shadow-rose-900/20"
                >
                  <div className="contact-info-icon bg-rose-50 text-rose-500 transition-transform group-hover:scale-105 dark:bg-rose-950/30">
                    <Icon size={20} />
                  </div>
                  <div className="contact-info-content">
                    <p className="contact-info-label text-neutral-400">{label}</p>
                    <p className="contact-info-value text-neutral-900 dark:text-white">{value}</p>
                  </div>
                </a>
              ))}

              <div className="contact-info-item contact-info-item-status surface-card">
                <div className="contact-info-icon bg-emerald-50 text-emerald-500 dark:bg-emerald-950/30">
                  <CheckCircle size={20} />
                </div>
                <div className="contact-info-content">
                  <div className="contact-status-title text-neutral-900 dark:text-white">
                    <span className="contact-status-dot" />
                    <span>현재 활동 중</span>
                  </div>
                  <p className="contact-status-desc text-neutral-500 dark:text-neutral-400">
                    함께 문제를 해결하고 새로운 시스템을 만드는 기회를 기다리고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInRight} className="contact-form-column">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="surface-card flex min-h-96 flex-col items-center justify-center gap-5 p-8 text-center sm:p-10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 dark:bg-rose-950/30">
                  <CheckCircle size={32} className="text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  메시지를 보냈습니다
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400">
                  빠른 시일 안에 답장드릴게요.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="gradient-button mt-4 min-h-12 rounded-full px-7 py-3 text-sm font-semibold text-white"
                >
                  다시 작성하기
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="contact-form surface-card">
                <div className="contact-form-grid">
                  <div className="contact-field">
                    <label className="contact-label text-neutral-700 dark:text-neutral-300">
                      이름 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      className={inputClass('name')}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="contact-error text-red-500">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="contact-field">
                    <label className="contact-label text-neutral-700 dark:text-neutral-300">
                      이메일 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className={inputClass('email')}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="contact-error text-red-500">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-label text-neutral-700 dark:text-neutral-300">
                    제목 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="작업 제안입니다"
                    className={inputClass('subject')}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <p className="contact-error text-red-500">
                      <AlertCircle size={12} /> {errors.subject}
                    </p>
                  )}
                </div>

                <div className="contact-field">
                  <label className="contact-label text-neutral-700 dark:text-neutral-300">
                    메시지 <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="안녕하세요. 함께하고 싶은 내용을 자유롭게 적어주세요."
                    className={inputClass('message') + ' min-h-40 resize-y'}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="contact-error text-red-500">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="gradient-button flex min-h-14 w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-rose-200/50 disabled:cursor-not-allowed disabled:opacity-70 dark:hover:shadow-rose-900/30"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      전송 중...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      메시지 보내기
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
