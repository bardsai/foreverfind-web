import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

interface Testimonial {
  quote: string
  name: string
  detail: string
  initials: string
  bg: string
}

const testimonials: Testimonial[] = [
  {
    quote: "She hosted our traditional engagement in London. Sophisticated Alaga managed the balance between my English family and James's Yoruba roots with such humor and grace.",
    name: "Chloe & James",
    detail: "London Wedding, UK",
    initials: "C&J",
    bg: "#C9A84C",
  },
  {
    quote: "Her presence as our Alaga was the highlight of our traditional wedding in Lagos. She kept us on schedule while making sure every traditional rite was honored perfectly.",
    name: "Tunde & Funke",
    detail: "Lagos Wedding, Nigeria",
    initials: "T&F",
    bg: "#1C1410",
  },
  {
    quote: "Her chanting at our Birmingham ceremony brought everyone to tears of joy. A truly masterful host who understands the cultural depth of our heritage.",
    name: "Sarah & David",
    detail: "Birmingham Ceremony, UK",
    initials: "S&D",
    bg: "#8B6A1F",
  },
  {
    quote: "From Manchester to the world! She coordinated our cross-cultural wedding perfectly. The energy was unmatched and the traditions were respected deeply.",
    name: "Amina & Ben",
    detail: "Manchester Event, UK",
    initials: "A&B",
    bg: "#5C2E6E",
  },
  {
    quote: "An unforgettable experience in Abuja. Her professionalism and cultural knowledge made our celebration stand out. Truly sophisticated in every sense.",
    name: "Kemi & Ibrahim",
    detail: "Abuja Wedding, Nigeria",
    initials: "K&I",
    bg: "#3a1e05",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const nextSlide = useCallback(() => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  const current = testimonials[index]

  return (
    <section id="testimonials" className="py-24 px-[5%] bg-[#FDFAF6] font-['Jost',sans-serif] overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-[10px] mb-4"
          >
            <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
            <p className="text-[10px] font-normal tracking-[0.22em] uppercase text-[#C9A84C]">Kind Words</p>
            <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-['Cormorant_Garamond',serif] font-light text-[clamp(2rem,4vw,3rem)] text-[#1C1410] leading-tight"
          >
            Hear from Our <em className="italic text-[#C9A84C]">Couples</em>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto min-h-[400px] flex items-center justify-center">

          {/* Quote Mark Background */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none">
            <svg width="180" height="180" viewBox="0 0 100 100" fill="#C9A84C">
              <path d="M30 40c0-10 10-20 20-20v10c-5 0-10 5-10 10h10v20H30V40zm30 0c0-10 10-20 20-20v10c-5 0-10 5-10 10h10v20H60V40z" />
            </svg>
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="w-full"
            >
              <div className="bg-[#F7F2EC] border border-[#C9A84C]/10 rounded-sm p-10 md:p-16 relative text-center flex flex-col items-center">

                <div className="text-[#C9A84C] tracking-[0.3em] text-xs mb-10 flex gap-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>

                <blockquote className="font-['Cormorant_Garamond',serif] text-lg md:text-3xl italic text-[#1C1410] leading-relaxed mb-12 max-w-3xl">
                  "{current.quote}"
                </blockquote>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-[#FDFAF6] text-xs font-medium shrink-0 tracking-widest shadow-xl shadow-[#C9A84C]/5"
                    style={{ background: current.bg }}>
                    {current.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#1C1410] uppercase tracking-[0.15em] mb-1">{current.name}</div>
                    <div className="text-[10px] text-[#C9A84C] tracking-[0.2em] uppercase font-normal">{current.detail}</div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 p-4 text-[#C9A84C] hover:text-[#1C1410] transition-colors group z-10"
            aria-label="Previous slide"
          >
            <span className="block w-8 h-px bg-current group-hover:w-12 transition-all"></span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 p-4 text-[#C9A84C] hover:text-[#1C1410] transition-colors group z-10"
            aria-label="Next slide"
          >
            <span className="block w-8 h-px bg-current group-hover:w-12 transition-all"></span>
          </button>

        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-[#C9A84C] scale-125' : 'bg-[#C9A84C]/20 hover:bg-[#C9A84C]/40'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
