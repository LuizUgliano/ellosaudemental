import type { Metadata } from "next";
import ServicePage from "../_components/ServicePage";

export const metadata: Metadata = {
  title: "Psiquiatra Online ABC | Clínica Ello Saúde Mental",
  description:
    "Atendimento psiquiátrico online no abc paulista com telemedicina, acolhimento e avaliação individualizada em saúde mental.",
};

const whenToSeek = [
  "Ansiedade frequente, preocupação excessiva ou crises de pânico",
  "Desânimo persistente, perda de energia ou alterações de humor",
  "Dificuldade de concentração, organização ou impulsividade",
  "Insônia, sono não reparador ou cansaço constante",
  "Sobrecarga emocional, burnout ou prejuízo na rotina",
];

const benefits = [
  "Consulta online com privacidade e comodidade",
  "Atendimento humanizado e individualizado",
  "Acompanhamento para adultos, crianças e adolescentes",
  "Orientação médica conforme a necessidade do paciente",
  "Receita digital quando indicada em avaliação médica",
];

const faqs = [
  {
    q: "A Clínica Ello atende presencialmente em ABC Paulista?",
    a: "O atendimento da Clínica Ello Saúde Mental é realizado online por telemedicina. A página é voltada para pessoas de ABC Paulista e região que buscam orientação psiquiátrica online.",
  },
  {
    q: "A consulta online é adequada para acompanhamento psiquiátrico?",
    a: "Sim. A teleconsulta permite avaliação clínica, escuta qualificada e acompanhamento individualizado em saúde mental.",
  },
  {
    q: "Posso agendar pelo celular?",
    a: "Sim. O agendamento pode ser feito pelo WhatsApp da clínica, onde serão informadas as orientações para a consulta online.",
  },
  {
    q: "A consulta online pode gerar receita digital?",
    a: "Quando houver indicação médica, a receita digital pode ser emitida conforme a avaliação e as normas aplicáveis.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="Telemedicina em ABC Paulista"
      title="Psiquiatra Online ABC com atendimento humanizado"
      description="A Clínica Ello Saúde Mental oferece consulta psiquiátrica online para pacientes de ABC Paulista e região, com acolhimento, escuta qualificada e plano de cuidado individualizado. O atendimento é realizado por telemedicina, sem necessidade de deslocamento."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
    />
  );
}
