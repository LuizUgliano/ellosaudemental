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

const featuredContents = [
  {
    title: "Transtorno Bipolar",
    href: "/transtorno-bipolar",
    desc: "Oscilações de humor, avaliação e acompanhamento.",
  },
  {
    title: "Síndrome do Pânico",
    href: "/sindrome-do-panico",
    desc: "Quando crises intensas pedem cuidado especializado.",
  },
  {
    title: "TOC",
    href: "/toc",
    desc: "Obsessões, compulsões e impacto na rotina.",
  },
  {
    title: "Primeira consulta",
    href: "/primeira-consulta-psiquiatrica",
    desc: "Como funciona a avaliação psiquiátrica online.",
  },
  {
    title: "Quando procurar ajuda",
    href: "/quando-procurar-psiquiatra",
    desc: "Sinais de alerta e momentos de buscar orientação.",
  },
  {
    title: "Psiquiatra infantil",
    href: "/psiquiatra-infantil",
    desc: "Cuidado em saúde mental de crianças e adolescentes.",
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
              "linear-gradient(115deg, rgba(90,158,200,0.88) 0%, rgba(143,199,232,0.82) 48%, rgba(223,243,255,0.75) 100%), url('/images/brain-bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(246,199,109,0.28),transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-5 py-14 md:min-h-[78vh] md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-6 md:py-20">
          <div className="animate-fade-up max-w-xl text-[#143a63]">
            <p className="font-display text-5xl leading-none tracking-wide sm:text-6xl md:text-7xl">
              Ello
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#24465c]">
              Saúde Mental
            </p>
            <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Cuidado psiquiátrico online, com acolhimento de verdade
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#24465c] md:text-lg">
              Para quem busca orientação clara e atendimento individualizado —
              adultos, crianças e adolescentes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppButton label="Agendar consulta" size="lg" />
              <a
                href="#atuacao"
                className="inline-flex items-center rounded-full border border-[#143a63]/25 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#143a63] backdrop-blur transition hover:bg-white"
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
              href="#dra-nathalia"
              priority
            />
            <DoctorPortrait
              image="/images/fernanda.jpg"
              name="Dra. Fernanda"
              detail="CRM-SP 264039"
              href="#dra-fernanda"
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
                Áreas frequentes de acompanhamento
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5f7180] md:text-base">
                Exemplos de demandas comuns no atendimento. A avaliação é
                individualizada e pode contemplar outras condições conforme a
                necessidade de cada paciente.
              </p>
            </div>
            <Link
              href="/conteudos"
              className="inline-flex items-center justify-center rounded-full border border-[#143a63] bg-white px-5 py-2.5 text-sm font-semibold text-[#143a63] transition hover:bg-[#143a63] hover:text-white"
            >
              Ver biblioteca completa →
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

      <section id="conteudos-destaque" className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f95]">
              Conteúdos
            </p>
            <h2 className="mt-3 font-display text-3xl text-[#143a63] md:text-4xl">
              Orientações para quem está buscando cuidado
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#5f7180]">
              Artigos objetivos para ajudar a entender sintomas, dúvidas e
              quando vale procurar avaliação. Use também a busca no topo.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredContents.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-[#dcecf5] bg-[#f8fbfd] p-5 transition hover:border-[#8fc7e8] hover:bg-white hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-[#143a63]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5f7180]">
                  {item.desc}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-[#347fb3]">
                  Ler conteúdo →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 rounded-[1.75rem] bg-gradient-to-r from-[#dff3ff] to-[#f8fbfd] px-6 py-8 text-center md:px-10">
            <h3 className="font-display text-2xl text-[#143a63] md:text-3xl">
              Tem mais conteúdos na biblioteca
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-[#5f7180] md:text-base">
              Reunimos temas por condição, sintomas, infância, adultos e
              atendimento por região — para facilitar sua busca.
            </p>
            <Link
              href="/conteudos"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#143a63] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#24465c]"
            >
              Abrir todos os conteúdos
            </Link>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[#f8f6f2] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
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
          </div>

          <div className="mb-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-[#f8fbfd] p-6 md:p-7">
              <h3 className="font-display text-2xl text-[#143a63]">
                Nossa Missão
              </h3>
              <p className="mt-3 leading-relaxed text-[#5f7180]">
                Promover cuidado integral em saúde mental com atendimento ético,
                acolhedor e fundamentado em evidências científicas.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-[#f8fbfd] p-6 md:p-7">
              <h3 className="font-display text-2xl text-[#143a63]">
                Nossa Visão
              </h3>
              <p className="mt-3 leading-relaxed text-[#5f7180]">
                Ser referência em atendimento humanizado, com qualidade de vida,
                equilíbrio emocional e bem-estar para os pacientes.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article
              id="dra-nathalia"
              className="overflow-hidden rounded-[1.75rem] border border-[#dcecf5] bg-[#f8fbfd]"
            >
              <Image
                src="/nathalia.jpg"
                alt="Dra. Nathália Costa Ugliano"
                width={640}
                height={720}
                className="aspect-[5/4] w-full object-cover"
              />
              <div className="p-6 md:p-7">
                <h3 className="font-display text-2xl text-[#143a63] md:text-3xl">
                  Dra. Nathália Costa Ugliano
                </h3>
                <p className="mt-2 font-medium text-[#2f6f95]">
                  Médica | CRM-SP 157028
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#5f7180]">
                  Pós-graduada em Saúde Mental pela Santa Casa de São Paulo.
                  Atendimento humanizado para adolescentes, adultos e idosos.
                </p>
              </div>
            </article>

            <article
              id="dra-fernanda"
              className="overflow-hidden rounded-[1.75rem] border border-[#dcecf5] bg-[#f8fbfd]"
            >
              <Image
                src="/images/fernanda.jpg"
                alt="Dra. Fernanda Matos"
                width={640}
                height={720}
                className="aspect-[5/4] w-full object-cover"
              />
              <div className="p-6 md:p-7">
                <h3 className="font-display text-2xl text-[#143a63] md:text-3xl">
                  Dra. Fernanda Matos
                </h3>
                <p className="mt-2 font-medium text-[#2f6f95]">
                  Médica | CRM-SP 264039
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#5f7180]">
                  Pós-graduanda em Saúde Mental da Criança e do Adolescente pelo
                  Hospital Israelita Albert Einstein.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-10 flex justify-center">
            <WhatsAppButton label="Falar com a clínica" />
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
  href,
  className = "",
  priority = false,
}: {
  image: string;
  name: string;
  detail: string;
  href: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group block ${className}`}
      aria-label={`Ver perfil de ${name}`}
    >
      <figure>
        <div className="overflow-hidden rounded-[1.25rem] shadow-[0_28px_60px_-28px_rgba(0,0,0,0.45)] ring-1 ring-white/30 transition group-hover:ring-2 group-hover:ring-[#f6c76d]">
          <Image
            src={image}
            alt={name}
            width={640}
            height={800}
            priority={priority}
            className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <figcaption className="mt-2.5 px-1 text-[#143a63]">
          <p className="text-sm font-semibold sm:text-base">{name}</p>
          <p className="text-xs text-[#24465c]/80 sm:text-sm">{detail}</p>
          <p className="mt-1 text-xs font-medium text-[#2f6f95]">
            Ver perfil ↓
          </p>
        </figcaption>
      </figure>
    </a>
  );
}
