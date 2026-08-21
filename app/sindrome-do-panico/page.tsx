import type { Metadata } from "next";
import ServicePage from "../_components/ServicePage";

export const metadata: Metadata = {
  title: "Síndrome do Pânico Online | Clínica Ello Saúde Mental",
  description:
    "Atendimento psiquiátrico online para síndrome do pânico, crises de ansiedade e medo intenso recorrente.",
};

const whenToSeek = [
  "Crises súbitas de medo ou desespero",
  "Sensação de falta de ar, palpitação ou tremores durante crises",
  "Medo constante de uma nova crise",
  "Evitar lugares ou situações por receio dos sintomas",
  "Prejuízo na rotina por ansiedade intensa",
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
    q: "Crise de pânico é perigosa?",
    a: "Os sintomas podem ser muito assustadores, mas a avaliação médica ajuda a diferenciar causas e orientar o cuidado correto.",
  },
  {
    q: "Dá para tratar online?",
    a: "Sim. O atendimento online pode auxiliar na avaliação e no acompanhamento de sintomas de pânico.",
  },
  {
    q: "Preciso de acompanhamento contínuo?",
    a: "Depende da avaliação clínica e da evolução dos sintomas.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="Síndrome do Pânico"
      title="Tratamento da síndrome do pânico online com cuidado psiquiátrico"
      description="A síndrome do pânico pode causar crises intensas de medo, sintomas físicos e receio de novas crises. A avaliação psiquiátrica online ajuda a compreender os sintomas e orientar um cuidado individualizado."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
    />
  );
}
