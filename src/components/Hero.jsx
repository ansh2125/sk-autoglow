import { motion } from 'framer-motion'
import { Sparkles, MessageCircle, Play } from 'lucide-react'

const Hero = () => {
    const scrollToBooking = () => {
        document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background Placeholder */}
            <div className="absolute inset-0 z-0">
                {/* Replace this div with actual video when ready */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-black via-black-deep to-black"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                >
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl animate-float" />
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                    </div>

                    {/* Grid Pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                        }}
                    />
                </motion.div>

                {/* Video Overlay */}
                <div className="absolute inset-0 video-overlay z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 lg:px-8 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Sparkles className="w-4 h-4 text-gold" />
                        <span className="text-gold text-sm font-medium">Premium Doorstep Service</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className="text-white">SK </span>
                        <span className="text-gradient">AutoGlow</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        className="text-2xl md:text-3xl text-white/90 font-display italic mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Because Your Car Deserves Daily Care.
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        Premium doorstep car & bike cleaning service in your society parking.
                        <br />
                        <span className="text-gold/80">Scratch-free cleaning using 800 GSM microfiber cloth and premium products.</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <motion.button
                            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-light text-black font-bold text-lg overflow-hidden shine-effect"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToBooking}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Sparkles className="w-5 h-5" />
                                Book Free Demo
                            </span>
                        </motion.button>

                        <motion.a
                            href="https://wa.me/919217633978?text=Hi, I'm interested in SK AutoGlow services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 rounded-full border-2 border-green-500 text-green-500 font-bold text-lg hover:bg-green-500 hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="flex items-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp
                            </span>
                        </motion.a>
                    </motion.div>

                    {/* Phone Number */}
                    <motion.a
                        href="tel:9217633978"
                        className="inline-flex items-center gap-3 text-xl text-white/80 hover:text-gold transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-12 h-12 rounded-full border-2 border-gold/50 flex items-center justify-center animate-pulse">
                            <Play className="w-5 h-5 text-gold fill-gold" />
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
                            className="w-1.5 h-3 rounded-full bg-gold"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    )
}

export default Hero