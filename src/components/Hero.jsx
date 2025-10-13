import React from "react";
import { motion } from "framer-motion";
import HeroImage from '/assets/fitness-instructor-assisting-a-woman-in-working-ou-2025-04-22-01-30-12-utc.jpg';

const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, staggerChildren: 0.2 },
    },
    };

    const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const Hero = () => {
    return (
        <section
        id="hero"
        className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
        aria-label="Hero section: Transform your body and life"
        >
        <motion.div
            className="absolute inset-0 bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
        <motion.div
            className="absolute inset-0 opacity-50"
            style={{
            backgroundImage:
                `url(${HeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
            className="relative max-w-4xl px-4 sm:px-6 z-10"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            variants={itemVariants}
            >
            Transforma tu cuerpo, transforma tu vida
            </motion.h1>
            <motion.p
            className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-xl mx-auto px-4"
            variants={itemVariants}
            >
            Entrenamiento personalizado para alcanzar tus metas con motivación y disciplina.
            </motion.p>
            <motion.button
            onClick={() => {
                const el = document.getElementById("cta");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Comienza tu transformación hoy"
            >
            Comienza Hoy
            </motion.button>
        </motion.div>
        </section>
    );
};

export default Hero;