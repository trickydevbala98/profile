'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

type FilterCategory = 'all' | 'backend' | 'cloud' | 'automation' | 'ai';

const FILTERS: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Backend', value: 'backend' },
  { label: 'Cloud', value: 'cloud' },
  { label: 'Automation', value: 'automation' },
  { label: 'AI', value: 'ai' },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-4">
            Featured Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4">
            What I&apos;ve Built
          </h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto mb-8">
            Production systems across booking, AI, AR, HRMS, and enterprise automation domains.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 text-sm rounded-xl border transition-all duration-200 ${
                  filter === f.value
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                    : 'border-[var(--color-border)] text-[var(--color-muted)] hover:border-indigo-500/30 hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface-2)]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group glass rounded-2xl p-6 flex flex-col h-full hover:border-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 block"
                >
                  {/* Icon + Tag */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl border border-white/5`}>
                      {project.icon}
                    </div>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-muted)] capitalize">
                      {project.category}
                    </span>
                  </div>

                  {/* Title + Tagline */}
                  <h3 className="font-bold text-[var(--color-foreground)] mb-2 group-hover:text-indigo-400 transition-colors flex items-center gap-1">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-5 flex-1">
                    {project.tagline}
                  </p>

                  {/* Impact */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {project.impact.slice(0, 2).map((m) => (
                      <div key={m.label} className="bg-[var(--color-surface-2)] rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-indigo-400">{m.value}</div>
                        <div className="text-xs text-[var(--color-muted)] mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
