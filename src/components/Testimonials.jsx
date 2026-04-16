import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: "She made our wedding ceremony organised and lively. Our families loved how she respected Yoruba traditions while keeping the energy high throughout.",
    name: "Tunde & Chloe",
    detail: "Lagos Wedding, 2024",
    initials: "T&C",
    bg: "#5C2E6E",
  },
  {
    quote: "From the engagement to the reception, everything was seamless. Our guests still talk about how beautiful and well-coordinated the ceremony was.",
    name: "Kola & Funke",
    detail: "Ibadan Wedding, 2024",
    initials: "K&F",
    bg: "#8B6A1F",
  },
  {
    quote: "We were nervous about blending modern style with tradition, but she nailed it perfectly. The cultural rites were handled with such grace and expertise.",
    name: "Segun & Bimpe",
    detail: "UK Wedding, 2023",
    initials: "S&B",
    bg: "#3a1e05",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="py-24 px-[5%] bg-[#F7F2EC]" ref={ref}>
      <div className="text-center max-w-xl mx-auto mb-14">
        <p className="text-xs tracking-[0.16em] uppercase text-[#8B6A1F] mb-3">Kind Words</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-[#1C1410] leading-tight">
          Hear from Our <em className="text-[#5C2E6E]">Couples</em>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-[#FDFAF6] border border-[#C9A84C]/20 rounded-sm p-8"
          >
            <div className="text-[#C9A84C] tracking-widest text-base mb-4">★★★★★</div>
            <blockquote className="font-display text-base italic text-[#1C1410] leading-relaxed mb-5">
              "{t.quote}"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0"
                style={{ background: t.bg }}>
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-medium text-[#1C1410]">{t.name}</div>
                <div className="text-xs text-[#7A7069]">{t.detail}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}