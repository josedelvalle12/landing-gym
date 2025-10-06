import React from "react";

const Hero = () => {
    return (
        <section
        id="hero"
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{
            backgroundImage:
            "url('/assets/fitness-instructor-assisting-a-woman-in-working-ou-2025-04-22-01-30-12-utc.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-3xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Transforma tu cuerpo, transforma tu vida
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Entrenamiento personalizado para alcanzar tus metas con motivación y disciplina.
            </p>
            <button
            onClick={() => {
                const el = document.getElementById("cta");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
            >
            Comienza Hoy
            </button>
        </div>
        </section>
    );
};

export default Hero;