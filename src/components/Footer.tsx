import { motion } from 'framer-motion'
import { Instagram, Sms, Whatsapp } from 'iconsax-reactjs'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Book a Consultation', href: '/#booking' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/sophisticated_alaga_',
    Icon: Instagram,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/447423243282',
    Icon: Whatsapp,
  },
  {
    label: 'Email',
    href: 'mailto:foreverfind@gmail.com',
    Icon: Sms,
  },
]

const downloadLinks = [
  {
    platform: 'iOS',
    icon: '/apple-store-svgrepo-com.svg',
    url: 'https://foreverfind.sophisticatedandco.com/',
    label: 'Use Web App',
    isDownload: false,
  },
  {
    platform: 'Android',
    icon: '/google-play-svgrepo-com.svg',
    url: 'https://expo.dev/artifacts/eas/t5XK_7LtZeck98wz4Ke8JrT03xa6UWV6QTTZsP4b--s.apk',
    label: 'Download APK',
    isDownload: true,
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#29241F] font-sans">
      <div className="h-px w-full bg-linear-to-r from-transparent via-[#F3C7AF]/50 to-transparent" />
      <div className="pointer-events-none absolute -right-36 -top-40 h-96 w-96 rounded-full border border-[#F3C7AF]/[0.07]" />
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#F3C7AF]/[0.07]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20">
        <div className="mb-14 grid gap-12 sm:grid-cols-2 lg:mb-16 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-sm"
          >
            <a href="/" aria-label="Sophisticated Alaga Event home">
              <img src="/main-logo.webp" alt="Sophisticated Alaga Event" className="h-auto w-44" loading="lazy" />
            </a>
            <p className="mt-6 text-sm leading-7 text-[#F3C7AF]/55">
              An innovative event service business specializing in creating unforgettable celebrations and meaningful connections across the globe.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F3C7AF]/20 text-[#F3C7AF]/70 transition-colors hover:border-[#F3C7AF] hover:bg-[#F3C7AF]/10 hover:text-[#F3C7AF]"
                >
                  <Icon size={18} variant="Linear" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.nav
            aria-label="Footer navigation"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col items-start gap-4"
          >
            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F3C7AF]">Quick links</p>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#F3C7AF]/65 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 border-t border-[#F3C7AF]/15 pt-5">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F3C7AF]">Get the app</p>
              <div className="flex gap-5">
                {downloadLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(link.isDownload ? { download: true } : {})}
                    className="group flex flex-col items-center gap-2"
                    aria-label={`${link.label} (${link.platform})`}
                    title={link.label}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F3C7AF]/25 transition-colors group-hover:border-[#F3C7AF] group-hover:bg-[#F3C7AF]/10">
                      <img
                        src={link.icon}
                        alt={link.platform}
                        className="h-6 w-6 brightness-0 invert opacity-65 transition-opacity group-hover:opacity-100"
                      />
                    </span>
                    <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.16em] text-[#F3C7AF]/55 transition-colors group-hover:text-[#F3C7AF]">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="flex flex-col items-start gap-4"
          >
            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F3C7AF]">Contact</p>
            <a href="tel:+447423243282" className="text-sm text-[#F3C7AF]/65 transition-colors hover:text-white">
              +44 7423 243282
            </a>
            <a href="mailto:sophisticatedalaga@gmail.com" className="break-all text-sm text-[#F3C7AF]/65 transition-colors hover:text-white">
              sophisticatedalaga@gmail.com
            </a>
            <p className="text-sm text-[#F3C7AF]/45">Nigeria &amp; UK</p>
          </motion.div>
        </div>

        <div className="border-t border-[#F3C7AF]/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <p className="text-center text-[11px] leading-5 tracking-wide text-[#F3C7AF]/45 sm:text-left">
              &copy; {new Date().getFullYear()} Sophisticated Alaga Event. Crafted with Cultural Authenticity.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <Link
                to="/privacy"
                className="text-[11px] tracking-wide text-[#F3C7AF]/50 transition-colors hover:text-[#F3C7AF]"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-[11px] tracking-wide text-[#F3C7AF]/50 transition-colors hover:text-[#F3C7AF]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
