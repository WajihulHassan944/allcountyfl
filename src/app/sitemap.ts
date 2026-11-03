import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BUSINESS.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${BUSINESS.url}/bathroom-remodeling`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
