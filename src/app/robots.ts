import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allow AI crawlers so the site can be cited/found in AI
      // search results (ChatGPT/OAI-SearchBot, Google AI, Perplexity, etc.)
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${BUSINESS.url}/sitemap.xml`,
  };
}
