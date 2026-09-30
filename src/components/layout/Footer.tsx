import { Github, Instagram, Mail, Heart } from 'lucide-react';
import { PROFILE } from '@/constants/profile';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: PROFILE.github, label: 'GitHub' },
    { icon: Instagram, href: PROFILE.instagram, label: 'Instagram' },
    { icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-neutral-950 text-white py-12">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌸</span>
            <span
              className="font-bold text-lg"
              style={{
                background: 'linear-gradient(135deg, #f43f5e, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
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
          <p className="text-neutral-500 text-sm flex items-center gap-1.5">
            © {currentYear} {PROFILE.name}. Made with{' '}
            <Heart size={14} className="text-rose-500 fill-rose-500" /> All rights reserved.
          </p>

          {/* University */}
          <p className="text-neutral-600 text-xs">{PROFILE.university} · {PROFILE.major}</p>
        </div>
      </div>
    </footer>
  );
}
