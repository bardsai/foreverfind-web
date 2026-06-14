import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import ConnectionBridge from '../components/ConnectionBridge'
import Booking from '../components/Booking'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const sectionId = location.hash.replace('#', '')
    const target = document.getElementById(sectionId)

    if (!target) return

    const scrollTarget = window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)

    return () => window.clearTimeout(scrollTarget)
  }, [location.hash])

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <ConnectionBridge />
      <Booking />
      <Contact />
      <FAQ />
      <Footer />
    </>
  )
}
