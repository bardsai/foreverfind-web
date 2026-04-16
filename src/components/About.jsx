import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import host from '../assets/host.jpg'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-[5%] bg-[#FDFAF6]" ref={ref}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={host}
            alt="Wedding Host"
            className="w-full h-[480px] object-cover rounded-md"
          />
          <div className="absolute -bottom-4 -right-4 w-36 h-36 border-2 border-[#C9A84C] rounded-sm -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-xs tracking-[0.16em] uppercase text-[#8B6A1F] mb-3">Meet Your Host</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-tight text-[#1C1410] mb-5">
            Your Wedding Host
          </h2>
          <p className="text-[#7A7069] leading-relaxed text-sm mb-4">
            With years of experience hosting Yoruba traditional weddings, I guide families through engagement ceremonies, traditional rites and reception programs.
          </p>
          <p className="text-[#7A7069] leading-relaxed text-sm">
            My goal is to ensure every wedding is joyful, organised and culturally rich. Honouring the depth of Yoruba customs while creating unforgettable celebrations for you and your loved ones.
          </p>
          <a href="#booking"
            className="inline-block mt-8 bg-[#C9A84C] text-[#1C1410] font-medium px-7 py-3 rounded text-sm tracking-wide hover:bg-[#F0DEBB] hover:-translate-y-0.5 transition-all duration-200"
          >
            Read More
          </a>
        </motion.div>

      </div>
    </section>
  )
}