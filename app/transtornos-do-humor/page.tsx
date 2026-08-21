import type { Metadata } from "next";
import ServicePage from "../_components/ServicePage";

export const metadata: Metadata = {
  title: "Transtornos do Humor | Clínica Ello Saúde Mental",
  description:
    "Acompanhamento psiquiátrico online para alterações persistentes de humor, episódios depressivos, irritabilidade e oscilações emocionais.",
};

const whenToSeek = [
  "Oscilações de humor frequentes ou intensas",
  "Períodos de tristeza, irritabilidade ou energia muito baixa",
  "Mudanças importantes de sono, energia ou comportamento",
  "Histórico de episódios depressivos ou suspeita de transtorno bipolar",
  "Prejuízo na rotina, trabalho, estudos ou relações",
];

const benefits = [
  "Avaliação psiquiátrica individualizada",
  "Investigação do histórico de humor e sono",
  "Acompanhamento online em saúde mental",
  "Plano terapêutico conforme o caso",
  "Cuidado humanizado e baseado em evidências",
];

const faqs = [
  {
    q: "O que são transtornos do humor?",
    a: "São condições em que alterações de humor afetam de forma significativa a vida, a energia, o sono e o funcionamento da pessoa.",
  },
  {
    q: "Oscilação de humor sempre é transtorno bipolar?",
    a: "Não. A avaliação médica é importante para diferenciar causas, intensidade, duração e impacto dos sintomas.",
  },
  {
    q: "A consulta online serve para acompanhamento?",
    a: "Sim. A teleconsulta pode ser usada para avaliação e seguimento, conforme a necessidade clínica.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="Transtornos do humor"
      title="Acompanhamento online para transtornos do humor"
      description="Alterações persistentes de humor podem afetar energia, sono, concentração, relacionamentos e rotina. Oscilações importantes, episódios depressivos, irritabilidade frequente ou períodos de aceleração exigem avaliação cuidadosa para definir o melhor acompanhamento."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
    />
  );
}
