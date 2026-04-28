import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: 'Do you host only Yoruba weddings?',
    a: 'We specialise in hosting a wide range of culturally rich and vibrant celebrations, including Yoruba traditional weddings, intertribal unions, interracial traditional ceremonies, as well as elegant wedding receptions. As experienced Masters of Ceremony, we bring energy, structure, and cultural authenticity to every event, ensuring each moment flows seamlessly while keeping guests engaged and entertained throughout.',
  },
  {
    q: 'Can you help coordinate the wedding program?',
    a: 'Absolutely. Our event coordination service includes creating a detailed wedding program, liaising with vendors, and ensuring all activities run smoothly and on schedule throughout the day.',
  },
  {
    q: 'Do you travel outside Lagos?',
    a: 'Yes, we travel throughout Nigeria and also provide services in the United Kingdom. Travel costs may apply for destinations outside of Lagos. Please contact us to discuss your specific location.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="py-20 px-[5%] bg-[#FDFAF6]" ref={ref}>
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.16em] uppercase text-[#8B6A1F] mb-3">Questions</p>
        <h2 className="font-display text-[2rem] font-medium text-[#1C1410] leading-tight">
          Frequently Asked <em className="text-[#5C2E6E]">Questions</em>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <motion.div
            key={faq.q}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="border-b border-[#C9A84C]/20"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left text-sm font-medium text-[#1C1410] hover:text-[#5C2E6E] transition-colors cursor-pointer"
            >
              {faq.q}
              <motion.span
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className={`w-6 h-6 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-base flex-shrink-0 ml-4 ${open === i ? 'bg-[#5C2E6E] text-white border-[#5C2E6E]' : 'text-[#5C2E6E]'}`}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-[#7A7069] leading-relaxed pb-5">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
