import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conteúdos sobre Saúde Mental | Clínica Ello Saúde Mental",
  description: "Biblioteca de conteúdos sobre saúde mental, psiquiatria online, transtornos, sintomas e dúvidas frequentes.",
};

const sections = [
  {
    title: "Mais condições e transtornos",
    items: [
      ["Transtorno Bipolar", "/transtorno-bipolar"],
      ["TOC", "/toc"],
      ["Síndrome do Pânico", "/sindrome-do-panico"],
      ["TAG", "/tag"],
      ["Fobia Social", "/fobia-social"],
      ["Borderline", "/borderline"],
      ["Autismo infantil", "/autismo-infantil"],
      ["Autismo em adultos", "/autismo-em-adultos"],
    ],
  },
  {
    title: "Sintomas e dúvidas frequentes",
    items: [
      ["Ansiedade e falta de ar", "/ansiedade-falta-de-ar"],
      ["Ansiedade à noite", "/ansiedade-a-noite"],
      ["Crise de ansiedade", "/crise-de-ansiedade"],
      ["Insônia crônica", "/insonia-cronica"],
      ["Burnout ou estresse?", "/burnout-ou-estresse"],
      ["Como saber se tenho burnout?", "/como-saber-se-tenho-burnout"],
    ],
  },
  {
    title: "Infância, adolescentes e adultos",
    items: [
      ["Psiquiatra infantil", "/psiquiatra-infantil"],
      ["TDAH infantil", "/tdah-infantil"],
      ["Ansiedade infantil", "/ansiedade-infantil"],
      ["TDAH em adultos", "/tdah-em-adultos"],
      ["TDAH em mulheres", "/tdah-em-mulheres"],
    ],
  },
  {
    title: "Consulta psiquiátrica online",
    items: [
      ["Psiquiatra online", "/psiquiatra-online"],
      ["Primeira consulta psiquiátrica", "/primeira-consulta-psiquiatrica"],
      ["Quando procurar um psiquiatra", "/quando-procurar-psiquiatra"],
    ],
  },
];

export default function ConteudosPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ed] text-[#2b2b2b]">
      <section className="bg-gradient-to-r from-[#dff3ff] to-[#f8fbfd] py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <Link href="/" className="mb-8 inline-flex rounded-full border border-[#143a63]/20 bg-white/80 px-5 py-2 text-sm font-semibold text-[#143a63] shadow-sm">
            ← Voltar para a página inicial
          </Link>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[5px] text-[#2f6f95]">Biblioteca</p>
          <h1 className="text-4xl font-black leading-tight text-[#143a63] md:text-6xl">Conteúdos sobre saúde mental</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#5f7180] md:text-lg">
            Informações educativas sobre saúde mental, sintomas, transtornos e atendimento psiquiátrico online. Os conteúdos não substituem avaliação médica individual.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-18">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold text-[#143a63] md:text-3xl">{section.title}</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {section.items.map(([title, href]) => (
                    <Link key={href} href={href} className="rounded-3xl border border-[#dcecf5] bg-[#f8fbfd] p-5 font-semibold text-[#143a63] shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                      {title} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
