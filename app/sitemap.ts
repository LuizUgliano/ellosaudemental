import type { MetadataRoute } from "next";

const siteUrl = "https://ellosaudemental.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/conteudos",
    "/psiquiatra-online",
    "/ansiedade",
    "/depressao",
    "/burnout",
    "/insonia",
    "/tdah",
    "/transtornos-do-humor",
    "/ansiedade-falta-de-ar",
    "/ansiedade-a-noite",
    "/crise-de-ansiedade",
    "/burnout-ou-estresse",
    "/como-saber-se-tenho-burnout",
    "/insonia-cronica",
    "/tdah-em-adultos",
    "/tdah-em-mulheres",
    "/tag",
    "/fobia-social",
    "/borderline",
    "/autismo-infantil",
    "/tdah-infantil",
    "/ansiedade-infantil",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}