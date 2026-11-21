import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const images = [
  { src: '/wedding-1.webp', alt: 'Wedding celebration 1' },
  { src: '/wedding-02.webp', alt: 'Wedding celebration 2' },
  { src: '/wedding-03.webp', alt: 'Wedding celebration 3' },
  { src: '/wedding-04.webp', alt: 'Wedding celebration 4' },
  { src: '/wedding-05.webp', alt: 'Wedding celebration 5' },
  { src: '/wedding-2.webp', alt: 'Wedding celebration 6' },
]

export default function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="gallery"
      className="scroll-mt-32 bg-[#F7E9DE] px-5 py-20 font-sans text-[#482F2B] sm:px-8 sm:py-28 md:scroll-mt-36"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B84F3A]">
              <span className="h-px w-8 bg-current" />
              Our portfolio
            </p>
            <h2 className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.025em] sm:text-6xl">
              Love looks like <em className="text-[#B84F3A]">this.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#482F2B]/70 md:pb-1">
            A few glimpses of the joy, colour, and connection we’re lucky to be part of.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group relative aspect-4/5 overflow-hidden rounded-4xl bg-[#F4C9A8] ${index % 3 === 1 ? 'lg:mt-12' : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#482F2B]/25 via-transparent to-transparent opacity-70" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
