"use client";
import SectionReveal from "./SectionReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <SectionReveal>
        <span className="font-mono-custom text-xs tracking-widest uppercase text-[var(--accent-blue)]">
          {label}
        </span>
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <h2 className="font-display font-bold mt-3 mb-4 leading-[1.1] text-[var(--text-primary)] text-[clamp(2rem,5vw,3.5rem)]">
          {title}
        </h2>
      </SectionReveal>
      {subtitle && (
        <SectionReveal delay={0.2}>
          <p className="max-w-xl mx-auto text-[var(--text-secondary)] leading-[1.7]">
            {subtitle}
          </p>
        </SectionReveal>
      )}
    </div>
  );
}