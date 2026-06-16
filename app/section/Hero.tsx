"use client";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";
import GradientOrbs from "../ui/GradientOrbs";
import BackgroundGrid from "../ui/BackgroundGrid";
import styles from "@/app/components/home.module.css";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <GradientOrbs />

      {/* Grid pattern */}
      <BackgroundGrid />

      {/* Content */}
      <div className="relative z-[1] max-w-[1200px] mx-auto px-6 pt-10 w-full">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/[0.08] border border-green-500/20 text-[0.72rem] text-[#4ade80] tracking-[0.08em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
            AVAILABLE FOR WORK
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1
            className="font-extrabold leading-none mb-2 text-[var(--text-primary)] tracking-[-0.03em] text-[clamp(3rem,9vw,7rem)]"
          >
            Hi, I&apos;m{" "}
            <span className={styles.gradientText}>Bashir</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2
            className="font-semibold text-[var(--text-secondary)] mb-6 tracking-[-0.02em] text-[clamp(1.5rem,4vw,3rem)]"
          >
            Full-Stack Developer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[var(--text-secondary)] max-w-[560px] leading-[1.75] mb-10 text-[clamp(1rem,2vw,1.15rem)]"
        >
          I build scalable web applications using modern technologies including{" "}
          <span className="text-[var(--accent-blue)]">Next.js</span>,{" "}
          <span className="text-[var(--accent-cyan)]">NestJS</span>,{" "}
          <span className="text-[var(--accent-purple)]">TypeScript</span>, and{" "}
          <span className="text-[var(--accent-blue)]">PostgreSQL</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <button
            onClick={scrollToProjects}
            className={`${styles.btnPrimary} inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem]`}
          >
            <ExternalLink size={16} />
            View Projects
          </button>

          <a
            href="/Bash-Resume-(2026).pdf"
            download
            className={`${styles.btnSecondary} inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem] no-underline`}
          >
            <Download size={16} />
            Download Resume
          </a>

          <button
            onClick={scrollToContact}
            className={`${styles.btnSecondary} inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem]`}
          >
            <Mail size={16} />
            Contact Me
          </button>
        </motion.div>

        
      </div>

      {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 z-[1] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[0.65rem] tracking-[0.15em] text-[var(--text-muted)] uppercase">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} color="var(--text-muted)" />
          </motion.div>
        </motion.div>
    </section>
  );
}