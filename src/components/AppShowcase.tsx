import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight2, Flash, Heart, ShieldTick } from 'iconsax-reactjs'

const features = [
  {
    title: 'High-End Matchmaking',
    desc: 'Personalized services for local and international individuals seeking meaningful, lasting relationships that lead to marriage.',
    icon: Heart,
    tag: 'Global Reach',
  },
  {
    title: 'Tech Meets Tradition',
    desc: 'We blend computer-based algorithms with traditional methods to understand your goals, values, and unique preferences.',
    icon: Flash,
    tag: 'Hybrid Approach',
  },
  {
    title: 'Discretion & Quality',
    desc: 'A premium, time-saving experience for busy professionals that goes beyond algorithms with a focus on absolute confidentiality.',
    icon: ShieldTick,
    tag: 'Premium Discretion',
  },
]

const downloadLinks = [
  {
    platform: 'iOS',
    icon: '/apple-store-svgrepo-com.svg',
    url: 'https://foreverfind.sophisticatedandco.com/',
    label: 'Web App',
    ctaTitle: 'Open Web Version',
    ctaSub: 'Works on iPhone and any browser',
    isDownload: false,
  },
  {
    platform: 'Android',
    icon: '/google-play-svgrepo-com.svg',
    url: 'https://expo.dev/artifacts/eas/0lIUMGFFeSatPu8-oVC53DuO5tmii3gHUdPqWMyWJjI.apk',
    label: 'Android App',
    ctaTitle: 'Download for Android',
    ctaSub: 'Direct APK download',
    isDownload: true,
  },
]

export default function AppShowcase() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <main className="overflow-hidden bg-[#F7F4EE] font-sans text-[#29241F]">
      <section
        id="app"
        ref={heroRef}
        className="scroll-mt-24 px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:min-h-[calc(100svh-9rem)] md:grid-cols-[0.98fr_1.02fr] md:gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative z-10"
          >
            <p className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B84F3A]">
              <span className="h-px w-8 bg-current" />
              Sophisticated Forever Find
            </p>

            <h1 className="max-w-2xl font-display text-6xl font-medium leading-[0.94] tracking-[-0.035em] sm:text-6xl md:text-5xl lg:text-[5.75rem]">
              Finding your
              <br />
              <em className="text-[#B84F3A]">ideal partner.</em>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#29241F]/70 sm:text-lg sm:leading-8">
              Whether you’re a busy professional or someone looking for a more personal touch in relationships, we’re here to guide you toward a meaningful union through a blend of heritage and innovation.
            </p>

            <a
              href="#get-the-app"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#B84F3A] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#8E3B30]"
            >
              Start your story
              <ArrowRight2 size={16} variant="Linear" aria-hidden="true" />
            </a>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#482F2B]/15 pt-5">
              {downloadLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...(link.isDownload ? { download: true } : {})}
                  className="group inline-flex items-center gap-3 text-left"
                  aria-label={`${link.label} (${link.platform})`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7E9DE] transition-colors group-hover:bg-[#B84F3A]">
                    <img
                      src={link.icon}
                      alt=""
                      className="h-6 w-6 opacity-80 transition group-hover:brightness-0 group-hover:invert group-hover:opacity-100"
                    />
                  </span>
                  <span>
                    <span className="block text-xs font-medium text-[#482F2B]">{link.label}</span>
                    <span className="mt-0.5 block text-[10px] text-[#482F2B]/55">
                      {link.platform === 'iOS' ? 'Open on any device' : 'For Android'}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, scale: prefersReducedMotion ? 1 : 0.98 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: prefersReducedMotion ? 0 : 0.12 }}
            className="relative mx-auto w-full max-w-[34rem]"
          >
            <div aria-hidden="true" className="absolute -right-7 -top-7 h-32 w-32 rounded-full border border-[#B84F3A]/20 sm:-right-10 sm:-top-10 sm:h-44 sm:w-44" />
            <div className="relative aspect-[0.88] overflow-hidden rounded-[2rem] bg-[#F7E9DE] shadow-[0_28px_80px_rgba(72,47,43,0.12)] sm:rounded-[2.5rem]">
              <img
                src="/foreverfind.webp"
                alt="A couple walking together beneath flowering trees"
                className="h-full w-full object-cover object-[100%_center]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#482F2B]/45 via-transparent to-[#482F2B]/5" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-[#FFF8F1]/90 px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#482F2B] backdrop-blur-sm sm:left-7 sm:top-7">
                <Heart size={14} variant="Bold" className="text-[#B84F3A]" aria-hidden="true" />
                A thoughtful approach to love
              </div>
              <p className="absolute bottom-6 left-6 max-w-xs font-display text-2xl italic leading-tight text-white sm:bottom-8 sm:left-8 sm:text-3xl">
                Love, culture, and a meaningful connection.
              </p>
            </div>
            <div className="absolute -bottom-5 right-4 hidden rounded-full border border-[#482F2B]/10 bg-[#FFF8F1] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.16em] text-[#482F2B] shadow-lg sm:block lg:-right-8">
              Sophisticated Forever Find
            </div>
          </motion.div>
        </div>
      </section>

      <section id="approach" className="bg-[#FFF8F1] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="mb-12 grid gap-5 md:grid-cols-[1fr_auto] md:items-end"
          >
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B84F3A]">
                <span className="h-px w-8 bg-current" />
                The Forever Find approach
              </p>
              <h2 className="max-w-2xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.025em] text-[#482F2B] sm:text-6xl">
                Meaningful connection,
                <br />
                <em className="text-[#B84F3A]">with intention.</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#482F2B]/65">
              A considered blend of personal service, modern tools, and respect for the traditions that shape us.
            </p>
          </motion.div>

          <div className="grid border-y border-[#482F2B]/15 md:grid-cols-3 md:divide-x md:divide-[#482F2B]/15">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.08 }}
                  className="group border-b border-[#482F2B]/15 py-8 last:border-b-0 md:border-b-0 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-display text-2xl italic text-[#B84F3A]">0{index + 1}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F7E9DE] text-[#B84F3A] transition-colors group-hover:bg-[#B84F3A] group-hover:text-white">
                      <Icon size={21} variant="Linear" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.18em] text-[#B84F3A]">{feature.tag}</p>
                  <h3 className="font-display text-2xl font-medium leading-tight text-[#482F2B] sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#482F2B]/65">{feature.desc}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="get-the-app" className="scroll-mt-24 bg-[#F7F4EE] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#482F2B] sm:rounded-[2.5rem]">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#F3C7AF]">
                <span className="h-px w-8 bg-current" />
                Your next chapter
              </p>
              <h2 className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.025em] text-white sm:text-6xl">
                Your love story,
                <br />
                <em className="text-[#F3C7AF]">one tap away.</em>
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Download the app on Android, or open the web version on any device, and begin your journey toward a meaningful union.
              </p>

              <div className="mt-8 grid gap-3">
                {downloadLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(link.isDownload ? { download: true } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-4 transition-colors hover:border-[#F3C7AF] hover:bg-[#F3C7AF]"
                    aria-label={`${link.ctaTitle} (${link.platform})`}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors group-hover:border-[#482F2B]/15 group-hover:bg-white/50">
                      <img
                        src={link.icon}
                        alt=""
                        className="h-7 w-7 brightness-0 invert opacity-80 transition group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100"
                      />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className="font-display text-xl leading-tight text-white transition-colors group-hover:text-[#482F2B] sm:text-2xl">
                        {link.ctaTitle}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors group-hover:text-[#482F2B]/65">
                        {link.ctaSub}
                      </span>
                    </span>
                    <ArrowRight2 size={18} variant="Linear" className="shrink-0 text-[#F3C7AF] transition-colors group-hover:text-[#482F2B]" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: prefersReducedMotion ? 1 : 0, scale: prefersReducedMotion ? 1 : 1.02 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="group relative min-h-[320px] overflow-hidden bg-[#F7E9DE] lg:min-h-full"
            >
              <img
                src="/foreverfind-2.webp"
                alt="A couple sharing a joyful moment together"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#482F2B]/50 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 max-w-xs font-display text-2xl italic text-white sm:bottom-8 sm:left-8 sm:text-3xl">
                A premium experience, beyond algorithms.
              </p>
            </motion.div>
          </div>

          <div className="border-t border-white/10 px-7 py-8 sm:px-10 lg:px-14">
            <h3 className="font-display text-3xl leading-tight text-white sm:text-4xl">
              A premium experience <em className="text-[#F3C7AF]">beyond algorithms.</em>
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
              We provide a time-saving, discrete experience for those who value quality above all. Let us guide you toward finding your ideal partner.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
