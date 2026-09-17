import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal, { EASE } from "./Reveal";
import program1 from "../assets/img/img-fuerza.jpg";
import program2 from "../assets/img/img-composicion.jpg";
import program3 from "../assets/img/img-rendimiento.jpg";

const PROGRAMS = [
  {
    title: "Fuerza",
    description:
      "Desarrolla fuerza funcional real con progresiones de carga y técnica impecable.",
    image: program1,
  },
  {
    title: "Composición corporal",
    description:
      "Transforma tu composición corporal combinando entrenamiento de resistencia y nutrición estratégica.",
    image: program2,
  },
  {
    title: "Rendimiento",
    description:
      "Lleva tu rendimiento físico al siguiente nivel con entrenamiento específico para tus objetivos.",
    image: program3,
  },
];

const Programs = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="programas" className="bg-ink border-t border-line">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <Reveal className="mb-12 md:mb-16">
          <span className="text-xs tracking-[0.28em] uppercase text-paper-dim">
            04 — Programas
          </span>
          <h2 className="font-display font-semibold tracking-tight text-4xl sm:text-6xl md:text-7xl text-paper mt-4">
            Elige tu camino
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <Reveal as="ul" className="border-t border-line">
            {PROGRAMS.map((program, i) => (
              <li
                key={program.title}
                className="border-b border-line"
                onMouseEnter={() => setActive(i)}
              >
                <button
                  onClick={() => setActive(i)}
                  className="w-full flex items-center justify-between py-6 sm:py-8 text-left group"
                >
                  <span
                    className={`font-display font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl transition-colors duration-300 ${
                      active === i ? "text-gold" : "text-paper group-hover:text-gold"
                    }`}
                  >
                    {program.title}
                  </span>
                  <span
                    className={`text-2xl transition-all duration-300 ${
                      active === i ? "text-gold translate-x-1" : "text-paper-dim"
                    }`}
                  >
                    →
                  </span>
                </button>

                <div className="md:hidden overflow-hidden">
                  <AnimatePresence initial={false}>
                    {active === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                      >
                        <p className="text-paper-dim pb-6 pr-8 leading-relaxed">
                          {program.description}
                        </p>
                        <div className="aspect-[4/5] mb-6 overflow-hidden">
                          <img
                            src={program.image}
                            alt={program.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="hidden md:block relative aspect-[4/5]">
            {PROGRAMS.map((program, i) => (
              <motion.div
                key={program.title}
                className="absolute inset-0"
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-ink/90 to-transparent">
                  <p className="text-paper text-lg leading-relaxed max-w-sm">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Programs;
