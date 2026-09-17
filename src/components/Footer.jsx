const Footer = () => {
  return (
    <footer className="bg-ink border-t border-line">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs tracking-[0.14em] uppercase text-paper-dim">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="text-paper">FitPro</span>
          <span>Entrenamiento personal</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold transition-colors"
          >
            WhatsApp
          </a>
          <span>© 2026 FitPro</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
