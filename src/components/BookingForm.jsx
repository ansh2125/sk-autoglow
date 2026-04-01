import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, User, Phone, Car, MapPin, Loader2, CheckCircle } from 'lucide-react'

const BookingForm = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        carType: '',
        location: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({ name: '', phone: '', carType: '', location: '' })
        }, 3000)
    }

    const carTypes = [
        'Hatchback / Mini',
        'Sedan / Mini SUV',
        'Large SUV',
        'Bike',
    ]

    return (
        <section id="booking" className="relative py-24 overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black-deep to-black" />

            {/* Decorative */}
            <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-y-1/2" />

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-sm font-medium mb-6">
                        Get Started
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                        <span className="text-white">Book Your </span>
                        <span className="text-gradient">Free Demo</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Fill in your details and we'll get back to you within 24 hours
                    </p>
                </motion.div>

                {/* Form */}
                <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="relative p-1 rounded-3xl bg-gradient-to-b from-gold/20 to-transparent">
                        <div className="bg-black-card rounded-[22px] p-8 md:p-10">
                            {isSubmitted ? (
                                <motion.div
                                    className="text-center py-12"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                                    <p className="text-white/60">We'll contact you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div className="relative">
                                        <label className="block text-white/70 text-sm font-medium mb-2">
                                            Your Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your name"
                                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-black border border-white/10 text-white placeholder-white/30 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <label className="block text-white/70 text-sm font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your phone number"
                                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-black border border-white/10 text-white placeholder-white/30 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Car Type */}
                                    <div className="relative">
                                        <label className="block text-white/70 text-sm font-medium mb-2">
                                            Vehicle Type
                                        </label>
                                        <div className="relative">
                                            <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                            <select
                                                name="carType"
                                                value={formData.carType}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-black border border-white/10 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled className="bg-black">Select vehicle type</option>
                                                {carTypes.map((type) => (
                                                    <option key={type} value={type} className="bg-black">
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="relative">
                                        <label className="block text-white/70 text-sm font-medium mb-2">
                                            Location / Society Name
                                        </label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                            <input
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your society/location"
                                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-black border border-white/10 text-white placeholder-white/30 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-bold text-lg shine-effect flex items-center justify-center gap-2 disabled:opacity-70"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Book Free Demo
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default BookingForm