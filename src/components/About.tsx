import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight2, Heart } from 'iconsax-reactjs'
import host from '../assets/host.webp'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()
  const initialOffset = prefersReducedMotion ? 0 : 24

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-32 overflow-hidden bg-[#F7F4EE] px-5 py-20 font-sans text-[#29241F] sm:px-8 sm:py-28 md:scroll-mt-36"
      ref={ref}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:gap-24">
        <motion.figure
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: initialOffset }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-125 md:mx-0"
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-t-[12rem] rounded-b-2xl bg-[#EAE4D9]">
            <img
              src={host}
              alt="Wedding host at a celebration"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#29241F]/55 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-8">
              <span className="font-display text-2xl italic sm:text-3xl">Care, culture, connection.</span>
              <Heart size={20} color="#F0DEBB" variant="Linear" aria-hidden="true" />
            </figcaption>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 rounded-t-[11rem] rounded-b-xl border border-white/40"
          />
        </motion.figure>

        <motion.div
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: initialOffset }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : 0.12, ease: 'easeOut' }}
          className="flex flex-col items-start"
        >
          <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#8C6C4B]">
            <span className="h-px w-8 bg-current" />
            About Forever Find
          </p>

          <h2 id="about-title" className="max-w-xl font-display text-5xl font-light leading-[1.02] tracking-[-0.025em] sm:text-6xl">
            Rooted in tradition.
            <br />
            <em className="text-[#8C6C4B]">Made for you.</em>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-[#29241F]/70 sm:text-base">
            Sophisticated Alaga and Events is an innovative event service business that specializes in creating unforgettable celebrations and meaningful connections.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#29241F]/70 sm:text-base">
            We offer a unique blend of services, including traditional wedding compering, singles matchmaking, birthday chanting, and surprise birthday celebration planning.
          </p>

          <div className="mt-8 border-l border-[#8C6C4B]/50 pl-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8C6C4B]">Our mission</p>
            <p className="mt-2 max-w-lg font-display text-2xl italic leading-snug text-[#29241F] sm:text-3xl">
              To celebrate life&apos;s milestones with creativity, culture, and connection.
            </p>
          </div>

          <a
            href="#booking"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#29241F] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#8C6C4B]"
          >
            Book a consultation
            <ArrowRight2 size={14} variant="Linear" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
