// app/sitemap.ts

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bash-resume.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://bash-resume.vercel.app/website-development",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}