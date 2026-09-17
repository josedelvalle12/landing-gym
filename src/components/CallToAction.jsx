import Reveal from "./Reveal";

const CallToAction = () => {
  return (
    <section id="cta" className="bg-ink border-t border-line">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-32 md:py-40">
        <Reveal>
          <span className="text-xs tracking-[0.28em] uppercase text-paper-dim">
            06 — Empieza hoy
          </span>
        </Reveal>

        <Reveal delay={0.08} y={40}>
          <h2 className="font-display font-semibold tracking-tight leading-[0.9] text-[15vw] sm:text-[10vw] md:text-[7.5vw] text-paper mt-8">
            Listo
            <br />
            para <span className="font-normal italic text-gold">transformarte?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 border-t border-line pt-8">
            <div>
              <div className="font-display font-bold tracking-tight text-xl text-paper">FitPro</div>
              <div className="text-xs tracking-[0.2em] uppercase text-paper-dim mt-1">
                Entrenamiento personal
              </div>
            </div>

            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 bg-gold text-ink text-sm tracking-[0.14em] uppercase font-semibold px-8 py-4 hover:bg-paper transition-colors duration-300 w-fit"
            >
              Comenzar ahora <span>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CallToAction;
