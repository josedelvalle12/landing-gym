import Reveal from "./Reveal";
import evaluacionImage from "../assets/img/img-evaluacion.jpg";
import planImage from "../assets/img/img-plan.jpg";
import seguimientoImage from "../assets/img/img-seguimiento.jpg";
import resultadosImage from "../assets/img/img-resultados.jpg";

const STEPS = [
  {
    number: "01",
    title: "Evaluación",
    description:
      "Analizamos tu punto de partida: composición corporal, movilidad, hábitos y objetivos reales.",
    image: evaluacionImage,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Diseñamos un programa de entrenamiento y nutrición hecho a tu medida, sin fórmulas genéricas.",
    image: planImage,
  },
  {
    number: "03",
    title: "Seguimiento",
    description:
      "Ajustamos cada semana según tu progreso real, no según un calendario fijo.",
    image: seguimientoImage,
  },
  {
    number: "04",
    title: "Resultados",
    description:
      "Medimos avances tangibles — fuerza, composición corporal y energía — no solo el peso en la báscula.",
    image: resultadosImage,
  },
];

const MethodStep = ({ step, index }) => {
  const reversed = index % 2 === 1;

  return (
    <div className="border-t border-line py-14 sm:py-16 md:py-20">
      <div
        className={`flex flex-col gap-8 md:gap-14 md:items-center ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="md:w-1/2">
          <Reveal className="flex items-start gap-6 sm:gap-10">
            <span className="font-display font-semibold tracking-tight text-gold/80 text-[14vw] sm:text-7xl md:text-8xl leading-[0.8]">
              {step.number}
            </span>
            <div className="pt-2 sm:pt-4">
              <h3 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl text-paper mb-4">
                {step.title}
              </h3>
              <p className="text-paper-dim text-base sm:text-lg leading-relaxed max-w-md">
                {step.description}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal as="div" className="md:w-1/2" y={40} delay={0.1}>
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={step.image}
              alt={`Paso ${step.number}: ${step.title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

const Method = () => {
  return (
    <section id="metodo" className="bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 pt-16 sm:pt-20">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-4">
          <div>
            <span className="text-xs tracking-[0.28em] uppercase text-paper-dim">
              03 — El proceso
            </span>
            <h2 className="font-display font-semibold tracking-tight text-4xl sm:text-6xl md:text-7xl text-paper mt-4">
              El método FitPro
            </h2>
          </div>
          <p className="text-paper-dim text-base sm:text-lg max-w-sm">
            Cuatro etapas, un mismo objetivo: progreso medible y sostenible en
            el tiempo.
          </p>
        </Reveal>

        {STEPS.map((step, i) => (
          <MethodStep key={step.number} step={step} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Method;
