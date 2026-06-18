"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/app/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/app/lib/motion";
import styles from "@/app/components/home.module.css";

const WHATSAPP_NUMBER = "2348072801183";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi BASH Digital! I'm interested in building a digital solution for my business.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function CTASection() {
  return (
    <SectionWrapper id="contact" className="px-4 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-(--border-accent) shadow-[0_8px_48px_rgba(37,99,235,0.08)] bg-[linear-gradient(135deg,rgba(37,99,235,0.08)_0%,rgba(124,58,237,0.08)_50%,rgba(8,145,178,0.08)_100%)]"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.10)_0%,transparent_70%)]" />

          {/* Top grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40 bg-[size:32px_32px]"
            style={{
              backgroundImage: `
                linear-gradient(var(--grid-line) 1px, transparent 1px),
                linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
              `,
            }}
          />

          <div className="relative z-10">
            <motion.span
              variants={fadeUp}
              className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-(--accent-blue) bg-(--accent-glow) border border-(--border-accent)"
            >
              Let's Work Together
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-5 text-(--text-primary)"
            >
              Ready to take your{" "}
              <span className={`${styles.gradientText} bg-clip-text`}>
                business online?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed text-(--text-secondary)"
            >
              Let's build a digital solution that helps your business grow. Reach out - we respond quickly.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary: Contact Us */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.30)]"
                aria-label="Contact BASH Digital on WhatsApp"
              >
                <FaWhatsapp className="size-6" />
                Chat on WhatsApp
              </a>

              {/* Secondary: Email */}
              <a
                href="mailto:abubakarbabatunde20@gmail.com"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 bg-(--bg-card) border border-(--border) text-(--text-primary)"
              >
                Send an Email
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Reassurance note */}
            <motion.p
              variants={fadeUp}
              className="mt-8 text-xs text-(--text-muted)"
            >
              No commitment required. We'll have a quick call to understand your needs first.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}