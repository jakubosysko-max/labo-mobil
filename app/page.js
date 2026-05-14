"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Building2,
  Menu,
  X,
} from "lucide-react";

const sections = [
  {
    id: "auto",
    label: "Start",
    image: "/auto.png",
    alt: "LABO-MOBIL auto pomiarowe",
  },
  {
    id: "urzadzenie",
    label: "System",
    image: "/urzadzenie.png",
    alt: "Urządzenie do fotorejestracji",
  },
  {
    id: "program",
    label: "Program",
    image: "/program.png",
    alt: "Program do fotorejestracji",
  },
  {
    id: "mapa",
    label: "Mapy",
    image: "/mapa.png",
    alt: "Mapa stanu technicznego dróg",
  },
  {
    id: "drogi",
    label: "Drogi",
    image: "/przegladyd.png",
    alt: "Przeglądy dróg",
  },
  {
    id: "mosty",
    label: "Mosty",
    image: "/przegladym.png",
    alt: "Przeglądy obiektów mostowych",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#061113] text-white">
      <div className="flash-overlay" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061113]/95 backdrop-blur-xl">
        <div className="relative mx-auto flex h-[84px] max-w-7xl items-center justify-center px-4 md:h-[82px] md:justify-between md:px-6">
          {/* LOGO */}
          <Image
            src="/logo.png"
            alt="LABO-MOBIL"
            width={260}
            height={90}
            priority
            className="h-[68px] w-auto object-contain md:h-[75px]"
          />

          {/* MENU DESKTOP */}
          <nav className="hidden gap-8 text-[15px] font-semibold uppercase tracking-[0.08em] text-slate-200 lg:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="relative transition duration-300 hover:text-teal-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {section.label}
              </a>
            ))}

            <a
              href="#kontakt"
              className="relative transition duration-300 hover:text-teal-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              Kontakt
            </a>
          </nav>

          {/* TELEFON DESKTOP */}
          <a
            href="https://wa.me/48791619595"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 whitespace-nowrap rounded-xl border border-teal-400/60 px-5 py-3 text-sm font-bold text-teal-300 transition hover:bg-teal-400 hover:text-slate-950 md:inline-flex"
          >
            +48 791 619 595
          </a>

          {/* MENU MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 p-3 text-teal-300 md:hidden"
            aria-label="Otwórz menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MENU MOBILE */}
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#061113] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-center text-sm font-semibold uppercase tracking-[0.08em] text-slate-200">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-white/10 py-3 transition hover:border-teal-300/50 hover:text-teal-300"
                >
                  {section.label}
                </a>
              ))}

              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-white/10 py-3 transition hover:border-teal-300/50 hover:text-teal-300"
              >
                Kontakt
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* SEKCJE */}
      <section className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
        <div className="space-y-8 md:space-y-10">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-28"
            >
              <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#020b0d] shadow-2xl shadow-black/50 transition duration-500 hover:-translate-y-1 hover:border-teal-300/40 hover:shadow-teal-950/50 md:rounded-[32px]">
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-transparent via-teal-300/10 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

                <Image
                  src={section.image}
                  alt={section.alt}
                  width={1600}
                  height={900}
                  className="w-full transition duration-700 group-hover:scale-[1.015]"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PŁYWAJĄCY TELEFON MOBILE */}
      <a
        href="https://wa.me/48791619595"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal-400 text-slate-950 shadow-2xl shadow-teal-950/60 md:hidden"
        aria-label="Kontakt telefoniczny LABO-MOBIL"
      >
        <Phone size={26} />
      </a>

      {/* STOPKA */}
      <footer
        id="kontakt"
        className="mt-10 border-t border-white/10 bg-black/30 px-4 py-6 font-[Calibri]"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <Image
            src="/logo.png"
            alt="LABO-MOBIL"
            width={260}
            height={90}
            className="mb-6 h-[72px] w-auto object-contain md:h-[76px]"
          />

          <div className="grid gap-6 text-sm text-slate-300 md:grid-cols-5 md:text-base">
            <div className="flex items-start justify-center gap-3">
              <Building2
                className="mt-1 shrink-0 text-teal-300"
                size={20}
              />

              <span>
                ul. Grzybowa 25
                <br />
                33-100 Tarnów
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Phone className="shrink-0 text-teal-300" size={20} />

              <a
                href="https://wa.me/48791619595"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-teal-300"
              >
                +48 791 619 595
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Mail className="shrink-0 text-teal-300" size={20} />

              <a
                href="mailto:labomobil@op.pl?subject=Zapytanie%20ze%20strony%20LABO-MOBIL"
                className="transition hover:text-teal-300"
              >
                labomobil@op.pl
              </a>
            </div>

            <div className="text-center">
              NIP: 993-055-66-53
              <br />
              REGON: 123225360
            </div>

            <div className="text-center">
              <span className="font-semibold text-teal-300">
                ING Bank Śląski S.A.
              </span>
              <br />
              10 1050 1562 1000 0092 0232 9067
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}