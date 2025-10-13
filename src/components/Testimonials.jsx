import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        },
    },
    };

    const testimonialVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
    };

    const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
    };

    const testimonials = [
    {
        name: "María López",
        feedback:
        "Gracias a FitPro logré perder 10 kg en 4 meses. El entrenamiento y la motivación son excepcionales.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Carlos Méndez",
        feedback:
        "El seguimiento personalizado me ayudó a superar mis límites y ganar fuerza de manera segura.",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        name: "Ana Torres",
        feedback:
        "La asesoría nutricional cambió mi forma de comer y ahora me siento con más energía y salud.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    ];

    const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="testimonials" className="bg-black py-16 sm:py-20 px-4 sm:px-6" ref={ref}>
        <motion.div
            className="max-w-7xl mx-auto text-center mb-12 sm:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-yellow-500 mb-4"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            >
            Testimonios
            </motion.h2>
            <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            >
            Lo que dicen nuestros clientes sobre su experiencia con FitPro.
            </motion.p>
        </motion.div>
        <motion.div
            className="max-w-7xl mx-auto grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {testimonials.map(({ name, feedback, avatar }, i) => (
            <motion.div
                key={name}
                className="bg-gray-900 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center shadow-md hover:shadow-yellow-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
                variants={testimonialVariants}
                whileHover={{ y: -3, scale: 1.01 }}
                aria-label={`Testimonio de ${name}`}
            >
                <motion.img
                src={avatar}
                alt={`Foto de perfil de ${name}, cliente de FitPro`}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 sm:mb-6 object-cover border-2 border-yellow-500 shadow-md"
                loading="lazy"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
                />
                <motion.p
                className="text-gray-300 italic mb-4 text-sm sm:text-base leading-relaxed px-2"
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                >
                "{feedback}"
                </motion.p>
                <motion.h4
                className="text-yellow-400 font-semibold text-base sm:text-lg"
                whileHover={{ scale: 1.05, color: "#fbbf24" }} // Intensifica el amarillo en hover
                transition={{ duration: 0.2 }}
                >
                {name}
                </motion.h4>
            </motion.div>
            ))}
        </motion.div>
        </section>
    );
};

export default Testimonials;