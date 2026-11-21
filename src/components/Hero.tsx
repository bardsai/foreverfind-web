import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight2, Pause, Play } from 'iconsax-reactjs'

const photos = [
  { src: '/wedding-01.webp', alt: 'A couple celebrating with their family' },
  { src: '/wedding-02.webp', alt: 'Guests sharing a joyful wedding moment' },
  { src: '/wedding-03.webp', alt: 'A vibrant traditional wedding celebration' },
  { src: '/wedding-04.webp', alt: 'A couple enjoying their wedding day' },
  { src: '/wedding-05.webp', alt: 'Family and friends celebrating together' },
  { src: '/wedding-06.webp', alt: 'A colourful moment from a wedding celebration' },
]

const mosaicTiles = [
  { id: 'large-top', classes: 'col-span-4 row-span-3 rounded-tl-[5rem] rounded-br-2xl', imageOffset: 0, delay: 0 },
  { id: 'small-top', classes: 'col-span-2 row-span-2 rounded-tr-[3rem] rounded-bl-2xl', imageOffset: 1, delay: 0.1 },
  { id: 'small-middle', classes: 'col-span-2 row-span-1 rounded-xl', imageOffset: 2, delay: 0.2 },
  { id: 'small-bottom', classes: 'col-span-2 row-span-3 rounded-bl-[3rem] rounded-tr-2xl', imageOffset: 3, delay: 0.3 },
  { id: 'large-bottom', classes: 'col-span-4 row-span-3 rounded-br-[5rem] rounded-tl-2xl', imageOffset: 4, delay: 0.4 },
]

export default function Hero() {
  const [activePhoto, setActivePhoto] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) return

    const timer = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % photos.length)
    }, 5600)

    return () => window.clearInterval(timer)
  }, [isPlaying, prefersReducedMotion])

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#F7F4EE] px-5 pb-16 pt-32 text-[#29241F] sm:px-8 sm:pb-20 sm:pt-36 lg:flex lg:min-h-svh lg:items-center lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full border border-[#8C6C4B]/10" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-40 h-64 w-64 rounded-full border border-[#8C6C4B]/10" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div className="relative z-10 py-4 lg:py-12">
          <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#8C6C4B]">
            <span className="h-px w-8 bg-current" />
            Yoruba wedding host &amp; celebration specialist
          </p>

          <h1 className="max-w-2xl font-display text-6xl font-light leading-[0.96] tracking-[-0.035em] sm:text-7xl lg:text-[5.5rem]">
            A beautiful day,
            <br />
            <em className="text-[#8C6C4B]">beautifully</em>
            <br />
            remembered.
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-7 text-[#29241F]/70 sm:text-base">
            From the ìdúnàádúrà to the last dance, we bring families together with care, culture, and a little magic.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="rounded-full bg-[#29241F] px-6 py-4 text-[11px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#8C6C4B]"
            >
              <span className="inline-flex items-center gap-2">
                Plan your celebration
                <ArrowRight2 size={14} variant="Linear" aria-hidden="true" />
              </span>
            </a>
            <a href="#services" className="px-3 py-3 text-xs underline decoration-[#8C6C4B]/50 underline-offset-4">
              Explore what we do
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-155">
          <div
            className="grid aspect-square grid-cols-6 grid-rows-6 gap-2 lg:aspect-[1/1.04]"
            aria-label="Rotating photos from Forever Find celebrations"
          >
            {mosaicTiles.map((tile) => {
              const photo = photos[(activePhoto + tile.imageOffset) % photos.length]

              return (
                <div key={tile.id} className={`group relative isolate overflow-hidden bg-[#EAE4D9] ${tile.classes}`}>
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={photo.src}
                      src={photo.src}
                      alt={photo.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
                      animate={{ opacity: 1, scale: prefersReducedMotion ? 1 : 1.1 }}
                      exit={{ opacity: 0, scale: 1 }}
                      transition={{
                        opacity: { duration: prefersReducedMotion ? 0 : 0.8, delay: tile.delay },
                        scale: { duration: 5.2, ease: 'linear', delay: tile.delay },
                      }}
                    />
                  </AnimatePresence>
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#29241F]/20 to-transparent opacity-70" />
                </div>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying((playing) => !playing)}
            disabled={prefersReducedMotion === true}
            aria-label={prefersReducedMotion ? 'Automatic photo animation disabled by reduced motion preference' : isPlaying ? 'Pause photo animation' : 'Play photo animation'}
            className="absolute right-3 top-3 z-10 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.12em] text-[#29241F] shadow-sm backdrop-blur transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-70 sm:right-5 sm:top-5"
          >
            <span className="inline-flex items-center gap-2">
              {prefersReducedMotion ? null : isPlaying ? (
                <Pause size={14} variant="Linear" aria-hidden="true" />
              ) : (
                <Play size={14} variant="Linear" aria-hidden="true" />
              )}
              {prefersReducedMotion ? 'Motion reduced' : isPlaying ? 'Pause photos' : 'Play photos'}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
