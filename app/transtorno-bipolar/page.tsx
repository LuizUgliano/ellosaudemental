import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Transtorno Bipolar Online | Clínica Ello Saúde Mental",
  description:
    "Atendimento psiquiátrico online para transtorno bipolar, oscilações de humor e acompanhamento em saúde mental.",
};

const whenToSeek = [
  "Oscilações intensas de humor, energia ou irritabilidade",
  "Períodos de euforia, aceleração ou impulsividade",
  "Episódios depressivos recorrentes",
  "Alterações importantes de sono e rotina",
  "Prejuízo no trabalho, estudos ou relacionamentos",
];
const benefits = [
  "Avaliação psiquiátrica individualizada",
  "Atendimento online com privacidade",
  "Orientação sobre tratamento e acompanhamento",
  "Receita digital quando indicada",
  "Plano de cuidado conforme a necessidade do paciente",
];
const faqs = [
  {
    q: "Transtorno bipolar tem tratamento?",
    a: "Sim. O acompanhamento psiquiátrico pode ajudar no controle dos sintomas e na construção de um plano terapêutico adequado.",
  },
  {
    q: "A consulta online serve para acompanhamento?",
    a: "Sim. A teleconsulta pode ser utilizada para avaliação e acompanhamento, conforme a necessidade do paciente.",
  },
  {
    q: "Medicamento é sempre necessário?",
    a: "A indicação depende da avaliação médica, do histórico e da intensidade dos sintomas.",
  },
  {
    q: "Como agendar?",
    a: "O agendamento pode ser feito pelo WhatsApp da clínica.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f4f1ed] text-[#2b2b2b]">
      <header className="border-b border-[#ddd6cf] bg-[#f8f6f2]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-6">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/images/ello-logo.png"
              alt="Clínica Ello Saúde Mental"
              width={64}
              height={64}
              className="h-12 w-12 object-contain md:h-14 md:w-14"
            />
            <div>
              <p className="text-base font-semibold text-[#24465c] md:text-xl">
                Clínica Ello - Saúde Mental
              </p>
              <p className="text-xs text-[#6b625d] md:text-sm">
                Psiquiatria • Telemedicina • Saúde Mental
              </p>
            </div>
          </a>

          <a
            href="/"
            className="shrink-0 rounded-full border border-[#143a63] px-4 py-2 text-xs font-semibold text-[#143a63] transition hover:bg-[#143a63] hover:text-white md:px-5 md:text-sm"
          >
            ← Voltar
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-r from-[#dff3ff] to-[#f8fbfd] py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[5px] text-[#2f6f95]">
              Transtorno Bipolar
            </p>

            <h1 className="text-4xl font-black leading-tight text-[#143a63] md:text-6xl">
              Tratamento do transtorno bipolar online com acompanhamento
              psiquiátrico
            </h1>

            <p className="mt-6 text-base leading-relaxed text-[#5f7180] md:text-lg">
              O transtorno bipolar pode envolver oscilações importantes de
              humor, energia, sono e comportamento. O acompanhamento
              psiquiátrico ajuda a avaliar o quadro com cuidado, orientar o
              tratamento e acompanhar a evolução de forma individualizada.
            </p>

            <a
              href="https://wa.me/5511976308934"
              target="_blank"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f6c76d] px-7 py-4 text-sm font-semibold text-[#143a63] shadow-xl transition hover:-translate-y-1"
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={22}
                height={22}
              />
              Agendar consulta online
            </a>
          </div>

          <div className="rounded-[2rem] border border-[#dcecf5] bg-white p-6 shadow-xl">
            <Image
              src="/images/ello-logo.png"
              alt="Clínica Ello Saúde Mental"
              width={520}
              height={360}
              className="mx-auto h-auto w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <h2 className="text-3xl font-bold text-[#143a63] md:text-4xl">
            Quando procurar atendimento?
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {whenToSeek.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#dcecf5] bg-[#f8fbfd] p-5 shadow-sm"
              >
                <p className="font-semibold leading-relaxed text-[#143a63]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f2] py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <h2 className="text-3xl font-bold text-[#143a63] md:text-4xl">
            Como o atendimento online pode ajudar
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {benefits.map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#143a63]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <h2 className="text-3xl font-bold text-[#143a63] md:text-4xl">
            Dúvidas frequentes
          </h2>

          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-[#dcecf5] bg-[#f8fbfd] p-6"
              >
                <h3 className="text-lg font-bold text-[#143a63]">{faq.q}</h3>
                <p className="mt-3 leading-relaxed text-[#5f7180]">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-[#143a63] p-7 text-center text-white">
            <h2 className="text-2xl font-bold">Agende sua consulta online</h2>
            <p className="mt-3 text-white/80">
              Fale com a Clínica Ello Saúde Mental pelo WhatsApp.
            </p>
            <a
              href="https://wa.me/5511976308934"
              target="_blank"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#f6c76d] px-7 py-4 text-sm font-semibold text-[#143a63]"
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={22}
                height={22}
              />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
