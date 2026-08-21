import type { MetadataRoute } from "next";

const siteUrl = "https://ellosaudemental.com.br";

const routes = [
  "",
  "/conteudos",
  "/psiquiatra-online",
  "/tratamento-ansiedade",
  "/tratamento-depressao",
  "/tratamento-burnout",
  "/tratamento-insonia",
  "/tratamento-tdah",
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
  "/autismo-em-adultos",
  "/tdah-infantil",
  "/ansiedade-infantil",
  "/transtorno-bipolar",
  "/sindrome-do-panico",
  "/toc",
  "/psiquiatra-infantil",
  "/primeira-consulta-psiquiatrica",
  "/quando-procurar-psiquiatra",
  "/psiquiatra-online-sao-paulo",
  "/psiquiatra-online-abc",
  "/psiquiatra-online-ribeirao-pires",
  "/psiquiatra-online-santo-andre",
  "/psiquiatra-online-sao-bernardo",
  "/psiquiatra-online-maua",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route === "/conteudos" ? 0.9 : 0.8,
  }));
}
