import ServicePage from "../_components/ServicePage";
import { relatedFor } from "../_lib/relatedLinks";
import { buildPageMetadata } from "../_lib/seo";

export const metadata = buildPageMetadata({
  title: "Psiquiatra online por telemedicina",
  description:
    "Consulta psiquiátrica online com acolhimento e sigilo. Avaliação e acompanhamento em saúde mental por videochamada, de onde você estiver.",
  path: "/psiquiatra-online",
});

const whenToSeek = [
  "Ansiedade",
  "Depressão",
  "TDAH",
  "Insônia",
  "Burnout",
  "Síndrome do pânico",
  "Transtornos do humor",
  "Dificuldades emocionais persistentes",
];

const benefits = [
  "Atendimento de onde você estiver",
  "Consulta sigilosa e individualizada",
  "Acompanhamento em saúde mental",
  "Receita digital quando indicada",
];

const faqs = [
  {
    q: "A consulta online é segura?",
    a: "Sim. O atendimento é realizado com sigilo, privacidade e cuidado individualizado.",
  },
  {
    q: "Posso fazer a consulta pelo celular?",
    a: "Sim. Basta ter uma conexão estável com a internet e estar em um ambiente reservado.",
  },
  {
    q: "A consulta online serve para acompanhamento?",
    a: "Sim. Ela pode ser utilizada tanto para avaliação inicial quanto para acompanhamento em saúde mental.",
  },
  {
    q: "Como faço para agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <ServicePage
      eyebrow="Telemedicina"
      title="Psiquiatra online com acolhimento e segurança"
      description="A consulta psiquiátrica online permite receber atendimento em saúde mental de forma prática, sigilosa e humanizada, sem sair de casa. O atendimento é realizado por videochamada, com escuta qualificada, avaliação clínica e orientação individualizada."
      whenToSeek={whenToSeek}
      benefits={benefits}
      faqs={faqs}
      related={relatedFor("/psiquiatra-online")}
    />
  );
}
