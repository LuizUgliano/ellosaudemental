import Link from "next/link";
import BackLink from "./BackLink";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import WhatsAppButton from "./WhatsAppButton";
import WhatsAppFloat from "./WhatsAppFloat";

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
      <SiteHeader />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#dff3ff] via-[#f8fbfd] to-[#f4f1ed] py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-5 md:px-6">
          <BackLink />

          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f95]">
            {eyebrow}
          </p>

          <h1 className="mt-4 font-display text-4xl leading-tight text-[#143a63] md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5f7180] md:text-lg">
            {description}
          </p>

          <div className="mt-8">
            <WhatsAppButton label="Agendar consulta online" size="md" />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <p className="text-lg leading-relaxed text-[#5f7180] md:text-xl">
            {intro}
          </p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-display text-2xl text-[#143a63] md:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="leading-relaxed text-[#5f7180]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-12 rounded-2xl border border-[#dcecf5] bg-[#f8fbfd] p-6">
            <p className="text-sm leading-relaxed text-[#5f7180]">
              Este conteúdo é informativo e não substitui uma avaliação médica
              individual. Em caso de sintomas persistentes ou sofrimento
              importante, procure atendimento profissional.
            </p>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[#f8f6f2] py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-5 md:px-6">
            <h2 className="font-display text-3xl text-[#143a63]">Veja também</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-[#dcecf5] bg-white p-5 font-semibold text-[#143a63] transition hover:border-[#8fc7e8]"
                >
                  {item.title} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <h2 className="font-display text-3xl text-[#143a63] md:text-4xl">
            Dúvidas frequentes
          </h2>

          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#dcecf5] bg-[#f8fbfd] px-5 py-4"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-[#143a63] marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="text-[#347fb3] transition group-open:rotate-45">
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

          <div className="mt-10 rounded-[1.75rem] bg-[#143a63] p-8 text-center text-white">
            <h2 className="font-display text-3xl">Precisa de orientação?</h2>
            <p className="mt-3 text-white/80">
              Fale com a Clínica Ello Saúde Mental pelo WhatsApp.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppButton label="Chamar no WhatsApp" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
