"use client";
import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "@/app/lib/data";
import ThemeToggle  from "@/app/ui/theme-toggle";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/5 py-12 pb-8 relative">
      {/* Gradient top edge */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[rgba(99,179,237,0.4)] to-transparent"
      />

      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
        {/* Logo + copyright */}
        <div>
          <div className="font-mono font-medium text-[1.1rem] text-[var(--accent-blue)] mb-2">
            &lt;BASH /&gt;
          </div>
          <p className="font-mono text-[0.72rem] text-[var(--text-muted)] tracking-[0.04em]">
            © {new Date().getFullYear()} Bashir. Built with Next.js
          </p>
        </div>

        {/* Social icons */}
        <div className="flex gap-4 items-center">
          {[
            { href: personalInfo.github, icon: <GitBranch size={18} />, label: "GitHub" },
            { href: personalInfo.linkedin, icon: <Link2 size={18} />, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} />, label: "Email" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              aria-label={link.label}
              className="w-10 h-10 rounded-[10px] bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-[var(--text-secondary)] no-underline transition-[color,border-color] duration-200"
            >
              {link.icon}
            </motion.a>
          ))}

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.1 }}
            aria-label="Back to top"
            className="w-10 h-10 rounded-[10px] bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-[var(--accent-blue)] cursor-pointer ml-2"
          >
            <ArrowUp size={18} />
          </motion.button>

          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}