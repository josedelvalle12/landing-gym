import Reveal from "./Reveal";
import useCountUp from "../hooks/useCountUp";

const STATS = [
  { value: 500, suffix: "+", label: "Clientes transformados", big: true },
  { value: 10, suffix: "", label: "Años de experiencia" },
  { value: 95, suffix: "%", label: "Tasa de satisfacción" },
];

const Stat = ({ value, suffix, label, big }) => {
  const { ref, value: count } = useCountUp(value);

  return (
    <div ref={ref} className="py-10 md:py-0 md:px-10 first:pl-0 first:md:pl-0">
      <div
        className={`font-display font-semibold tracking-tight text-gold leading-none ${
          big ? "text-[16vw] sm:text-[9vw] md:text-[6.5vw]" : "text-[13vw] sm:text-[7vw] md:text-[4.5vw]"
        }`}
      >
        {count}
        {suffix}
      </div>
      <div className="mt-4 text-xs sm:text-sm tracking-[0.2em] uppercase text-paper-dim">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-ink border-t border-line">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <Reveal className="flex items-center justify-between mb-12 md:mb-16">
          <span className="text-xs tracking-[0.28em] uppercase text-paper-dim">
            02 — Resultados
          </span>
          <span className="hidden sm:block font-display italic text-lg text-paper-dim">
            Resultados que hablan.
          </span>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-line">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12} className="border-t border-line md:border-t-0 first:border-t-0">
              <Stat {...stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
