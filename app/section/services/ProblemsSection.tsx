"use client";

import { motion } from "framer-motion";
import { SearchX, TrendingDown, MessageCircleQuestion, LayoutGrid } from "lucide-react";
import { SectionWrapper } from "@/app/ui/SectionWrapper";
import SectionReveal from "@/app/ui/SectionReveal";
import ServiceSectionHeading from "@/app/ui/serviceSectionHeader";
import { staggerContainerSlow } from "@/app/lib/motion";
import { problems } from "@/app/lib/serviceData";
import styles from '@/app/components/home.module.css';

const IconMap: Record<string, React.ReactNode> = {
  SearchX: <SearchX size={20} />,
  TrendingDown: <TrendingDown size={20} />,
  MessageCircleQuestion: <MessageCircleQuestion size={20} />,
  LayoutGrid: <LayoutGrid size={20} />
}

export default function ProblemsSection() {
  return (
    <SectionWrapper className="px-4 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <ServiceSectionHeading
          eyebrow="The Problem"
          title="Is your business missing online opportunities?"
          subtitle="If any of these feel familiar, you're not alone - and there's a straightforward solution."
        />

        <motion.div
          variants={staggerContainerSlow}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {problems.map((problem, i) => {
            //const Icon = problem.icon;
            return (
              <SectionReveal key={problem.title} delay={i * 0.1} direction="right">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`${styles.glassCard} group relative p-6 rounded-2xl`}
                >
                  <div
                    className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 bg-[var(--accent-glow)] border border-[rgba(96,165,250,0.2)] text-[var(--accent-blue)]"
                  >
                    {IconMap[problem.icon]}
                  </div>

                  <h3 className="text-base font-semibold mb-2 text-[var(--text-primary)]">
                    {problem.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {problem.description}
                  </p>
                </motion.div>
              </SectionReveal>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
