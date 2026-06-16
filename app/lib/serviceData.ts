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