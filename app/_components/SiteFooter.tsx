export default function SiteFooter() {
  return (
    <footer className="bg-[#143a63] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm md:flex-row md:text-left">
        <div>
          <p className="font-display text-2xl tracking-wide">Clínica Ello</p>
          <p className="mt-1 text-white/75">
            © {new Date().getFullYear()} Clínica Ello Saúde Mental. Todos os
            direitos reservados.
          </p>
        </div>
        <p className="text-white/80">Psiquiatria · Telemedicina · Saúde Mental</p>
      </div>
    </footer>
  );
}
