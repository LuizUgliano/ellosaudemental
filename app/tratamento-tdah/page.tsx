import ServicePage from "../_components/ServicePage";
import { relatedFor } from "../_lib/relatedLinks";
import { buildPageMetadata } from "../_lib/seo";

export const metadata = buildPageMetadata({
  title: "Tratamento de TDAH online",
  description:
    "Avaliação e acompanhamento psiquiátrico online para TDAH em adultos e jovens. Atenção, impulsividade, organização e impacto na rotina.",
  path: "/tratamento-tdah",
});

const whenToSeek = [
  "Dificuldade persistente de foco e organização",
  "Procrastinação e esquecimentos frequentes",
  "Impulsividade ou inquietação importante",
  "Prejuízo no trabalho, estudos ou rotina",
  "Suspeita de TDAH em adolescentes ou adultos",
];

const benefits = [
  "Avaliação clínica do histórico e sintomas",
  "Acompanhamento em saúde mental",
  "Orientações para rotina e tratamento",
  "Receita digital quando indicada",
  "Atendimento online humanizado",
];

const faqs = [
  {
    q: "TDAH pode ser avaliado online?",
    a: "A avaliação pode começar por teleconsulta, com investigação clínica detalhada e orientação sobre os próximos passos conforme cada caso.",
  },
  {
    q: "TDAH existe em adultos?",
    a: "Sim. Muitas pessoas chegam à vida adulta com sintomas de desatenção, desorganização e impulsividade que impactam a rotina.",
  },
  {
    q: "A consulta já fecha diagnóstico?",
    a: "Depende do caso. O diagnóstico exige avaliação cuidadosa, histórico, sintomas e prejuízos funcionais.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="TDAH"
      title="Avaliação e tratamento de TDAH online"
      description="O TDAH pode se manifestar por desatenção, impulsividade, dificuldade de organização, procrastinação, esquecimentos frequentes e impacto nos estudos, trabalho ou relacionamentos. A avaliação psiquiátrica online ajuda a investigar sintomas, histórico e prejuízos funcionais de forma cuidadosa."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
      related={relatedFor("/tratamento-tdah")}
    />
  );
}
