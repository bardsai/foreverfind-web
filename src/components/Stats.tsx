import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Award, Calendar, Global, Heart, type Icon } from 'iconsax-reactjs'

interface Stat {
  value: number
  suffix?: string
  label: string
  text?: string
  icon: Icon
}

const stats: Stat[] = [
  { value: 250, suffix: '+', label: 'Weddings Hosted', icon: Calendar },
  { value: 8, suffix: '+', label: 'Years Experienced', icon: Award },
  { value: 100, suffix: '%', label: 'Happy Couples', icon: Heart },
  { value: 0, text: 'WORLDWIDE', label: 'Coverage Area', icon: Global },
]

interface AnimatedCounterProps {
  value: number
  suffix?: string
  text?: string
  duration?: number
}

function AnimatedCounter({ value, suffix, text, duration = 2.5 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (inView && value > 0) {
      animate(count, value, { duration, ease: 'easeOut' })
    }
  }, [inView, value, duration, count])

  return (
    <span ref={ref} className="inline-flex items-baseline font-display">
      {text ? (
        text
      ) : (
        <>
          <motion.span>{rounded}</motion.span>
          {suffix && <span className="ml-1 font-light text-[#D7B779]">{suffix}</span>}
        </>
      )}
    </span>
  )
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="stats" className="bg-[#F7F4EE] px-5 py-10 sm:px-8 sm:py-14" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-2xl bg-[#29241F] shadow-[0_24px_70px_rgba(41,36,31,0.12)]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#D7B779]/50 to-transparent" />
          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex min-h-40 flex-col items-center justify-center px-3 py-8 text-center sm:min-h-48 sm:px-6 sm:py-10"
              >
                <s.icon size={22} color="#D7B779" variant="Linear" aria-hidden="true" />
                <div className={`mt-4 font-display font-light leading-none text-[#F7F4EE] ${s.text ? 'text-3xl tracking-[0.08em] sm:text-4xl' : 'text-5xl sm:text-6xl'}`}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} text={s.text} />
                </div>
                <div className="mt-3 font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-[#F0DEBB]/70 sm:text-[10px]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
