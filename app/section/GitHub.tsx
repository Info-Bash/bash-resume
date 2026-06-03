"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitBranch, Star, GitFork, BookOpen, ExternalLink } from "lucide-react";
import SectionReveal from "@/app/ui/SectionReveal";
import SectionHeader from "@/app/ui/SectionHeader";
import { personalInfo } from "@/app/lib/data";
import styles from "@/app/components/home.module.css";

const repoStats = [
  { label: "Repositories", value: "18", icon: <BookOpen size={16} /> },
  { label: "Total Stars", value: "42", icon: <Star size={16} /> },
  { label: "Forks", value: "12", icon: <GitFork size={16} /> },
  { label: "Contributions", value: "500+", icon: <GitBranch size={16} /> },
];

const generateContributions = () => {
  const weeks = 52;
  const days = 7;
  return Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      const rand = Math.random();
      if (w < 4 || (w > 20 && w < 25)) return 0;
      if (rand < 0.3) return 0;
      if (rand < 0.55) return 1;
      if (rand < 0.75) return 2;
      if (rand < 0.88) return 3;
      return 4;
    })
  );
};

const levelColors = [
  "rgba(255,255,255,0.04)",
  "rgba(96,165,250,0.2)",
  "rgba(96,165,250,0.4)",
  "rgba(96,165,250,0.65)",
  "rgba(96,165,250,0.9)",
];

export default function GitHubSection() {

  const [contributions, setContributions] = useState<number[][]>([]);
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    setContributions(generateContributions());
    setStarCount(Math.floor(Math.random() * 20 + 5));
  }, []);

  return (
    <section id="github" className="py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="// github"
          title="Open Source Activity"
          subtitle="Consistently shipping code and contributing to the community."
        />

        <div className="grid gap-6 sm:gap-8 items-start grid-cols-1 md:[grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">

          {/* GitHub profile card */}
          <SectionReveal direction="left">
            <div className={`${styles.glassCard} p-5 sm:p-8 text-center`}>

              {/* Avatar */}
              <div
                className="rounded-full mx-auto mb-4 sm:mb-5 flex items-center justify-center text-[2rem] sm:text-[2.2rem] font-display font-extrabold text-white"
                style={{
                  width: 80,
                  height: 80,
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  boxShadow: "0 0 30px rgba(99,102,241,0.3)",
                }}
              >
                B
              </div>

              <h3 className="font-display font-bold text-[1.15rem] sm:text-[1.3rem] mb-1">Bashir</h3>
              <p className="text-[var(--text-secondary)] font-mono text-[0.75rem] sm:text-[0.8rem] mb-4 sm:mb-5">
                @bashir · Full-Stack Developer
              </p>
              <p className="text-[var(--text-secondary)] text-[0.85rem] sm:text-[0.88rem] leading-[1.6] mb-5 sm:mb-6">
                Building scalable web applications. Passionate about clean code and
                open-source collaboration.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-6">
                {repoStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-2.5 sm:p-3 rounded-[10px] bg-[rgba(96,165,250,0.06)] border border-[rgba(96,165,250,0.1)] text-center"
                  >
                    <div className="text-[var(--accent-blue)] flex justify-center mb-1">
                      {stat.icon}
                    </div>
                    <div className="font-display font-bold text-[1rem] sm:text-[1.1rem] mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-[0.62rem] sm:text-[0.65rem] text-[var(--text-muted)] font-mono">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btnPrimary} inline-flex items-center justify-center gap-2 px-6 py-[11px] text-[0.85rem] sm:text-[0.88rem] no-underline w-full`}
              >
                <GitBranch size={15} />
                View GitHub Profile
                <ExternalLink size={13} />
              </a>
            </div>
          </SectionReveal>

          {/* Contribution graph */}
          <SectionReveal direction="right">
            <div className={`${styles.glassCard} p-5 sm:p-8`}>

              <div className="flex justify-between items-center mb-4 sm:mb-5">
                <h3 className="font-display font-semibold text-[0.95rem] sm:text-[1rem]">
                  Contribution Graph
                </h3>
                <span className="font-mono text-[0.65rem] sm:text-[0.7rem] text-[var(--text-muted)]">
                  Past 12 months
                </span>
              </div>

              {/* Contribution grid — scrolls horizontally on mobile */}
              <div className="overflow-x-auto pb-2 -mx-1 px-1">
                {contributions.length > 0 && (
                  <div className="flex gap-[3px] min-w-fit">
                    {contributions.map((week, wi) => (
                      <div key={wi} className="flex flex-col gap-[3px]">
                        {week.map((level, di) => (
                          <motion.div
                            key={`${wi}-${di}`}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (wi * 7 + di) * 0.001, duration: 0.15 }}
                            title={`Level ${level} contributions`}
                            className="w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] rounded-[2px] border border-white/[0.03]"
                            style={{ background: levelColors[level] }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-1 mt-3 sm:mt-4 justify-end">
                <span className="text-[0.62rem] sm:text-[0.65rem] text-[var(--text-muted)] font-mono mr-1">
                  Less
                </span>
                {levelColors.map((color, i) => (
                  <div
                    key={i}
                    className="w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] rounded-[2px] border border-white/5"
                    style={{ background: color }}
                  />
                ))}
                <span className="text-[0.62rem] sm:text-[0.65rem] text-[var(--text-muted)] font-mono ml-1">
                  More
                </span>
              </div>

              {/* Pinned repos */}
              <div className="mt-5 sm:mt-6">
                <div className="font-mono text-[0.68rem] sm:text-[0.7rem] text-[var(--text-muted)] tracking-[0.08em] uppercase mb-3">
                  Pinned Repositories
                </div>
                {["ajo-savings-platform", "task-management-system", "nextjs-dashboard"].map((repo) => (
                  <div
                    key={repo}
                    className="flex items-center gap-2 py-2 sm:py-2.5 border-b border-white/[0.04] min-w-0"
                  >
                    <BookOpen size={13} color="var(--accent-blue)" className="shrink-0" />
                    <span className="font-mono text-[0.75rem] sm:text-[0.8rem] text-[var(--accent-blue)] truncate">
                      {repo}
                    </span>
                    <span className="ml-auto shrink-0 flex gap-2 text-[0.7rem] sm:text-[0.72rem] text-[var(--text-muted)] font-mono">
                      <span className="flex items-center gap-[3px]">
                        <Star size={11} /> {starCount}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
}