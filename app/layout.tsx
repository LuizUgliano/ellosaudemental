import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Script from "next/script";
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
    default: "Clínica Ello Saúde Mental | Psiquiatria Online",
    template: "%s | Clínica Ello Saúde Mental",
  },
  description:
    "Clínica de saúde mental com atendimento psiquiátrico online. Cuidado em ansiedade, depressão, TDAH, insônia, burnout e saúde mental.",
  keywords: [
    "psiquiatra online",
    "psiquiatria online",
    "consulta psiquiátrica online",
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
    title: "Clínica Ello Saúde Mental | Psiquiatria Online",
    description:
      "Atendimento psiquiátrico online para saúde mental, ansiedade, depressão, TDAH, insônia e burnout.",
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
    title: "Clínica Ello Saúde Mental | Psiquiatria Online",
    description:
      "Atendimento psiquiátrico online com acolhimento, segurança e cuidado individualizado.",
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
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NQ1YED49D4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NQ1YED49D4');
          `}
        </Script>
        <Script
  id="schema-ello"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalOrganization",
          "@id": "https://ellosaudemental.com.br/#organization",
          name: "Clínica Ello Saúde Mental",
          url: "https://ellosaudemental.com.br",
          logo: "https://ellosaudemental.com.br/images/ello-logo.png",
          email: "clinicaello.saude@gmail.com",
          telephone: "+55 11 97630-8934",
          sameAs: ["https://www.instagram.com/ello_saudemental"],
          medicalSpecialty: "Psychiatry",
          areaServed: "Brasil",
          availableService: [
            "Consulta psiquiátrica online",
            "Telemedicina em psiquiatria",
            "Atendimento em saúde mental",
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
          ],
          employee: [
            {
              "@id": "https://ellosaudemental.com.br/#dra-nathalia",
            },
            {
              "@id": "https://ellosaudemental.com.br/#dra-fernanda",
            },
          ],
        },
        {
          "@type": "Physician",
          "@id": "https://ellosaudemental.com.br/#dra-nathalia",
          name: "Dra. Nathália Oliveira Costa",
          honorificPrefix: "Dra.",
          medicalSpecialty: "Psychiatry",
          identifier: "CRM-SP 157028",
          worksFor: {
            "@id": "https://ellosaudemental.com.br/#organization",
          },
        },
        {
          "@type": "Physician",
          "@id": "https://ellosaudemental.com.br/#dra-fernanda",
          name: "Dra. Fernanda Matos",
          honorificPrefix: "Dra.",
          medicalSpecialty: "Psychiatry",
          identifier: "CRM-SP 264039",
          worksFor: {
            "@id": "https://ellosaudemental.com.br/#organization",
          },
        },
        {
          "@type": "WebSite",
          "@id": "https://ellosaudemental.com.br/#website",
          name: "Clínica Ello Saúde Mental",
          url: "https://ellosaudemental.com.br",
          publisher: {
            "@id": "https://ellosaudemental.com.br/#organization",
          },
        },
      ],
    }),
  }}
/>

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}