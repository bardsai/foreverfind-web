import { useState, useRef } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { Add, Minus } from 'iconsax-reactjs'

interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: 'What types of events do you host?',
    a: 'We specialise in hosting a wide range of culturally rich and vibrant celebrations — Yoruba traditional weddings, intertribal unions, interracial traditional ceremonies, and elegant wedding receptions. As experienced Masters of Ceremony, we bring energy, structure, and cultural authenticity to every event, ensuring each moment flows seamlessly while keeping guests engaged and thoroughly entertained throughout.',
  },
  {
    q: 'Can you host ceremonies conducted in Yoruba?',
    a: 'Absolutely. We are fully fluent in Yoruba and are proud to conduct or co-host ceremonies in the language. We understand the cultural weight of traditional greetings, proverbs, and ceremonial expressions — your guests will feel right at home, and your elders will be thoroughly impressed.',
  },
  {
    q: 'Can you help coordinate the wedding programme?',
    a: 'Yes, and this is one of our favourite parts of the job. Our coordination service includes crafting a detailed wedding programme, liaising with vendors, and ensuring every activity runs smoothly and on schedule. No awkward silences. No frantic vendor calls. Just a beautifully flowing day.',
  },
  {
    q: 'Do you travel outside the UK?',
    a: "Yes — we travel throughout the UK, Nigeria and across the globe wherever our couples need us. Whether your celebration is in Lagos, Abuja, New York, or somewhere beautifully in between, we will be there. Travel and accommodation costs may apply depending on the destination. Please reach out to discuss your specific location and we'll work out the details together.",
  },
  {
    q: 'How do we get started?',
    a: "Simply reach out via our contact page or drop us a message directly. We'll schedule a relaxed consultation to learn about you, your vision, and your celebration. From there, we'll walk you through everything and make sure you feel completely at ease before the big day.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-[#F7F4EE] px-5 py-20 font-sans sm:px-8 sm:py-28"
      ref={ref}
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <motion.div
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B84F3A]">
            <span className="h-px w-8 bg-current" />
            A little more clarity
          </p>
          <h2 id="faq-title" className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.025em] text-[#29241F] sm:text-6xl">
            A few things
            <br />
            <em className="text-[#B84F3A]">you may wonder.</em>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#29241F]/70 sm:text-base">
            Planning a celebration comes with plenty of details. Here are answers to some of the questions couples ask us most.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex text-[10px] font-medium uppercase tracking-[0.16em] text-[#482F2B] underline decoration-[#B84F3A]/50 underline-offset-4 transition-colors hover:text-[#B84F3A]"
          >
            Still have a question? Get in touch
          </a>
        </motion.div>

        <div className="border-t border-[#482F2B]/15">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            const questionId = `faq-question-${index}`
            const answerId = `faq-answer-${index}`
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : index * 0.06 }}
                className="border-b border-[#482F2B]/15"
              >
                <button
                  id={questionId}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="group flex w-full items-center justify-between gap-5 py-5 text-left text-[#482F2B] transition-colors hover:text-[#B84F3A] sm:py-6"
                >
                  <span className="font-display text-xl italic sm:text-2xl">{faq.q}</span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-[#B84F3A] text-white' : 'border border-[#482F2B]/20 text-[#B84F3A] group-hover:border-[#B84F3A]'}`}>
                    {isOpen
                      ? <Minus size={16} variant="Linear" aria-hidden="true" />
                      : <Add size={16} variant="Linear" aria-hidden="true" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-[#482F2B]/70">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
