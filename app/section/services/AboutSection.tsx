"use client";

import { motion } from "framer-motion";
import { Zap, Layers, HeartHandshake } from "lucide-react";
import { pillars } from "@/app/lib/serviceData";
import SectionReveal from "@/app/ui/SectionReveal";
import { SectionWrapper } from "@/app/ui/SectionWrapper";
import { staggerContainerSlow } from "@/app/lib/motion";

const IconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={20} />,
  Layers: <Layers size={20} />,
  HeartHandshake: <HeartHandshake size={20} />,
}


export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-(--bg-secondary)" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            className="text-center lg:text-left">
            <SectionReveal>
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-(--accent-blue) bg-(--accent-glow) border border-(--border-accent)">
                About Us
              </span>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-5 text-(--text-primary)">
                About BASH Digital
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-base leading-relaxed mb-4 text-[var(--text-secondary)]">
                BASH Digital helps businesses turn ideas into fast, reliable, and scalable digital products.
                We design and build modern websites and web applications tailored to real business needs.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                Whether you're a local service business going online for the first time or an established company
                upgrading your digital systems, We work closely with you to design and build solutions that fit your business goals and scale with growth.
              </p>
            </SectionReveal>
          </motion.div>

          {/* Right: pillars */}
          <motion.div variants={staggerContainerSlow} className="flex flex-col gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <SectionReveal
                  key={pillar.title}
                  delay={i * 0.1}
                >
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200 hover:-translate-x-1 bg-(--bg-card) border border-(--border) shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-(--accent-glow) border border-(--border-accent) text-(--accent-blue)">
                      {IconMap[pillar.icon]}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1 text-(--text-primary)">
                        {pillar.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-(--text-secondary)">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                </SectionReveal>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}