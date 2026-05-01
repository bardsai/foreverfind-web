import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface Stat {
  value: number
  suffix?: string
  label: string
  text?: string
  small?: boolean
}

const stats: Stat[] = [
  { value: 250, suffix: '+', label: 'Weddings Hosted' },
  { value: 8, suffix: '+', label: 'Years Experienced' },
  { value: 100, suffix: '%', label: 'Happy Couples' },
  { value: 0, text: 'WORLDWIDE', label: 'Coverage Area', small: true },
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
    <span ref={ref} className="inline-flex items-baseline font-['Cormorant_Garamond',serif]">
      {text ? (
        text
      ) : (
        <>
          <motion.span>{rounded}</motion.span>
          {suffix && <span className="ml-1 text-[#C9A84C] opacity-60 font-light">{suffix}</span>}
        </>
      )}
    </span>
  )
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="stats" className="bg-[#FDFAF6] py-12" ref={ref}>
      <div className="max-w-6xl mx-auto px-[5%]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 border border-[#C9A84C]/10 rounded-sm relative group hover:border-[#C9A84C]/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
              <div className={`font-['Cormorant_Garamond',serif] font-light text-[#1C1410] mb-3 ${s.small ? 'text-2xl tracking-widest mt-2' : 'text-5xl md:text-6xl'}`}>
                <AnimatedCounter value={s.value} suffix={s.suffix} text={s.text} />
              </div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-normal font-['Jost',sans-serif]">{s.label}</div>
              <div className="mt-6 w-8 h-px bg-[#C9A84C]/20 group-hover:w-12 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
