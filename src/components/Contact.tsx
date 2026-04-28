import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ContactItem {
  label: string
  value: string
  href?: string
  icon: ReactNode
}

const contacts: ContactItem[] = [
  {
    label: 'Call Us On',
    value: '+44 7423 243282',
    href: 'tel:+447423243282',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#5C2E6E] fill-none stroke-[1.5]">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.95 10.5 19.79 19.79 0 0 1 1.87 1.87 2 2 0 0 1 3.87 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z" />
      </svg>
    ),
  },
  {
    label: 'Send a Message',
    value: 'foreverfind@gmail.com',
    href: 'mailto:foreverfind@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#5C2E6E] fill-none stroke-[1.5]">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Our Office Is In',
    value: 'Nigeria & UK',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#5C2E6E] fill-none stroke-[1.5]">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F9F5FB] py-20 px-[5%]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.16em] uppercase text-[#8B6A1F] mb-3">Reach Out</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-[#1C1410] leading-tight">
            For more information,{' '}
            <em className="text-[#5C2E6E]">Get In Touch</em>
          </h2>
          <p className="text-[#7A7069] text-sm mt-4 max-w-md leading-relaxed">
            We'd love to hear from you. Whether you're planning a ceremony or just curious, reach out and we'll respond promptly.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white border border-[#5C2E6E]/10 rounded-lg p-7 hover:border-[#5C2E6E]/30 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 w-0 h-0.75 bg-[#C9A84C] group-hover:w-full transition-all duration-500 ease-out" />

              {/* Index tag */}
              <span className="text-[10px] font-mono text-[#5C2E6E]/30 tracking-widest mb-5 block">0{i + 1}</span>

              {/* Icon */}
              <div className="mb-5 opacity-60 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-300">
                {c.icon}
              </div>

              {/* Label */}
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#5C2E6E] mb-2">{c.label}</p>

              {/* Value — smaller font for phone/email, normal for location */}
              <div className={`font-semibold text-[#1C1410] leading-snug ${c.href ? 'text-sm' : 'text-lg'}`}>
                {c.href ? (
                  <a
                    href={c.href}
                    className="hover:text-[#5C2E6E] transition-colors break-all"
                  >
                    {c.value}
                  </a>
                ) : (
                  c.value
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#5C2E6E] rounded-lg px-8 py-6"
        >
          <p className="text-white font-display text-lg font-medium">
            Ready to make your wedding unforgettable?
          </p>
          <a
            href="#booking"
            className="shrink-0 bg-[#C9A84C] text-[#1C1410] font-medium px-7 py-3 rounded text-sm tracking-wide hover:bg-[#F0DEBB] hover:-translate-y-0.5 transition-all duration-200"
          >
            Book a Consultation
          </a>
        </motion.div>

      </div>
    </section>
  )
}
