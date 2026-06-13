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
  title: "Psiquiatria Presencial e Online | Clínica Ello Saúde Mental",
  description:
  "Psiquiatria presencial e telemedicina. Atendimento especializado para adultos, crianças e adolescentes com acolhimento e cuidado individualizado.",
  openGraph: {
    title: "Psiquiatria Presencial e Online | Clínica Ello Saúde Mental",
  description:
  "Psiquiatria presencial e telemedicina. Atendimento especializado para adultos, crianças e adolescentes com acolhimento e cuidado individualizado.",
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
    title: "Psiquiatria Presencial e Online | Clínica Ello Saúde Mental",
  description:
  "Psiquiatria presencial e telemedicina. Atendimento especializado para adultos, crianças e adolescentes com acolhimento e cuidado individualizado.",
    images: ["/images/ello-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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