import BackLink from "./BackLink";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import WhatsAppButton from "./WhatsAppButton";
import WhatsAppFloat from "./WhatsAppFloat";

export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  whenToSeek: string[];
  benefits: string[];
  faqs: ServiceFaq[];
};

export default function ServicePage({
  eyebrow,
  title,
  description,
  whenToSeek,
  benefits,
  faqs,
}: ServicePageProps) {
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

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#5f7180] md:text-lg">
            {description}
          </p>

          <div className="mt-8">
            <WhatsAppButton label="Agendar consulta online" size="lg" />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <h2 className="font-display text-3xl text-[#143a63] md:text-4xl">
            Quando procurar atendimento?
          </h2>

          <ul className="mt-8 space-y-4">
            {whenToSeek.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base leading-relaxed text-[#5f7180] md:text-lg"
              >
                <span
                  aria-hidden
                  className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dff3ff] text-sm font-bold text-[#143a63]"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f8f6f2] py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <h2 className="font-display text-3xl text-[#143a63] md:text-4xl">
            Como o atendimento online pode ajudar
          </h2>

          <ul className="mt-8 space-y-3">
            {benefits.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base leading-relaxed text-[#5f7180] md:text-lg"
              >
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f6c76d]"
                />
                <span className="font-medium text-[#143a63]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <h2 className="font-display text-3xl text-[#143a63] md:text-4xl">
            Dúvidas frequentes
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-[#dcecf5] bg-[#f8fbfd] px-6 py-5"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-[#143a63] marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.q}
                    <span className="text-[#347fb3] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-[#5f7180]">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-[1.75rem] bg-[#143a63] p-8 text-center text-white">
            <h2 className="font-display text-3xl">Agende sua consulta online</h2>
            <p className="mt-3 text-white/80">
              Fale com a Clínica Ello Saúde Mental pelo WhatsApp.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppButton label="Chamar no WhatsApp" size="lg" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
