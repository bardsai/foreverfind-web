import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react'
import { Download03Icon, Apple, Heart, Message02FreeIcons, Shield02Icon } from '@hugeicons/core-free-icons'

interface Feature {
  title: string
  desc: string
  icon: IconSvgElement
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' }
} as const)

const features: Feature[] = [
  {
    title: 'Smart Matching',
    desc: 'AI-powered matching algorithm to find your perfect connection based on interests and values.',
    icon: Heart,
  },
  {
    title: 'Real-time Chat',
    desc: 'Instant messaging with rich media support for meaningful conversations.',
    icon: Message02FreeIcons,
  },
  {
    title: 'Safety First',
    desc: 'Built-in safety features and comprehensive privacy controls.',
    icon: Shield02Icon,
  },
]

const downloadLinks = [
  {
    platform: 'iOS',
    icon: Apple,
    url: 'https://apps.apple.com/app/foreverfind',
  },
  {
    platform: 'Android',
    icon: Download03Icon,
    url: 'https://play.google.com/store/apps/details?id=com.foreverfind',
  },
]

export default function AppShowcase() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="app" className="py-24 px-[5%] bg-[#FDFAF6]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div {...fadeUp(0.1)}
            className="inline-block border border-[#C9A84C]/50 text-[#8B6A1F] text-xs tracking-[0.18em] uppercase px-4 py-1.5 rounded-sm mb-6"
          >
            Download Forever Find App
          </motion.div>

          <motion.h1 {...fadeUp(0.25)}
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.15] text-[#1C1410] mb-6"
          >
            Connect with
            <br />
            <em className="text-[#5C2E6E]">Meaningful</em> People
          </motion.h1>

          <motion.p {...fadeUp(0.38)}
            className="text-[#7A7069] leading-relaxed text-sm mb-10"
          >
            Experience genuine connections through our intuitive dating platform. Meet people who share your values and interests with our AI-powered matching system.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex gap-4 justify-center flex-wrap">
            {downloadLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#C9A84C] text-[#1C1410] font-medium px-7 py-3 rounded text-sm tracking-wide hover:bg-[#F0DEBB] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[#C9A84C]/20"
              >
                <HugeiconsIcon icon={link.icon} width={16} height={16} />
                Download on {link.platform}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(92,46,110,0.12)' }}
              className="bg-[#FDFAF6] border border-[#C9A84C]/20 rounded-sm p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-[#5C2E6E] to-[#C9A84C]" />
              <div className="w-11 h-11 rounded-full bg-[#EDE0F5] flex items-center justify-center mb-5">
                <HugeiconsIcon icon={feature.icon} width={20} height={20} className="text-[#5C2E6E]" />
              </div>
              <h3 className="font-display text-xl font-medium text-[#1C1410] mb-3">{feature.title}</h3>
              <p className="text-sm text-[#7A7069] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <div className="relative w-64 h-96 rounded-3xl bg-linear-to-br from-[#5C2E6E] to-[#7C309C] p-2 shadow-2xl">
              {/* Phone bezel */}
              <div className="w-full h-full rounded-3xl bg-[#1C1410] overflow-hidden shadow-inner flex items-center justify-center">
                {/* Screen content */}
                <div className="w-full h-full bg-linear-to-b from-[#FDFAF6] to-[#F5EFE7] flex flex-col items-center justify-center px-6 text-center">
                  <div className="text-5xl mb-3">💕</div>
                  <h4 className="font-display text-[#5C2E6E] font-medium text-lg mb-1">Forever Find</h4>
                  <p className="text-xs text-[#9B8FA8]">Genuine Connections</p>
                </div>
              </div>
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-[#1C1410] rounded-b-3xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-[#F7F2EC] border border-[#C9A84C]/20 rounded-sm p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-[#5C2E6E] to-[#C9A84C]" />
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-medium text-[#1C1410] mb-4">
            Ready to Find Your <em className="text-[#5C2E6E]">Forever</em>?
          </h2>
          <p className="text-[#7A7069] leading-relaxed text-sm mb-10 max-w-2xl mx-auto">
            Join thousands of people finding genuine connections every day. Download the Forever Find app and start your journey today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {downloadLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#C9A84C] text-[#1C1410] font-medium px-7 py-3 rounded text-sm tracking-wide hover:bg-[#F0DEBB] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[#C9A84C]/20"
              >
                <HugeiconsIcon icon={link.icon} width={16} height={16} />
                Download on {link.platform}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
