import { motion } from "framer-motion";
import logo from "../assets/sk-logo.jpeg";

const Loader = () => {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-[100]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="flex flex-col items-center">
                <motion.div
                    className="w-28 h-28 rounded-2xl overflow-hidden"
                    animate={{
                        boxShadow: [
                            "0 0 20px rgba(212,175,55,0.3)",
                            "0 0 80px rgba(212,175,55,0.8)",
                            "0 0 20px rgba(212,175,55,0.3)",
                        ],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                >
                    <img src={logo} className="w-full h-full object-cover" />
                </motion.div>

                <h1 className="text-yellow-400 mt-5 text-xl font-bold">
                    SK AutoGlow
                </h1>
            </div>
        </motion.div>
    );
};

export default Loader;