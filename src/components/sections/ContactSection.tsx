'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react';
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
    value: 'github.com/haeunlee',
    href: PROFILE.github,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@haeunlee',
    href: PROFILE.instagram,
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
        {/* Title */}
        <motion.div {...fadeInUp} className="text-center mb-16 md:mb-[72px]">
          <span className="inline-block text-sm font-semibold text-rose-500 uppercase tracking-widest mb-3">
            Contact
          </span>
          <h2 className="text-heading-1 text-neutral-900 dark:text-white mb-4">
            함께 이야기해요 💌
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            궁금한 점이나 협업 제안이 있으시면 언제든지 연락주세요!
          </p>
          <div
            className="mt-4 w-16 h-1 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #f43f5e, #a855f7)' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-14 xl:gap-20 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div {...fadeInLeft} className="xl:col-span-2 space-y-6">
            <div>
              <h3 className="text-heading-2 text-neutral-900 dark:text-white font-bold mb-2">
                연락처 정보
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                아래 채널로도 언제든 연락 가능합니다
              </p>
            </div>

            {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card p-5 rounded-2xl hover:shadow-lg hover:shadow-rose-100/30 dark:hover:shadow-rose-900/20 transition-all duration-200 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, rgba(244,63,94,0.15), rgba(168,85,247,0.15))' }}
                >
                  <Icon size={20} className="text-rose-500" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">{value}</p>
                </div>
              </a>
            ))}

            {/* Availability note */}
            <div
              className="p-5 rounded-2xl text-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(244,63,94,0.08), rgba(168,85,247,0.08))',
                border: '1px solid rgba(244,63,94,0.15)',
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold text-neutral-900 dark:text-white">현재 활동 중</span>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400">
                협업 및 프로젝트 참여를 환영합니다 ✨
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div {...fadeInRight} className="xl:col-span-3">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="min-h-96 glass-card rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center gap-5"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(244,63,94,0.15), rgba(168,85,247,0.15))' }}
                >
                  <CheckCircle size={32} className="text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  메시지를 보냈어요! 🎉
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400">
                  빠른 시일 내에 답장드릴게요
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 min-h-12 px-7 py-3 rounded-full text-sm font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #f43f5e, #a855f7)' }}
                >
                  다시 작성하기
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="glass-card rounded-2xl p-6 sm:p-8 xl:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
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
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
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
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    제목 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="협업 제안합니다"
                    className={inputClass('subject')}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    메시지 <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="안녕하세요! 함께하고 싶은 내용을 자유롭게 적어주세요 ☺️"
                    className={inputClass('message') + ' min-h-40 resize-y'}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full min-h-14 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:shadow-xl hover:shadow-rose-200/50 dark:hover:shadow-rose-900/30 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #f43f5e, #a855f7)' }}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
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
