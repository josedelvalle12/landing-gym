import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "./Reveal";
import heroImage from "../assets/img/hero.jpg";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink"
      aria-label="FitPro — entrenamiento personal"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={heroImage}
          alt="Entrenadora de FitPro asistiendo a una clienta durante una sesión de fuerza"
          className="w-full h-[112%] object-cover"
          style={{ objectPosition: "68% 25%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/10 to-transparent md:from-ink/80 md:via-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col"
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center justify-between pt-28 sm:pt-32"
        >
          <span className="text-xs sm:text-sm tracking-[0.28em] uppercase text-paper-dim">
            FitPro / Entrenamiento Personal
          </span>
          <span className="hidden sm:block text-xs tracking-[0.28em] uppercase text-paper-dim">
            01 — Nueva York
          </span>
        </motion.div>

        <div className="flex-1 flex items-end pb-16 sm:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-6 w-full items-end">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: EASE }}
              className="md:col-span-8 font-display font-semibold tracking-tight leading-[0.9] text-[13vw] sm:text-[9vw] md:text-[6.4vw] text-paper"
            >
              Construye
              <br />
              fuerza <span className="font-normal italic text-gold">real.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
              className="md:col-span-4 flex flex-col gap-6 md:pl-6 md:border-l md:border-line"
            >
              <p className="text-paper-dim text-base sm:text-lg leading-relaxed max-w-sm">
                Entrenamiento personalizado, cercano y basado en resultados
                reales — no en promesas genéricas.
              </p>
              <button
                onClick={() =>
                  document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-3 text-sm tracking-[0.14em] uppercase text-paper w-fit"
              >
                <span className="border-b border-paper pb-1 group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                  Comenzar ahora
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold">
                  →
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
