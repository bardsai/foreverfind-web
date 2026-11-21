import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight2 } from 'iconsax-reactjs'
import { Link } from 'react-router-dom'

export default function ConnectionBridge() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()
  const initialOffset = prefersReducedMotion ? 0 : 20

  return (
    <section ref={ref} className="bg-[#FFF8F1] px-5 py-20 font-sans sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-[#F7E9DE] sm:rounded-[2.5rem]">
        <div className="grid md:grid-cols-2">
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: initialOffset }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center p-7 sm:p-10 lg:p-16"
          >
            <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B84F3A]">
              <span className="h-px w-8 bg-current" />
              The Forever ecosystem
            </p>

            <h2 className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.025em] text-[#482F2B] sm:text-6xl">
              Beyond the Alaga.
              <br />
              <em className="text-[#B84F3A]">Finding your forever.</em>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#482F2B]/75 sm:text-base">
              We don&apos;t just celebrate weddings; we help ignite them. Our legacy began with{' '}
              <strong className="font-semibold text-[#482F2B]">Forever Find Matchmaking</strong>, a premium service dedicated to helping individuals find their life partners.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#482F2B]/75 sm:text-base">
              Whether you are searching for your partner or ready to celebrate your union, we are with you every step of the way—from the first connection to the final dance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/app"
                className="inline-flex items-center gap-3 rounded-full bg-[#B84F3A] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#8E3B30]"
              >
                Explore matchmaking
                <ArrowRight2 size={15} variant="Linear" aria-hidden="true" />
              </Link>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-2 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-[#482F2B] underline decoration-[#B84F3A]/40 underline-offset-4 transition-colors hover:text-[#B84F3A]"
              >
                Host your wedding
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, scale: prefersReducedMotion ? 1 : 1.03 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="group relative min-h-90 overflow-hidden md:min-h-full"
          >
            <img
              src="/forever_journey_bridge.webp"
              alt="Heritage meets matchmaking"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#482F2B]/55 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xs font-display text-2xl italic text-white sm:bottom-8 sm:left-8 sm:text-3xl">
              From the first connection to the final dance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
