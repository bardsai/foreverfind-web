import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowLeft2, ArrowRight2, QuoteUp, Star1 } from 'iconsax-reactjs'

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
    name: 'Chloe & James',
    detail: 'London Wedding, UK',
    initials: 'C&J',
    bg: '#C9A84C',
  },
  {
    quote: 'Her presence as our Alaga was the highlight of our traditional wedding in Lagos. She kept us on schedule while making sure every traditional rite was honored perfectly.',
    name: 'Tunde & Funke',
    detail: 'Lagos Wedding, Nigeria',
    initials: 'T&F',
    bg: '#1C1410',
  },
  {
    quote: 'Her chanting at our Birmingham ceremony brought everyone to tears of joy. A truly masterful host who understands the cultural depth of our heritage.',
    name: 'Sarah & David',
    detail: 'Birmingham Ceremony, UK',
    initials: 'S&D',
    bg: '#8B6A1F',
  },
  {
    quote: 'From Manchester to the world! She coordinated our cross-cultural wedding perfectly. The energy was unmatched and the traditions were respected deeply.',
    name: 'Amina & Ben',
    detail: 'Manchester Event, UK',
    initials: 'A&B',
    bg: '#5C2E6E',
  },
  {
    quote: 'An unforgettable experience in Abuja. Her professionalism and cultural knowledge made our celebration stand out. Truly sophisticated in every sense.',
    name: 'Kemi & Ibrahim',
    detail: 'Abuja Wedding, Nigeria',
    initials: 'K&I',
    bg: '#3a1e05',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  const nextSlide = useCallback(() => {
    setDirection(1)
    setIndex((previous) => (previous + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setIndex((previous) => (previous - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const timer = window.setInterval(nextSlide, 6000)
    return () => window.clearInterval(timer)
  }, [nextSlide, prefersReducedMotion])

  const variants = {
    enter: (slideDirection: number) => ({
      x: prefersReducedMotion ? 0 : slideDirection > 0 ? 32 : -32,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (slideDirection: number) => ({
      x: prefersReducedMotion ? 0 : slideDirection < 0 ? 32 : -32,
      opacity: 0,
    }),
  }

  const current = testimonials[index]

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="scroll-mt-24 overflow-hidden bg-[#FFF8F1] px-5 py-20 font-sans text-[#482F2B] sm:px-8 sm:py-28"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-wrap items-end justify-between gap-5"
        >
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B84F3A]">
              <span className="h-px w-8 bg-current" />
              Kind words
            </p>
            <h2 id="testimonials-title" className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.025em] sm:text-6xl">
              Hear it from <em className="text-[#B84F3A]">our couples.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#482F2B]/70">
            Real words from the families who invited us into their celebrations.
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden rounded-4xl bg-[#F7E9DE] p-6 sm:rounded-[2.5rem] sm:p-10 lg:p-14"
          role="region"
          aria-roledescription="carousel"
          aria-label="Couple testimonials"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 text-[#B84F3A]/10">
            <QuoteUp size={160} variant="Linear" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: 'easeOut' }}
              className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end md:gap-12"
            >
              <div>
                <div className="mb-6 flex items-center gap-1 text-[#B84F3A]" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <Star1 key={starIndex} size={16} variant="Bold" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="max-w-4xl font-display text-2xl leading-[1.2] sm:text-3xl lg:text-4xl">
                  “{current.quote}”
                </blockquote>
              </div>

              <div className="flex items-center gap-4 md:min-w-56 md:border-l md:border-[#482F2B]/15 md:pl-8">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xs font-medium tracking-wide text-white"
                  style={{ background: current.bg }}
                  aria-hidden="true"
                >
                  {current.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{current.name}</p>
                  <p className="mt-1 text-xs text-[#482F2B]/60">{current.detail}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 mt-10 flex items-center justify-between border-t border-[#482F2B]/15 pt-5">
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, dotIndex) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => {
                    setDirection(dotIndex > index ? 1 : -1)
                    setIndex(dotIndex)
                  }}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  aria-current={dotIndex === index ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all ${dotIndex === index ? 'w-7 bg-[#B84F3A]' : 'w-2.5 bg-[#482F2B]/20 hover:bg-[#482F2B]/40'}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#482F2B]/20 text-[#482F2B] transition-colors hover:bg-white"
              >
                <ArrowLeft2 size={18} variant="Linear" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#482F2B]/20 text-[#482F2B] transition-colors hover:bg-white"
              >
                <ArrowRight2 size={18} variant="Linear" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
