import { motion } from "framer-motion";
import logo from "../assets/sk-logo.jpeg"; // ✅ check filename

const Loader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* 🔥 Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative flex flex-col items-center">
                {/* 🔄 Outer Ring */}
                <motion.div
                    className="absolute w-40 h-40 rounded-full border-2 border-transparent"
                    style={{
                        borderTopColor: "#D4AF37",
                        borderRightColor: "rgba(212, 175, 55, 0.3)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* 🔄 Inner Ring */}
                <motion.div
                    className="absolute w-52 h-52 rounded-full border border-transparent"
                    style={{
                        borderBottomColor: "rgba(212, 175, 55, 0.5)",
                        borderLeftColor: "rgba(212, 175, 55, 0.2)",
                    }}
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* ✅ LOGO + GLOW (FIXED) */}
                <div className="relative z-10 w-24 h-24">

                    {/* Glow Layer (separate animation) */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl"
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(212,175,55,0.3)",
                                "0 0 60px rgba(212,175,55,0.6)",
                                "0 0 20px rgba(212,175,55,0.3)",
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Logo (NO repeat animation) */}
                    <motion.div
                        className="w-full h-full rounded-2xl overflow-hidden border border-yellow-400/30"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <img
                            src={logo}
                            alt="SK AutoGlow"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                {/* 🔤 BRAND NAME */}
                <motion.h1
                    className="mt-6 text-2xl font-bold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <span className="text-yellow-400">SK AutoGlow</span>
                </motion.h1>

                {/* ⏳ LOADING DOTS */}
                <motion.div
                    className="mt-4 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            className="w-2 h-2 rounded-full bg-yellow-400"
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;