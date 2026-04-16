import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HugeiconsIcon } from '@hugeicons/react';
import { WeddingIcon, Mic01Icon, Calendar03Icon } from '@hugeicons/core-free-icons';

const services = [
  {
    title: 'Traditional Wedding Hosting',
    desc: 'Professional coordination of Yoruba engagement ceremonies including bride introduction, cultural rites and family protocols.',
    icon: WeddingIcon,
  },
  {
    title: 'Master of Ceremony',
    desc: 'Energetic MC services for wedding receptions, introductions and guest engagement that keep your celebration lively and memorable.',
    icon: Mic01Icon,
  },
  {
    title: 'Event Coordination',
    desc: 'Helping couples structure their wedding program, coordinate vendors and ensure seamless event flow from start to finish.',
    icon: Calendar03Icon,
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 px-[5%] bg-[#F7F2EC]" ref={ref}>
      <div className="text-center max-w-xl mx-auto mb-14">
        <p className="text-xs tracking-[0.16em] uppercase text-[#8B6A1F] mb-3">What We Offer</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-[#1C1410] leading-tight">
          Our Hosting <em className="text-[#5C2E6E]">Services</em>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(92,46,110,0.12)' }}
            className="bg-[#FDFAF6] border border-[#C9A84C]/20 rounded-sm p-9 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#5C2E6E] to-[#C9A84C]" />
            <div className="w-11 h-11 rounded-full bg-[#EDE0F5] flex items-center justify-center mb-5">
              <HugeiconsIcon icon={s.icon} />
            </div>
            <h3 className="font-display text-xl font-medium text-[#1C1410] mb-3">{s.title}</h3>
            <p className="text-sm text-[#7A7069] leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}