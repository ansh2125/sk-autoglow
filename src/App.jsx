import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import PlanComparison from './components/PlanComparison'
import WhyChooseUs from './components/WhyChooseUs'
import SpecialOffer from './components/SpecialOffer'
import ServiceAreas from './components/ServiceAreas'
import BeforeAfter from './components/BeforeAfter'
import BookingForm from './components/BookingForm'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-black min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Pricing />
            <PlanComparison />
            <WhyChooseUs />
            <SpecialOffer />
            <ServiceAreas />
            <BeforeAfter />
            <BookingForm />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App