import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gift, Sparkles, ArrowRight } from 'lucide-react'

const SpecialOffer = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="relative py-24 overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black-deep to-black" />

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                <motion.div
                    className="relative max-w-4xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Glowing Card */}
                    <div className="relative p-1 rounded-3xl bg-gradient-to-r from-gold via-gold-light to-gold">
                        {/* Animated Glow */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gold via-gold-light to-gold blur-xl"
                            animate={{
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        <div className="relative bg-black rounded-[22px] p-8 md:p-12">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {/* Icon */}
                                <motion.div
                                    className="flex-shrink-0"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, -5, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                >
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                                        <Gift className="w-12 h-12 text-gold" />
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                                        <Sparkles className="w-5 h-5 text-gold" />
                                        <span className="text-gold font-semibold">Limited Time Offer</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                        Get Your <span className="text-gradient">Free Demo</span> Today!
                                    </h2>

                                    <p className="text-white/60 text-lg mb-6">
                                        Experience our premium service firsthand. Book a free demo and see the SK AutoGlow difference. No commitment required.
                                    </p>

                                    <motion.button
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-light text-black font-bold text-lg shine-effect"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Book Free Demo
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                                <div className="absolute inset-0 bg-gold rounded-full blur-2xl" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                                <div className="absolute inset-0 bg-gold rounded-full blur-2xl" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default SpecialOffer