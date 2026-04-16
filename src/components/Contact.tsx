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
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#5C2E6E] fill-none stroke-[1.5]">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.95 10.5 19.79 19.79 0 0 1 1.87 1.87 2 2 0 0 1 3.87 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z" />
      </svg>
    ),
  },
  {
    label: 'Send a Message',
    value: 'foreverfind@gmail.com',
    href: 'mailto:foreverfind@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#5C2E6E] fill-none stroke-[1.5]">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Our Office Is In',
    value: 'Nigeria & UK',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#5C2E6E] fill-none stroke-[1.5]">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <div id="contact" className="bg-[#EDE0F5] border-y border-[#5C2E6E]/20 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#5C2E6E]/20">

        {/* Title Block (Counts as 1st grid item) */}
        <div className="relative p-8 lg:p-12 bg-[#EDE0F5] flex flex-col justify-center min-h-[240px]">
          <h2 className="font-display text-4xl lg:text-3xl font-medium text-[#1C1410] leading-tight">
            For more information,<br />
            <strong className="text-[#5C2E6E] italic tracking-wide">Get In Touch</strong>
          </h2>
        </div>

        {/* Contact Blocks */}
        {contacts.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="relative p-8 lg:p-12 lg:pl-8 bg-[#EDE0F5] group hover:bg-[#F9F5FB] transition-colors duration-500 flex flex-col justify-end min-h-[240px]"
          >
            <div className="absolute top-6 left-6 text-[10px] font-mono text-[#5C2E6E]/40 tracking-widest">0{i + 1} // CT</div>

            {/* Icon */}
            <div className="mb-6 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
              {c.icon}
            </div>

            <div className="text-[11px] mb-8 tracking-[0.25em] uppercase text-[#5C2E6E]">{c.label}</div>

            <div className="font-display font-semibold text-[#5C2E6E] text-2xl">
              {c.href ? (
                <a href={c.href} className="hover:text-[#C9A84C] transition-colors">{c.value}</a>
              ) : (
                c.value
              )}
            </div>

            {/* Hover accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C9A84C] group-hover:w-full transition-all duration-700 ease-out"></div>
          </motion.div>
        ))}

      </div>
    </div>
  )
}
