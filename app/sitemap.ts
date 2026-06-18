// app/sitemap.ts

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bash-resume.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://bash-resume.vercel.app/webite-development",
      lastModified: new Date(),
    },
  ];
}