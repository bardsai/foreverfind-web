import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  // { label: 'Sophisticated Foreverfind', href: '/#app' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Book a Consultation', href: '/#booking' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/sophisticated_alaga_',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.5]">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/447423243282',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.5]">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:foreverfind@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.5]">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
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
    <footer className="bg-[#100B07] relative overflow-hidden font-['Jost',sans-serif]">

      {/* Decorative gold top border */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-[5%] pt-20 pb-10">

        {/* Top row: Logo + Nav */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-16 mb-20">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 max-w-xs"
          >
            <a href="/">
              <img src="/main-logo.webp" alt="Logo" className="h-auto w-48" loading="lazy" />
            </a>
            <p className="text-[#F0DEBB]/40 text-[13px] font-light leading-relaxed">
              An innovative event service business specializing in creating unforgettable celebrations and meaningful connections across the globe.
            </p>
          </motion.div>

          {/* Nav Links */}
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] mb-2">Quick Links</p>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#F0DEBB]/60 text-sm hover:text-[#C9A84C] transition-colors duration-200 font-light"
              >
                {link.label}
              </a>
            ))}
            {/* App download links */}
            <div className="mt-4 pt-6 border-t border-[#F0DEBB]/5">
              <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] mb-4">Get the App</p>
              <div className="flex gap-6">
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
                    <span className="w-11 h-11 border border-[#C9A84C]/30 rounded-full flex items-center justify-center group-hover:border-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-all duration-300">
                      <img
                        src={link.icon}
                        alt={link.platform}
                        className="w-7 h-7 brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#F0DEBB]/50 group-hover:text-[#C9A84C] transition-colors duration-300 font-light whitespace-nowrap">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>

          {/* Contact snippet */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] mb-2">Contact</p>
            <a href="tel:+447423243282" className="text-[#F0DEBB]/60 text-sm hover:text-[#C9A84C] transition-colors font-light">
              +44 7423 243282
            </a>
            <a href="mailto:foreverfind@gmail.com" className="text-[#F0DEBB]/60 text-sm hover:text-[#C9A84C] transition-colors font-light">
              foreverfind@gmail.com
            </a>
            <p className="text-[#F0DEBB]/40 text-sm font-light">Nigeria & UK</p>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#F0DEBB]/5 mb-10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-[#F0DEBB]/20 text-[11px] tracking-wide font-light">
              &copy; {new Date().getFullYear()} Sophisticated Alaga Event. Crafted with Cultural Authenticity.
            </p>
            <Link
              to="/privacy"
              className="text-[#F0DEBB]/30 text-[11px] tracking-wide font-light hover:text-[#C9A84C] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[#F0DEBB]/30 text-[11px] tracking-wide font-light hover:text-[#C9A84C] transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F0DEBB]/30 hover:text-[#C9A84C] transition-colors duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
