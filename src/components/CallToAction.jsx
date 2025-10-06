import React from "react";

const CallToAction = () => {
    return (
        <section
        id="cta"
        className="bg-yellow-500 py-20 px-6 flex flex-col items-center text-center"
        >
        <h2 className="text-4xl font-extrabold text-black mb-6 max-w-3xl">
            ¿Listo para transformar tu vida? Únete a FitPro hoy mismo.
        </h2>
        <p className="text-black max-w-xl mb-10 text-lg">
            No esperes más para alcanzar tus objetivos. Nuestro equipo está listo para apoyarte en cada paso.
        </p>
        <a
            href="#cta"
            className="bg-black text-yellow-500 font-bold py-4 px-12 rounded-full text-lg hover:bg-gray-900 transition-colors shadow-lg"
        >
            Comenzar Ahora
        </a>
        </section>
    );
};

export default CallToAction;