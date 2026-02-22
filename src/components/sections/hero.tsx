'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import Counter from '@/components/counter';
import { siteConfig } from '@/data/config';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 animate-pulse-slow pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 animate-pulse-slow pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '2s',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="text-[var(--color-foreground)]">Hi, I&apos;m </span>
          <span className="gradient-text">Balasubramani</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl font-medium text-[var(--color-muted)] mb-6"
        >
          Senior{' '}
          <span className="text-[var(--color-accent-light)] font-semibold">.NET Developer</span>
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Building scalable RESTful APIs, cloud-native systems on Azure, and enterprise automation
          with 4+ years of experience turning complex backend challenges into elegant solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            <ExternalLink className="w-4 h-4" />
            View Projects
          </button>
          <a
            href= {siteConfig.resumeLink}
            download
            className="flex items-center gap-2 px-6 py-3 border border-[var(--color-border-light)] hover:border-indigo-500/50 text-[var(--color-foreground)] rounded-xl font-medium transition-all duration-200 hover:bg-[var(--color-surface-2)] hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-6 py-3 border border-[var(--color-border-light)] hover:border-indigo-500/50 text-[var(--color-foreground)] rounded-xl font-medium transition-all duration-200 hover:bg-[var(--color-surface-2)] hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-16"
        >
          {[
            { value: 4, suffix: '+', label: 'Years Experience' },
            { value: 6, suffix: '+', label: 'Projects Delivered' },
            { value: 60, suffix: '+', label: 'APIs Built' },
            { value: 99, suffix: '%', label: 'Uptime Achieved' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-4 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[var(--color-muted)] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {/* <a
            href="https://github.com/balasubramani"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--color-border)] hover:border-indigo-500/50 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-all hover:bg-[var(--color-surface-2)]"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a> */}
          <a
            href="https://www.linkedin.com/in/balasubramani-marimuthu-aa9965213"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--color-border)] hover:border-indigo-500/50 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-all hover:bg-[var(--color-surface-2)]"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:suryabala1601016@gmail.com"
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--color-border)] hover:border-indigo-500/50 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-all hover:bg-[var(--color-surface-2)]"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 text-[var(--color-muted)] cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-xs">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
