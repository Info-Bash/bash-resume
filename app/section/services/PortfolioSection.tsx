"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SectionWrapper } from "@/app/ui/SectionWrapper";
import ServiceSectionHeading from "@/app/ui/serviceSectionHeader";
//import { fadeUp, staggerContainerSlow } from "@/app/lib/motion";
import { projects } from "@/app/lib/serviceData";
import styles from "@/app/components/home.module.css";


export default function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio" className="px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-(--bg-secondary)" />

      <div className="relative max-w-6xl mx-auto">
        <ServiceSectionHeading
          eyebrow="Case Studies"
          title="Digital solutions we create"
          subtitle="Real problems. Purpose-built solutions. Businesses that now show up online exactly the way they deserve to."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => (
              <motion.article
                key={project.name}
                layout
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0.9, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 12 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.05,
                  ease: [0.23, 1, 0.32, 1],
                }}
                whileHover={{ y: -6, scale: 1.04 }}

                className={`${styles.glassCard} group relative overflow-hidden flex flex-col`}
              >
                {/* Image / placeholder */}
                <div
                  className={`relative h-44 w-full bg-gradient-to-br ${project.gradient} overflow-hidden`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={400}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/40 flex items-center justify-center text-2xl font-bold text-(--text-primary) opacity-40">
                        {project.name[0]}
                      </div>
                    </div>
                  )}

                  {/* Overlay so tag stays legible over photos */}
                  {project.image && (
                    <div className="absolute inset-0 bg-black/20" />
                  )}

                  {/* Industry tag */}
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--bg-card)]/65 text-(--text-primary) backdrop-blur-md">
                    {project.tag}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-medium text-(--accent-blue) mb-1">
                    {project.category}
                  </span>

                  <h3 className="text-base font-semibold text-(--text-primary) mb-2">
                    {project.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-(--text-secondary) flex-1">
                    {project.description}
                  </p>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View project: ${project.name}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-(--accent-blue) transition-opacity duration-200 hover:opacity-70"
                    >
                      View Project
                      <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-(--text-muted) cursor-default select-none">
                      Coming Soon
                      <ArrowUpRight className="size-4 opacity-40" />
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}