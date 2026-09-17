import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { id: "metodo", label: "Método" },
  { id: "programas", label: "Programas" },
  { id: "testimonios", label: "Resultados" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-500 ${
        solid
          ? "bg-ink/95 border-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display font-bold text-xl sm:text-2xl tracking-tight text-paper"
          aria-label="Ir al inicio — FitPro"
        >
          FITPRO
        </button>

        <ul className="hidden md:flex items-center gap-10 text-xs tracking-[0.18em] uppercase text-paper-dim">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className="hover:text-paper transition-colors duration-300"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo("cta")}
            className="hidden sm:inline-block bg-gold text-ink text-xs tracking-[0.14em] uppercase font-semibold px-5 py-2.5 hover:bg-paper transition-colors duration-300"
          >
            Únete ahora
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] text-paper"
          >
            <motion.span
              className="block w-6 h-px bg-current"
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-px bg-current"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-px bg-current"
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-ink border-t border-line"
          >
            <ul className="px-6 sm:px-10 py-6 flex flex-col gap-5 text-sm tracking-[0.14em] uppercase text-paper-dim">
              {LINKS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      scrollTo(id);
                      setOpen(false);
                    }}
                    className="hover:text-gold transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    scrollTo("cta");
                    setOpen(false);
                  }}
                  className="text-gold"
                >
                  Únete ahora
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
