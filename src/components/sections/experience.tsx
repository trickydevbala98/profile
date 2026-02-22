'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-4">
            Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4">
            Professional Journey
          </h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto">
            4+ years building production systems across diverse domains.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-1 md:left-5 top-1 w-6 h-6 rounded-full border-2 border-indigo-500 bg-[var(--color-background)] flex items-center justify-center">
                  <div className={`w-2.5 h-2.5 rounded-full ${exp.current ? 'bg-green-400' : 'bg-indigo-500'}`} />
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-[var(--color-foreground)]">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-[var(--color-muted)] bg-[var(--color-surface-2)] px-3 py-1.5 rounded-lg border border-[var(--color-border)] shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
