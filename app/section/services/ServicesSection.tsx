"use client";

import { motion } from "framer-motion";
import { Globe, AppWindow, ShoppingCart, CalendarCheck, LayoutDashboard } from "lucide-react";
import { SectionWrapper } from "@/app/ui/SectionWrapper";
import SectionReveal from "@/app/ui/SectionReveal";
import ServiceSectionHeading from "@/app/ui/serviceSectionHeader"
import { staggerContainerSlow } from "@/app/lib/motion";
import { services } from "@/app/lib/serviceData";
import styles from '@/app/components/home.module.css';
import clsx from "clsx";

const IconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={20} />,
  AppWindow: <AppWindow size={20} />,
  ShoppingCart: <ShoppingCart size={20} />,
  CalendarCheck: <CalendarCheck size={20} />,
  LayoutDashboard: <LayoutDashboard size={20} />,
}


export default function ServicesSection() {
  return (
    <SectionWrapper id="services" className="px-4 py-20 md:py-28">
      {/* subtle section background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[var(--bg-secondary)]"
      />

      <div className="relative max-w-6xl mx-auto">
        <ServiceSectionHeading
          eyebrow="What We Build"
          title="Digital solutions for every stage of your business"
          subtitle="From a simple presence online to complex business tools - we build what your business actually needs."
        />

        <motion.div
          variants={staggerContainerSlow}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => {
            const isFeatured = service.featured;

            return (
              <SectionReveal key={service.title} delay={i * 0.1} direction="left">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={clsx(
                    styles.glassCard,
                    "group relative p-6 rounded-2xl flex flex-col gap-4",
                    isFeatured && styles.featuredCard,
                    i === 0 && "sm:col-span-2 lg:col-span-1"
                  )}
                >
                  {isFeatured && (
                    <span
                      className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--accent-glow)] text-[var(--accent-blue)] border border-[var(--border-accent)]"
                    >
                      Most popular
                    </span>
                  )}

                  <div
                    className={clsx(
                      "inline-flex items-center justify-center w-12 h-12 rounded-xl",
                      styles.iconBox,
                      isFeatured && styles.featuredIcon
                    )}
                  >
                    {IconMap[service.icon]}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold mb-1.5 text-[var(--text-primary)]">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]" >
                      {service.description}
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
