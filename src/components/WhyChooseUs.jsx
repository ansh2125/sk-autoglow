import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    Shield,
    Clock,
    Award,
    ThumbsUp,
    Sparkles,
    Users
} from 'lucide-react'

const WhyChooseUs = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const reasons = [
        {
            icon: Shield,
            title: '100% Scratch-Free',
            description: 'Premium 800 GSM microfiber cloths that protect your paint',
        },
        {
            icon: Clock,
            title: 'Doorstep Service',
            description: 'We come to your parking space, no need to go anywhere',
        },
        {
            icon: Award,
            title: 'Premium Products',
            description: 'Only high-quality cleaning solutions and products',
        },
        {
            icon: ThumbsUp,
            title: 'Trained Staff',
            description: 'Expert cleaners trained in vehicle care techniques',
        },
        {
            icon: Sparkles,
            title: 'Daily Care',
            description: 'Your vehicle stays clean and shiny every single day',
        },
        {
            icon: Users,
            title: 'Trusted by 500+',
            description: 'Happy customers across Greater Noida region',
        },
    ]

    return (
        <section className="relative py-24 overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-black" />

            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-sm font-medium mb-6">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                        <span className="text-white">The SK AutoGlow </span>
                        <span className="text-gradient">Difference</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        We're not just another car wash service. We're your vehicle's daily care partner.
                    </p>
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative p-8 rounded-2xl bg-black-card border border-white/5 hover:border-gold/30 transition-all duration-300 h-full">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <motion.div
                                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <reason.icon className="w-8 h-8 text-gold" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                                        {reason.title}
                                    </h3>
                                    <p className="text-white/50 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>

                                {/* Decorative Corner */}
                                <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden rounded-br-2xl">
                                    <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs