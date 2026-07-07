import Link from "next/link";
import Image from "next/image";

export type SeoArticleSection = {
  title: string;
  paragraphs: string[];
};

export type SeoArticleFaq = {
  question: string;
  answer: string;
};

export type RelatedLink = {
  title: string;
  href: string;
};

export type SeoArticlePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  sections: SeoArticleSection[];
  faqs: SeoArticleFaq[];
  related?: RelatedLink[];
};

export default function SeoArticlePage({
  eyebrow,
  title,
  description,
  intro,
  sections,
  faqs,
  related = [],
}: SeoArticlePageProps) {
  return (
    <main className="min-h-screen bg-[#f4f1ed] text-[#2b2b2b]">
      <section className="bg-gradient-to-r from-[#dff3ff] to-[#f8fbfd] py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <Link
            href="/"
            className="mb-8 inline-flex items-center rounded-full border border-[#143a63]/20 bg-white/80 px-5 py-2 text-sm font-semibold text-[#143a63] shadow-sm transition hover:bg-white"
          >
            ← Voltar para a página inicial
          </Link>

          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[5px] text-[#2f6f95]">
                {eyebrow}
              </p>

              <h1 className="text-4xl font-black leading-tight text-[#143a63] md:text-6xl">
                {title}
              </h1>

              <p className="mt-6 text-base leading-relaxed text-[#5f7180] md:text-lg">
                {description}
              </p>

              <a
                href="https://wa.me/5511976308934"
                target="_blank"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f6c76d] px-7 py-4 text-sm font-semibold text-[#143a63] shadow-xl transition hover:-translate-y-1"
              >
                <Image src="/whatsapp.png" alt="WhatsApp" width={22} height={22} />
                Agendar consulta online
              </a>
            </div>

            <div className="rounded-[2rem] border border-[#dcecf5] bg-white p-7 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#2f6f95]">
                Clínica Ello Saúde Mental
              </p>
              <p className="mt-4 text-2xl font-bold leading-snug text-[#143a63]">
                Atendimento psiquiátrico online com escuta, cuidado e orientação individualizada.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#5f7180]">
                Este conteúdo é informativo e não substitui uma avaliação médica individual. Em caso de sintomas persistentes ou sofrimento importante, procure atendimento profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-18">
        <div className="mx-auto max-w-4xl px-5 md:px-6">
          <p className="text-lg leading-relaxed text-[#5f7180] md:text-xl">
            {intro}
          </p>

          <div className="mt-10 space-y-9">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-2xl font-bold text-[#143a63] md:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-[#5f7180]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[#f8f6f2] py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-5 md:px-6">
            <h2 className="text-3xl font-bold text-[#143a63]">Veja também</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-3xl border border-[#dcecf5] bg-white p-5 font-semibold text-[#143a63] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {item.title} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-12 md:py-18">
        <div className="mx-auto max-w-4xl px-5 md:px-6">
          <h2 className="text-3xl font-bold text-[#143a63] md:text-4xl">
            Dúvidas frequentes
          </h2>

          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-[#dcecf5] bg-[#f8fbfd] p-6"
              >
                <h3 className="text-lg font-bold text-[#143a63]">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-relaxed text-[#5f7180]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-[#143a63] p-7 text-center text-white">
            <h2 className="text-2xl font-bold">Precisa de orientação?</h2>
            <p className="mt-3 text-white/80">
              Fale com a Clínica Ello Saúde Mental pelo WhatsApp para informações sobre agendamento online.
            </p>

            <a
              href="https://wa.me/5511976308934"
              target="_blank"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#f6c76d] px-7 py-4 text-sm font-semibold text-[#143a63]"
            >
              <Image src="/whatsapp.png" alt="WhatsApp" width={22} height={22} />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
