import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
  { label: 'Book a Consultation', href: '#booking' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
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

export default function Footer() {
  return (
    <footer className="bg-[#1C1410] relative overflow-hidden">

      {/* Decorative gold top border */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-[5%] pt-16 pb-8">

        {/* Top row: Logo + Nav */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-14">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 max-w-xs"
          >
            <a href="/">
              <img src="/logo.svg" alt="ForeverFind Logo" className="h-20 w-auto" />
            </a>
            <p className="text-white/40 text-xs leading-relaxed">
              Professional Yoruba wedding hosts bringing joy, culture and elegance to your most cherished day.
            </p>
          </motion.div>

          {/* Nav Links */}
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-1">Quick Links</p>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/50 text-sm hover:text-[#C9A84C] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Contact snippet */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-1">Contact</p>
            <a href="tel:+447423243282" className="text-white/50 text-sm hover:text-white/80 transition-colors">
              +44 7423 243282
            </a>
            <a href="mailto:foreverfind@gmail.com" className="text-white/50 text-sm hover:text-white/80 transition-colors">
              foreverfind@gmail.com
            </a>
            <p className="text-white/40 text-sm">Nigeria & UK</p>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} ForeverFind. Crafted with love for Yoruba traditions.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-[#C9A84C] transition-colors duration-200"
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
