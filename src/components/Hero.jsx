import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Play } from "lucide-react";

// ✅ VIDEO IMPORT
import bgVideo from "../assets/bg-video.mp4";

const Hero = () => {
    const scrollToBooking = () => {
        document
            .querySelector("#booking")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* 🎥 VIDEO BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <video
                    src={bgVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover blur-[2px] brightness-75 scale-105"
                />

                {/* 🔥 STRONG OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95" />

                {/* ✨ GOLD GLOW EFFECT */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-yellow-400/5 blur-3xl animate-pulse" />
                </div>
            </div>

            {/* 📦 CONTENT */}
            <div className="relative z-20 container mx-auto px-4 lg:px-8 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm font-medium">
                            Premium Doorstep Service
                        </span>
                    </motion.div>

                    {/* 🔥 HEADING */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            SK
                        </span>{" "}
                        <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]">
                            AutoGlow
                        </span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        className="text-2xl md:text-3xl text-white/80 italic tracking-wide drop-shadow mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Because Your Car Deserves Daily Care.
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Premium doorstep car & bike cleaning service in your society
                        parking.
                        <br />
                        <span className="text-yellow-400/90">
                            Scratch-free cleaning using 800 GSM microfiber cloth and premium
                            products.
                        </span>
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        {/* Book Button */}
                        <motion.button
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold text-lg shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToBooking}
                        >
                            ✨ Book Free Demo
                        </motion.button>

                        {/* WhatsApp */}
                        <motion.a
                            href="https://wa.me/919217633978?text=Hi, I'm interested in SK AutoGlow services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full border-2 border-green-500 text-green-500 font-bold text-lg hover:bg-green-500 hover:text-white transition"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="flex items-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp
                            </span>
                        </motion.a>
                    </motion.div>

                    {/* Phone */}
                    <motion.a
                        href="tel:9217633978"
                        className="inline-flex items-center gap-3 text-xl text-white/80 hover:text-yellow-400 transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <div className="w-12 h-12 rounded-full border-2 border-yellow-400/50 flex items-center justify-center animate-pulse">
                            <Play className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        </div>
                        <span className="font-semibold">9217633978</span>
                    </motion.a>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <motion.div
                        className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1.5 h-3 rounded-full bg-yellow-400"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
};

export default Hero;