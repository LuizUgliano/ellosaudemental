import ServicePage from "../_components/ServicePage";
import { relatedFor } from "../_lib/relatedLinks";
import { buildPageMetadata } from "../_lib/seo";

export const metadata = buildPageMetadata({
  title: "TOC Online",
  description:
    "Atendimento psiquiátrico online para TOC, pensamentos obsessivos, compulsões e sofrimento emocional.",
  path: "/toc",
});

const whenToSeek = [
  "Pensamentos repetitivos e difíceis de controlar",
  "Rituais ou comportamentos repetitivos para aliviar ansiedade",
  "Checagens frequentes, organização rígida ou medo de contaminação",
  "Sofrimento emocional por pensamentos indesejados",
  "Prejuízo na rotina, estudos, trabalho ou relações",
];

const benefits = [
  "Avaliação psiquiátrica individualizada",
  "Atendimento online com privacidade",
  "Orientação sobre tratamento e acompanhamento",
  "Receita digital quando indicada",
  "Plano de cuidado conforme a necessidade do paciente",
];

const faqs = [
  {
    q: "TOC tem tratamento?",
    a: "Sim. A avaliação psiquiátrica pode ajudar a definir o melhor plano de cuidado e acompanhamento.",
  },
  {
    q: "Todo hábito repetitivo é TOC?",
    a: "Não. O diagnóstico depende de avaliação clínica, sofrimento associado e impacto na rotina.",
  },
  {
    q: "A consulta online é indicada?",
    a: "Pode ser indicada para avaliação e acompanhamento em saúde mental, conforme o caso.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="TOC"
      title="Tratamento do TOC online com acompanhamento psiquiátrico"
      description="O TOC pode envolver pensamentos repetitivos, necessidade de checagem, rituais, medo de contaminação ou outras compulsões que trazem sofrimento. O acompanhamento psiquiátrico online ajuda a avaliar o quadro e orientar o tratamento."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
      related={relatedFor("/toc")}
    />
  );
}
