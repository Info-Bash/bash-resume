"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Eye } from "lucide-react";
import { fadeUp, staggerContainer, fadeIn } from "@/app/lib/motion";
import GradientOrbs from "@/app/ui/GradientOrbs";
import BackgroundGrid from "@/app/ui/BackgroundGrid";
import styles from "@/app/components/home.module.css";

export default function HeroSection() {
  const scrollToContacts = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-24 md:py-32">

      {/* Animated gradient orbs */}
      <GradientOrbs />

      {/* Background grid */}
      <BackgroundGrid />


      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {/* Trust badge */}
        <motion.div variants={fadeIn} className="mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium  bg-green-500/[0.08] border border-green-500/20 text-[0.72rem] text-[#4ade80] tracking-[0.08em]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.8)] " />
            </span>
            AVAILABLE FOR NEW PROJECTS
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-[var(--text-primary)]"
        >
          Build a stronger{" "}
          <span className={styles.gradientText}>
            online presence
          </span>{" "}
          with expert web development
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10 text-[var(--text-secondary)]"
        >
          BASH Digital helps businesses build fast, modern websites and web applications using Next.js, React, and modern technologies to attract customers, build trust, and grow online.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={scrollToContacts}
            className={`${styles.btnPrimary} group inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem]`}

          >
            Start a Project
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <button
            onClick={scrollToPortfolio}
            className={`${styles.btnSecondary} group inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem]`}
          >
            <Eye className="size-4" />
            View My Work
          </button>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {["Custom-built for your business", "Fast & mobile-friendly", "Ongoing support included"].map((item) => (
            <span key={item} className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <CheckCircle2 className="size-4 shrink-0 text-[var(--accent-blue)]" />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
