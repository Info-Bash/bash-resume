"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";
import { staggerContainer, fadeUp } from "@/app/lib/motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={clsx("relative w-full", className)}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <motion.div variants={fadeUp} className={clsx("mb-12 md:mb-16", centered && "text-center")}>
      {eyebrow && (
        <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{ color: "var(--accent-blue)", background: "var(--accent-glow)", border: "1px solid var(--border-accent)" }}>
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4"
        style={{ color: "var(--text-primary)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg max-w-2xl leading-relaxed"
          style={{ color: "var(--text-secondary)", ...(centered ? { margin: "0 auto" } : {}) }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
