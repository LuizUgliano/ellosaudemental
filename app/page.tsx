import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./_components/SiteFooter";
import SiteHeader from "./_components/SiteHeader";
import WhatsAppFloat from "./_components/WhatsAppFloat";

const areas = [
  {
    title: "Ansiedade",
    href: "/tratamento-ansiedade",
    icon: "/icons/ansiedade.png",
    text: "Avaliação e acompanhamento de preocupação excessiva, crises, tensão constante e dificuldade para relaxar.",
  },
  {
    title: "Depressão",
    href: "/tratamento-depressao",
    icon: "/icons/depressao.png",
    text: "Cuidado para alterações de humor, perda de energia, desânimo persistente e impacto na rotina.",
  },
  {
    title: "Burnout",
    href: "/tratamento-burnout",
    icon: "/icons/burnout.png",
    text: "Acompanhamento de esgotamento emocional, sobrecarga profissional e queda de desempenho.",
  },
  {
    title: "Insônia",
    href: "/tratamento-insonia",
    icon: "/icons/insonia.png",
    text: "Investigação de dificuldades para iniciar ou manter o sono e prejuízo na qualidade de vida.",
  },
  {
    title: "TDAH",
    href: "/tratamento-tdah",
    icon: "/icons/tdah.png",
    text: "Avaliação de desatenção, impulsividade, organização e impacto em estudos, trabalho e relações.",
  },
  {
    title: "Transtornos do Humor",
    href: "/transtornos-do-humor",
    icon: "/icons/humor.png",
    text: "Acompanhamento de oscilações de humor, irritabilidade e episódios depressivos.",
  },
];

const moreTopics = [
  {
    title: "Transtorno Bipolar",
    href: "/transtorno-bipolar",
    desc: "Entenda oscilações de humor, avaliação e acompanhamento.",
  },
  {
    title: "Síndrome do Pânico",
    href: "/sindrome-do-panico",
    desc: "Saiba quando crises intensas precisam de cuidado especializado.",
  },
  {
    title: "TOC",
    href: "/toc",
    desc: "Conheça sinais de obsessões, compulsões e impacto na rotina.",
  },
  {
    title: "Psiquiatra Infantil",
    href: "/psiquiatra-infantil",
    desc: "Informações sobre cuidado em saúde mental de crianças.",
  },
  {
    title: "Primeira Consulta",
    href: "/primeira-consulta-psiquiatrica",
    desc: "Veja como funciona a primeira avaliação psiquiátrica online.",
  },
  {
    title: "Quando Procurar",
    href: "/quando-procurar-psiquiatra",
    desc: "Entenda sinais de alerta e momentos de buscar orientação.",
  },
];

const regionTopics = [
  { title: "São Paulo", href: "/psiquiatra-online-sao-paulo" },
  { title: "ABC Paulista", href: "/psiquiatra-online-abc" },
  { title: "Ribeirão Pires", href: "/psiquiatra-online-ribeirao-pires" },
  { title: "Santo André", href: "/psiquiatra-online-santo-andre" },
  { title: "São Bernardo", href: "/psiquiatra-online-sao-bernardo" },
  { title: "Mauá", href: "/psiquiatra-online-maua" },
];

const faqs = [
  {
    question: "As consultas são online ou presenciais?",
    answer:
      "A Clínica Ello oferece consultas online, com atendimento individualizado de acordo com a necessidade de cada paciente.",
  },
  {
    question: "Atendem crianças e adolescentes?",
    answer:
      "Sim. A Dra. Fernanda Matos atua com foco em saúde mental da criança e do adolescente, com abordagem humanizada e participação da família.",
  },
  {
    question: "O atendimento é individualizado?",
    answer:
      "Sim. Cada paciente passa por uma avaliação cuidadosa para construção de um plano terapêutico personalizado.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "O agendamento pode ser feito pelo WhatsApp da clínica, onde serão informados horários, modalidade da consulta e demais orientações.",
  },
  {
    question: "Como posso pagar pela consulta?",
    answer:
      "O pagamento pode ser feito por transferência bancária, Pix ou cartão de crédito.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1ed] text-[#2b2b2b]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(244,241,237,0.94) 0%, rgba(223,243,255,0.78) 42%, rgba(185,221,242,0.55) 100%), url('/images/brain-bg.png')",
          }}
        />
        <div className="animate-hero-glow absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#8fc7e8]/35 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[#f6c76d]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 md:min-h-[calc(100svh-8.5rem)] md:gap-10 md:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
          <div className="animate-fade-up max-w-xl">
            <p className="font-display text-4xl leading-none tracking-wide text-[#143a63] sm:text-5xl md:text-6xl lg:text-7xl">
              Ello
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#347fb3] sm:text-sm">
              Saúde Mental
            </p>

            <h1 className="mt-5 text-2xl font-semibold leading-tight text-[#143a63] sm:text-3xl md:mt-6 md:text-4xl lg:text-[2.75rem]">
              Psiquiatria online com acolhimento e cuidado individualizado
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#5f7180] sm:text-base md:mt-5 md:text-lg">
              Avaliação especializada para adultos, crianças e adolescentes —
              com escuta qualificada e plano terapêutico personalizado.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
              <a
                href="https://wa.me/5511976308934"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#f6c76d] px-6 py-3.5 text-sm font-semibold text-[#143a63] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:px-7"
              >
                <Image src="/whatsapp.png" alt="" width={22} height={22} />
                Agendar consulta
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center rounded-full border border-[#143a63]/25 bg-white/70 px-5 py-3.5 text-sm font-semibold text-[#143a63] backdrop-blur transition hover:bg-white sm:px-6"
              >
                Conhecer a clínica
              </a>
            </div>
          </div>

          <div className="animate-fade-up-delay mx-auto grid w-full max-w-md grid-cols-2 gap-3 sm:max-w-none sm:gap-5 lg:mx-0">
            <DoctorPortrait
              image="/nathalia.jpg"
              name="Dra. Nathália Costa Ugliano"
              detail="CRM-SP 157028"
              priority
            />
            <DoctorPortrait
              image="/images/fernanda.jpg"
              name="Dra. Fernanda Matos"
              detail="CRM-SP 264039"
              className="sm:mt-10 lg:mt-12"
            />
          </div>
        </div>
      </section>

      <section id="atuacao" className="bg-[#f8f6f2] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f95]">
              Áreas de Atuação
            </p>
            <h2 className="mt-3 font-display text-4xl text-[#143a63] md:text-5xl">
              Cuidado especializado em saúde mental
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6b625d] md:text-lg">
              Atendimento psiquiátrico 100% online, com avaliação
              individualizada e plano terapêutico para cada paciente.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col items-start rounded-[1.75rem] border border-[#dcecf5] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8fc7e8] hover:shadow-[0_20px_50px_-28px_rgba(20,58,99,0.35)]"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="mb-4 h-14 w-14 object-contain transition group-hover:scale-105 md:h-16 md:w-16"
                />
                <h3 className="text-xl font-semibold text-[#143a63]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6b625d]">
                  {item.text}
                </p>
                <span className="mt-5 text-sm font-semibold text-[#347fb3] opacity-0 transition group-hover:opacity-100">
                  Saiba mais →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f2] pb-20 pt-2 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="rounded-[2rem] border border-[#dcecf5] bg-white px-6 py-10 md:px-10 md:py-12">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f95]">
                Conteúdos
              </p>
              <h2 className="mt-3 font-display text-3xl text-[#143a63] md:text-4xl">
                Orientações para quem busca cuidado
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {moreTopics.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-2xl border border-transparent bg-[#f8fbfd] px-5 py-5 transition hover:border-[#b9ddf2] hover:bg-white hover:shadow-md"
                >
                  <h3 className="font-semibold text-[#143a63]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5f7180]">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/conteudos"
                className="inline-flex items-center justify-center rounded-full border border-[#143a63] bg-white px-6 py-3 text-sm font-semibold text-[#143a63] transition hover:bg-[#143a63] hover:text-white"
              >
                Ver todos os conteúdos →
              </Link>
            </div>

            <div className="mt-12 border-t border-[#dcecf5] pt-10">
              <div className="mx-auto mb-6 max-w-2xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f95]">
                  Atendimento por região
                </p>
                <h3 className="mt-3 font-display text-2xl text-[#143a63] md:text-3xl">
                  Psiquiatria online para todo o Brasil
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f7180] md:text-base">
                  Acompanhamento com praticidade, inclusive para pacientes da
                  Grande São Paulo e outras regiões.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {regionTopics.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-full border border-[#dcecf5] bg-[#f8fbfd] px-5 py-2.5 text-sm font-semibold text-[#143a63] transition hover:border-[#8fc7e8] hover:bg-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f95]">
              Sobre a Clínica
            </p>
            <h2 className="mt-3 font-display text-4xl text-[#143a63] md:text-5xl">
              Clínica Ello Saúde Mental
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#5f7180] md:text-lg">
              Nasceu para oferecer atendimento psiquiátrico humanizado,
              acessível e baseado em evidências — com acolhimento, escuta
              qualificada e acompanhamento individualizado.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2">
            <div className="rounded-[1.75rem] bg-[#f8fbfd] p-7 md:p-8">
              <h3 className="font-display text-3xl text-[#143a63]">
                Nossa Missão
              </h3>
              <p className="mt-3 leading-relaxed text-[#5f7180]">
                Promover cuidado integral em saúde mental através de
                atendimento psiquiátrico ético, acolhedor e fundamentado em
                evidências científicas.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-[#f8fbfd] p-7 md:p-8">
              <h3 className="font-display text-3xl text-[#143a63]">
                Nossa Visão
              </h3>
              <p className="mt-3 leading-relaxed text-[#5f7180]">
                Ser referência em atendimento humanizado, proporcionando
                qualidade de vida, equilíbrio emocional e bem-estar aos
                pacientes.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <DoctorProfile
              image="/nathalia.jpg"
              name="Dra. Nathália Costa Ugliano"
              crm="Médica | CRM-SP 157028"
              formation="Pós-graduada em Saúde Mental pela Santa Casa de São Paulo"
              text="Médica psiquiatra dedicada ao cuidado integral da saúde mental, com atendimento humanizado e individualizado para adolescentes, adultos e idosos. Atua na avaliação, diagnóstico e tratamento de transtornos como ansiedade, depressão, transtorno bipolar, TDAH, síndrome do pânico, insônia, TOC e outras condições psiquiátricas."
            />
            <DoctorProfile
              image="/images/fernanda.jpg"
              name="Dra. Fernanda Matos"
              crm="Médica | CRM-SP 264039"
              formation="Pós-graduanda em Saúde Mental da Criança e do Adolescente pelo Hospital Israelita Albert Einstein"
              text="Atua com foco no cuidado em saúde mental de crianças e adolescentes, oferecendo uma abordagem humanizada, individualizada e baseada em evidências científicas. Valoriza o trabalho em conjunto com a família e a rede de apoio, promovendo desenvolvimento, bem-estar e qualidade de vida."
            />
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f8f6f2] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <div className="mb-12 text-center md:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f95]">
              Dúvidas Frequentes
            </p>
            <h2 className="mt-3 font-display text-4xl text-[#143a63] md:text-5xl">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#dcecf5] bg-white px-6 py-5 open:shadow-md"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-[#143a63] marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="mt-0.5 text-[#347fb3] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-[#5f7180]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#dff3ff] via-[#f8fbfd] to-[#f4f1ed] px-7 py-10 md:px-14 md:py-16">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f95]">
                  Contato
                </p>
                <h2 className="mt-3 font-display text-4xl text-[#143a63] md:text-5xl">
                  Agende sua consulta
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#5f7180] md:text-lg">
                  Fale conosco para horários, modalidade online e orientações
                  sobre o primeiro atendimento.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-white/90 p-7 shadow-[0_24px_60px_-36px_rgba(20,58,99,0.45)] backdrop-blur md:p-8">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-[#5f7180]">WhatsApp</p>
                    <p className="text-xl font-semibold text-[#143a63]">
                      (11) 97630-8934
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#5f7180]">E-mail</p>
                    <p className="break-words text-lg font-semibold text-[#143a63]">
                      clinicaello.saude@gmail.com
                    </p>
                  </div>
                  <a
                    href="https://wa.me/5511976308934"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f6c76d] px-8 py-4 text-base font-semibold text-[#143a63] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <Image src="/whatsapp.png" alt="" width={24} height={24} />
                    Agendar Consulta
                  </a>
                </div>
              </div>
            </div>
          </div>
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
      <div className="overflow-hidden rounded-[1.25rem] shadow-[0_28px_60px_-28px_rgba(20,58,99,0.45)] ring-1 ring-white/80 sm:rounded-[1.5rem]">
        <Image
          src={image}
          alt={name}
          width={640}
          height={800}
          priority={priority}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <figcaption className="mt-2.5 px-0.5 sm:mt-3 sm:px-1">
        <p className="text-xs font-semibold leading-snug text-[#143a63] sm:text-sm md:text-base">
          {name}
        </p>
        <p className="mt-0.5 text-[11px] text-[#5f7180] sm:text-xs md:text-sm">
          {detail}
        </p>
      </figcaption>
    </figure>
  );
}

function DoctorProfile({
  image,
  name,
  crm,
  formation,
  text,
}: {
  image: string;
  name: string;
  crm: string;
  formation: string;
  text: string;
}) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#dcecf5] bg-[#f8fbfd]">
      <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr]">
        <Image
          src={image}
          alt={name}
          width={480}
          height={560}
          className="h-56 w-full object-cover sm:h-full"
        />
        <div className="p-6 md:p-8">
          <h3 className="font-display text-2xl text-[#143a63] md:text-3xl">
            {name}
          </h3>
          <p className="mt-2 font-medium text-[#2f6f95]">{crm}</p>
          <p className="mt-2 text-sm font-medium leading-relaxed text-[#5f7180]">
            {formation}
          </p>
          <div className="my-5 h-px bg-[#b9ddf2]" />
          <p className="text-sm leading-relaxed text-[#5f7180] md:text-base">
            {text}
          </p>
        </div>
      </div>
    </article>
  );
}
