import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Droplets, Clock, Award } from 'lucide-react'

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

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gold blur-3xl" />
            </div>

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden gold-border">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-black-card to-black flex items-center justify-center">
                                <div className="text-center">
                                    <motion.div
                                        className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center"
                                        animate={{
                                            boxShadow: ['0 0 20px rgba(212,175,55,0.2)', '0 0 40px rgba(212,175,55,0.4)', '0 0 20px rgba(212,175,55,0.2)']
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <span className="text-5xl">🚗</span>
                                    </motion.div>
                                    <p className="text-white/50 text-sm">Premium Car Care</p>
                                </div>
                            </div>

                            {/* Floating Stats Card */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 bg-black-card border border-gold/20 rounded-xl p-4 shadow-2xl"
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

                    {/* Content Side */}
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

                        <p className="text-white/60 text-lg mb-8 leading-relaxed">
                            SK AutoGlow brings premium vehicle care right to your doorstep. We understand that your car is more than just a vehicle – it's a reflection of your lifestyle. Our expert team uses only the finest products and techniques to ensure your vehicle always shines like new.
                        </p>

                        <p className="text-white/60 text-lg mb-10 leading-relaxed">
                            With our <span className="text-gold">800 GSM microfiber cloths</span> and premium cleaning solutions, we guarantee scratch-free cleaning that preserves your vehicle's showroom finish.
                        </p>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.label}
                                    className="p-4 rounded-xl bg-black-card border border-white/5 hover:border-gold/30 transition-all group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <feature.icon className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform" />
                                    <h4 className="text-white font-semibold mb-1">{feature.label}</h4>
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