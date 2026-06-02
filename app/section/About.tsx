"use client";
import { motion } from "framer-motion";
import { Code2, Layers, GitBranch, Calendar } from "lucide-react";
import SectionReveal from '@/app/ui/SectionReveal';
import SectionHeader from '@/app/ui/SectionHeader';
import { personalInfo, stats } from '@/app/lib/data';
import styles from '@/app/components/home.module.css';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Layers: <Layers size={20} />,
  GitBranch: <GitBranch size={20} />,
  Calendar: <Calendar size={20} />,
};

export default function About() {
  return (
    <section id="about" className="py-[120px] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="// about me"
          title="The Developer Behind the Code"
          subtitle="Passionate about building things that matter - from pixel-perfect UIs to rock-solid APIs."
        />

        {/* Two-column layout */}
        <div className="grid gap-16 items-center [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">

          {/* Text content */}
          <div>
            {personalInfo.about.map((paragraph, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <p className="text-[var(--text-secondary)] leading-[1.8] mb-5 text-[1.02rem]">
                  {paragraph}
                </p>
              </SectionReveal>
            ))}

            {/* Decorative code block */}
            <SectionReveal delay={0.4}>
              <div className="mt-8 p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] font-mono text-[0.82rem] leading-[1.7]">
                <span className="text-[#316525]">{"// current focus"}</span>
                <br />
                <span className="text-[#a78bfa]">const</span>{" "}
                <span className="text-[#60a5fa]">bashir</span>{" "}
                <span className="text-[#94a3b8]">=</span>{" "}
                <span className="text-[#94a3b8]">{"{"}</span>
                <br />
                {"  "}
                <span className="text-[#22d3ee]">role</span>
                <span className="text-[#94a3b8]">:</span>{" "}
                <span className="text-[#c39a20]">&quot;Full-Stack Developer&quot;</span>
                <span className="text-[#94a3b8]">,</span>
                <br />
                {"  "}
                <span className="text-[#22d3ee]">focus</span>
                <span className="text-[#94a3b8]">:</span>{" "}
                <span className="text-[#c39a20]">&quot;Scalable Web Apps&quot;</span>
                <span className="text-[#94a3b8]">,</span>
                <br />
                {"  "}
                <span className="text-[#22d3ee]">learning</span>
                <span className="text-[#94a3b8]">:</span>{" "}
                <span className="text-[#c39a20]">&quot;Always&quot;</span>
                <br />
                <span className="text-[#94a3b8]">{"}"}</span>
              </div>
            </SectionReveal>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1} direction="right">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`${styles.glassCard} p-6 text-center cursor-default`}
                >
                  <div className="w-11 h-11 rounded-xl bg-[rgba(96,165,250,0.1)] border border-[rgba(96,165,250,0.2)] flex items-center justify-center mx-auto mb-4 text-[var(--accent-blue)]">
                    {iconMap[stat.icon]}
                  </div>
                  <div className={`${styles.gradientText} font-display text-[2.2rem] font-extrabold leading-none mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-[0.78rem] text-[var(--text-secondary)] font-mono tracking-[0.04em]">
                    {stat.label}
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}