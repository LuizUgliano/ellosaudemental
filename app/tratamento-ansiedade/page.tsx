import type { Metadata } from "next";
import ServicePage from "../_components/ServicePage";

export const metadata: Metadata = {
  title: "Tratamento da Ansiedade Online | Clínica Ello Saúde Mental",
  description:
    "Atendimento psiquiátrico online para ansiedade, crises de ansiedade, preocupação excessiva e sintomas emocionais persistentes.",
};

const whenToSeek = [
  "Preocupação excessiva na maior parte dos dias",
  "Crises de ansiedade ou sensação de perda de controle",
  "Medo constante, tensão ou dificuldade para relaxar",
  "Sono prejudicado por pensamentos acelerados",
  "Prejuízo no trabalho, estudos ou relacionamentos",
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
    q: "Ansiedade precisa de psiquiatra?",
    a: "Quando os sintomas são frequentes, intensos ou prejudicam a rotina, a avaliação psiquiátrica pode ajudar a entender o quadro e definir o melhor acompanhamento.",
  },
  {
    q: "A consulta online serve para ansiedade?",
    a: "Sim. A teleconsulta permite avaliação clínica, escuta qualificada e acompanhamento em saúde mental de forma segura e individualizada.",
  },
  {
    q: "Medicamento é sempre necessário?",
    a: "Não necessariamente. A indicação depende da avaliação médica, da intensidade dos sintomas, do histórico e das necessidades de cada paciente.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="Ansiedade"
      title="Tratamento da ansiedade online com cuidado psiquiátrico"
      description="A ansiedade pode aparecer como preocupação excessiva, tensão constante, sensação de alerta, crises intensas, dificuldade para relaxar e impacto na rotina. O acompanhamento psiquiátrico online ajuda a avaliar os sintomas com cuidado, entender o contexto de cada paciente e construir um plano terapêutico individualizado."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
    />
  );
}
