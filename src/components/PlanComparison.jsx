import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, X } from 'lucide-react'

const PlanComparison = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const features = [
        { name: 'Daily Dusting', basic: true, standard: true, premium: true },
        { name: 'Rim & Alloy Cleaning', basic: true, standard: true, premium: true },
        { name: 'Dashboard Cleaning', basic: false, standard: true, premium: true },
        { name: 'Tyre & Mat Polish', basic: false, standard: true, premium: true },
        { name: 'Interior Door Care', basic: false, standard: false, premium: true },
        { name: 'Tyre Air Check', basic: false, standard: false, premium: true },
        { name: 'Vacuum Cleaning', basic: false, standard: false, premium: true },
    ]

    return (
        <section className="relative py-24 overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-black-deep" />

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                        <span className="text-white">Plan </span>
                        <span className="text-gradient">Comparison</span>
                    </h2>
                    <p className="text-white/60 max-w-xl mx-auto">
                        Compare features across all plans to find the perfect fit for your vehicle care needs.
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    className="max-w-4xl mx-auto overflow-x-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-6 px-4 text-left text-white/70 font-medium">Features</th>
                                <th className="py-6 px-4 text-center">
                                    <span className="text-white font-semibold">Basic</span>
                                </th>
                                <th className="py-6 px-4 text-center">
                                    <div className="inline-flex flex-col items-center">
                                        <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs mb-1">Popular</span>
                                        <span className="text-gold font-semibold">Standard</span>
                                    </div>
                                </th>
                                <th className="py-6 px-4 text-center">
                                    <span className="text-white font-semibold">Premium</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <motion.tr
                                    key={feature.name}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                                >
                                    <td className="py-5 px-4 text-white/80">{feature.name}</td>
                                    <td className="py-5 px-4 text-center">
                                        {feature.basic ? (
                                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                                                <Check className="w-4 h-4 text-green-500" />
                                            </div>
                                        ) : (
                                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10">
                                                <X className="w-4 h-4 text-red-500/50" />
                                            </div>
                                        )}
                                    </td>
                                    <td className="py-5 px-4 text-center bg-gold/5">
                                        {feature.standard ? (
                                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                                                <Check className="w-4 h-4 text-green-500" />
                                            </div>
                                        ) : (
                                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10">
                                                <X className="w-4 h-4 text-red-500/50" />
                                            </div>
                                        )}
                                    </td>
                                    <td className="py-5 px-4 text-center">
                                        {feature.premium ? (
                                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                                                <Check className="w-4 h-4 text-green-500" />
                                            </div>
                                        ) : (
                                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10">
                                                <X className="w-4 h-4 text-red-500/50" />
                                            </div>
                                        )}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    )
}

export default PlanComparison