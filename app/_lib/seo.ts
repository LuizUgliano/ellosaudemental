import type { Metadata } from "next";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
};

/** Metadata with template-friendly title, canonical and Open Graph. */
export function buildPageMetadata({
  title,
  description,
  path,
}: PageSeoInput): Metadata {
  const canonical = path === "/" ? "/" : path;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: "pt_BR",
      type: "website",
      siteName: "Clínica Ello Saúde Mental",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
