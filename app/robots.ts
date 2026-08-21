import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ellosaudemental.com.br/sitemap.xml",
    host: "https://ellosaudemental.com.br",
  };
}
