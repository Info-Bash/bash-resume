"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import SectionReveal from "@/app/ui/SectionReveal";
import SectionHeader from "@/app/ui/SectionHeader";
import { techStack, TechCategory } from "@/app/lib/data";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiExpress,
  SiPostgresql, SiPrisma, SiMongodb,
  SiGit, SiGithub, SiBootstrap, SiPostman,
} from "react-icons/si";
import styles from "@/app/components/home.module.css";

const categories: ("All" | TechCategory)[] = ["All", "Frontend", "Backend", "Database", "Tools"];

const iconMap: Record<string, React.ReactNode> = {
  SiReact:       <SiReact size={24} />,
  SiNextdotjs:   <SiNextdotjs size={24} />,
  SiTypescript:  <SiTypescript size={24} />,
  SiTailwindcss: <SiTailwindcss size={24} />,
  SiNodedotjs:   <SiNodedotjs size={24} />,
  SiNestjs:      <SiNestjs size={24} />,
  SiExpress:     <SiExpress size={24} />,
  SiPostgresql:  <SiPostgresql size={24} />,
  SiPrisma:      <SiPrisma size={24} />,
  SiMongodb:     <SiMongodb size={24} />,
  SiGit:         <SiGit size={24} />,
  SiGithub:      <SiGithub size={24} />,
  SiBootstrap:   <SiBootstrap size={24} />,
  SiPostman:     <SiPostman size={24} />,
};

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<"All" | TechCategory>("All");

  const filtered =
    activeCategory === "All"
      ? techStack
      : techStack.filter((t) => t.category === activeCategory);

  return (
    <section
      id="stack"
      className="py-[120px] relative"
      style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(13,17,23,0.2) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="// tech stack"
          title="Tools of the Trade"
          subtitle="Technologies I use to build scalable, production-ready applications."
        />

        {/* Category filter pills */}
        <SectionReveal delay={0.2}>
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "px-5 py-2 rounded-full border font-mono text-[0.75rem] tracking-[0.06em] cursor-pointer transition-all duration-200",
                  activeCategory === cat
                    ? "border-[var(--accent-blue)] bg-[rgba(96,165,250,0.12)] text-[var(--accent-blue)]"
                    : "border-white/[0.07] bg-transparent text-[var(--text-secondary)]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Tech grid */}
        <motion.div
          layout
          className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(150px,1fr))]"
        >
          {filtered.map((tech, i) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className={`${styles.glassCard} relative overflow-hidden px-4 py-6 text-center cursor-default`}
            >
              {/* Gradient accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-60"
              style={{ background: `linear-gradient(90deg, ${tech.color}, transparent)` }}
              />

              {/* Icon */}
              <div className="text-[2rem] mb-3 flex justify-center items-center h-10">
                {React.cloneElement(iconMap[tech.icon] as React.ReactElement, { color: tech.color })}
              </div>

              <div className="font-display font-semibold text-[0.9rem] text-[var(--text-primary)] mb-1.5">
                {tech.name}
              </div>

              <div className="text-[0.65rem] text-[var(--text-muted)] font-mono tracking-[0.08em] uppercase">
                {tech.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}