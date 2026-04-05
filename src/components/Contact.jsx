import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, MessageCircle, MapPin, Mail, Clock } from 'lucide-react'

const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const contactInfo = [
        {
            icon: Phone,
            label: 'Phone',
            value: '9217633978',
            href: 'tel:9217633978',
            color: 'text-blue-400',
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: '9217633978',
            href: 'https://wa.me/919217633978',
            color: 'text-green-400',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Greater Noida West, Uttar Pradesh',
            href: '#',
            color: 'text-red-400',
        },
        // {
        //     icon: Clock,
        //     label: 'Working Hours',
        //     value: '6 AM - 10 AM, 5 PM - 8 PM',
        //     href: '#',
        //     color: 'text-yellow-400',
        // },
    ]

    return (
        <section id="contact" className="relative py-24 overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-black" />

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-sm font-medium mb-6">
                        Contact Us
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                        <span className="text-white">Get In </span>
                        <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Have questions? We're here to help. Reach out to us anytime.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={info.label}
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative h-full p-6 rounded-2xl bg-black-card border border-white/10 hover:border-gold/30 transition-all duration-300 card-hover">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${info.color}`}>
                                    <info.icon className="w-7 h-7" />
                                </div>

                                {/* Content */}
                                <h3 className="text-white/50 text-sm mb-1">{info.label}</h3>
                                <p className="text-white font-medium group-hover:text-gold transition-colors">
                                    {info.value}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Large CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="text-white/60 mb-6">Ready to give your vehicle the care it deserves?</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            href="tel:9217633978"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-light text-black font-bold shine-effect"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Phone className="w-5 h-5" />
                            Call Now
                        </motion.a>
                        <motion.a
                            href="https://wa.me/919217633978?text=Hi, I'm interested in SK AutoGlow services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-green-500 text-green-500 font-bold hover:bg-green-500 hover:text-white transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact