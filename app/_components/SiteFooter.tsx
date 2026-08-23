import Link from "next/link";

const footerLinks = [
  { title: "Psiquiatra online", href: "/psiquiatra-online" },
  { title: "Ansiedade", href: "/tratamento-ansiedade" },
  { title: "TDAH", href: "/tratamento-tdah" },
  { title: "Primeira consulta", href: "/primeira-consulta-psiquiatrica" },
  { title: "Conteúdos", href: "/conteudos" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#143a63] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-2xl tracking-wide">Clínica Ello</p>
          <p className="mt-1 text-sm text-white/75">
            © {new Date().getFullYear()} Clínica Ello Saúde Mental. Todos os
            direitos reservados.
          </p>
          <p className="mt-2 text-sm text-white/80">
            Psiquiatria · Telemedicina · Saúde Mental
          </p>
        </div>
        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/85 md:justify-end"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
