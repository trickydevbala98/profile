'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Clock, Send } from 'lucide-react';
import { siteConfig } from '@/data/config';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'suryabala1601016@gmail.com',
    href: 'mailto:suryabala1601016@gmail.com',
    desc: 'Best for professional inquiries',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/balasubramani',
    href: 'https://www.linkedin.com/in/balasubramani-marimuthu-aa9965213',
    desc: 'Connect on LinkedIn',
  }
  // {
  //   icon: Github,
  //   label: 'GitHub',
  //   value: 'github.com/balasubramani',
  //   href: 'https://github.com/balasubramani',
  //   desc: 'View open source contributions',
  // },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--color-surface)]">
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
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto">
            Open to senior backend roles, consulting, or architecture discussions. Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact cards */}
          <div className="space-y-4">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-indigo-500/20 transition-all duration-300 group hover:-translate-y-0.5 block"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors shrink-0">
                  <link.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[var(--color-muted)] mb-0.5">{link.desc}</div>
                  <div className="text-sm font-medium text-[var(--color-foreground)] truncate group-hover:text-indigo-400 transition-colors">
                    {link.value}
                  </div>
                </div>
                <Send className="w-4 h-4 text-[var(--color-muted)] group-hover:text-indigo-400 transition-colors shrink-0" />
              </motion.a>
            ))}

            {/* Location + Availability */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass rounded-2xl p-4 text-center">
                <MapPin className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                <div className="text-xs text-[var(--color-muted)]">Location</div>
                <div className="text-sm font-medium text-[var(--color-foreground)] mt-1">India</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <Clock className="w-5 h-5 text-green-400 mx-auto mb-2" />
                <div className="text-xs text-[var(--color-muted)]">Timezone</div>
                <div className="text-sm font-medium text-[var(--color-foreground)] mt-1">IST (UTC+5:30)</div>
              </div>
            </motion.div>
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center text-3xl mb-6">
                🚀
              </div>
              <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-3">
                Open to New Opportunities
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Whether it&apos;s a senior backend role at a product company, an architectural challenge
                — I&apos;d love to hear about it. I typically respond within 24 hours.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  '✅ Full-time Senior Backend Roles',
                  '✅ Remote / Hybrid Positions',
                  '✅ Open Source Collaboration',
                ].map((item) => (
                  <li key={item} className="text-sm text-[var(--color-muted)]">{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:suryabala1601016@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium text-sm transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
              <a
                href= {siteConfig.resumeLink}
                download
                className="flex items-center justify-center gap-2 px-5 py-3 border border-[var(--color-border-light)] hover:border-indigo-500/30 text-[var(--color-foreground)] rounded-xl font-medium text-sm transition-all hover:bg-[var(--color-surface-2)]"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
