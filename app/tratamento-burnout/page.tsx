import ServicePage from "../_components/ServicePage";
import { relatedFor } from "../_lib/relatedLinks";
import { buildPageMetadata } from "../_lib/seo";

export const metadata = buildPageMetadata({
  title: "Tratamento de burnout online",
  description:
    "Acompanhamento psiquiátrico online para esgotamento, sobrecarga no trabalho e sintomas de burnout, com cuidado individualizado.",
  path: "/tratamento-burnout",
});

const whenToSeek = [
  "Esgotamento físico e emocional constante",
  "Queda importante de rendimento no trabalho",
  "Irritabilidade, ansiedade ou desânimo associados à rotina profissional",
  "Dificuldade de descansar mesmo fora do trabalho",
  "Sensação de sobrecarga persistente",
];

const benefits = [
  "Avaliação do impacto emocional e funcional",
  "Acompanhamento psiquiátrico online",
  "Orientação sobre tratamento e rotina",
  "Cuidado individualizado",
  "Encaminhamentos quando necessários",
];

const faqs = [
  {
    q: "Burnout é diferente de estresse?",
    a: "O burnout costuma envolver esgotamento persistente, impacto funcional e relação importante com a rotina de trabalho.",
  },
  {
    q: "Psiquiatra pode ajudar no burnout?",
    a: "Sim. A avaliação psiquiátrica pode investigar sintomas, riscos associados e necessidades de tratamento.",
  },
  {
    q: "A consulta online é adequada?",
    a: "Sim. O atendimento online permite acolhimento, avaliação e acompanhamento de forma prática e sigilosa.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="Burnout"
      title="Tratamento de burnout online com cuidado psiquiátrico"
      description="O burnout está relacionado ao esgotamento emocional e à sobrecarga, geralmente associados ao contexto profissional. Pode envolver cansaço intenso, irritabilidade, queda de desempenho, distanciamento emocional, alterações de sono e sofrimento persistente."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
      related={relatedFor("/tratamento-burnout")}
    />
  );
}
