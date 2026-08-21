import type { Metadata } from "next";
import ServicePage from "../_components/ServicePage";

export const metadata: Metadata = {
  title: "Autismo em Adultos Online | Clínica Ello Saúde Mental",
  description:
    "Atendimento psiquiátrico online para avaliação de suspeita de autismo em adultos e orientação em saúde mental.",
};

const whenToSeek = [
  "Dificuldades persistentes de comunicação ou interação social",
  "Sensibilidade sensorial ou necessidade rígida de rotina",
  "Histórico de sofrimento por adaptação social ou profissional",
  "Suspeita levantada pelo próprio paciente ou familiares",
  "Necessidade de avaliação e orientação em saúde mental",
];

const benefits = [
  "Escuta cuidadosa da história de vida",
  "Avaliação individualizada do funcionamento atual",
  "Orientação sobre próximos passos",
  "Atendimento online com privacidade",
  "Encaminhamentos quando necessários",
];

const faqs = [
  {
    q: "Autismo pode ser identificado na vida adulta?",
    a: "Sim. Algumas pessoas só buscam avaliação na vida adulta, especialmente quando compreendem melhor sua história e dificuldades.",
  },
  {
    q: "Uma consulta fecha diagnóstico?",
    a: "Nem sempre. A avaliação pode exigir mais informações, histórico, instrumentos específicos e acompanhamento.",
  },
  {
    q: "A teleconsulta pode ajudar?",
    a: "Pode ajudar na avaliação inicial, orientação e planejamento dos próximos passos.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="Autismo em adultos"
      title="Avaliação de autismo em adultos com cuidado psiquiátrico online"
      description="Muitos adultos chegam à consulta com dúvidas sobre funcionamento social, sensorial, rotina, comunicação ou histórico de dificuldades desde a infância. A avaliação psiquiátrica pode ajudar a organizar essas informações e orientar os próximos passos."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
    />
  );
}
