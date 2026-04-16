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
    <span ref={ref} className="inline-flex items-baseline">
      {text ? (
        text
      ) : (
        <>
          <motion.span>{rounded}</motion.span>
          {suffix && <span className="ml-[1px]">{suffix}</span>}
        </>
      )}
    </span>
  )
}

function OptionC() {
  return (
    <div className="bg-[#EDE0F5] border-y border-[#5C2E6E]/20 mb-20 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#5C2E6E]/20">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="relative p-8 lg:p-12 bg-[#EDE0F5] group hover:bg-[#F9F5FB] transition-colors duration-500 flex flex-col justify-end min-h-[200px]"
          >
            <div className="absolute top-6 left-6 text-[10px] font-mono text-[#5C2E6E]/40 tracking-widest">0{i + 1} // MT</div>
            <div className={`font-display font-semibold text-[#5C2E6E] mb-6 mt-8 ${s.small ? 'text-3xl tracking-wide' : 'text-6xl'}`}>
              <AnimatedCounter value={s.value} suffix={s.suffix} text={s.text} />
            </div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-[#5C2E6E]">{s.label}</div>

            {/* Hover accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C9A84C] group-hover:w-full transition-all duration-700 ease-out"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section id="stats">
      <div className="w-full pb-10 bg-gradient-to-b from-transparent to-[#faf5ff]/40">
        <OptionC />
      </div>
    </section>
  )
}
