import React from "react";

const testimonials = [
    {
        name: "María López",
        feedback:
        "Gracias a FitPro logré perder 10 kg en 4 meses. El entrenamiento y la motivación son excepcionales.",
        avatar:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Carlos Méndez",
        feedback:
        "El seguimiento personalizado me ayudó a superar mis límites y ganar fuerza de manera segura.",
        avatar:
        "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        name: "Ana Torres",
        feedback:
        "La asesoría nutricional cambió mi forma de comer y ahora me siento con más energía y salud.",
        avatar:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    ];

    const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-extrabold text-yellow-500 mb-4">Testimonios</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Lo que dicen nuestros clientes sobre su experiencia con FitPro.
            </p>
        </div>
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
            {testimonials.map(({ name, feedback, avatar }) => (
            <div
                key={name}
                className="bg-gray-900 rounded-lg p-8 flex flex-col items-center text-center shadow-md"
            >
                <img
                src={avatar}
                alt={name}
                className="w-20 h-20 rounded-full mb-6 object-cover border-2 border-yellow-500"
                loading="lazy"
                />
                <p className="text-gray-300 italic mb-4">"{feedback}"</p>
                <h4 className="text-yellow-400 font-semibold">{name}</h4>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Testimonials;