import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

// ✅ LOGO IMPORT
import logo from "../assets/sk-logo.jpeg";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Pricing", href: "#pricing" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* NAVBAR */}
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "backdrop-blur-md bg-black/60 py-3" : "bg-transparent py-5"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between">

                        {/* 🔥 LOGO */}
                        <motion.a
                            href="#home"
                            className="flex items-center gap-3 group"
                            whileHover={{ scale: 1.03 }}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("#home");
                            }}
                        >
                            {/* Logo Image */}
                            <div className="w-10 h-10 rounded-lg overflow-hidden border border-yellow-400/30 shadow-[0_0_10px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition">
                                <img
                                    src={logo}
                                    alt="SK AutoGlow"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Brand Name */}
                            <span className="text-xl font-bold text-white">
                                SK-<span className="text-yellow-400">AutoGlow</span>
                            </span>
                        </motion.a>

                        {/* DESKTOP MENU */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-white/80 hover:text-white text-sm font-medium transition group"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <motion.a
                                href="tel:9217633978"
                                className="flex items-center gap-2 text-white/80 hover:text-yellow-400 transition"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Phone size={16} />
                                <span className="text-sm">9217633978</span>
                            </motion.a>

                            <motion.button
                                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-sm hover:scale-105 transition"
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection("#booking")}
                            >
                                Book Demo
                            </motion.button>
                        </div>

                        {/* MOBILE BUTTON */}
                        <motion.button
                            className="lg:hidden text-white p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* 📱 MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Background */}
                        <div
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Box */}
                        <motion.div
                            className="absolute top-20 left-4 right-4 bg-[#111] border border-white/10 rounded-2xl p-6"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        >
                            <div className="flex flex-col gap-4">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        className="text-white/80 hover:text-yellow-400 text-lg font-medium py-2 border-b border-white/10"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.href);
                                        }}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}

                                <motion.a
                                    href="tel:9217633978"
                                    className="flex items-center gap-2 text-yellow-400 py-2"
                                >
                                    <Phone size={18} />
                                    <span>9217633978</span>
                                </motion.a>

                                <motion.button
                                    className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold"
                                    onClick={() => scrollToSection("#booking")}
                                >
                                    Book Free Demo
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;