"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SectionWrapper, SectionHeading } from "@/app/ui/SectionWrapper";
import { fadeUp, staggerContainerSlow } from "@/app/lib/motion";

interface Project {
  name: string;
  category: string;
  description: string;
  gradient: string;
  tag: string;
  image?: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: "Bloom Bakery Co.",
    category: "Business Website",
    description:
      "A full-service bakery increased online orders by presenting their menu, story, and contact details in a clean, mobile-first website.",
    gradient: "from-orange-400/20 to-rose-400/20",
    tag: "Food & Beverage",
    image: "/projects/bloom-bakery.jpg",
    link: "https://example.com/bloom-bakery",
  },
  {
    name: "ClearPath Consultants",
    category: "Web Application",
    description:
      "A financial consulting firm replaced their manual intake process with a secure client portal that manages leads and document uploads.",
    gradient: "from-blue-400/20 to-indigo-400/20",
    tag: "Finance",
    image: "/projects/clearpath.jpg",
    link: "https://example.com/clearpath",
  },
  {
    name: "Vela Beauty Studio",
    category: "Booking System",
    description:
      "A beauty studio eliminated phone-tag with clients by launching a booking system that handles scheduling, reminders, and payments.",
    gradient: "from-purple-400/20 to-pink-400/20",
    tag: "Health & Beauty",
    image: "/projects/vela-beauty.jpg",
    link: "https://example.com/vela-beauty",
  },
  {
    name: "UrbanFit Apparel",
    category: "Online Store",
    description:
      "A local clothing brand moved their sales online with a fast, branded e-commerce store that ships nationwide.",
    gradient: "from-emerald-400/20 to-cyan-400/20",
    tag: "Retail",
    image: "/projects/urbanfit.jpg",
    link: "https://example.com/urbanfit",
  },
  {
    name: "Landmark Properties",
    category: "Admin Dashboard",
    description:
      "A real estate agency unified their property listings, team assignments, and client communications into one management dashboard.",
    gradient: "from-amber-400/20 to-yellow-400/20",
    tag: "Real Estate",
    image: "/projects/landmark.jpg",
    link: "https://example.com/landmark",
  },
  {
    name: "SwiftDeliver Lagos",
    category: "Web Application",
    description:
      "A logistics startup launched a delivery tracking platform giving customers real-time visibility and reducing support inquiries.",
    gradient: "from-sky-400/20 to-blue-400/20",
    tag: "Logistics",
    image: "/projects/swiftdeliver.jpg",
    link: "https://example.com/swiftdeliver",
  },
];

export default function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio" className="px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-(--bg-secondary)" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Case Studies"
          title="Digital solutions we create"
          subtitle="Real problems. Purpose-built solutions. Businesses that now show up online exactly the way they deserve to."
        />

        <motion.div
          variants={staggerContainerSlow}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={fadeUp}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col bg-(--bg-card) border border-(--border) shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              {/* Image / placeholder */}
              <div
                className={`relative h-44 w-full bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/85 text-(--text-primary) backdrop-blur-md">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}