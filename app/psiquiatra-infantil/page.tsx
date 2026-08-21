import type { Metadata } from "next";
import ServicePage from "../_components/ServicePage";

export const metadata: Metadata = {
  title: "Psiquiatra Infantil Online | Clínica Ello Saúde Mental",
  description:
    "Atendimento psiquiátrico online para crianças e adolescentes, com escuta qualificada e cuidado individualizado.",
};

const whenToSeek = [
  "Mudanças importantes de comportamento ou humor",
  "Dificuldades persistentes na escola ou na convivência",
  "Ansiedade, irritabilidade ou tristeza frequente",
  "Alterações de sono, apetite ou rotina",
  "Preocupação dos responsáveis com desenvolvimento emocional",
];

const benefits = [
  "Acolhimento da criança ou adolescente e da família",
  "Avaliação individualizada do contexto de vida",
  "Orientação aos responsáveis",
  "Atendimento online com privacidade",
  "Plano de cuidado conforme a necessidade do paciente",
];

const faqs = [
  {
    q: "A consulta infantil online funciona?",
    a: "Pode funcionar bem em muitos casos, especialmente com participação dos responsáveis e ambiente adequado.",
  },
  {
    q: "Os pais participam da consulta?",
    a: "Geralmente sim. A participação dos responsáveis é importante para entender rotina, histórico e necessidades.",
  },
  {
    q: "É preciso diagnóstico fechado para agendar?",
    a: "Não. A consulta pode ser o primeiro passo para avaliação e orientação.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="Psiquiatria Infantil"
      title="Psiquiatra infantil online para crianças e adolescentes"
      description="A avaliação em saúde mental de crianças e adolescentes exige escuta cuidadosa, participação da família e atenção ao desenvolvimento, escola, comportamento, sono e rotina. O atendimento online pode orientar famílias e acompanhar necessidades específicas."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
    />
  );
}
