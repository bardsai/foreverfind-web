import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: "What types of events do you host?",
    a: "We specialise in hosting a wide range of culturally rich and vibrant celebrations — Yoruba traditional weddings, intertribal unions, interracial traditional ceremonies, and elegant wedding receptions. As experienced Masters of Ceremony, we bring energy, structure, and cultural authenticity to every event, ensuring each moment flows seamlessly while keeping guests engaged and thoroughly entertained throughout.",
  },
  {
    q: "Can you host ceremonies conducted in Yoruba?",
    a: "Absolutely. We are fully fluent in Yoruba and are proud to conduct or co-host ceremonies in the language. We understand the cultural weight of traditional greetings, proverbs, and ceremonial expressions — your guests will feel right at home, and your elders will be thoroughly impressed.",
  },
  {
    q: "Can you help coordinate the wedding programme?",
    a: "Yes, and this is one of our favourite parts of the job. Our coordination service includes crafting a detailed wedding programme, liaising with vendors, and ensuring every activity runs smoothly and on schedule. No awkward silences. No frantic vendor calls. Just a beautifully flowing day.",
  },
  {
    q: "Do you travel outside the UK?",
    a: "Yes — we travel throughout the UK, Nigeria and across the globe wherever our couples need us. Whether your celebration is in Lagos, Abuja, New York, or somewhere beautifully in between, we will be there. Travel and accommodation costs may apply depending on the destination. Please reach out to discuss your specific location and we'll work out the details together.",
  },
  {
    q: "How do we get started?",
    a: "Simply reach out via our contact page or drop us a message directly. We'll schedule a relaxed consultation to learn about you, your vision, and your celebration. From there, we'll walk you through everything and make sure you feel completely at ease before the big day.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="py-24 px-[5%] bg-[#FDFAF6] font-['Jost',sans-serif]" ref={ref}>
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-[10px] mb-4">
          <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
          <p className="text-[10px] font-normal tracking-[0.22em] uppercase text-[#C9A84C]">Questions</p>
          <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
        </div>
        <h2 className="font-['Cormorant_Garamond',serif] font-light text-[2.5rem] text-[#1C1410] leading-tight tracking-[-0.01em]">
          Frequently Asked <em className="italic text-[#C9A84C]">Questions</em>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
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
              className="w-full flex items-center justify-between py-6 text-left text-base font-light text-[#1C1410] hover:text-[#C9A84C] transition-colors cursor-pointer group"
            >
              <span className="font-['Cormorant_Garamond',serif] italic">{faq.q}</span>
              <motion.span
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className={`w-8 h-8 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-lg shrink-0 ml-4 transition-all duration-300 ${open === i ? 'bg-[#C9A84C] text-[#100B07] border-[#C9A84C]' : 'text-[#C9A84C] group-hover:border-[#C9A84C]'}`}
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
                  <p className="text-[13px] font-light text-[#7A7069] leading-[1.8] pb-6 max-w-2xl">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
