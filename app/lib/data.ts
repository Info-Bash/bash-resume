
// ============================================================
// Portfolio Data — Single source of truth for all content
// ============================================================

export const personalInfo = {
  name: "Bashir",
  title: "Full-Stack Developer",
  email: "abubakarbabatunde20@gmail.com",
  github: "https://github.com/Info-Bash",
  linkedin: "https://linkedin.com/in/abubakar-bashir-4408a040b",
  intro:
    "I build scalable web applications using modern technologies including Next.js, NestJS, TypeScript, and PostgreSQL.",
  about: [
    "I'm a passionate full-stack developer with a deep love for crafting elegant, efficient software solutions. My journey in software development has been driven by an insatiable curiosity and a commitment to continuous learning.",
    "I specialize in building scalable web applications from the ground up - from designing intuitive frontend interfaces with React and Next.js, to architecting robust backend APIs with NestJS and PostgreSQL. I believe great software is both technically sound and delightful to use.",
    "When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and sharpening my skills through real-world projects. I'm always looking for opportunities to collaborate with talented teams to build impactful products.",
  ],
};

export const stats = [
  { label: "Projects Completed", value: "20+", icon: "Code2" },
  { label: "Technologies Used", value: "15+", icon: "Layers" },
  { label: "GitHub Contributions", value: "500+", icon: "GitBranch" },
  { label: "Months Experience", value: "24+", icon: "Calendar" },
];

// ============================================================
// Tech Stack
// ============================================================
export type TechCategory = "Frontend" | "Backend" | "Database" | "Tools";

export interface Tech {
  name: string;
  category: TechCategory;
  icon: string; // react-icons identifier
  color: string; // tailwind gradient class pair
}

export const techStack: Tech[] = [
  { name: "React",       category: "Frontend", icon: "SiReact",       color: "#61DAFB" },
  { name: "Next.js",     category: "Frontend", icon: "SiNextdotjs",   color: "#000000" },
  { name: "TypeScript",  category: "Frontend", icon: "SiTypescript",  color: "#3178C6" },
  { name: "Tailwind CSS",category: "Frontend", icon: "SiTailwindcss", color: "#06B6D4" },
  { name: "Bootstrap",   category: "Frontend", icon: "SiBootstrap",   color: "#563D7C" },
  { name: "Node.js",     category: "Backend",  icon: "SiNodedotjs",   color: "#339933" },
  { name: "NestJS",      category: "Backend",  icon: "SiNestjs",      color: "#E0234E" },
  { name: "Express",     category: "Backend",  icon: "SiExpress",     color: "#000000" },
  { name: "PostgreSQL",  category: "Database", icon: "SiPostgresql",  color: "#4169E1" },
  { name: "Prisma",      category: "Database", icon: "SiPrisma",      color: "#5A67D8" },
  { name: "MongoDB",     category: "Database", icon: "SiMongodb",     color: "#47A248" },
  { name: "Git",         category: "Tools",    icon: "SiGit",         color: "#F05032" },
  { name: "GitHub",      category: "Tools",    icon: "SiGithub",      color: "#000000" },
  { name: "Postman",     category: "Tools",    icon: "SiPostman",     color: "#FF6C37" },
];

// ============================================================
// Projects
// ============================================================
export interface Project {
  id: number;
  title: string;
  image?: string;
  description: string;
  longDescription: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Task Management System",
    image: "/task-management-app.png",
    description: "A full-stack task management application built to handle real-world usage with scalable backend architecture, server-side data handling, and secure authentication.",
    longDescription:
      "This application allows users to efficiently manage tasks with features like authentication, role-based access control, and optimized data fetching using server-side filtering and pagination. It is designed with a clear separation of concerns between the frontend and backend, following best practices used in modern web applications.",
    tags: ["React", "Express", "Bootstrap", "Postman", "JWT", "Bcrypt", "MongoDB", "Mongoose"],
    liveUrl: "https://task-management-app-sigma-eosin.vercel.app",
    githubUrl: "https://github.com/Info-Bash/Task-Management-App",
    featured: false,
    gradient: "from-amber-500 via-orange-500 to-red-600",
  },

  {
    id: 2,
    title: "E-Commerce App",
    image: "/ecommerce-app.png",
    description: "A basic ecommerce App, it allows users to browse products, search and filter products, place orders, and track deliveries.",
    longDescription:
      "A full-stack ecommerce application built with React, TypeScript, Node.js, and Express. The application allows users to browse products, manage cart items, place orders, and track deliveries through a responsive user interface and RESTful backend APIs.",
    tags: ["React", "TypeScript", "Custom CSS", "Express", "Postman", "REST API", "SQLite"],
    liveUrl: "https://ecommerce-app-topaz-six-31.vercel.app",
    githubUrl: "https://github.com/Info-Bash/ecommerce-app",
    featured: false,
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
  },
  
  {
    id: 3,
    title: "Next.js Dashboard Application",
    image: "/nextjs-dashboard-project.png",
    description: "Build a modern, production-ready dashboard application using Next.js. Create responsive user interfaces, manage data, implement authentication, handle server-side rendering, and build scalable full-stack features with modern web development tools.",
    longDescription:
      "Build a modern, production-ready dashboard application using Next.js. The project simulates a real-world business dashboard where users can view analytics and statistics, Manage customers and records, Create, update, and delete data, Search and filter information, Authenticate and authorize users, Visualize business data.",
    tags: ["Next.js", "Next.js Server", "TypeScript", "Tailwind CSS", "PostgreSQL", "JWT", "Bcrypt", "NextAuth.js"],
    liveUrl: "https://nextjs-dashboard-zeta-flax-23.vercel.app",
    githubUrl: "https://github.com/Info-Bash/nextjs-dashboard",
    featured: false,
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
  },

  {
    id: 4,
    title: "Ajo Savings Platform",
    description: "Build a modern digital Ajo platform that enables users to create, join, and manage rotating savings groups online. Learn how to develop a secure full-stack fintech application with group management, contribution tracking, payout scheduling, notifications, and payment integration using modern web technologies.",
    longDescription:
      "Ajo is a digital savings and contribution platform that modernizes the traditional rotating savings system by providing a secure and convenient way for individuals and groups to manage their contributions online. The application enables users to create or join savings groups, track contributions, manage payout cycles, and monitor their financial activities through an intuitive dashboard. Built with modern full-stack technologies, the platform focuses on transparency, automation, and ease of use while delivering a reliable financial experience for both group administrators and members. Through this project, developers will gain practical experience building a real-world fintech application that combines user management, financial transactions, authentication, and scalable system design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "NestJS", "JWT", "Bcrypt", "Socket.IO", "PostgreSQL", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
  },
];

// ============================================================
// Experience Timeline
// ============================================================
export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  tags: string[];
}

export const timeline: TimelineItem[] = [
  {
    id: 1,
    year: "2022",
    title: "Started Full-Stack Development Journey",
    description:
      "Began my self-directed learning path into web development, starting with HTML, CSS, and JavaScript fundamentals. Built my first interactive web pages and fell in love with the craft.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    year: "2023",
    title: "Mastered React & Frontend Ecosystem",
    description:
      "Deep-dived into React, learning component architecture, hooks, state management, and the modern frontend tooling ecosystem. Built several UI-heavy projects to solidify knowledge.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    year: "2024",
    title: "Explored Next.js & Full-Stack Patterns",
    description:
      "Adopted Next.js for production-grade applications. Learned server-side rendering, API routes, App Router, and performance optimization techniques.",
    tags: ["Next.js", "SSR", "API Routes"],
  },
  {
    id: 4,
    year: "2025",
    title: "Backend Development with NestJS",
    description:
      "Expanded skills to backend engineering with Node.js, NestJS, and PostgreSQL. Learned database design, REST API architecture, authentication flows, and ORM patterns with Prisma.",
    tags: ["NestJS", "PostgreSQL", "Prisma", "JWT"],
  },
  {
    id: 5,
    year: "2026",
    title: "Building Real-World Projects",
    description:
      "Synthesized frontend and backend expertise to build complete, production-ready applications. Delivered the Ajo Savings Platform, E-Commerce Dashboard, and Task Management System.",
    tags: ["Full-Stack", "Production", "Open Source"],
  },
];
