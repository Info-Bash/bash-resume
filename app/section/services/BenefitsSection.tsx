"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { ShieldCheck, Star, Users, Clock, TrendingUp } from "lucide-react";
import { SectionWrapper } from "@/app/ui/SectionWrapper";
import ServiceSectionHeading from "@/app/ui/serviceSectionHeader";
import { staggerContainerSlow } from "@/app/lib/motion";
import { benefits } from "@/app/lib/serviceData";
import styles from "@/app/components/home.module.css";

const IconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={20} />,
  Star: <Star size={20} />,
  Users: <Users size={20} />,
  Clock: <Clock size={20} />,
  TrendingUp: <TrendingUp size={20} />,
}

export default function BenefitsSection() {
  return (
    <SectionWrapper id="benefits" className="px-4 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <ServiceSectionHeading
          eyebrow="Why It Matters"
          title="Why your business needs a website"
          subtitle="The businesses growing fastest today didn't get lucky - they invested in being findable, trustworthy, and easy to work with online."
        />

        <motion.div
          variants={staggerContainerSlow}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {benefits.map((benefit, i) => {
            //const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 12 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.05,
                  ease: [0.23, 1, 0.32, 1],
                }}
                whileHover={{ y: -6, scale: 1.04 }}
                className={clsx(
                  styles.glassCard,
                  "group relative p-6 rounded-2xl overflow-hidden transition-all duration-300"
                )}
              >
                {/* Glow on hover */}
                <div
                  className="
                    pointer-events-none 
                    absolute 
                    top-0 
                    left-0 
                    right-0 
                    h-px
                    opacity-0 
                    group-hover:opacity-100
                    transition-opacity 
                    duration-300
                    bg-[linear-gradient(90deg,transparent,var(--accent-blue),transparent)]
                  "
                />

                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--accent-glow)] border border-[var(--border-accent)] text-[var(--accent-blue)]"
                  >
                    {IconMap[benefit.icon]}
                  </div>
                  <h3 className="text-base font-semibold leading-snug pt-1 text-[var(--text-primary)]" >
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed mb-5 text-[var(--text-secondary)]" >
                  {benefit.description}
                </p>

                <div
                  className="flex items-baseline gap-2 pt-4 border-t border-[var(--border)]"
                >
                  <span
                    className={clsx(
                      styles.gradientText,
                      "text-2xl font-bold tabular-nums")}
                  >
                    {benefit.stat}
                  </span>
                  <span className="text-xs leading-tight text-[var(--text-muted)]">
                    {benefit.statLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
