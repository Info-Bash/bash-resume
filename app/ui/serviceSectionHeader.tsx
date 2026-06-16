"use client";

import SectionReveal from "./SectionReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle}: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16 text-center">
      {eyebrow && (
        <SectionReveal>
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-[var(--accent-blue)] bg-[var(--accent-glow)] border border-[var(--border-accent)]">
            {eyebrow}
          </span>
        </SectionReveal>
      )}
      <SectionReveal delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 text-[var(--text-primary)]">
          {title}
        </h2>
      </SectionReveal>
      {subtitle && (
        <SectionReveal delay={0.2}>
        <p className="text-base md:text-lg max-w-2xl leading-relaxed text-[var(--text-secondary)] m-auto ">
          {subtitle}
        </p>
        </SectionReveal>
      )}
    </div>
  );
}