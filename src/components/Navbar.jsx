import React, { useState } from "react";
import { motion } from "framer-motion";

const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, delay: i * 0.1 },
    }),
    };

    const mobileMenuVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
    exit: { opacity: 0, x: 100, scale: 0.8, transition: { duration: 0.2 } },
    };

    const Navbar = () => {
    const sections = [
        { id: "hero", label: "Inicio" },
        { id: "services", label: "Servicios" },
        { id: "testimonials", label: "Testimonios" },
        { id: "cta", label: "Únete Ahora" },
    ];

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
        className="fixed top-0 w-full bg-black bg-opacity-95 backdrop-blur-sm z-50"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <motion.div
            className="text-2xl sm:text-3xl font-bold text-yellow-500 cursor-pointer"
            onClick={() => handleScroll("hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Ir al inicio - FitPro"
            >
            FitPro
            </motion.div>
            <motion.ul
            className="hidden md:flex space-x-6 sm:space-x-8 text-gray-300 font-semibold"
            initial="hidden"
            animate="visible"
            >
            {sections.map(({ id, label }, i) => (
                <motion.li
                key={id}
                className="cursor-pointer hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
                onClick={() => handleScroll(id)}
                variants={linkVariants}
                custom={i}
                >
                {label}
                </motion.li>
            ))}
            </motion.ul>
            <MobileMenu sections={sections} handleScroll={handleScroll} />
        </div>
        </motion.nav>
    );
    };

    const MobileMenu = ({ sections, handleScroll }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden relative">
        <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
        >
            <motion.svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            >
            {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
            </motion.svg>
        </button>
        <motion.ul
            className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl py-2 text-gray-300 font-semibold space-y-2 border border-gray-700"
            variants={mobileMenuVariants}
            initial="hidden"
            animate={open ? "visible" : "exit"}
            role="menu"
        >
            {sections.map(({ id, label }) => (
            <motion.li
                key={id}
                className="px-4 py-3 hover:bg-yellow-500 hover:text-black cursor-pointer transition-colors focus:outline-none focus:bg-yellow-400 rounded"
                onClick={() => {
                handleScroll(id);
                setOpen(false);
                }}
                role="menuitem"
                whileHover={{ x: 5 }}
            >
                {label}
            </motion.li>
            ))}
        </motion.ul>
        </div>
    );
};

export default Navbar;