'use client';

import { motion } from 'framer-motion';
import { certifications } from '@/data/certifications';
import { Award, ExternalLink } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-4">
            Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4">
            Credentials & Learning
          </h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto">
            Continuous learning is part of the engineering mindset.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl border border-white/5 shrink-0`}>
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--color-foreground)] mb-1 group-hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-muted)]">{cert.issuer}</span>
                    <span className="text-xs text-[var(--color-muted)] bg-[var(--color-surface-2)] px-2 py-0.5 rounded-lg border border-[var(--color-border)]">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-400" />
                <span className="text-xs text-[var(--color-muted)]">Verified Certification</span>
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[var(--color-muted)] hover:text-indigo-400 transition-colors">
                    - View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
