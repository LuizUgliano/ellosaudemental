import type { Metadata } from "next";
import ServicePage from "../_components/ServicePage";

export const metadata: Metadata = {
  title: "Primeira Consulta Psiquiátrica Online | Clínica Ello Saúde Mental",
  description:
    "Entenda como funciona a primeira consulta psiquiátrica online, avaliação inicial e agendamento pela Clínica Ello.",
};

const whenToSeek = [
  "Quando há dúvidas sobre sintomas emocionais persistentes",
  "Quando ansiedade, tristeza, irritabilidade ou insônia prejudicam a rotina",
  "Quando existe dificuldade para trabalhar, estudar ou se relacionar",
  "Quando há necessidade de avaliação inicial em saúde mental",
  "Quando a família busca orientação para criança ou adolescente",
];

const benefits = [
  "Escuta qualificada e sem julgamento",
  "Avaliação clínica individualizada",
  "Orientação sobre possibilidades de cuidado",
  "Atendimento online com privacidade",
  "Encaminhamentos e receita digital quando indicados",
];

const faqs = [
  {
    q: "Quanto tempo dura a primeira consulta?",
    a: "A duração pode variar conforme o caso e a avaliação necessária.",
  },
  {
    q: "Preciso preparar algo antes?",
    a: "É útil estar em local reservado e, se possível, lembrar sintomas, histórico, medicamentos em uso e dúvidas principais.",
  },
  {
    q: "A consulta online é sigilosa?",
    a: "Sim. O atendimento é conduzido com privacidade e cuidado profissional.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="Primeira Consulta"
      title="Primeira consulta psiquiátrica online: como funciona"
      description="A primeira consulta psiquiátrica é um momento de escuta e avaliação. O objetivo é compreender sintomas, histórico, rotina, sono, emoções e impactos na qualidade de vida para orientar um plano de cuidado individualizado."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
    />
  );
}
