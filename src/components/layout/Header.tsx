'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X, FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '@/constants/profile';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      (section): section is Element => section !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
            ? 'bg-white/88 dark:bg-neutral-900/88 backdrop-blur-xl shadow-sm border-b border-rose-100/70 dark:border-rose-900/20'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="grid h-16 grid-cols-[minmax(110px,1fr)_auto_minmax(150px,1fr)] items-center gap-6 md:h-[68px]">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-start gap-2 group"
              aria-label="홈으로 이동"
            >
              <span className="font-bold text-lg gradient-text transition-all">
                {PROFILE.name}
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden items-center justify-center gap-6 md:flex" aria-label="메인 네비게이션">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1);

                return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative text-sm font-medium transition-colors group ${
                    isActive
                      ? 'text-rose-500 dark:text-rose-400'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-rose-500 dark:hover:text-rose-400'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-rose-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
                );
              })}
            </nav>

            {/* Right controls */}
            <div className="flex items-center justify-end gap-4">
              {/* Dark mode toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-all hover:bg-rose-50 hover:text-rose-500 dark:text-neutral-400 dark:hover:bg-rose-900/20"
                  aria-label="다크모드 전환"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}

              {/* Resume download */}
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button hidden h-11 min-w-[112px] items-center justify-center gap-2 whitespace-nowrap rounded-full px-[18px] text-[15px] font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-rose-200/50 dark:hover:shadow-rose-900/30 md:inline-flex"
                aria-label="Resume 열기"
              >
                <FileDown size={16} />
                Resume
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
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-b border-rose-100 dark:border-rose-900/20 shadow-xl md:top-[68px]"
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
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button mt-2 inline-flex h-11 min-w-[112px] items-center justify-center gap-2 whitespace-nowrap rounded-full px-[18px] text-[15px] font-semibold text-white"
              >
                <FileDown size={16} />
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
