"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/psiquiatra-online", label: "Telemedicina" },
  { href: "/#atuacao", label: "Áreas de Atuação" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/conteudos", label: "Conteúdos" },
  { href: "/#faq", label: "Dúvidas" },
  { href: "/#contato", label: "Contato" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="relative z-50">
      <div className="bg-gradient-to-r from-[#8fc7e8] via-[#b9ddf2] to-[#dff3ff] text-[#23313d]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 md:justify-end md:gap-8 md:px-6 md:py-2">
          <a
            href="mailto:clinicaello.saude@gmail.com"
            className="flex min-h-11 items-center gap-2 rounded-lg px-1 text-sm transition hover:text-[#143a63] md:min-h-0"
            aria-label="Enviar e-mail para a Clínica Ello Saúde Mental"
          >
            <MailIcon />
            <span className="hidden sm:inline">clinicaello.saude@gmail.com</span>
          </a>

          <a
            href="https://www.instagram.com/ello_saudemental"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-2 rounded-lg px-1 text-sm transition hover:text-[#143a63] md:min-h-0"
            aria-label="Instagram da Clínica Ello Saúde Mental"
          >
            <InstagramIcon />
            <span className="hidden md:inline">@ello_saudemental</span>
          </a>

          <a
            href="https://wa.me/5511976308934"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-2 rounded-lg px-1 text-sm font-medium transition hover:text-[#143a63] md:min-h-0"
            aria-label="WhatsApp da Clínica Ello Saúde Mental"
          >
            <Image src="/whatsapp.png" alt="" width={22} height={22} />
            <span className="hidden sm:inline">(11) 97630-8934</span>
          </a>
        </div>
      </div>

      <div className="border-b border-[#ddd6cf] bg-[#f8f6f2]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-6 md:py-4">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#143a63] transition hover:bg-[#dff3ff] lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span className="text-3xl leading-none" aria-hidden="true">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>

          <Link href="/" className="flex min-w-0 flex-1 items-center gap-3 md:gap-4">
            <Image
              src="/images/ello-logo.png"
              alt="Clínica Ello Saúde Mental"
              width={88}
              height={88}
              className="h-12 w-12 object-contain md:h-16 md:w-16"
              priority
            />
            <div className="min-w-0">
              <p className="font-display text-xl leading-tight tracking-wide text-[#143a63] md:text-3xl">
                Clínica Ello
              </p>
              <p className="truncate text-xs text-[#6b625d] md:text-sm">
                Saúde Mental · Psiquiatria Online
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#3f3f3f] lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#143a63]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/5511976308934"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#f6c76d] px-5 py-2.5 text-sm font-semibold text-[#143a63] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg md:inline-flex"
          >
            Agendar
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-[#143a63]/35 backdrop-blur-[2px]"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute left-0 top-0 flex h-full w-[min(86vw,320px)] flex-col gap-1 bg-white px-6 py-8 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-display text-2xl text-[#143a63]">Menu</p>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-xl text-2xl text-[#143a63] hover:bg-[#dff3ff]"
                aria-label="Fechar menu"
              >
                ✕
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-[#143a63] transition hover:bg-[#f4f1ed]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511976308934"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#f6c76d] px-5 py-3.5 text-sm font-semibold text-[#143a63]"
            >
              <Image src="/whatsapp.png" alt="" width={20} height={20} />
              Agendar consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.25" fill="currentColor" />
    </svg>
  );
}
