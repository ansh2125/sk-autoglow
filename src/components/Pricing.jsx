import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Star, Sparkles } from 'lucide-react'

const Pricing = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const plans = [
        {
            name: 'Basic',
            description: 'Essential daily care',
            prices: {
                hatchback: 399,
                sedan: 499,
                suv: 599,
            },
            features: [
                'Daily Dusting',
                'Rim & Alloy Cleaning',
                '800 GSM Microfiber',
                'Expert Cleaning Staff',
            ],
            popular: false,
        },
        {
            name: 'Standard',
            description: 'Most chosen plan',
            prices: {
                hatchback: 499,
                sedan: 599,
                suv: 699,
            },
            features: [
                'Everything in Basic',
                'Dashboard Cleaning',
                'Tyre & Mat Polish',
                'Weekly Deep Clean',
                'Premium Products',
            ],
            popular: true,
        },
        {
            name: 'Premium',
            description: 'Complete care package',
            prices: {
                hatchback: 599,
                sedan: 699,
                suv: 799,
            },
            features: [
                'Everything in Standard',
                'Interior Door Care',
                'Tyre Air Check',
                'Vacuum Cleaning',
                'Priority Support',
                'Monthly Detailing',
            ],
            popular: false,
        },
    ]

    const vehicleTypes = ['Hatchback / Mini', 'Sedan / Mini SUV', 'Large SUVs']

    return (
        <section id="pricing" className="relative py-24 overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 animated-gradient" />

            {/* Decorative */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-sm font-medium mb-6">
                        Pricing Plans
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                        <span className="text-white">Choose Your </span>
                        <span className="text-gradient">Perfect Plan</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Transparent pricing with no hidden charges. Select the plan that suits your vehicle and needs.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className={`relative rounded-3xl p-1 ${plan.popular
                                    ? 'bg-gradient-to-b from-gold via-gold/50 to-gold/20'
                                    : 'bg-gradient-to-b from-white/10 to-white/5'
                                }`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <motion.div
                                        className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-gold to-gold-light text-black text-sm font-bold shadow-lg"
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Star className="w-4 h-4 fill-current" />
                                        Most Popular
                                    </motion.div>
                                </div>
                            )}

                            <div className={`relative h-full rounded-[22px] bg-black-card p-8 ${plan.popular ? 'pt-12' : ''}`}>
                                {/* Plan Header */}
                                <div className="text-center mb-8">
                                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-gold' : 'text-white'}`}>
                                        {plan.name}
                                    </h3>
                                    <p className="text-white/50 text-sm">{plan.description}</p>
                                </div>

                                {/* Pricing Grid */}
                                <div className="space-y-4 mb-8">
                                    {vehicleTypes.map((type, i) => (
                                        <div
                                            key={type}
                                            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <span className="text-white/70 text-sm">{type}</span>
                                            <span className="text-xl font-bold text-white">
                                                ₹{Object.values(plan.prices)[i]}
                                                <span className="text-white/50 text-sm font-normal">/mo</span>
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-gold' : 'bg-white/20'
                                                }`}>
                                                <Check className={`w-3 h-3 ${plan.popular ? 'text-black' : 'text-white'}`} />
                                            </div>
                                            <span className="text-white/70 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <motion.button
                                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                            ? 'bg-gradient-to-r from-gold to-gold-light text-black shine-effect'
                                            : 'border-2 border-white/20 text-white hover:border-gold hover:text-gold'
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        {plan.popular && <Sparkles className="w-4 h-4" />}
                                        Get Started
                                    </span>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badge */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className="text-white/50 text-sm">
                        💳 Easy Payment • 🔒 100% Secure • 📞 24/7 Support
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Pricing