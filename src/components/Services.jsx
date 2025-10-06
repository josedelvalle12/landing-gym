import React from "react";

const services = [
    {
        title: "Entrenamiento Personalizado",
        description:
        "Planes diseñados exclusivamente para ti, adaptados a tu nivel y objetivos específicos.",
        icon: (
        <svg
            className="w-12 h-12 text-yellow-500 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.84 4.578c0 3.866-3.134 7-7 7s-7-3.134-7-7a12.083 12.083 0 01.84-4.578L12 14z" />
        </svg>
        ),
    },
    {
        title: "Asesoría Nutricional",
        description:
        "Guías alimenticias para maximizar resultados y mantener un estilo de vida saludable.",
        icon: (
        <svg
            className="w-12 h-12 text-yellow-500 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 00-7 7v3a7 7 0 0014 0V9a7 7 0 00-7-7z" />
        </svg>
        ),
    },
    {
        title: "Seguimiento Continuo",
        description:
        "Monitoreo constante para ajustar tu plan y asegurar progreso real y sostenible.",
        icon: (
        <svg
            className="w-12 h-12 text-yellow-500 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        </svg>
        ),
    },
    ];

    const Services = () => {
    return (
        <section id="services" className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-extrabold text-yellow-500 mb-4">Nuestros Servicios</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Descubre cómo podemos ayudarte a alcanzar tu mejor versión con un enfoque integral.
            </p>
        </div>
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
            {services.map(({ title, description, icon }) => (
            <div
                key={title}
                className="bg-gray-800 rounded-lg p-8 flex flex-col items-center text-center shadow-lg hover:shadow-yellow-500 transition-shadow"
            >
                {icon}
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Services;