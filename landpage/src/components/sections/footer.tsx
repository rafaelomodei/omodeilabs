export function Footer() {
  return (
    <footer className="border-t border-[#6B7D5B]/15 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <p className="animate-fade-in text-sm text-[#B8A896]" style={{ animationDelay: "200ms" }}>
          © {new Date().getFullYear()} Verde Forma. Onde o verde vira forma e o espaço ganha vida.
        </p>
        <div
          className="animate-fade-in flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-[#6B7D5B]"
          style={{ animationDelay: "450ms" }}
        >
          <span>Design exclusivo</span>
          <span>•</span>
          <span>Impressão 3D</span>
          <span>•</span>
          <span>Sustentabilidade</span>
        </div>
      </div>
    </footer>
  );
}
