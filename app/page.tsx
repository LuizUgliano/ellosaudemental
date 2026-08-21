import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./_components/SiteFooter";
import SiteHeader from "./_components/SiteHeader";
import WhatsAppButton from "./_components/WhatsAppButton";
import WhatsAppFloat from "./_components/WhatsAppFloat";

const areas = [
  {
    title: "Ansiedade",
    href: "/tratamento-ansiedade",
    icon: "/icons/ansiedade.png",
    text: "Preocupação excessiva, crises e tensão constante.",
  },
  {
    title: "Depressão",
    href: "/tratamento-depressao",
    icon: "/icons/depressao.png",
    text: "Desânimo, perda de energia e alterações de humor.",
  },
  {
    title: "Burnout",
    href: "/tratamento-burnout",
    icon: "/icons/burnout.png",
    text: "Esgotamento emocional e sobrecarga no trabalho.",
  },
  {
    title: "Insônia",
    href: "/tratamento-insonia",
    icon: "/icons/insonia.png",
    text: "Dificuldade para dormir e prejuízo no dia a dia.",
  },
  {
    title: "TDAH",
    href: "/tratamento-tdah",
    icon: "/icons/tdah.png",
    text: "Desatenção, impulsividade e organização.",
  },
  {
    title: "Transtornos do Humor",
    href: "/transtornos-do-humor",
    icon: "/icons/humor.png",
    text: "Oscilações de humor e irritabilidade.",
  },
];

const steps = [
  {
    n: "01",
    title: "Busque o que precisa",
    text: "Use a busca no topo para achar um tema ou área de atuação.",
  },
  {
    n: "02",
    title: "Entenda com clareza",
    text: "Leia orientações objetivas sobre sintomas e quando procurar ajuda.",
  },
  {
    n: "03",
    title: "Agende pelo WhatsApp",
    text: "Fale com a clínica e marque sua consulta online.",
  },
];

const faqs = [
  {
    question: "As consultas são online?",
    answer:
      "Sim. A Clínica Ello oferece consultas online, com atendimento individualizado.",
  },
  {
    question: "Atendem crianças e adolescentes?",
    answer:
      "Sim. A Dra. Fernanda Matos atua com foco em saúde mental da criança e do adolescente.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "Pelo WhatsApp da clínica: (11) 97630-8934. Lá você recebe horários e orientações.",
  },
  {
    question: "Como posso pagar?",
    answer: "Transferência bancária, Pix ou cartão de crédito.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1ed] text-[#2b2b2b]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(115deg, rgba(20,58,99,0.78) 0%, rgba(47,111,149,0.55) 45%, rgba(244,241,237,0.2) 100%), url('/images/brain-bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(246,199,109,0.22),transparent_45%)]" />

        <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-5 py-14 md:min-h-[78vh] md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-6 md:py-20">
          <div className="animate-fade-up max-w-xl text-white">
            <p className="font-display text-5xl leading-none tracking-wide sm:text-6xl md:text-7xl">
              Ello
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#dff3ff]">
              Saúde Mental
            </p>
            <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Cuidado psiquiátrico online, com acolhimento de verdade
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 md:text-lg">
              Para quem busca orientação clara e atendimento individualizado —
              adultos, crianças e adolescentes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppButton label="Agendar consulta" size="lg" />
              <a
                href="#atuacao"
                className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ver áreas de atuação
              </a>
            </div>
          </div>

          <div className="animate-fade-up-delay grid grid-cols-2 gap-3 sm:gap-4">
            <DoctorPortrait
              image="/nathalia.jpg"
              name="Dra. Nathália"
              detail="CRM-SP 157028"
              priority
            />
            <DoctorPortrait
              image="/images/fernanda.jpg"
              name="Dra. Fernanda"
              detail="CRM-SP 264039"
              className="mt-8 sm:mt-12"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[#dcecf5] bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f95]">
              Como funciona
            </p>
            <h2 className="mt-3 font-display text-3xl text-[#143a63] md:text-4xl">
              Três passos simples
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="border-l-2 border-[#8fc7e8] pl-5">
                <p className="font-display text-3xl text-[#8fc7e8]">{step.n}</p>
                <h3 className="mt-2 text-lg font-semibold text-[#143a63]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5f7180]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="atuacao" className="bg-[#f8f6f2] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f95]">
                Áreas de Atuação
              </p>
              <h2 className="mt-3 font-display text-3xl text-[#143a63] md:text-5xl">
                O que você pode tratar conosco
              </h2>
            </div>
            <Link
              href="/conteudos"
              className="text-sm font-semibold text-[#347fb3] transition hover:text-[#143a63]"
            >
              Ver todos os conteúdos →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-5 transition hover:border-[#8fc7e8] hover:shadow-[0_18px_40px_-28px_rgba(20,58,99,0.45)]"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="h-12 w-12 object-contain transition group-hover:scale-105"
                />
                <div>
                  <h3 className="text-lg font-semibold text-[#143a63]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6b625d]">
                    {item.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f95]">
                Sobre a Clínica
              </p>
              <h2 className="mt-3 font-display text-4xl text-[#143a63] md:text-5xl">
                Clínica Ello Saúde Mental
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5f7180] md:text-lg">
                Atendimento psiquiátrico humanizado, baseado em evidências, com
                escuta qualificada e plano individualizado para cada paciente.
              </p>
              <div className="mt-8 space-y-4">
                <div>
                  <h3 className="font-semibold text-[#143a63]">
                    Dra. Nathália Costa Ugliano
                  </h3>
                  <p className="text-sm text-[#5f7180]">
                    CRM-SP 157028 · Pós-graduada em Saúde Mental pela Santa Casa
                    de São Paulo
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#143a63]">
                    Dra. Fernanda Matos
                  </h3>
                  <p className="text-sm text-[#5f7180]">
                    CRM-SP 264039 · Saúde Mental da Criança e do Adolescente
                    (Albert Einstein)
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <WhatsAppButton label="Falar com a clínica" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/nathalia.jpg"
                alt="Dra. Nathália Costa Ugliano"
                width={480}
                height={600}
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-xl"
              />
              <Image
                src="/images/fernanda.jpg"
                alt="Dra. Fernanda Matos"
                width={480}
                height={600}
                className="mt-8 aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f8f6f2] py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <h2 className="text-center font-display text-3xl text-[#143a63] md:text-4xl">
            Dúvidas frequentes
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#dcecf5] bg-white px-5 py-4"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-[#143a63] marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="text-[#347fb3] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#5f7180]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#143a63] py-14 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8fc7e8]">
            Contato
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Pronto para dar o próximo passo?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Tire dúvidas e agende sua consulta online pelo WhatsApp.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton label="Agendar no WhatsApp" size="lg" />
          </div>
          <p className="mt-5 text-sm text-white/70">
            (11) 97630-8934 · clinicaello.saude@gmail.com
          </p>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}

function DoctorPortrait({
  image,
  name,
  detail,
  className = "",
  priority = false,
}: {
  image: string;
  name: string;
  detail: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-[1.25rem] shadow-[0_28px_60px_-28px_rgba(0,0,0,0.45)] ring-1 ring-white/30">
        <Image
          src={image}
          alt={name}
          width={640}
          height={800}
          priority={priority}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <figcaption className="mt-2.5 px-1 text-white">
        <p className="text-sm font-semibold sm:text-base">{name}</p>
        <p className="text-xs text-white/75 sm:text-sm">{detail}</p>
      </figcaption>
    </figure>
  );
}
