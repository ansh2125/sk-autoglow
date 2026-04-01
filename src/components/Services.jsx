import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    Brush,
    CircleDot,
    LayoutDashboard,
    Car,
    DoorOpen,
    Wind,
    Sparkles
} from 'lucide-react'

const Services = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const services = [
        {
            icon: Brush,
            title: 'Daily Dusting',
            description: 'With Duster & Microfiber Cloth',
            highlight: 'Daily',
        },
        {
            icon: CircleDot,
            title: 'Rim & Alloy Cleaning',
            description: 'Sparkling wheels every day',
            highlight: 'Daily',
        },
        {
            icon: LayoutDashboard,
            title: 'Dashboard Cleaning',
            description: 'Deep cleaning & polishing',
            highlight: 'Weekly',
        },
        {
            icon: Car,
            title: 'Tyre & Mat Polish',
            description: 'Exterior mat part polishing',
            highlight: 'Weekly',
        },
        {
            icon: DoorOpen,
            title: 'Interior Door Care',
            description: 'Cleaning & polishing',
            highlight: 'Weekly',
        },
        {
            icon: Wind,
            title: 'Tyre Air Check',
            description: 'Pressure check & inflation',
            highlight: 'Weekly',
        },
        {
            icon: Sparkles,
            title: 'Vacuum Cleaning',
            description: 'Deep interior cleaning',
            highlight: 'Every 15 Days',
        },
    ]

    return (
        <section id="services" className="relative py-24 overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-black" />

            {/* Decorative */}
            <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-sm font-medium mb-6">
                        Our Services
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                        <span className="text-white">What We </span>
                        <span className="text-gradient">Offer</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Comprehensive vehicle care services designed to keep your car in showroom condition, every single day.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="group relative p-6 rounded-2xl bg-black-card border border-white/5 hover:border-gold/30 transition-all duration-300 card-hover"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

                            <div className="relative z-10">
                                {/* Highlight Badge */}
                                <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium mb-4">
                                    {service.highlight}
                                </span>

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-7 h-7 text-gold" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-white/50 text-sm">
                                    {service.description}
                                </p>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
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
                        className="px-8 py-3 rounded-full border-2 border-gold text-gold font-semibold hover:bg-gold hover:text-black transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Pricing Plans
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Services