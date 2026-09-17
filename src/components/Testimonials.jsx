import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal, { EASE } from "./Reveal";

const TESTIMONIALS = [
  {
    name: "María López",
    quote:
      "Perdí 10 kg en 4 meses sin dejar de disfrutar el proceso. El seguimiento fue constante y real.",
    result: "-10 kg en 4 meses",
  },
  {
    name: "Carlos Méndez",
    quote:
      "El seguimiento personalizado me ayudó a superar mis límites y ganar fuerza de forma segura.",
    result: "+35% en press de banca",
  },
  {
    name: "Ana Torres",
    quote:
      "La asesoría nutricional cambió mi forma de comer. Ahora tengo más energía que nunca.",
    result: "Hábitos sostenibles en 6 meses",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[index];

  const go = (dir) => setIndex((i) => (i + dir + total) % total);

  return (
    <section id="testimonios" className="bg-ink border-t border-line">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <Reveal className="mb-12 md:mb-16">
          <span className="text-xs tracking-[0.28em] uppercase text-paper-dim">
            05 — Resultados reales
          </span>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <span
            aria-hidden
            className="hidden md:block md:col-span-2 font-display italic text-gold/70 text-8xl leading-none"
          >
            “
          </span>

          <div className="md:col-span-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <p className="font-display font-medium tracking-tight leading-[1.15] text-3xl sm:text-4xl md:text-5xl text-paper max-w-3xl">
                  {current.quote}
                </p>

                <div className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="text-sm tracking-[0.18em] uppercase text-paper">
                    — {current.name}
                  </span>
                  <span className="text-sm text-gold">{current.result}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-14 flex items-center justify-between border-t border-line pt-6">
              <span className="text-xs tracking-[0.2em] uppercase text-paper-dim">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => go(-1)}
                  aria-label="Testimonio anterior"
                  className="text-paper-dim hover:text-gold transition-colors text-lg"
                >
                  ←
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Siguiente testimonio"
                  className="text-paper-dim hover:text-gold transition-colors text-lg"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
