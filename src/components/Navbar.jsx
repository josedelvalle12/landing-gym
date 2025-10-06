import React from "react";

const Navbar = () => {
    const sections = [
        { id: "hero", label: "Inicio" },
        { id: "services", label: "Servicios" },
        { id: "testimonials", label: "Testimonios" },
        { id: "cta", label: "Únete Ahora" },
    ];

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 w-full bg-black bg-opacity-90 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-yellow-500 cursor-pointer" onClick={() => handleScroll("hero")}>
            FitPro
            </div>
            <ul className="hidden md:flex space-x-8 text-gray-300 font-semibold">
            {sections.map(({ id, label }) => (
                <li
                key={id}
                className="cursor-pointer hover:text-yellow-400 transition-colors"
                onClick={() => handleScroll(id)}
                >
                {label}
                </li>
            ))}
            </ul>
            {/* Mobile menu button */}
            <MobileMenu sections={sections} handleScroll={handleScroll} />
        </div>
        </nav>
    );
    };

    const MobileMenu = ({ sections, handleScroll }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="md:hidden relative">
        <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="text-yellow-500 focus:outline-none"
        >
            <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
            </svg>
        </button>
        {open && (
            <ul className="absolute right-0 mt-2 w-40 bg-gray-900 rounded shadow-lg py-2 text-gray-300 font-semibold space-y-2">
            {sections.map(({ id, label }) => (
                <li
                key={id}
                className="px-4 py-2 hover:bg-yellow-500 hover:text-black cursor-pointer"
                onClick={() => {
                    handleScroll(id);
                    setOpen(false);
                }}
                >
                {label}
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};

export default Navbar;