import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react'
import {
  Mic01Icon,
  MusicNote01Icon,
  Calendar03Icon,
  Heart
} from '@hugeicons/core-free-icons'
import { Link } from 'react-router-dom'

interface Service {
  title: string
  desc: string
  icon: IconSvgElement
  href: string
  isApp?: boolean
}

const services: Service[] = [
  {
    title: 'Event hosting',
    desc: 'Bridging traditions with modern elegance. Whether serving as a traditional Yoruba Alaga or a contemporary MC, we bring cultural richness and professional precision to your wedding, ensuring a seamless, lively, and unforgettable experience tailored to your unique love story.',
    icon: Mic01Icon,
    href: '#booking',
  },
  {
    title: 'Chanting',
    desc: 'A soul-stirring addition to milestone celebrations. Rooted in ancestral tradition, our chanting brings a sense of peace, unity, and divine blessing to your special day, creating a sacred, harmonious atmosphere that elevates the beauty of the moment.',
    icon: MusicNote01Icon,
    href: '#booking',
  },
  {
    title: 'Surprise Birthday Services',
    desc: 'Crafting moments of pure joy and astonishment. We specialize in designing unforgettable surprise celebrations, from coordinating unique themes to ensuring flawless execution, all tailored to reflect the guest of honor’s unique personality.',
    icon: Calendar03Icon,
    href: '#booking',
  },
  {
    title: 'Singles Matchmaking',
    desc: 'Your journey to a lifetime of partnership begins here. We offer personalized, high-end matchmaking by blending advanced algorithms with time-honored traditional methods, providing curated matches that align with your deepest values and goals.',
    icon: Heart,
    href: '/app',
    isApp: true,
  },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 px-[5%] bg-[#FDFAF6] font-['Jost',sans-serif]" ref={ref}>
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-[10px] mb-4">
          <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
          <p className="text-[10px] font-normal tracking-[0.22em] uppercase text-[#C9A84C]">Our Expertise</p>
          <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
        </div>
        <h2 className="font-['Cormorant_Garamond',serif] font-light text-[clamp(2.5rem,5vw,3.5rem)] text-[#1C1410] leading-tight tracking-[-0.01em]">
          Bespoke <em className="italic text-[#C9A84C]">Heritage</em> Services
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group bg-[#F7F2EC] border ${s.isApp ? 'border-[#C9A84C]/40 bg-[#C9A84C]/5' : 'border-[#C9A84C]/10'} rounded-sm p-10 hover:border-[#C9A84C]/30 transition-all duration-500 relative`}
          >
            {s.isApp && (
              <div className="absolute top-4 right-4 bg-[#C9A84C] text-[#100B07] text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full">
                App Available
              </div>
            )}

            <div className="w-14 h-14 rounded-full bg-[#FDFAF6] border border-[#C9A84C]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <HugeiconsIcon icon={s.icon} size={24} className="text-[#C9A84C]" />
            </div>

            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#1C1410] mb-4 tracking-tight">
              {s.title}
            </h3>
            <p className="text-[#7A7069] text-[13.5px] font-light leading-[1.7] mb-8 min-h-[50px]">
              {s.desc}
            </p>

            {s.isApp ? (
              <Link
                to={s.href}
                className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-[#C9A84C] group-hover:text-[#1C1410] transition-colors"
              >
                Learn More <span className="text-base">→</span>
              </Link>
            ) : (
              <a
                href={s.href}
                className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-[#C9A84C] group-hover:text-[#1C1410] transition-colors"
              >
                Inquire <span className="text-base">→</span>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
