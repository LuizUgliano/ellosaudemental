"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

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
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="relative z-50">
      <div className="bg-gradient-to-r from-[#8fc7e8] via-[#b9ddf2] to-[#dff3ff] text-[#23313d]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-5 px-4 py-2.5 sm:justify-end sm:gap-6 md:gap-8 md:px-6">
          <a
            href="mailto:clinicaello.saude@gmail.com"
            className="flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-xl bg-white/35 px-2.5 text-sm transition hover:bg-white/55 hover:text-[#143a63] sm:min-h-11 sm:min-w-0 sm:justify-start sm:bg-transparent sm:px-1.5"
            aria-label="Enviar e-mail para a Clínica Ello Saúde Mental"
          >
            <MailIcon />
            <span className="hidden sm:inline">clinicaello.saude@gmail.com</span>
          </a>

          <a
            href="https://www.instagram.com/ello_saudemental"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-xl bg-white/35 px-2.5 text-sm transition hover:bg-white/55 hover:text-[#143a63] sm:min-h-11 sm:min-w-0 sm:justify-start sm:bg-transparent sm:px-1.5"
            aria-label="Instagram da Clínica Ello Saúde Mental"
          >
            <InstagramIcon />
            <span className="hidden md:inline">@ello_saudemental</span>
          </a>

          <a
            href="https://wa.me/5511976308934"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-xl bg-white/35 px-2.5 text-sm font-medium transition hover:bg-white/55 hover:text-[#143a63] sm:min-h-11 sm:min-w-0 sm:justify-start sm:bg-transparent sm:px-1.5"
            aria-label="WhatsApp da Clínica Ello Saúde Mental"
          >
            <Image src="/whatsapp.png" alt="" width={24} height={24} />
            <span className="hidden sm:inline">(11) 97630-8934</span>
          </a>
        </div>
      </div>

      <div className="border-b border-[#ddd6cf] bg-[#f8f6f2]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 sm:gap-3 md:px-6 md:py-4">
          <button
            type="button"
            id={`${menuId}-button`}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-[60] flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#143a63]/15 bg-white text-[#143a63] shadow-sm transition hover:bg-[#dff3ff] lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls={`${menuId}-panel`}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3 md:gap-4"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/ello-logo.png"
              alt="Clínica Ello Saúde Mental"
              width={88}
              height={88}
              className="h-11 w-11 object-contain sm:h-12 sm:w-12 md:h-16 md:w-16"
              priority
            />
            <div className="min-w-0">
              <p className="font-display text-lg leading-tight tracking-wide text-[#143a63] sm:text-xl md:text-3xl">
                Clínica Ello
              </p>
              <p className="truncate text-[11px] text-[#6b625d] sm:text-xs md:text-sm">
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

      {menuOpen ? (
        <div className="fixed inset-0 z-[55] lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-[#143a63]/40 backdrop-blur-[2px]"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            id={`${menuId}-panel`}
            className="absolute left-0 top-0 flex h-full w-[min(88vw,340px)] flex-col gap-1 bg-white px-6 py-8 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="font-display text-2xl text-[#143a63]">Menu</p>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#143a63]/10 text-[#143a63] hover:bg-[#dff3ff]"
                aria-label="Fechar menu"
              >
                <CloseIcon />
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3.5 text-base font-medium text-[#143a63] transition hover:bg-[#f4f1ed]"
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
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
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
