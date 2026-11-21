import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight2, Calendar, Heart, Microphone2, Music, type Icon } from 'iconsax-reactjs'
import { Link } from 'react-router-dom'

interface Service {
  title: string
  desc: string
  icon: Icon
  href: string
  isApp?: boolean
}

const services: Service[] = [
  {
    title: 'Event hosting',
    desc: 'Bridging traditions with modern elegance. Whether serving as a traditional Yoruba Alaga or a contemporary MC, we bring cultural richness and professional precision to your wedding, ensuring a seamless, lively, and unforgettable experience tailored to your unique love story.',
    icon: Microphone2,
    href: '#booking',
  },
  {
    title: 'Chanting',
    desc: 'A soul-stirring addition to milestone celebrations. Rooted in ancestral tradition, our chanting brings a sense of peace, unity, and divine blessing to your special day, creating a sacred, harmonious atmosphere that elevates the beauty of the moment.',
    icon: Music,
    href: '#booking',
  },
  {
    title: 'Surprise Birthday Services',
    desc: 'Crafting moments of pure joy and astonishment. We specialize in designing unforgettable surprise celebrations, from coordinating unique themes to ensuring flawless execution, all tailored to reflect the guest of honor’s unique personality.',
    icon: Calendar,
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
    <section
      id="services"
      className="scroll-mt-32 bg-[#F7F4EE] px-5 py-20 font-sans text-[#29241F] sm:px-8 sm:py-28 md:scroll-mt-36"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end lg:mb-16">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#8C6C4B]">
              <span className="h-px w-8 bg-current" />
              Our expertise
            </p>
            <h2 className="max-w-xl font-display text-5xl font-light leading-[1.02] tracking-[-0.025em] sm:text-6xl">
              Thoughtful hosting for <em className="text-[#8C6C4B]">meaningful moments.</em>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#29241F]/70 md:justify-self-end sm:text-base">
            From wedding traditions to new connections, we bring care and intention to every part of your celebration.
          </p>
        </div>

        <div className="grid gap-x-10 sm:grid-cols-2 lg:gap-x-16">
          {services.map((service, index) => {
            const ServiceIcon = service.icon

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group border-t border-[#29241F]/15 py-7 sm:py-9"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-sm text-[#8C6C4B]">0{index + 1}</span>
                  {service.isApp && (
                    <span className="rounded-full border border-[#8C6C4B]/25 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#8C6C4B]">
                      Available on the app
                    </span>
                  )}
                  <span className={`ml-auto flex h-10 w-10 items-center justify-center rounded-full ${service.isApp ? 'bg-[#EAE4D9]' : 'bg-white/70'}`}>
                    <ServiceIcon size={20} color="#8C6C4B" variant="Linear" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl tracking-tight sm:text-3xl">{service.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#29241F]/65">{service.desc}</p>

                {service.isApp ? (
                  <Link
                    to={service.href}
                    className="mt-5 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8C6C4B] transition-colors group-hover:text-[#29241F]"
                  >
                    Explore matchmaking
                    <ArrowRight2 size={14} variant="Linear" aria-hidden="true" />
                  </Link>
                ) : (
                  <a
                    href={service.href}
                    className="mt-5 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8C6C4B] transition-colors group-hover:text-[#29241F]"
                  >
                    Inquire about this service
                    <ArrowRight2 size={14} variant="Linear" aria-hidden="true" />
                  </a>
                )}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
