import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Building2 } from "lucide-react";

// ✅ IMPORT ALL IMAGES
import noida from "../assets/noida.jpeg";
import greaterNoida from "../assets/greaternoida.jpeg";
import ghaziabad from "../assets/ghaziabad.jpeg";

const ServiceAreas = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // ✅ AREAS DATA WITH IMAGES
    const areas = [
        {
            name: "Noida",
            description: "Sectors 1-168, All residential societies",
            image: noida,
        },
        {
            name: "Greater Noida",
            description: "Greater Noida West, All sectors",
            image: greaterNoida,
        },
        {
            name: "Ghaziabad",
            description: "Indirapuram, Vaishali, Vasundhara",
            image: ghaziabad,
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-black" />

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-6">
                        Coverage Area
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-white">Areas We </span>
                        <span className="text-yellow-400">Serve</span>
                    </h2>

                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Premium doorstep vehicle care service available across NCR region
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {areas.map((area, index) => (
                        <motion.div
                            key={area.name}
                            className="group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-[#111] border border-white/10 hover:border-yellow-400/40 transition-all duration-300">

                                {/* ✅ IMAGE */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={area.image}
                                        alt={area.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin className="w-5 h-5 text-yellow-400" />
                                        <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                            {area.name}
                                        </h3>
                                    </div>

                                    <p className="text-white/50">{area.description}</p>
                                </div>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Notice */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111] border border-white/10">
                        <Building2 className="w-5 h-5 text-yellow-400" />
                        <span className="text-white/70">
                            Expanding to more areas soon!{" "}
                            <span className="text-yellow-400">Stay tuned</span>
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceAreas;