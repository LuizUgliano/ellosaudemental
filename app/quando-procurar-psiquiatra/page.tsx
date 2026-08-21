import type { Metadata } from "next";
import ServicePage from "../_components/ServicePage";

export const metadata: Metadata = {
  title: "Quando Procurar um Psiquiatra | Clínica Ello Saúde Mental",
  description:
    "Saiba quando procurar um psiquiatra e como a consulta online pode ajudar na avaliação de sintomas emocionais.",
};

const whenToSeek = [
  "Sintomas emocionais persistentes por semanas ou meses",
  "Ansiedade, tristeza, irritabilidade ou desânimo frequentes",
  "Insônia, cansaço intenso ou perda de energia",
  "Dificuldade de concentração, impulsividade ou organização",
  "Prejuízo no trabalho, estudos, família ou relacionamentos",
];

const benefits = [
  "Avaliação inicial dos sintomas",
  "Orientação clara sobre possibilidades de cuidado",
  "Atendimento online de forma prática",
  "Plano individualizado para cada paciente",
  "Acompanhamento quando necessário",
];

const faqs = [
  {
    q: "Preciso estar em crise para procurar psiquiatra?",
    a: "Não. A busca por avaliação pode acontecer antes que os sintomas se agravem.",
  },
  {
    q: "Psiquiatra é só para casos graves?",
    a: "Não. O psiquiatra avalia diferentes níveis de sofrimento e impacto na rotina.",
  },
  {
    q: "A consulta online pode ser o primeiro passo?",
    a: "Sim. Ela pode ajudar na avaliação inicial e na orientação do cuidado.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="Orientação"
      title="Quando procurar um psiquiatra? Sinais de atenção"
      description="Muitas pessoas procuram ajuda apenas quando os sintomas já estão muito intensos. A avaliação psiquiátrica pode ser indicada quando alterações emocionais, sono, energia, concentração ou comportamento começam a prejudicar a rotina e a qualidade de vida."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
    />
  );
}
