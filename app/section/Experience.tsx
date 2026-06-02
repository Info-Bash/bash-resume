"use client";
import { motion } from "framer-motion";
import SectionReveal from "@/app/ui/SectionReveal";
import SectionHeader from "@/app/ui/SectionHeader";
import { timeline } from "@/app/lib/data";
import styles from "@/app/components/home.module.css";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-[120px]"
      style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(13,17,23,0.5) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="// experience"
          title="My Journey"
          subtitle="A timeline of growth, learning, and building real things."
        />

        {/* Timeline */}
        <div className="max-w-[720px] mx-auto relative">

          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-3 top-2.5 bottom-2.5 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, var(--accent-blue), transparent)",
            }}
          />

          {timeline.map((item, i) => (
            <SectionReveal key={item.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex gap-8 mb-10 pl-2 relative"
              >
                {/* Dot */}
                <div className="flex flex-col items-center pt-1 flex-shrink-0 z-[1]">
                  <div className={styles.timelineDot} />
                </div>

                {/* Content card */}
                <div className={`${styles.glassCard} flex-1 p-6`}>
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <h3 className="font-display font-bold text-[1.05rem] text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[0.72rem] text-[var(--accent-blue)] px-2.5 py-0.5 rounded-full bg-[rgba(96,165,250,0.08)] border border-[rgba(96,165,250,0.15)] whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-[var(--text-secondary)] leading-[1.7] text-[0.9rem] mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className={styles.tagPill}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}