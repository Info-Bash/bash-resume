"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    // Close menu first, then scroll after a short delay so the DOM settles
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={[
        "fixed top-0 left-0 right-0 z-[100] transition-[background,border-color] duration-300",
        scrolled
          ? "bg-[rgba(8,11,18,0.85)] backdrop-blur-[16px] border-b border-white/5"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono font-medium text-[1.1rem] text-[var(--accent-blue)] bg-transparent border-none cursor-pointer tracking-[-0.02em]"
        >
          &lt;BASH /&gt;
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={[
                    "relative bg-transparent border-none cursor-pointer font-mono text-[0.78rem] tracking-[0.05em] py-1 px-0 transition-colors duration-200",
                    isActive
                      ? "text-[var(--accent-blue)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--accent-blue)]",
                  ].join(" ")}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--accent-blue)] rounded-full"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer text-[var(--text-primary)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[rgba(8,11,18,0.97)] border-b border-white/5 overflow-hidden"
          >
            <ul className="list-none px-6 py-4 m-0 flex flex-col items-center">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="w-full"
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={[
                        "group relative bg-transparent border-none cursor-pointer font-mono text-[0.9rem] py-3 px-4 w-full text-center",
                        "border-b border-white/[0.04] transition-all duration-200 rounded-md",
                        isActive
                          ? "text-[var(--accent-blue)]"
                          : "text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--accent-glow)]",
                      ].join(" ")}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-[var(--accent-blue)] rounded-full" />
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}