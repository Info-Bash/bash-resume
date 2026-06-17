"use client";

import { motion } from "framer-motion";
import { steps } from "@/app/lib/serviceData";
import SectionReveal from "@/app/ui/SectionReveal";
import ServiceSectionHeading from "@/app/ui/serviceSectionHeader";
import { Lightbulb, Map, Code2, Rocket } from "lucide-react";
import { SectionWrapper } from "@/app/ui/SectionWrapper";
import { staggerContainerSlow } from "@/app/lib/motion";

const IconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb size={20} />,
  Map: <Map size={20} />,
  Code2: <Code2 size={20} />,
  Rocket: <Rocket size={20} />,
}

export default function ProcessSection() {
  return (
    <SectionWrapper id="process" className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <ServiceSectionHeading
          eyebrow="How We Work"
          title="A clear process from start to finish"
          subtitle="No confusion, no surprises. Every project follows a structured path that keeps you informed at every stage."
        />

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Connector line */}
          <div
            className="absolute top-9 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,var(--border-accent),var(--border-accent),transparent)]"
          />

          <motion.div variants={staggerContainerSlow} className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              return (
                <SectionReveal
                  key={step.title}
                  delay={i * 0.1}
                >
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Step node */}
                    <div
                      className="relative z-10 w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-6 text-[var(--accent-blue)] bg-[var(--bg-card)] border border-[var(--border-accent)] shadow-[0_0_0_6px_var(--bg-primary),_0_4px_20px_rgba(37,99,235,0.10)]"
                    >
                      {IconMap[step.icon]}
                      <span
                        className="absolute -top-2 -right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[var(--accent-blue)] text-white"
                      >
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold mb-2 text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {step.description}
                    </p>
                  </motion.div>
                </SectionReveal>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile vertical timeline */}
        <motion.div variants={staggerContainerSlow} className="md:hidden relative flex flex-col gap-0">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <SectionReveal
                key={step.title}
                delay={i * 0.1}
              >
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="relative flex gap-5">

                  {/* Left column: node + line */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 relative z-10 text-[var(--accent-blue)] bg-[var(--bg-card)] border border-[var(--border-accent)] shadow-[0_4px_12px_rgba(37,99,235,0.10)]"
                    >
                      {IconMap[step.icon]}
                    </div>
                    {!isLast && (
                      <div
                        className="w-px flex-1 mt-1 bg-[var(--border-accent)] min-h-[40px]"
                      />
                    )}
                  </div>

                  {/* Right column: text */}
                  <div className="pb-8 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[var(--accent-blue)]">
                        {step.number}
                      </span>
                      <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
