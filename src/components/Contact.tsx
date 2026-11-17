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
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#C9A84C] fill-none stroke-[1.5]">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.95 10.5 19.79 19.79 0 0 1 1.87 1.87 2 2 0 0 1 3.87 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z" />
      </svg>
    ),
  },
  {
    label: 'Send a Message',
    value: 'sophisticatedalaga@gmail.com',
    href: 'mailto:sophisticatedalaga@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#C9A84C] fill-none stroke-[1.5]">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Our Office Is In',
    value: 'Nigeria & UK',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#C9A84C] fill-none stroke-[1.5]">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FDFAF6] py-24 px-[5%] font-['Jost',sans-serif] scroll-mt-32 md:scroll-mt-36">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center sm:text-left"
        >
          <div className="flex items-center justify-center sm:justify-start gap-[10px] mb-4">
            <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
            <p className="text-[10px] font-normal tracking-[0.22em] uppercase text-[#C9A84C]">Reach Out</p>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] font-light text-[clamp(2.5rem,5vw,3.5rem)] text-[#1C1410] leading-[1.1] tracking-[-0.01em]">
            For more information, <br className="hidden sm:block" />
            <em className="italic text-[#C9A84C]">Get In Touch</em>
          </h2>
          <p className="text-[#7A7069] text-[13px] font-light mt-6 max-w-md leading-[1.8] mx-auto sm:mx-0">
            We'd love to hear from you. Whether you're planning a ceremony or just curious, reach out and we'll respond promptly.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[#F7F2EC] border border-[#C9A84C]/10 rounded-sm p-9 hover:border-[#C9A84C]/30 hover:shadow-xl hover:shadow-[#C9A84C]/5 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-[#C9A84C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="text-[10px] font-normal text-[#C9A84C]/50 tracking-[0.2em] mb-8 block">0{i + 1}</span>

              <div className="mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                {c.icon}
              </div>

              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-3">{c.label}</p>

              <div className={`font-['Cormorant_Garamond',serif] font-light text-[#1C1410] leading-tight ${c.href ? 'text-[15px] italic' : 'text-xl'}`}>
                {c.href ? (
                  <a
                    href={c.href}
                    className="hover:text-[#C9A84C] font-[15px]! transition-colors break-all"
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
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-8 bg-[#1C1410] rounded-sm px-10 py-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #C9A84C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

          <p className="relative z-10 text-white font-['Cormorant_Garamond',serif] text-2xl font-light italic leading-relaxed text-center sm:text-left">
            Ready to make your <br className="hidden lg:block" />
            wedding <em className="text-[#C9A84C] not-italic">unforgettable?</em>
          </p>

          <a
            href="#booking"
            className="relative z-10 shrink-0 bg-[#C9A84C] text-[#100B07] font-medium px-8 py-4 rounded-sm text-[11px] tracking-[0.16em] uppercase hover:bg-[#F0DEBB] hover:-translate-y-[2px] transition-all duration-200"
          >
            Book Consultation
          </a>
        </motion.div>

      </div>
    </section>
  )
}
