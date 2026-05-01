import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const images = [
  '/wedding-1.jpg',
  '/wedding-02.jpg',
  '/wedding-03.jpg',
  '/wedding-04.jpg',
  '/wedding-05.jpg',
  '/wedding-2.jpg',
]

export default function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gallery" className="py-24 px-[5%] bg-[#FDFAF6] font-['Jost',sans-serif]" ref={ref}>
      <div className="text-center max-w-xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-[10px] mb-4">
          <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
          <p className="text-[10px] font-normal tracking-[0.22em] uppercase text-[#C9A84C]">Our Portfolio</p>
          <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
        </div>
        <h2 className="font-['Cormorant_Garamond',serif] font-light text-[clamp(2.5rem,5vw,3.5rem)] text-[#1C1410] leading-tight tracking-[-0.01em]">
          Previous Weddings <em className="italic text-[#C9A84C]">We've Hosted</em>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="overflow-hidden rounded-sm relative group aspect-4/5 bg-[#F7F2EC]"
          >
            <motion.img
              src={src}
              alt={`Wedding ${i + 1}`}
              className="w-full h-full object-cover brightness-[0.95] saturate-[0.85] group-hover:brightness-100 group-hover:saturate-100 transition-all duration-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 border border-[#C9A84C]/20 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute inset-0 bg-linear-to-t from-[#100B07]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/gallery"
          className="inline-flex items-center justify-center gap-[8px] bg-[#C9A84C] text-[#100B07] font-medium text-[11px] tracking-[0.16em] uppercase no-underline px-[32px] py-[14px] transition-all duration-200 hover:bg-[#F0DEBB] hover:-translate-y-[2px]"
        >
          View Full Gallery
        </a>
      </div>
    </section>
  )
}
