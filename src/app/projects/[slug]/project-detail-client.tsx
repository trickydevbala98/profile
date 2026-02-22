'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, TrendingUp, Layers } from 'lucide-react';
import type { Project } from '@/data/projects';

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl border border-white/5`}
            >
              {project.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 capitalize">
                  {project.category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
                {project.title}
              </h1>
            </div>
          </div>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed max-w-2xl">
            {project.tagline}
          </p>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
        >
          {project.impact.map((m) => (
            <div key={m.label} className="glass rounded-xl p-4 text-center">
              <div className="text-xl font-bold gradient-text">{m.value}</div>
              <div className="text-xs text-[var(--color-muted)] mt-1">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content sections */}
        <div className="space-y-8">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-7"
          >
            <h2 className="text-lg font-bold text-[var(--color-foreground)] flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-base">🎯</span>
              The Problem
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed">{project.problem}</p>
          </motion.div>

          {/* Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="glass rounded-2xl p-7"
          >
            <h2 className="text-lg font-bold text-[var(--color-foreground)] flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-indigo-400" />
              Architecture Overview
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">{project.architecture}</p>

            {/* System Design Placeholder */}
            <div className="rounded-xl border border-dashed border-[var(--color-border-light)] bg-[var(--color-surface-2)] p-8 text-center">
              <div className="text-3xl mb-3">📐</div>
              <p className="text-sm text-[var(--color-muted)]">System Design Diagram</p>
              <p className="text-xs text-[var(--color-muted)] mt-1">Architecture diagram placeholder — add your diagram here</p>
            </div>
          </motion.div>

          {/* My Contribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-7"
          >
            <h2 className="text-lg font-bold text-[var(--color-foreground)] flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-base">👨‍💻</span>
              My Contribution
            </h2>
            <ul className="space-y-3">
              {project.contribution.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--color-muted)]">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass rounded-2xl p-7"
          >
            <h2 className="text-lg font-bold text-[var(--color-foreground)] flex items-center gap-2 mb-5">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-base">⚙️</span>
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-sm rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-7"
          >
            <h2 className="text-lg font-bold text-[var(--color-foreground)] flex items-center gap-2 mb-5">
              <TrendingUp className="w-5 h-5 text-indigo-400" />
              Impact Metrics
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.impact.map((m) => (
                <div
                  key={m.label}
                  className="bg-[var(--color-surface-2)] rounded-xl p-4 text-center border border-[var(--color-border)]"
                >
                  <div className="text-xl font-bold gradient-text">{m.value}</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Back CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border-light)] hover:border-indigo-500/30 text-[var(--color-foreground)] rounded-xl font-medium text-sm transition-all hover:bg-[var(--color-surface-2)] hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
