import { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import HeroSection from "@/app/section/services/HeroSection";
import ProblemsSection from "@/app/section/services/ProblemsSection";
import ServicesSection from "@/app/section/services/ServicesSection";
import BenefitsSection from "@/app/section/services/BenefitsSection";
import PortfolioSection from "@/app/section/services/PortfolioSection";
import ProcessSection from "@/app/section/services/ProcessSection";
import AboutSection from "@/app/section/services/AboutSection";
import CTASection from "@/app/section/services/CTASection";
import FloatingWhatsApp from "@/app/ui/FloatingWhatsApp";
import Footer from "../components/layout/services/Footer";
import styles from "@/app/components/home.module.css";

export const metadata: Metadata = {
  title: "Hire a Web Developer in Lagos | Next.js Website Development",
  description:
    "Need a website for your business? I build fast, modern, and responsive websites for companies in Lagos and Nigeria using Next.js and React.",

  alternates:{
    canonical: "https://bash-resume.vercel.app/website-development"
  }
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function LandingPage() {
  return (
    <main
      className="relative min-h-screen antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]"
    >
      <Navbar
        navLinks={navLinks}
      />

      <HeroSection />

      {/* Divider */}
      <div className={`${styles.sectionDivider} mb-0`} />

      <ProblemsSection />

      {/* Divider */}
      <div className={`${styles.sectionDivider} mb-0`} />

      <ServicesSection />

      {/* Divider */}
      <div className={`${styles.sectionDivider} mb-0`} />

      <BenefitsSection />

      {/* Divider */}
      <div className={`${styles.sectionDivider} mb-0`} />

      <PortfolioSection />

      {/* Divider */}
      <div className={`${styles.sectionDivider} mb-0`} />

      <ProcessSection />

      {/* Divider */}
      <div className={`${styles.sectionDivider} mb-0`} />

      <AboutSection />

      {/* Divider */}
      <div className={`${styles.sectionDivider} mb-0`} />

      <CTASection />

      <Footer />
      
      <FloatingWhatsApp />
    </main>
  );
}
