import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ellosaudemental.com.br"),
  title: {
    default: "Psiquiatra em Ribeirão Pires | Clínica Ello Saúde Mental",
    template: "%s | Clínica Ello Saúde Mental",
  },
  description:
    "Clínica de psiquiatria em Ribeirão Pires com atendimento presencial e online. Cuidado em ansiedade, depressão, TDAH, insônia, burnout e saúde mental.",
  keywords: [
    "psiquiatra em Ribeirão Pires",
    "psiquiatra em Mauá",
    "psiquiatra online",
    "psiquiatria presencial",
    "tratamento ansiedade",
    "tratamento depressão",
    "TDAH adulto",
    "insônia",
    "burnout",
    "Clínica Ello Saúde Mental",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Psiquiatra em Ribeirão Pires | Clínica Ello Saúde Mental",
    description:
      "Atendimento psiquiátrico presencial e online para saúde mental, ansiedade, depressão, TDAH, insônia e burnout.",
    url: "https://ellosaudemental.com.br",
    siteName: "Clínica Ello Saúde Mental",
    images: [
      {
        url: "/images/ello-logo.png",
        width: 1200,
        height: 630,
        alt: "Clínica Ello Saúde Mental",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psiquiatra em Ribeirão Pires | Clínica Ello Saúde Mental",
    description:
      "Atendimento psiquiátrico presencial e online em Ribeirão Pires e região.",
    images: ["/images/ello-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}