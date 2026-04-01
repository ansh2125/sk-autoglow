import { motion } from "framer-motion";
import { Sparkles, MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

// ✅ VIDEO IMPORT
import bgVideo from "../assets/bg-video.mp4";

const Hero = () => {
    const [showMobileOffer, setShowMobileOffer] = useState(false);
    const [showDesktopOffer, setShowDesktopOffer] = useState(true);

    // ⏳ Mobile popup delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMobileOffer(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

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

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95" />
            </div>

            {/* 📦 CONTENT */}
            <div className="relative z-20 container mx-auto px-4 lg:px-8 pt-20">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm">
                            Premium Doorstep Service
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="text-white">SK </span>
                        <span className="text-yellow-400">AutoGlow</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-2xl text-white/80 mb-6 italic">
                        Because Your Car Deserves Daily Care.
                    </p>

                    {/* Description */}
                    <p className="text-white/70 mb-10">
                        Premium doorstep car & bike cleaning service in your society parking.
                        <br />
                        <span className="text-yellow-400">
                            Scratch-free cleaning using 800 GSM microfiber cloth.
                        </span>
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={scrollToBooking}
                            className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition"
                        >
                            ✨ Book Free Demo
                        </button>

                        <a
                            href="https://wa.me/919217633978"
                            className="px-8 py-4 rounded-full border-2 border-green-500 text-green-500 font-bold hover:bg-green-500 hover:text-white transition"
                        >
                            <MessageCircle className="inline mr-2" />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* 💻 DESKTOP OFFER */}
            {showDesktopOffer && (
                <motion.div
                    className="hidden md:block absolute right-6 lg:right-12 bottom-24 lg:bottom-32 z-30"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="relative w-[230px] rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-black p-5 shadow-[0_10px_30px_rgba(212,175,55,0.35)]">

                        {/* Close */}
                        <button
                            onClick={() => setShowDesktopOffer(false)}
                            className="absolute top-2 right-2"
                        >
                            <X size={16} />
                        </button>

                        <p className="text-xs uppercase">Special Offer</p>
                        <p className="text-lg font-bold mt-2">
                            Free Bike Cleaning
                        </p>
                        <p className="text-sm mt-1">Every Day 🚀</p>
                    </div>
                </motion.div>
            )}

            {/* 📱 MOBILE OFFER */}
            {showMobileOffer && (
                <motion.div
                    className="fixed bottom-6 left-4 right-4 md:hidden z-50"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="relative px-5 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-lg">

                        {/* Close */}
                        <button
                            onClick={() => setShowMobileOffer(false)}
                            className="absolute top-2 right-2"
                        >
                            <X size={18} />
                        </button>

                        <div className="text-center">
                            <p className="text-xs uppercase">Special Offer</p>
                            <p className="text-base font-bold mt-1">
                                Free Bike Cleaning
                            </p>
                            <p className="text-xs mt-1">
                                Every Day 🚀
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
};

export default Hero;