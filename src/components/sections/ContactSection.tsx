'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { PROFILE } from '@/constants/profile';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

type FormErrors = Partial<Record<keyof FormData, string>>;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
const FORMSPREE_ENDPOINT_PATTERN = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/;

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

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
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = '이름을 입력해주세요.';
    if (!form.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = '유효한 이메일 형식이 아닙니다.';
    }
    if (!form.subject.trim()) newErrors.subject = '제목을 입력해주세요.';
    if (!form.message.trim()) newErrors.message = '메시지를 입력해주세요.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === 'loading') return;

    setStatusMessage('');
    if (!validate()) {
      setStatus('idle');
      return;
    }

    if (!FORM_ENDPOINT) {
      console.error('NEXT_PUBLIC_FORMSPREE_ENDPOINT 환경변수가 설정되지 않았습니다.');
      setStatus('error');
      setStatusMessage('문의 폼 설정이 완료되지 않았습니다.');
      return;
    }

    if (!FORMSPREE_ENDPOINT_PATTERN.test(FORM_ENDPOINT)) {
      console.error('Formspree endpoint 형식이 올바르지 않습니다.', {
        expected: 'https://formspree.io/f/{FORM_ID}',
        received: FORM_ENDPOINT,
      });
      setStatus('error');
      setStatusMessage('문의 폼 설정이 완료되지 않았습니다.');
      return;
    }

    try {
      setStatus('loading');

      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      };

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        console.error('Formspree submission failed:', {
          status: response.status,
          statusText: response.statusText,
          errorData,
        });

        throw new Error('Form submission failed');
      }

      setStatus('success');
      setStatusMessage('메시지가 전송되었습니다. 확인 후 연락드리겠습니다.');
      setForm(INITIAL_FORM);
      setErrors({});
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('error');
      setStatusMessage('메시지 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const field = name as keyof FormData;

    setForm((prev) => ({ ...prev, [field]: value }));
    setStatusMessage('');
    if (status !== 'loading') setStatus('idle');
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
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
                아래 채널로 언제든지 연락 가능합니다.
              </p>
            </div>

            <div className="contact-info-list">
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => {
                const isEmail = href.startsWith('mailto');

                return (
                  <a
                    key={label}
                    href={href}
                    target={isEmail ? undefined : '_blank'}
                    rel={isEmail ? undefined : 'noopener noreferrer'}
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
                );
              })}

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
            <form onSubmit={handleSubmit} noValidate className="contact-form surface-card">
              <div className="contact-form-grid">
                <div className="contact-field">
                  <label htmlFor="contact-name" className="contact-label text-neutral-700 dark:text-neutral-300">
                    이름 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    className={inputClass('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    required
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="contact-error text-red-500">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email" className="contact-label text-neutral-700 dark:text-neutral-300">
                    이메일 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className={inputClass('email')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    required
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="contact-error text-red-500">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject" className="contact-label text-neutral-700 dark:text-neutral-300">
                  제목 <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="작업 제안입니다"
                  className={inputClass('subject')}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  required
                />
                {errors.subject && (
                  <p id="contact-subject-error" className="contact-error text-red-500">
                    <AlertCircle size={12} /> {errors.subject}
                  </p>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message" className="contact-label text-neutral-700 dark:text-neutral-300">
                  메시지 <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="안녕하세요. 함께하고 싶은 내용을 자유롭게 적어주세요."
                  className={inputClass('message') + ' min-h-40 resize-y'}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  required
                />
                {errors.message && (
                  <p id="contact-message-error" className="contact-error text-red-500">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {statusMessage && (
                <div
                  role="status"
                  className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${
                    status === 'success'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300'
                      : 'border-red-200 bg-red-50 text-red-600 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300'
                  }`}
                >
                  {statusMessage}
                </div>
              )}

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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
