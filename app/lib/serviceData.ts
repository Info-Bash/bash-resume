interface Problem {
  icon: string;
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    icon: "SearchX",
    title: "Customers can't find you online",
    description:
      "Most people search online before buying. Without a website, you're invisible to potential customers who are actively looking for what you offer.",
  },
  {
    icon: "TrendingDown",
    title: "Competitors look more professional",
    description:
      "Businesses with polished websites win more trust and close more deals - even when your service is better.",
  },
  {
    icon: "MessageCircleQuestion",
    title: "Customers ask the same questions",
    description:
      "Hours spent answering calls about your hours, pricing, or location could be handled automatically by a well-structured website.",
  },
  {
    icon: "LayoutGrid",
    title: "Hard to showcase what you offer",
    description:
      "Without a proper digital presence, your products and services are difficult to present in a compelling, organized way.",
  },
];


//==========================================
// 
//==========================================

interface Service {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    icon: "Globe",
    title: "Business Websites",
    description:
      "Professional websites that showcase your brand, services, location, and contact information - built to make a lasting first impression.",
    featured: true,
  },
  {
    icon: "AppWindow",
    title: "Web Applications",
    description:
      "Custom digital tools that improve the way your business operates - from internal workflows to customer-facing platforms.",
  },
  {
    icon: "ShoppingCart",
    title: "Online Stores",
    description:
      "E-commerce solutions that make selling products easier, with secure payments, inventory management, and a smooth checkout experience.",
  },
  {
    icon: "CalendarCheck",
    title: "Booking Systems",
    description:
      "Simple booking and management systems that let customers schedule appointments and manage their time with you - without phone calls.",
  },
  {
    icon: "LayoutDashboard",
    title: "Admin Dashboards",
    description:
      "Tools to manage your business from one place - view data, track performance, and control your operations with clarity.",
  },
];

//===================================

//===================================

interface Benefit {
  icon: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export const benefits: Benefit[] = [
  {
    icon: "ShieldCheck",
    title: "Build Customer Trust",
    description: "A professional website signals legitimacy. Customers are far more likely to buy from a business they can verify online.",
    stat: "81%",
    statLabel: "of shoppers research online before buying",
  },
  {
    icon: "Star",
    title: "Look More Professional",
    description: "Your website is often your first impression. A polished design communicates quality before a customer even speaks to you.",
    stat: "75%",
    statLabel: "of users judge credibility from design",
  },
  {
    icon: "Users",
    title: "Reach More Customers",
    description: "A website works for your business around the clock - attracting new customers while you focus on running your operations.",
    stat: "24/7",
    statLabel: "always-on visibility for your business",
  },
  {
    icon: "Clock",
    title: "Save Time",
    description: "Answer FAQs, accept bookings, and showcase your services automatically - reducing repetitive calls and messages.",
    stat: "5h+",
    statLabel: "saved per week on routine inquiries",
  },
  {
    icon: "TrendingUp",
    title: "Grow Your Brand Online",
    description: "Digital presence compounds over time - search rankings, reviews, and visibility all build on top of each other.",
    stat: "3×",
    statLabel: "more leads for businesses with websites",
  },
];


//=================================
//         portolio data
//=================================



interface Project {
  name: string;
  category: string;
  description: string;
  gradient: string;
  tag: string;
  image?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    name: "Task Management System",
    category: "Web Application",
    description:
      "A modern task management platform designed to help teams organize work, track progress, and improve productivity with secure authentication, scalable backend architecture, and efficient data management.",
    gradient: "from-orange-400/20 to-rose-400/20",
    tag: "Business Productivity",
    image: "/task-management-app.png",
    link: "https://task-management-app-sigma-eosin.vercel.app",
  },
  {
    name: "Forum Wilhering",
    category: "Content & Event Platform",
    description:
      "A community-focused website featuring event publishing, news updates, and content management tools that help keep visitors informed and engaged with fresh information.",
    gradient: "from-blue-400/20 to-indigo-400/20",
    tag: "Blog & Events",
    image: "/forumwilhering.png",
    link: "https://forum-wilhering.at",
  },
  {
    name: "Dashboard Application",
    category: "Business Dashboard",
    description:
      "A production-ready dashboard application designed for managing business data, tracking analytics, and improving decision-making with authentication, data visualization, search, filtering, and full CRUD operations.",
    gradient: "from-purple-400/20 to-pink-400/20",
    tag: "SaaS Platform",
    image: "/nextjs-dashboard-project.png",
    link: "https://nextjs-dashboard-zeta-flax-23.vercel.app",
  },
  {
    name: "Animal Solutions",
    category: "Business Website",
    description:
      "A professional business website built for an animal health and supply company, showcasing their products, services, and solutions while improving customer trust and online presence.",
    gradient: "from-emerald-400/20 to-cyan-400/20",
    tag: "Animal & Pet Care",
    image: "/animal-solutions.png",
    link: "https://www.animalsolutionsgroup.com",
  },
  {
    name: "Zotuo",
    category: "Insurance Website",
    description:
      "A modern insurance company website built to communicate trust, reliability, and protection. It presents insurance services and customer-focused content designed to guide users toward choosing the right coverage with confidence.",
    gradient: "from-amber-400/20 to-yellow-400/20",
    tag: "Insurance & Finance",
    image: "/zotuo.png",
    link: "https://info-bash.github.io/zotuo-website",
  },
  {
    name: "Custom Handiwork",
    category: "Home Services Platform",
    description:
      "A home improvement platform that connects users with renovation and repair services, allowing them to explore solutions, request quotes, and streamline the process of managing home enhancement projects.",
    gradient: "from-sky-400/20 to-blue-400/20",
    tag: "Home Improvement",
    image: "/customhandiwork.png",
    link: "https://info-bash.github.io/customhandiwork",
  },
];


//=============================
//        process data 
//============================


interface Step {
  icon: string;
  number: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    icon: "Lightbulb",
    number: "01",
    title: "Understand Your Business",
    description:
      "We start with a conversation - learning about your business, your goals, your customers, and the problem you need solved. No assumptions.",
  },
  {
    icon: "Map",
    number: "02",
    title: "Plan The Solution",
    description:
      "We map out the right approach - what to build, how it should work, and what success looks like for your specific situation.",
  },
  {
    icon: "Code2",
    number: "03",
    title: "Design & Development",
    description:
      "We build your solution with clean design and reliable code, keeping you in the loop with regular updates throughout the process.",
  },
  {
    icon: "Rocket",
    number: "04",
    title: "Launch & Support",
    description:
      "We go live together - and we stick around to make sure everything runs smoothly. Your success after launch matters just as much.",
  },
];



//==============================
//    About Us pillar data
//=============================

interface Pillar {
  icon: string;
  title: string;
  description: string;
}

export const pillars: Pillar[] = [
  {
    icon: "Zap",
    title: "Fast & reliable",
    description: "Every solution we deliver is optimized for performance and built to scale as your business grows.",
  },
  {
    icon: "Layers",
    title: "Tailored to you",
    description: "We don't use cookie-cutter templates. Every build is custom-designed to fit your business and audience.",
  },
  {
    icon: "HeartHandshake",
    title: "Long-term partnership",
    description: "We care about outcomes, not just deliverables. We're invested in what happens after launch.",
  },
];