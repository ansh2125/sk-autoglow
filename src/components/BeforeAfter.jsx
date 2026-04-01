import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowLeftRight } from 'lucide-react'

const BeforeAfter = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [sliderPosition, setSliderPosition] = useState(50)

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value)
    }

    return (
        <section className="relative py-24 overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-black-deep" />

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-sm font-medium mb-6">
                        Our Work
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                        <span className="text-white">Before & </span>
                        <span className="text-gradient">After</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        See the transformation our premium service delivers
                    </p>
                </motion.div>

                {/* Before/After Slider Placeholder */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                        {/* Before Side */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-red-900/5 flex items-center justify-center"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <div className="text-center">
                                <span className="text-6xl mb-4 block">🚗💨</span>
                                <span className="text-white/50 text-xl">Before</span>
                                <p className="text-white/30 mt-2">Dusty & Dirty</p>
                            </div>
                            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">
                                Before
                            </div>
                        </div>

                        {/* After Side */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-green-900/5 to-green-900/20 flex items-center justify-center"
                            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                        >
                            <div className="text-center">
                                <span className="text-6xl mb-4 block">✨🚗✨</span>
                                <span className="text-gold text-xl">After</span>
                                <p className="text-gold/50 mt-2">Clean & Shining</p>
                            </div>
                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
                                After
                            </div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-gold cursor-ew-resize"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg">
                                <ArrowLeftRight className="w-6 h-6 text-black" />
                            </div>
                        </div>

                        {/* Range Input (hidden but functional) */}
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderPosition}
                            onChange={handleSliderChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
                        />
                    </div>

                    {/* Instructions */}
                    <p className="text-center text-white/50 mt-4 flex items-center justify-center gap-2">
                        <ChevronLeft className="w-4 h-4" />
                        Drag to compare
                        <ChevronRight className="w-4 h-4" />
                    </p>
                </motion.div>

                {/* Coming Soon Note */}
                <motion.p
                    className="text-center text-white/30 mt-8 text-sm"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    📸 Real before/after photos coming soon!
                </motion.p>
            </div>
        </section>
    )
}

export default BeforeAfter