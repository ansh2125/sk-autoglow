import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Droplets, Clock, Award } from 'lucide-react'

import carImg from "../assets/car1.jpg"; // filename check kar lena

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const features = [
        { icon: Shield, label: '100% Scratch-Free', desc: '800 GSM Microfiber' },
        { icon: Droplets, label: 'Premium Products', desc: 'Quality Guaranteed' },
        { icon: Clock, label: 'Daily Service', desc: 'At Your Parking' },
        { icon: Award, label: 'Expert Team', desc: 'Trained Professionals' },
    ]

    return (
        <section id="about" className="relative py-24 overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black-deep to-black" />

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden gold-border">

                            <img
                                src={carImg}
                                alt="Car Cleaning"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/30" />

                            <motion.div
                                className="absolute top-6 right-6 bg-black-card border border-gold/20 rounded-xl p-4 shadow-2xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <div className="text-center">
                                    <span className="text-3xl font-bold text-gradient">500+</span>
                                    <p className="text-white/60 text-sm">Happy Customers</p>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-sm font-medium mb-6">
                            About Us
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                            <span className="text-white">Premium Care for Your</span>
                            <br />
                            <span className="text-gradient">Precious Vehicle</span>
                        </h2>

                        {/* Paragraph 1 */}
                        <p className="text-white/60 text-lg mb-6 leading-relaxed">
                            At SK AutoGlow, we believe every morning should start with a moment of beauty.
                            Before your day even begins, our trained team arrives, using luxurious
                            <span className="text-gold"> 800 GSM microfiber cloths </span>
                            and premium polish, ensuring every detail sparkles.
                        </p>

                        {/* Paragraph 2 */}
                        <p className="text-white/60 text-lg mb-10 leading-relaxed">
                            We don’t just clean; we care—infusing air into your tires, vacuuming every inch—so you step into your day with a car that reflects your best self.
                        </p>

                        {/* ✅ 🔥 TAGLINE ADDED */}
                        <p className="text-gold text-lg font-semibold italic text-center mt-6 mb-10">
                            जो गाड़ी से करे प्यार, वो SK-AutoGlow से कैसे करे इनकार
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.label}
                                    className="p-4 rounded-xl bg-black-card border border-white/5 hover:border-gold/30 transition-all group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <feature.icon className="w-8 h-8 text-gold mb-3" />
                                    <h4 className="text-white font-semibold">{feature.label}</h4>
                                    <p className="text-white/50 text-sm">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default About