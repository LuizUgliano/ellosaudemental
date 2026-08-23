import ServicePage from "../_components/ServicePage";
import { relatedFor } from "../_lib/relatedLinks";
import { buildPageMetadata } from "../_lib/seo";

export const metadata = buildPageMetadata({
  title: "Quando procurar um psiquiatra",
  description:
    "Sinais de alerta e situações em que vale buscar avaliação psiquiátrica — online ou presencial — com orientação cuidadosa e individualizada.",
  path: "/quando-procurar-psiquiatra",
});

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
      related={relatedFor("/quando-procurar-psiquiatra")}
    />
  );
}
