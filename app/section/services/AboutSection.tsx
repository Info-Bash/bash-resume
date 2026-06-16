"use client";

import { motion } from "framer-motion";
import { Zap, Layers, HeartHandshake } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/app/ui/SectionWrapper";
import { fadeUp, slideInLeft, slideInRight, staggerContainerSlow } from "@/app/lib/motion";

const pillars = [
  {
    icon: Zap,
    title: "Fast & reliable",
    description: "Every solution we deliver is optimized for performance and built to scale as your business grows.",
  },
  {
    icon: Layers,
    title: "Tailored to you",
    description: "We don't use cookie-cutter templates. Every build is custom-designed to fit your business and audience.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term partnership",
    description: "We care about outcomes, not just deliverables. We're invested in what happens after launch.",
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="px-4 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--bg-secondary)" }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div variants={slideInLeft}>
            <span
              className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--accent-blue)", background: "var(--accent-glow)", border: "1px solid var(--border-accent)" }}
            >
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-5"
              style={{ color: "var(--text-primary)" }}>
              About BASH Digital
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              BASH Digital helps businesses transform ideas into reliable digital solutions. We build fast, scalable,
              and modern websites and web applications tailored to each business.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Whether you're a local service business looking to get online for the first time or an established company
              ready to upgrade your digital infrastructure - we meet you where you are and build what you actually need.
            </p>
          </motion.div>

          {/* Right: pillars */}
          <motion.div variants={staggerContainerSlow} className="flex flex-col gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200 hover:-translate-x-1"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--accent-glow)", border: "1px solid var(--border-accent)" }}
                  >
                    <Icon className="size-4" style={{ color: "var(--accent-blue)" }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
