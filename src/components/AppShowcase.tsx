import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react'
import { Heart, Shield02Icon, ZapIcon } from '@hugeicons/core-free-icons'

interface Feature {
  title: string
  desc: string
  icon: IconSvgElement
  tag: string
}

const features: Feature[] = [
  {
    title: 'High-End Matchmaking',
    desc: 'Personalized services for local and international individuals seeking meaningful, lasting relationships that lead to marriage.',
    icon: Heart,
    tag: 'Global Reach',
  },
  {
    title: 'Tech Meets Tradition',
    desc: 'We blend computer-based algorithms with traditional methods to understand your goals, values, and unique preferences.',
    icon: ZapIcon,
    tag: 'Hybrid Approach',
  },
  {
    title: 'Discretion & Quality',
    desc: 'A premium, time-saving experience for busy professionals that goes beyond algorithms with a focus on absolute confidentiality.',
    icon: Shield02Icon,
    tag: 'Premium Discretion',
  },
]

const downloadLinks = [
  {
    platform: 'iOS',
    icon: '/apple-store-svgrepo-com.svg',
    url: 'https://foreverfind.sophisticatedandco.com/',
    label: 'Use Web App',
    ctaTitle: 'Open Web Version',
    ctaSub: 'Works on iPhone and any browser',
    isDownload: false,
  },
  {
    platform: 'Android',
    icon: '/google-play-svgrepo-com.svg',
    url: 'https://expo.dev/artifacts/eas/t5XK_7LtZeck98wz4Ke8JrT03xa6UWV6QTTZsP4b--s.apk',
    label: '',
    ctaTitle: 'Download for Android',
    ctaSub: 'Direct APK download',
    isDownload: true,
  },
]

export default function AppShowcase() {
  const containerRef = useRef<HTMLElement>(null)
  const inView = useInView(containerRef, { once: false, margin: '-10% 0px -10% 0px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section
      id="app"
      ref={containerRef}
      className="py-32 px-[5%] bg-[#FDFAF6] font-['Jost',sans-serif] overflow-hidden relative"
    >
      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #C9A84C 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      <div className="max-w-7xl mx-auto">

        {/* Editorial Hero Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-[#C9A84C]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-semibold">Sophisticated Forever Find</span>
            </div>

            <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(3rem,8vw,5rem)] font-light leading-none text-[#1C1410] mb-10 tracking-tight">
              Finding Your <br />
              <em className="italic text-[#C9A84C]">Ideal Partner</em>
            </h1>

            <p className="text-[#7A7069] text-lg font-light leading-relaxed mb-12 max-w-xl">
              Whether you’re a busy professional or someone looking for a more personal touch in relationships, we’re here to guide you toward a meaningful union through a blend of heritage and innovation.
            </p>

            <div className="flex flex-wrap gap-5">
              <a href="#registration" className="bg-[#1C1410] text-[#FDFAF6] px-10 py-5 rounded-sm text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#C9A84C] transition-all duration-500 shadow-2xl shadow-[#1C1410]/20">
                Start Your Story
              </a>
              <div className="flex gap-4 pb-6 sm:pb-0">
                {downloadLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(link.isDownload ? { download: true } : {})}
                    className="group relative w-14 h-14 border border-[#C9A84C]/30 rounded-full flex items-center justify-center hover:bg-[#C9A84C] transition-all duration-500"
                    aria-label={`${link.label} (${link.platform})`}
                    title={link.label}
                  >
                    <img
                      src={link.icon}
                      alt={link.platform}
                      className="w-10 h-10 transition-all duration-500 group-hover:brightness-0 group-hover:invert opacity-70 group-hover:opacity-100"
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#C9A84C] font-semibold">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="relative">
            {/* Primary Integrated Image */}
            <motion.div
              style={{ scale: imgScale }}
              className="relative rounded-sm overflow-hidden"
            >
              <img
                src="/foreverfind.webp"
                alt="Celebration of Union"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        {/* Feature Grid with Overlapping Image */}
        <div className="relative mb-32">
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-md border border-[#C9A84C]/40 rounded-sm p-12 hover:border-[#C9A84C] transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#FDFAF6] border border-[#C9A84C]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700">
                  <HugeiconsIcon icon={feature.icon} width={24} height={24} className="text-[#1C1410]" />
                </div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#C9A84C] mb-4 font-bold">{feature.tag}</p>
                <h3 className="font-['Cormorant_Garamond',serif] text-3xl text-[#1C1410] mb-6 tracking-tight leading-none">{feature.title}</h3>
                <p className="text-[14.5px] font-light text-[#7A7069] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Secondary Overlapping Image */}
          <motion.div
            style={{ y: y2 }}
            className="absolute -top-24 -left-24 w-64 aspect-square rounded-sm overflow-hidden border border-[#C9A84C]/20 shadow-2xl -z-10 hidden xl:block"
          >
            <img
              src="/foreverfind-2.webp"
              alt="Lifestyle Detail"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* App Download CTA Section */}
        <section id="get-the-app" className="mt-32 bg-[#1C1410] rounded-sm relative overflow-hidden">
          {/* Abstract pattern overlay */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at center, #C9A84C 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
          <div className="relative z-10 p-12 md:p-24">
            <div className="text-center mb-20">
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,4rem)] font-light text-white mb-4 leading-tight">
                Your Love Story, <em className="italic text-[#C9A84C]">One Tap Away</em>
              </h2>
              <p className="text-white/60 font-light tracking-wide max-w-2xl mx-auto">
                Download the app on Android, or open the web version on any device, and begin your journey toward a meaningful union.
              </p>
            </div>
        
            <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-sm overflow-hidden shadow-2xl border border-[#C9A84C]/20"
              >
                <img
                  src="/foreverfind-2.webp"
                  alt="Proposal"
                  className="w-full object-contain brightness-75"
                  loading="lazy"
                />
              </motion.div>
        
              {/* Download Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                {downloadLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(link.isDownload ? { download: true } : {})}
                    className="group flex items-center gap-6 border border-[#C9A84C]/30 rounded-sm p-6 hover:bg-[#C9A84C] hover:border-[#C9A84C] transition-all duration-500"
                    aria-label={`${link.ctaTitle} (${link.platform})`}
                  >
                    <span className="w-16 h-16 shrink-0 rounded-full border border-[#C9A84C]/30 flex items-center justify-center group-hover:border-[#1C1410]/30 transition-colors duration-500">
                      <img
                        src={link.icon}
                        alt=""
                        className="w-10 h-10 brightness-0 invert opacity-80 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500"
                      />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="font-['Cormorant_Garamond',serif] text-2xl text-white group-hover:text-[#1C1410] transition-colors duration-500 leading-none">
                        {link.ctaTitle}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-[#1C1410]/70 transition-colors duration-500">
                        {link.ctaSub}
                      </span>
                    </span>
                    <span className="ml-auto text-[#C9A84C] group-hover:text-[#1C1410] text-xl transition-colors duration-500">→</span>
                  </a>
                ))}
        
                {/* <p className="text-white/40 text-xs font-light leading-relaxed pt-2">
                  Android users: your phone may ask you to allow installs from unknown sources, since the app is installed directly rather than through the Play Store.
                </p> */}
              </motion.div>
            </div>
          </div>
        
          {/* Final CTA Integrated at the bottom */}
          <div className="border-t border-white/5 p-16 text-center">
            <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(1.5rem,4vw,3.5rem)] font-light text-white mb-6 leading-tight">
              A Premium Experience <em className="italic text-[#C9A84C]">Beyond Algorithms</em>
            </h2>
            <p className="text-white/70 md:text-lg text-base font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              We provide a time-saving, discrete experience for those who value quality above all. Let us guide you toward finding your ideal partner.
            </p>
          </div>
        </section>

      </div>
    </section>
  )
}
