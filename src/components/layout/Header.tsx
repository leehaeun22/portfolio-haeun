'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '@/constants/profile';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-sm border-b border-rose-100/50 dark:border-rose-900/20'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
              aria-label="홈으로 이동"
            >
              <span className="text-2xl">🌸</span>
              <span
                className="font-bold text-lg gradient-text transition-all"
                style={{ letterSpacing: '-0.02em' }}
              >
                {PROFILE.name}
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="메인 네비게이션">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-rose-500 rounded-full transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Dark mode toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-500 transition-all"
                  aria-label="다크모드 전환"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}

              {/* Resume download */}
              <a
                href="/resume.pdf"
                download
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-rose-200/50 dark:hover:shadow-rose-900/30"
                style={{ background: 'linear-gradient(135deg, #f43f5e, #a855f7)' }}
                aria-label="이력서 다운로드"
              >
                <Download size={14} />
                이력서
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-neutral-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all"
                aria-label="메뉴 열기/닫기"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-b border-rose-100 dark:border-rose-900/20 shadow-xl"
          >
            <nav className="section-container py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-rose-500 transition-colors py-2 border-b border-neutral-100 dark:border-neutral-800 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #f43f5e, #a855f7)' }}
              >
                <Download size={14} />
                이력서 다운로드
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
