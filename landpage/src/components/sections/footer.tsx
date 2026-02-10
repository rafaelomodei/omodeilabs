export function Footer() {
  return (
    <footer className='border-t border-[#8A52D1]/15 px-6 py-12'>
      <div className='mx-auto flex max-w-5xl flex-col items-center gap-4 text-center'>
        <p
          className='animate-fade-in text-sm text-[#B8A896]'
          style={{ animationDelay: '200ms' }}
        >
          © {new Date().getFullYear()} Omodei Labs. Conectando tecnologia ao
          seu negócio.
        </p>
        <div
          className='animate-fade-in flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-[#8A52D1]'
          style={{ animationDelay: '450ms' }}
        >
          <span>Software sob medida</span>
          <span>•</span>
          <span>Produto digital</span>
          <span>•</span>
          <span>Parceria estratégica</span>
        </div>
      </div>
    </footer>
  );
}
