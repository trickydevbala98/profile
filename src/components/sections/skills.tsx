'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-4">
            Technical Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4">
            What I Work With
          </h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto">
            A curated stack built for scalability, security, and developer productivity.
          </p>
        </motion.div>

        {/* Skill Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-xl group-hover:bg-indigo-500/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-[var(--color-foreground)] text-sm leading-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 + si * 0.03 }}
                    className="px-2.5 py-1 text-xs rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
