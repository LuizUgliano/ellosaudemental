import type { Metadata } from "next";
import ServicePage from "../_components/ServicePage";

export const metadata: Metadata = {
  title: "Tratamento da Depressão Online | Clínica Ello Saúde Mental",
  description:
    "Consulta psiquiátrica online para avaliação e acompanhamento de sintomas depressivos, alterações de humor, sono e energia.",
};

const whenToSeek = [
  "Desânimo persistente ou perda de prazer nas atividades",
  "Cansaço intenso e queda de energia",
  "Alterações de sono ou apetite",
  "Dificuldade de concentração e produtividade",
  "Isolamento, irritabilidade ou sofrimento emocional frequente",
];

const benefits = [
  "Escuta clínica qualificada",
  "Avaliação dos sintomas e da rotina",
  "Acompanhamento psiquiátrico online",
  "Orientação sobre possibilidades de tratamento",
  "Cuidado humanizado e individualizado",
];

const faqs = [
  {
    q: "Depressão tem tratamento?",
    a: "Sim. O tratamento depende da avaliação individual e pode envolver acompanhamento psiquiátrico, psicoterapia e outras estratégias conforme o caso.",
  },
  {
    q: "A consulta online é indicada para depressão?",
    a: "Sim. A teleconsulta pode ser usada para avaliação e acompanhamento, desde que o paciente esteja em um ambiente reservado e seguro.",
  },
  {
    q: "Quanto tempo dura o tratamento?",
    a: "Varia conforme a história clínica, intensidade dos sintomas, resposta ao acompanhamento e necessidades de cada paciente.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="Depressão"
      title="Tratamento da depressão online com acompanhamento psiquiátrico"
      description="A depressão pode envolver tristeza persistente, perda de interesse, cansaço intenso, alterações de sono, mudanças no apetite, dificuldade de concentração e impacto importante na qualidade de vida. O atendimento psiquiátrico online permite uma avaliação cuidadosa e um plano de acompanhamento individualizado."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
    />
  );
}
