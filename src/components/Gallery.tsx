import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const images = [
  '/wedding-01.jpg',
  '/wedding-02.jpg',
  '/wedding-03.jpg',
  '/wedding-04.jpg',
  '/wedding-05.jpg',
  '/wedding-06.jpg',
]

export default function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gallery" className="py-24 px-[5%] bg-[#FDFAF6]" ref={ref}>
      <div className="text-center max-w-xl mx-auto mb-12">
        <p className="text-xs tracking-[0.16em] uppercase text-[#8B6A1F] mb-3">Our Portfolio</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-[#1C1410] leading-tight">
          Previous Weddings <em className="text-[#5C2E6E]">We've Hosted</em>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="overflow-hidden rounded-sm relative group"
          >
            <motion.img
              src={src}
              alt={`Wedding ${i + 1}`}
              className="w-full h-56 object-cover"
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1C1410]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        {/* TODO: Update href to your full gallery page route once it exists e.g. href="/gallery" */}
        <a
          href="/gallery"
          className="inline-block bg-[#C9A84C] text-[#1C1410] font-medium px-8 py-3 rounded text-sm tracking-wide hover:bg-[#F0DEBB] hover:-translate-y-0.5 transition-all duration-200"
        >
          View Full Gallery
        </a>
      </div>
    </section>
  )
}