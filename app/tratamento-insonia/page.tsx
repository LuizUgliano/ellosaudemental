import type { Metadata } from "next";
import ServicePage from "../_components/ServicePage";

export const metadata: Metadata = {
  title: "Tratamento da Insônia Online | Clínica Ello Saúde Mental",
  description:
    "Atendimento psiquiátrico online para dificuldade para dormir, despertares frequentes, sono não reparador e impacto na rotina.",
};

const whenToSeek = [
  "Dificuldade frequente para iniciar ou manter o sono",
  "Despertares noturnos ou sono não reparador",
  "Cansaço, irritabilidade ou baixa concentração durante o dia",
  "Ansiedade associada ao momento de dormir",
  "Uso frequente de medicações para dormir sem acompanhamento",
];

const benefits = [
  "Avaliação dos hábitos de sono e rotina",
  "Investigação de ansiedade, humor e outros fatores",
  "Orientação individualizada",
  "Acompanhamento online",
  "Plano terapêutico conforme a necessidade",
];

const faqs = [
  {
    q: "Insônia pode estar ligada à ansiedade?",
    a: "Sim. Em muitos casos, ansiedade, estresse, humor e rotina influenciam diretamente a qualidade do sono.",
  },
  {
    q: "A consulta online ajuda na insônia?",
    a: "Sim. A teleconsulta permite avaliar rotina, sintomas, histórico e possíveis fatores associados ao sono.",
  },
  {
    q: "Sempre precisa de remédio para dormir?",
    a: "Não. A decisão depende da avaliação médica e das características de cada paciente.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="Insônia"
      title="Tratamento da insônia online com avaliação psiquiátrica"
      description="A insônia pode aparecer como dificuldade para iniciar o sono, despertares durante a noite, acordar muito cedo ou sensação de sono não reparador. Quando o sono começa a prejudicar energia, humor, concentração e qualidade de vida, uma avaliação psiquiátrica pode ser importante."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
    />
  );
}
