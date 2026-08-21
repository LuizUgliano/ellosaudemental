import type { Metadata } from "next";
import ServicePage from "../_components/ServicePage";

export const metadata: Metadata = {
  title: "Transtorno Bipolar Online | Clínica Ello Saúde Mental",
  description:
    "Atendimento psiquiátrico online para transtorno bipolar, oscilações de humor e acompanhamento em saúde mental.",
};

const whenToSeek = [
  "Oscilações intensas de humor, energia ou irritabilidade",
  "Períodos de euforia, aceleração ou impulsividade",
  "Episódios depressivos recorrentes",
  "Alterações importantes de sono e rotina",
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
    q: "Transtorno bipolar tem tratamento?",
    a: "Sim. O acompanhamento psiquiátrico pode ajudar no controle dos sintomas e na construção de um plano terapêutico adequado.",
  },
  {
    q: "A consulta online serve para acompanhamento?",
    a: "Sim. A teleconsulta pode ser utilizada para avaliação e acompanhamento, conforme a necessidade do paciente.",
  },
  {
    q: "Medicamento é sempre necessário?",
    a: "A indicação depende da avaliação médica, do histórico e da intensidade dos sintomas.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="Transtorno Bipolar"
      title="Tratamento do transtorno bipolar online com acompanhamento psiquiátrico"
      description="O transtorno bipolar pode envolver oscilações importantes de humor, energia, sono e comportamento. O acompanhamento psiquiátrico ajuda a avaliar o quadro com cuidado, orientar o tratamento e acompanhar a evolução de forma individualizada."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
    />
  );
}
