import { motion } from 'framer-motion'
import heroImg from '../assets/hero.jpg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' }
} as const)

const HeroContent = () => (
  <div className="relative z-10 max-w-3xl mx-auto px-6">
    <motion.div {...fadeUp(0.2)}
      className="inline-block border border-[#C9A84C]/50 text-[#F0DEBB] text-xs tracking-[0.18em] uppercase px-4 py-1.5 rounded-sm mb-8"
    >
      Professional Yoruba Wedding Host
    </motion.div>

    <motion.h1 {...fadeUp(0.38)}
      className="font-display text-[clamp(2rem,8vw,4rem)] font-medium leading-[1.1] text-white mb-6"
    >
      Professional Yoruba <br /> <em className="text-[#C9A84C]">Wedding Host</em>
      <br />
      Making Your Traditional Wedding <em className="text-[#C9A84C]">Memorable</em>
    </motion.h1>

    <motion.div {...fadeUp(0.66)} className="flex gap-4 justify-center flex-wrap">
      <a href="#booking"
        className="bg-[#C9A84C] text-[#1C1410] font-medium px-8 py-3 rounded text-sm tracking-wide hover:bg-[#F0DEBB] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[#C9A84C]/20"
      >
        Book Consultation
      </a>
      <a href="#gallery"
        className="bg-transparent text-white border border-white/40 px-8 py-3 rounded text-sm hover:border-white hover:-translate-y-0.5 transition-all duration-200"
      >
        View Gallery
      </a>
    </motion.div>
  </div>
)

// Option A: Breathing / Pulsing Opacity
function OptionA() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center text-center pt-28 pb-14 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#2a0e35] via-[#1C1410] to-[#3a1e05]" />
      <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.010, 0.03, 0.010] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ backgroundImage: 'linear-gradient(to right, #C9A84C 1px, transparent 1px), linear-gradient(to bottom, #C9A84C 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
      <HeroContent />
    </section>
  )
}

export default function Hero() {
  return (
    <div id="home">
      <OptionA />
    </div>
  )
}
