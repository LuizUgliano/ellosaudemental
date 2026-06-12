"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { type: "doctors" },
    {
      type: "single",
      eyebrow: "Telemedicina",
      title: "Consulta online com segurança",
      subtitle:
        "Consultas online e presenciais com atendimento individualizado para cada paciente.",
      image: "/images/ello-logo.png",
      doctor: "Clínica Ello Saúde Mental",
      note: "Cuidar da mente é valorizar a vida.",
    },
    {
      type: "single",
      eyebrow: "Saúde Mental",
      title: "Cuidado especializado em todas as fases da vida",
      subtitle:
        "Acompanhamento psiquiátrico com escuta qualificada, acolhimento e orientação profissional.",
      image: "/images/brain-tree.png",
      doctor: "Ello Saúde Mental",
      note: "Atendimento humanizado para adultos, crianças e adolescentes.",
    },
  ];

  const areas = [
    {
      title: "Ansiedade",
      icon: "/icons/ansiedade.png",
      text: "Avaliação e acompanhamento de sintomas como preocupação excessiva, crises de ansiedade, tensão constante e dificuldade para relaxar.",
    },
    {
      title: "Depressão",
      icon: "/icons/depressao.png",
      text: "Cuidado voltado para alterações de humor, perda de energia, desânimo persistente, alterações de sono e impacto na rotina.",
    },
    {
      title: "Burnout",
      icon: "/icons/burnout.png",
      text: "Acompanhamento de quadros relacionados ao esgotamento emocional, sobrecarga profissional e queda importante de desempenho.",
    },
    {
      title: "Insônia",
      icon: "/icons/insonia.png",
      text: "Investigação de dificuldades para iniciar ou manter o sono, despertares frequentes e prejuízo na qualidade de vida.",
    },
    {
      title: "TDAH",
      icon: "/icons/tdah.png",
      text: "Avaliação de desatenção, impulsividade, dificuldade de organização e impacto nos estudos, trabalho e relacionamentos.",
    },
    {
      title: "Transtornos do Humor",
      icon: "/icons/humor.png",
      text: "Acompanhamento de oscilações de humor, irritabilidade, episódios depressivos e outras alterações emocionais relevantes.",
    },
  ];

  const faqs = [
    {
      question: "As consultas são online ou presenciais?",
      answer:
        "A Clínica Ello oferece consultas online e presenciais, de acordo com a disponibilidade e necessidade de cada paciente.",
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
  ];

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <main className="min-h-screen bg-[#f4f1ed] text-[#2b2b2b]">
      <header className="relative z-20">
        <div className="bg-gradient-to-r from-[#8fc7e8] via-[#b9ddf2] to-[#dff3ff] text-[#23313d]">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end gap-8 text-sm">
            <span>✉️ clinicaello.saude@gmail.com</span>

            <div className="flex items-center gap-3">
              <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} />
              <span>(11) 97630-8934</span>
            </div>
          </div>
        </div>

        <div className="bg-[#f8f6f2] border-b border-[#ddd6cf]">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/images/ello-logo.png"
                alt="Clínica Ello Saúde Mental"
                width={105}
                height={105}
                className="object-contain max-h-20"
              />

              <div>
                <h1 className="text-2xl font-semibold tracking-wide text-[#24465c]">
                  Clínica Ello - Saúde Mental
                </h1>
                <p className="text-sm text-[#6b625d]">
                  Psiquiatria • Telemedicina • Saúde Mental
                </p>
              </div>
            </div>

            <nav className="hidden md:flex gap-8 text-sm font-medium text-[#3f3f3f]">
              <a href="#telemedicina">Telemedicina</a>
              <a href="#atuacao">Áreas de Atuação</a>
              <a href="#sobre">Sobre</a>
              <a href="#faq">Dúvidas</a>
              <a href="#contato">Contato</a>
            </nav>
          </div>
        </div>
      </header>
      <section
        id="telemedicina"
        className="relative overflow-hidden h-[500px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(223,243,255,0.18), rgba(223,243,255,0.08)), url('/images/brain-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/5" />

        <button
          type="button"
          onClick={prevSlide}
          aria-label="Slide anterior"
          className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/35 hover:bg-white/70 text-[#24465c] text-3xl flex items-center justify-center backdrop-blur-md shadow-md cursor-pointer transition-all duration-300 hover:scale-110"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Próximo slide"
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/35 hover:bg-white/70 text-[#24465c] text-3xl flex items-center justify-center backdrop-blur-md shadow-md cursor-pointer transition-all duration-300 hover:scale-110"
        >
          ›
        </button>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          {slide.type === "doctors" && (
            <div className="grid md:grid-cols-[0.95fr_1.15fr_0.95fr] gap-7 items-center">
              <DoctorBlock
                image="/nathalia.jpg"
                name="Dra. Nathália Costa Ugliano"
                crm="Médica | CRM-SP 157028"
                description="Pós-graduada em Saúde Mental pela Santa Casa de São Paulo"
              />

              <div className="text-center px-2">
                <p className="uppercase tracking-[7px] text-xs text-[#347fb3] font-semibold mb-3">
                  Clínica Ello Saúde Mental
                </p>

                <h2 className="text-3xl md:text-5xl font-black leading-tight text-[#143a63]">
                  Cuidando da sua saúde mental com excelência
                </h2>

                <div className="flex items-center justify-center gap-4 my-4">
                  <div className="h-px w-20 bg-[#8fc7e8]" />
                  <span className="text-[#347fb3] text-xl">♡</span>
                  <div className="h-px w-20 bg-[#8fc7e8]" />
                </div>

                <p className="text-[#465766] text-base leading-relaxed max-w-md mx-auto">
                  Avaliação especializada, acolhimento e tratamento personalizado
                  para cada fase da vida.
                </p>

                <a
                  href="https://wa.me/5511976308934"
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#f6c76d] px-7 py-3 text-sm font-semibold text-[#143a63] shadow-xl hover:-translate-y-1 hover:shadow-2xl transition"
                >
                  <Image src="/whatsapp.png" alt="WhatsApp" width={22} height={22} />
                  Agendar consulta
                </a>
              </div>

              <DoctorBlock
                image="/images/fernanda.jpg"
                name="Dra. Fernanda Matos"
                crm="Médica | CRM-SP 264039"
                description="Pós-graduanda em Saúde Mental da Criança e do Adolescente pelo Hospital Israelita Albert Einstein"
              />
            </div>
          )}

          {slide.type === "single" && (
            <div className="grid md:grid-cols-2 gap-10 items-center h-full">
              <div>
                <p className="uppercase tracking-[8px] text-sm mb-4 text-[#347fb3] font-semibold">
                  {slide.eyebrow}
                </p>

                <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-2xl text-[#143a63]">
                  {slide.title}
                </h2>

                <p className="mt-5 text-lg text-[#465766] max-w-xl leading-relaxed">
                  {slide.subtitle}
                </p>

                <a
                  href="https://wa.me/5511976308934"
                  target="_blank"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#f6c76d] px-7 py-3 text-sm font-semibold text-[#143a63] shadow-xl hover:-translate-y-1 hover:shadow-2xl transition"
                >
                  <Image src="/whatsapp.png" alt="WhatsApp" width={22} height={22} />
                  Agendar consulta
                </a>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="relative w-[290px] h-[290px] md:w-[330px] md:h-[330px] rounded-full overflow-hidden border-[9px] border-white/90 shadow-2xl bg-white">
                    <img
                      src={slide.image}
                      alt={slide.doctor}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>

                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur rounded-2xl px-5 py-3 shadow-xl text-center">
                    <h3 className="text-lg font-semibold text-[#24465c]">
                      {slide.doctor}
                    </h3>
                    <p className="text-xs text-[#5f7180] mt-1 leading-relaxed">
                      {slide.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="absolute left-1/2 -translate-x-1/2 bottom-5 flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition cursor-pointer ${
                  activeSlide === index
                    ? "bg-[#143a63] scale-125"
                    : "bg-[#143a63]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="atuacao" className="bg-[#f8f6f2] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="uppercase tracking-[5px] text-sm text-[#2f6f95] mb-3">
              Áreas de Atuação
            </p>

            <h2 className="text-4xl font-semibold text-[#2b2b2b] mb-4">
              Cuidado especializado em saúde mental
            </h2>

            <p className="text-[#6b625d] text-lg">
              Atendimento psiquiátrico online com avaliação individualizada,
              escuta acolhedora e plano terapêutico adequado para cada paciente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {areas.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl bg-white border border-[#dcecf5] p-7 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition min-h-[260px] flex flex-col items-center justify-center"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-20 h-20 object-contain mb-2 mx-auto"
                />

                <h3 className="text-2xl font-semibold text-[#2b2b2b] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#6b625d] text-sm leading-relaxed max-w-[310px] mx-auto">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="sobre" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="uppercase tracking-[5px] text-sm text-[#2f6f95] mb-3">
              Sobre a Clínica
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#143a63] mb-6">
              Clínica Ello Saúde Mental
            </h2>

            <p className="text-lg text-[#5f7180] leading-relaxed">
              A Clínica Ello Saúde Mental nasceu com o propósito de oferecer
              atendimento psiquiátrico humanizado, acessível e baseado em
              evidências científicas. Nosso compromisso é proporcionar
              acolhimento, escuta qualificada e acompanhamento individualizado
              para cada paciente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <InfoCard
              title="Nossa Missão"
              text="Promover cuidado integral em saúde mental através de atendimento psiquiátrico ético, acolhedor e fundamentado em evidências científicas."
            />

            <InfoCard
              title="Nossa Visão"
              text="Ser referência em atendimento humanizado, proporcionando qualidade de vida, equilíbrio emocional e bem-estar aos pacientes."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10">

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

      <section id="faq" className="bg-[#f8f6f2] py-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="uppercase tracking-[5px] text-sm text-[#2f6f95] mb-3">
              Dúvidas Frequentes
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#143a63]">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-5">

            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-3xl p-7 border border-[#dcecf5] shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#143a63] mb-3">
                  {faq.question}
                </h3>

                <p className="text-[#5f7180] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section id="contato" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-gradient-to-r from-[#dff3ff] to-[#f8fbfd] rounded-[2rem] p-10 md:p-14 border border-[#dcecf5] shadow-xl">

            <div className="grid md:grid-cols-2 gap-12 items-center">

              <div>
                <p className="uppercase tracking-[5px] text-sm text-[#2f6f95] mb-3">
                  Contato
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-[#143a63] mb-6">
                  Agende sua consulta
                </h2>

                <p className="text-lg text-[#5f7180] leading-relaxed">
                  Entre em contato para mais informações sobre consultas,
                  horários disponíveis e atendimento online ou presencial.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">

                <div className="space-y-6">

                  <div>
                    <p className="text-sm text-[#5f7180]">
                      WhatsApp
                    </p>

                    <h3 className="text-xl font-semibold text-[#143a63]">
                      (11) 97630-8934
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm text-[#5f7180]">
                      E-mail
                    </p>

                    <h3 className="text-xl font-semibold text-[#143a63]">
                      clinicaello.saude@gmail.com
                    </h3>
                  </div>

                  <a
                    href="https://wa.me/5511976308934"
                    target="_blank"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f6c76d] px-8 py-4 text-base font-semibold text-[#143a63] shadow-xl hover:-translate-y-1 hover:shadow-2xl transition"
                  >
                    <Image
                      src="/whatsapp.png"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                    />
                    Agendar Consulta
                  </a>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
      <footer className="bg-[#143a63] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© Clínica Ello Saúde Mental. Todos os direitos reservados.</p>
          <p className="text-white/80">
            Psiquiatria • Telemedicina • Saúde Mental
          </p>
        </div>
      </footer>

      <a
        href="https://wa.me/5511976308934"
        target="_blank"
        className="fixed left-6 bottom-6 z-50 hover:scale-110 transition"
      >
        <Image src="/whatsapp.png" alt="WhatsApp" width={72} height={72} />
      </a>
    </main>
  );
}

function DoctorBlock({
  image,
  name,
  crm,
  description,
}: {
  image: string;
  name: string;
  crm: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[210px] h-[255px] md:w-[245px] md:h-[295px] rounded-[45%_55%_48%_52%/40%_45%_55%_60%] overflow-hidden border-[7px] border-white shadow-2xl bg-white">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="-mt-5 w-[92%] bg-white/95 backdrop-blur rounded-3xl px-5 py-4 shadow-xl text-center">
        <h3 className="text-lg md:text-xl font-bold text-[#143a63]">
          {name}
        </h3>

        <p className="mt-1 text-[#3f4f5d] text-sm">{crm}</p>

        <div className="h-px bg-[#b9ddf2] my-3" />

        <p className="text-[#143a63] text-xs md:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[#f8fbfd] rounded-3xl p-7 border border-[#dcecf5] shadow-sm">
      <h3 className="text-2xl font-bold text-[#143a63] mb-3">
        {title}
      </h3>

      <p className="text-[#5f7180] leading-relaxed">
        {text}
      </p>
    </div>
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
    <div className="bg-[#f8fbfd] rounded-[2rem] p-8 border border-[#dcecf5] shadow-lg">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 rounded-3xl object-cover border-4 border-white shadow-xl mx-auto md:mx-0"
        />

        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-[#143a63]">
            {name}
          </h3>

          <p className="text-[#2f6f95] font-medium mt-2">
            {crm}
          </p>

          <p className="text-[#5f7180] mt-2 font-medium">
            {formation}
          </p>
        </div>
      </div>

      <div className="h-px bg-[#b9ddf2] my-6" />

      <p className="text-[#5f7180] leading-relaxed text-left">
        {text}
      </p>
    </div>
  );
}