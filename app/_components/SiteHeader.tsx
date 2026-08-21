"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { searchContent, type ContentItem } from "../_lib/contentIndex";
import WhatsAppIcon from "./WhatsAppIcon";

const navLinks = [
  { href: "/psiquiatra-online", label: "Telemedicina" },
  { href: "/#atuacao", label: "Áreas" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/conteudos", label: "Conteúdos" },
  { href: "/#contato", label: "Contato" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const menuId = useId();
  const searchRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => searchContent(query, 7), [query]);
  const showResults = searchOpen && query.trim().length >= 2;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, []);

  const goToResult = (item: ContentItem) => {
    setQuery("");
    setSearchOpen(false);
    setMenuOpen(false);
    window.location.href = item.href;
  };

  return (
    <header className="sticky top-0 z-50 shadow-[0_8px_30px_-18px_rgba(20,58,99,0.45)]">
      <div className="bg-gradient-to-r from-[#8fc7e8] via-[#b9ddf2] to-[#dff3ff] text-[#23313d]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-3 py-2 sm:justify-end sm:gap-6 sm:px-5 md:px-6">
          <a
            href="mailto:clinicaello.saude@gmail.com"
            className="flex min-h-10 min-w-10 items-center justify-center gap-2 rounded-lg px-1.5 text-sm transition hover:text-[#143a63] sm:min-h-0 sm:min-w-0"
            aria-label="E-mail da clínica"
          >
            <MailIcon />
            <span className="hidden sm:inline">clinicaello.saude@gmail.com</span>
          </a>
          <a
            href="https://www.instagram.com/ello_saudemental"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-10 min-w-10 items-center justify-center gap-2 rounded-lg px-1.5 text-sm transition hover:text-[#143a63] sm:min-h-0 sm:min-w-0"
            aria-label="Instagram da Clínica Ello Saúde Mental"
          >
            <InstagramIcon />
            <span className="hidden md:inline">@ello_saudemental</span>
          </a>
          <a
            href="https://wa.me/5511976308934"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-10 min-w-10 items-center justify-center gap-2 rounded-lg px-1.5 text-sm font-medium transition hover:text-[#143a63] sm:min-h-0 sm:min-w-0"
            aria-label="WhatsApp da clínica"
          >
            <WhatsAppIcon size={22} />
            <span className="hidden sm:inline">(11) 97630-8934</span>
          </a>
        </div>
      </div>

      <div className="border-b border-[#ddd6cf] bg-[#f8f6f2]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-5 md:px-6 md:py-3">
          <button
            type="button"
            id={`${menuId}-button`}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-[60] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#143a63]/15 bg-white text-[#143a63] shadow-sm transition hover:bg-[#dff3ff] lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls={`${menuId}-panel`}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <Link
            href="/"
            className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/ello-logo.png"
              alt="Clínica Ello Saúde Mental"
              width={72}
              height={72}
              className="h-10 w-10 object-contain sm:h-12 sm:w-12"
              priority
            />
            <div className="min-w-0 hidden sm:block">
              <p className="font-display text-lg leading-tight tracking-wide text-[#143a63] sm:text-2xl">
                Clínica Ello
              </p>
              <p className="hidden truncate text-[11px] text-[#6b625d] md:block md:text-xs">
                Saúde Mental · Psiquiatria Online
              </p>
            </div>
          </Link>

          <div
            ref={searchRef}
            className="relative ml-auto min-w-0 flex-1 max-w-xl lg:ml-4"
          >
            <label htmlFor="site-search" className="sr-only">
              Buscar conteúdos de saúde mental
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#347fb3]">
                <SearchIcon />
              </span>
              <input
                id="site-search"
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Buscar: ansiedade, TDAH, TOC..."
                autoComplete="off"
                className="w-full rounded-full border border-[#cfe3ef] bg-white py-2.5 pl-10 pr-4 text-sm text-[#143a63] outline-none ring-[#8fc7e8] placeholder:text-[#8a97a3] focus:border-[#8fc7e8] focus:ring-2"
              />
            </div>

            {showResults ? (
              <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-[70] overflow-hidden rounded-2xl border border-[#dcecf5] bg-white shadow-2xl">
                {results.length === 0 ? (
                  <p className="px-4 py-3 text-sm text-[#5f7180]">
                    Nenhum resultado para “{query}”.
                  </p>
                ) : (
                  <ul className="max-h-[60vh] overflow-auto py-1">
                    {results.map((item) => (
                      <li key={item.href}>
                        <button
                          type="button"
                          onClick={() => goToResult(item)}
                          className="flex w-full flex-col items-start gap-0.5 px-4 py-3 text-left transition hover:bg-[#f4fbfd]"
                        >
                          <span className="text-sm font-semibold text-[#143a63]">
                            {item.title}
                          </span>
                          <span className="text-xs text-[#6b625d]">
                            {item.category}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}
          </div>

          <nav className="hidden items-center gap-5 text-sm font-medium text-[#3f3f3f] xl:flex">
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
            className="hidden shrink-0 items-center gap-2.5 rounded-full bg-[#f6c76d] px-4 py-2.5 text-sm font-semibold text-[#143a63] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg md:inline-flex"
          >
            <WhatsAppIcon size={22} />
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
            className="absolute left-0 top-0 flex h-full w-[min(88vw,340px)] flex-col gap-1 overflow-y-auto bg-white px-6 py-8 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
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

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f6f95]">
              Navegação
            </p>
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
              href="https://www.instagram.com/ello_saudemental"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium text-[#143a63] transition hover:bg-[#f4f1ed]"
            >
              <InstagramIcon />
              Instagram
            </a>

            <a
              href="https://wa.me/5511976308934"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-[#f6c76d] px-5 py-3.5 text-sm font-semibold text-[#143a63]"
            >
              <WhatsAppIcon size={26} />
              Agendar consulta
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
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
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
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
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.25" fill="currentColor" />
    </svg>
  );
}
