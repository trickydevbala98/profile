'use client';

import { motion } from 'framer-motion';
import { Server, Shield, Cpu, Cloud, Zap } from 'lucide-react';

const principles = [
  { icon: Server, title: 'API-First Design', desc: 'Every system starts with a clean, well-documented API contract' },
  { icon: Shield, title: 'Security by Default', desc: 'JWT, RBAC, and OWASP practices baked into every layer' },
  { icon: Cloud, title: 'Cloud-Native mindset', desc: 'Azure-first architecture with horizontal scalability' },
  { icon: Zap, title: 'Performance Obsessed', desc: 'Redis caching, query optimization, and async patterns' },
  { icon: Cpu, title: 'Automation First', desc: 'If it can be automated, it should be — UiPath & Azure Functions' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-6 leading-tight">
              Engineering reliable backends that{' '}
              <span className="gradient-text">scale with confidence</span>
            </h2>
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                I&apos;m a Senior .NET Backend Engineer with 4+ years of hands-on experience architecting
                enterprise-grade systems. My journey spans booking platforms, HRMS solutions, AI-powered
                tools, AR applications, and RPA automation — all united by one goal: building software
                that just works, at scale.
              </p>
              <p>
                My stack centers around <span className="text-[var(--color-foreground)] font-medium">ASP.NET Core</span>,{' '}
                <span className="text-[var(--color-foreground)] font-medium">Azure cloud services</span>, and{' '}
                <span className="text-[var(--color-foreground)] font-medium">SQL Server</span> — with strong opinions
                on clean architecture, security layering, and developer experience.
              </p>
              <p>
                Beyond writing code, I care about automation. Whether it&apos;s a Quartz.NET scheduled job,
                an Azure Function triggered by an event, or a UiPath bot replacing repetitive manual work —
                I believe automation is the multiplier that separates good engineering from great engineering.
              </p>
            </div>

            {/* Location & availability */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                '📍 India',
                '💼 Open to Remote',
                '⚡ 4+ Years Exp.',
                '🚀 Backend Specialist',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs rounded-full bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Principles */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-[var(--color-muted)] uppercase tracking-wider mb-5">
              Engineering Philosophy
            </h3>
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-4 flex items-start gap-4 hover:border-indigo-500/20 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                  <p.icon className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-foreground)] mb-1">{p.title}</h4>
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
