"use client";

import { motion } from "framer-motion";
import { Lightbulb, Map, Code2, Rocket } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/app/ui/SectionWrapper";
import { fadeUp, staggerContainerSlow } from "@/app/lib/motion";

interface Step {
  icon: React.ElementType;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Understand Your Business",
    description:
      "We start with a conversation — learning about your business, your goals, your customers, and the problem you need solved. No assumptions.",
  },
  {
    icon: Map,
    number: "02",
    title: "Plan The Solution",
    description:
      "We map out the right approach — what to build, how it should work, and what success looks like for your specific situation.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Design & Development",
    description:
      "We build your solution with clean design and reliable code, keeping you in the loop with regular updates throughout the process.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description:
      "We go live together — and we stick around to make sure everything runs smoothly. Your success after launch matters just as much.",
  },
];

export default function ProcessSection() {
  return (
    <SectionWrapper id="process" className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear process from start to finish"
          subtitle="No confusion, no surprises. Every project follows a structured path that keeps you informed at every stage."
        />

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Connector line */}
          <div
            className="absolute top-9 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, var(--border-accent), var(--border-accent), transparent)" }}
          />

          <motion.div variants={staggerContainerSlow} className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.title} variants={fadeUp} className="relative flex flex-col items-center text-center">
                  {/* Step node */}
                  <div
                    className="relative z-10 w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-accent)",
                      boxShadow: "0 0 0 6px var(--bg-primary), 0 4px 20px rgba(37,99,235,0.10)",
                    }}
                  >
                    <Icon className="size-6" style={{ color: "var(--accent-blue)" }} />
                    <span
                      className="absolute -top-2 -right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                      style={{ background: "var(--accent-blue)", color: "white" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile vertical timeline */}
        <motion.div variants={staggerContainerSlow} className="md:hidden relative flex flex-col gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <motion.div key={step.title} variants={fadeUp} className="relative flex gap-5">
                {/* Left column: node + line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 relative z-10"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-accent)",
                      boxShadow: "0 4px 12px rgba(37,99,235,0.10)",
                    }}
                  >
                    <Icon className="size-5" style={{ color: "var(--accent-blue)" }} />
                  </div>
                  {!isLast && (
                    <div
                      className="w-px flex-1 mt-1"
                      style={{ background: "var(--border-accent)", minHeight: "40px" }}
                    />
                  )}
                </div>

                {/* Right column: text */}
                <div className="pb-8 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold" style={{ color: "var(--accent-blue)" }}>{step.number}</span>
                    <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
