import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight2, Call, Location, Sms } from 'iconsax-reactjs'

const contacts = [
  {
    label: 'Call us on',
    value: '+44 7423 243282',
    href: 'tel:+447423243282',
    icon: Call,
  },
  {
    label: 'Send a message',
    value: 'sophisticatedalaga@gmail.com',
    href: 'mailto:sophisticatedalaga@gmail.com',
    icon: Sms,
  },
  {
    label: 'Our office is in',
    value: 'Nigeria & UK',
    icon: Location,
  },
]

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="contact"
      ref={ref}
      className="scroll-mt-32 bg-[#FFF8F1] px-5 py-20 font-sans sm:px-8 sm:py-28 md:scroll-mt-36"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B84F3A]">
            <span className="h-px w-8 bg-current" />
            Reach out
          </p>
          <h2 className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.025em] text-[#482F2B] sm:text-6xl">
            For more information,
            <br className="hidden sm:block" />
            <em className="text-[#B84F3A]">get in touch.</em>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#482F2B]/70 sm:text-base">
            We&apos;d love to hear from you. Whether you&apos;re planning a ceremony or just curious, reach out and we&apos;ll respond promptly.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.08 }}
                className="border-t border-[#482F2B]/15 py-6 sm:py-8"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="font-display text-2xl italic text-[#B84F3A]">0{index + 1}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F7E9DE] text-[#B84F3A]">
                    <Icon size={21} variant="Linear" aria-hidden="true" />
                  </span>
                </div>
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#482F2B]/55">{contact.label}</p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="break-all font-display text-xl italic text-[#482F2B] underline decoration-[#B84F3A]/35 underline-offset-4 transition-colors hover:text-[#B84F3A] sm:text-2xl"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="font-display text-2xl italic text-[#482F2B]">{contact.value}</p>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: prefersReducedMotion ? 1 : 0, scale: prefersReducedMotion ? 1 : 0.99 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : 0.2 }}
          className="mt-10 flex flex-col items-start justify-between gap-6 rounded-4xl bg-[#482F2B] px-7 py-8 sm:flex-row sm:items-center sm:px-10 sm:py-9"
        >
          <p className="font-display text-3xl leading-tight text-white sm:text-4xl">
            Ready to make your wedding <em className="text-[#F3C7AF]">unforgettable?</em>
          </p>
          <a
            href="#booking"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#F3C7AF] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-[#482F2B] transition-colors hover:bg-white"
          >
            Book consultation
            <ArrowRight2 size={15} variant="Linear" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
