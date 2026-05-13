import { Phone, Mail, Building2 } from "lucide-react";

const sections = [
  { id: "auto", image: "/auto.png", alt: "LABO-MOBIL auto pomiarowe" },
  { id: "urzadzenie", image: "/urzadzenie.png", alt: "Urządzenie do fotorejestracji" },
  { id: "program", image: "/program.png", alt: "Program do fotorejestracji" },
  { id: "mapa", image: "/mapa.png", alt: "Mapa stanu technicznego dróg" },
  { id: "drogi", image: "/przegladyd.png", alt: "Przeglądy dróg" },
  { id: "mosty", image: "/przegladym.png", alt: "Przeglądy obiektów mostowych" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#061113] text-white">
  <div className="flash-overlay" />
  <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061113]/90 backdrop-blur-xl">
    <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6">
      
      <img
        src="/logo.png"
        alt="LABO-MOBIL"
        className="h-[75px] w-auto object-contain"
      />

      <nav className="hidden gap-8 text-[15px] font-semibold uppercase tracking-[0.08em] text-slate-200 lg:flex">
        <a href="#auto" className="relative transition duration-300 hover:text-teal-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full">Start</a>
        <a href="#urzadzenie" className="relative transition duration-300 hover:text-teal-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full">System</a>
        <a href="#program" className="relative transition duration-300 hover:text-teal-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full">Program</a>
        <a href="#mapa" className="relative transition duration-300 hover:text-teal-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full">Mapy</a>
        <a href="#drogi" className="relative transition duration-300 hover:text-teal-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full">Drogi</a>
        <a href="#mosty" className="relative transition duration-300 hover:text-teal-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full">Mosty</a>
        <a href="#kontakt" className="relative transition duration-300 hover:text-teal-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full">Kontakt</a>
      </nav>

          <a href="tel:791619595" className="rounded-xl border border-teal-400/60 px-5 py-3 text-sm font-bold text-teal-300">
            +48 791-619-595
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="space-y-10">
          {sections.map((section) => (
            <article key={section.id} id={section.id} className="scroll-mt-28">
              <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#020b0d] shadow-2xl shadow-black/50 transition duration-500 hover:-translate-y-1 hover:border-teal-300/40 hover:shadow-teal-950/50">
  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-transparent via-teal-300/10 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

  <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#020b0d] shadow-2xl shadow-black/50 transition duration-500 hover:-translate-y-1 hover:border-teal-300/40 hover:shadow-teal-950/50">

  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-transparent via-teal-300/10 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

  <img
    src={section.image}
    alt={section.alt}
    className="w-full transition duration-700 group-hover:scale-[1.015]"
  />

</div>
</div>
            </article>
          ))}
        </div>
      </section>

      <footer id="kontakt" className="mt-10 border-t border-white/10 bg-black/30 px-6 py-2 font-[Calibri">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_2fr] md:items-center">
          <img src="/logo.png" alt="LABO-MOBIL" className="h-[75px] w-auto object-contain" />

          <div className="grid gap-5 text-slate-300 md:grid-cols-4">
            <p className="flex gap-3">
              <Building2 className="text-teal-300" />
              <span>ul. Grzybowa 25<br />33-100 Tarnów</span>
            </p>
            <p className="flex gap-3">
              <Phone className="text-teal-300" />
              <span>+48 791-619-595</span>
            </p>
            <p className="flex gap-3">
              <Mail className="text-teal-300" />
              <span>labomobil@op.pl</span>
            </p>
            <p>NIP: 993-055-66-53<br />REGON: 123225360</p>
          </div>
        </div>
      </footer>
    </main>
  );
}