import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ✅ IMPORT IMAGES (check names carefully)
import dusting from "../assets/Daily Dusting.jpeg";
import rim from "../assets/Rim Cleaning.jpeg";
import dashboard from "../assets/Dashboard_Cleaning.jpeg";
import tyre from "../assets/Tyre-Polish.jpeg";
import door from "../assets/interior door.jpeg";
import air from "../assets/air inflation.jpeg";
import vacuum from "../assets/vaccum cleaning.jpeg";

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
        {
            image: dusting,
            title: "Daily Dusting",
            description: "With Duster & Microfiber Cloth",
            highlight: "Daily",
        },
        {
            image: rim,
            title: "Rim & Alloy Cleaning",
            description: "Sparkling wheels every day",
            highlight: "Daily",
        },
        {
            image: dashboard,
            title: "Dashboard Cleaning",
            description: "Deep cleaning & polishing",
            highlight: "Weekly",
        },
        {
            image: tyre,
            title: "Tyre & Mat Polish",
            description: "Exterior mat part polishing",
            highlight: "Weekly",
        },
        {
            image: door,
            title: "Interior Door Care",
            description: "Cleaning & polishing",
            highlight: "Weekly",
        },
        {
            image: air,
            title: "Tyre Air Check",
            description: "Pressure check & inflation",
            highlight: "Weekly",
        },
        {
            image: vacuum,
            title: "Vacuum Cleaning",
            description: "Deep interior cleaning",
            highlight: "Every 15 Days",
        },
    ];

    return (
        <section id="services" className="relative py-24 overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-black" />

            {/* Glow BG */}
            <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-yellow-400/5 blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-yellow-400/5 blur-3xl" />

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full border border-yellow-400/30 text-yellow-400 text-sm font-medium mb-6">
                        Our Services
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-white">What We </span>
                        <span className="text-yellow-400">Offer</span>
                    </h2>

                    {/* 🔥 UPDATED PREMIUM TEXT */}
                    <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed mb-4">
                        Your car is a reflection of your daily drive, and we believe it should make a statement.
                        Studies show that a clean car can boost your confidence and even reduce stress during your commute.
                    </p>

                    <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
                        At SK AutoGlow, we bring that confidence to life. Every morning, we arrive before your day begins,
                        gently dusting, polishing with premium microfiber cloths, and detailing every surface—so you step out with a car
                        that not only gleams, but elevates your whole day.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="group relative rounded-2xl bg-[#111] border border-white/10 hover:border-yellow-400/40 transition-all duration-300 overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* IMAGE */}
                            <div className="relative h-44 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />

                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <span className="inline-block px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-xs mb-3">
                                    {service.highlight}
                                </span>

                                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-yellow-400 transition">
                                    {service.title}
                                </h3>

                                <p className="text-white/50 text-sm">
                                    {service.description}
                                </p>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className="text-white/60 mb-4">
                        All services included in our monthly packages
                    </p>

                    <motion.button
                        className="px-8 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            document
                                .querySelector("#pricing")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        View Pricing Plans
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;