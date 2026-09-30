'use client';

import { ArrowUp, Github, Mail } from 'lucide-react';
import { PROFILE } from '@/constants/profile';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: PROFILE.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-neutral-950 py-12 text-white">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="gradient-text text-lg font-bold">
              {PROFILE.name}
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-neutral-400 hover:text-rose-400 hover:bg-white/20 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-neutral-500">
            © {currentYear} Haeun Lee. All rights reserved.
          </p>

          {/* University */}
          <p className="text-neutral-600 text-xs">{PROFILE.university} · {PROFILE.major}</p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex h-10 items-center gap-2 rounded-full border border-white/10 px-4 text-sm font-semibold text-neutral-300 transition-colors hover:border-rose-400 hover:text-rose-300"
          >
            <ArrowUp size={15} />
            위로 이동
          </button>
        </div>
      </div>
    </footer>
  );
}
