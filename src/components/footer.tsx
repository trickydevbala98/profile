'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold gradient-text">Balasubramani</span>
            </div>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Senior .NET Developer building scalable, secure, and cloud-native systems.
            </p>
            <div className="flex items-center gap-1.5 mt-3 text-sm text-[var(--color-muted)]">
              <MapPin className="w-3.5 h-3.5" />
              <span>India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-foreground)] mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Experience', id: 'experience' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent-light)] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-foreground)] mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:suryabala1601016@gmail.com"
                className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                suryabala1601016@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/balasubramani-marimuthu-aa9965213"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              {/* <a
                href="https://github.com/balasubramani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a> */}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--color-muted)]">
          <p>© {currentYear} Balasubramani. All rights reserved.</p>
          {/* <p>Built with Next.js · TypeScript · Tailwind CSS</p> */}
        </div>
      </div>
    </footer>
  );
}
