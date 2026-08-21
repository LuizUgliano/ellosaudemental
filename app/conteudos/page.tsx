import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import WhatsAppFloat from "../_components/WhatsAppFloat";
import { contentIndex } from "../_lib/contentIndex";

export const metadata: Metadata = {
  title: "Conteúdos sobre Saúde Mental",
  description:
    "Biblioteca de conteúdos sobre saúde mental, psiquiatria online, transtornos, sintomas e dúvidas frequentes.",
};

const categories = [
  "Tratamentos",
  "Condições",
  "Sintomas",
  "Infantil",
  "Adultos",
  "Atendimento",
  "Regiões",
] as const;

export default function ConteudosPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ed] text-[#2b2b2b]">
      <SiteHeader />

      <section className="bg-gradient-to-br from-[#dff3ff] via-[#f8fbfd] to-[#f4f1ed] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f95]">
            Biblioteca
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-[#143a63] md:text-6xl">
            Conteúdos sobre saúde mental
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5f7180] md:text-lg">
            Use a busca no topo da página para achar um tema rapidamente, ou
            navegue pelas categorias abaixo.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-12 px-5 md:px-6">
          {categories.map((category) => {
            const items = contentIndex.filter(
              (item) => item.category === category && item.href !== "/conteudos",
            );
            if (items.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="font-display text-2xl text-[#143a63] md:text-3xl">
                  {category}
                </h2>
                <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl border border-[#dcecf5] bg-[#f8fbfd] px-4 py-4 text-sm font-semibold text-[#143a63] transition hover:border-[#8fc7e8] hover:bg-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
