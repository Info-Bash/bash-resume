"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, Code2 } from "lucide-react";
import clsx from "clsx";
import SectionReveal from "@/app/ui/SectionReveal";
import SectionHeader from "@/app/ui/SectionHeader";
import { projects } from "@/app/lib/data";
import Image from "next/image";
import styles from "@/app/components/home.module.css";

// Collect unique tags
const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="// featured projects"
          title="What I've Built"
          subtitle="A selection of real-world projects demonstrating full-stack expertise."
        />

        {/* Tag filter */}
        {/* Tag filter - scrollable on mobile instead of wrapping messily */}
        <SectionReveal delay={0.2}>
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {allTags.slice(0, 8).map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={clsx(
                  "px-4 py-1.5 rounded-full border font-mono text-[0.72rem] tracking-[0.05em] cursor-pointer transition-all duration-200",
                  activeTag === tag
                    ? "border-[var(--accent-blue)] bg-[rgba(96,165,250,0.12)] text-[var(--accent-blue)]"
                    : "border-white/[0.07] bg-transparent text-[var(--text-muted)]"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Project grid */}
        <motion.div
          layout
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:[grid-template-columns:repeat(auto-fill,minmax(340px,1fr))]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                animate={{ opacity: 1, y: 0 }}
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


                className={`${styles.glassCard} overflow-hidden cursor-default flex flex-col group`}
              >
                {/* Project visual */}
                <div className="h-[160px] sm:h-[180px] relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={400}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${getGradientColors(project.gradient)})` }}
                    >
                      <Code2 size={24} color="rgba(255,255,255,0.6)" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white/15 border border-white/25 font-mono text-[0.62rem] text-white/90 tracking-[0.08em] backdrop-blur-[8px]">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-[1.05rem] sm:text-[1.15rem] text-[var(--text-primary)] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[0.85rem] sm:text-[0.88rem] text-[var(--text-secondary)] leading-[1.65] mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`${styles.tagPill}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 sm:gap-3">

                    <a href={project.liveUrl}
                      className={`${styles.btnPrimary} inline-flex items-center justify-center gap-1.5 px-3 sm:px-[18px] py-2.5 text-[0.78rem] sm:text-[0.82rem] no-underline flex-1`}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>

                    <a href={project.githubUrl}
                      className={`${styles.btnSecondary} inline-flex items-center justify-center gap-1.5 px-3 sm:px-[18px] py-2.5 text-[0.78rem] sm:text-[0.82rem] no-underline flex-1`}
                    >
                      <GitBranch size={13} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function getGradientColors(gradientClass: string): string {
  const map: Record<string, string> = {
    "from-violet-600 via-purple-600 to-indigo-700": "#7c3aed, #9333ea, #4338ca",
    "from-emerald-500 via-teal-500 to-cyan-600": "#10b981, #14b8a6, #0891b2",
    "from-amber-500 via-orange-500 to-red-600": "#f59e0b, #f97316, #dc2626",
    "from-rose-500 via-pink-600 to-fuchsia-700": "#f43f5e, #db2777, #a21caf",
  };
  return map[gradientClass] || "#3b82f6, #6366f1, #8b5cf6";
}