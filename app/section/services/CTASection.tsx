"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/app/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/app/lib/motion";

const WHATSAPP_NUMBER = "2348000000000"; // Replace with your actual WhatsApp number
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
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(124,58,237,0.08) 50%, rgba(8,145,178,0.08) 100%)",
            border: "1px solid var(--border-accent)",
            boxShadow: "0 8px 48px rgba(37,99,235,0.08)",
          }}
        >
          {/* Background glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.10) 0%, transparent 70%)",
            }}
          />

          {/* Top grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(var(--grid-line) 1px, transparent 1px),
                linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10">
            <motion.span
              variants={fadeUp}
              className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--accent-blue)", background: "var(--accent-glow)", border: "1px solid var(--border-accent)" }}
            >
              Let's Work Together
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Ready to take your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple), var(--accent-cyan))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                business online?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Let's build a digital solution that helps your business grow. Reach out — we respond quickly.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary: Contact Us */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                aria-label="Contact BASH Digital on WhatsApp"
                style={{
                  background: "#25D366",
                  boxShadow: "0 4px 24px rgba(37,211,102,0.30)",
                }}
              >
                <MessageCircle className="size-5" />
                Chat on WhatsApp
              </a>

              {/* Secondary: Email */}
              <a
                href="mailto:hello@bashdigital.com"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                Send an Email
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Reassurance note */}
            <motion.p
              variants={fadeUp}
              className="mt-8 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              No commitment required. We'll have a quick call to understand your needs first.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
