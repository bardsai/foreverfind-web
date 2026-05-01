import { motion } from 'framer-motion'
import heroImg from '../assets/hero.webp'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' }
} as const)

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden font-['Jost',sans-serif] px-5 sm:px-6 pt-24 sm:pt-28 pb-18 sm:pb-20">
      {/* Real background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-position-[center_top] brightness-[0.6] saturate-[0.6]"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Warm dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(16, 8, 3, 0.55) 0%, rgba(28, 12, 4, 0.3) 40%, rgba(16, 8, 3, 0.75) 100%)"
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 90% 80% at 50% 40%, transparent 40%, rgba(10,5,2,0.65) 100%)"
        }}
      />

      {/* Gold horizontal rule top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(to right, transparent, #C9A84C 30%, #F0DEBB 50%, #C9A84C 70%, transparent)"
        }}
      />

      {/* Adire corner top-left */}
      <svg className="absolute top-0 left-0 opacity-[0.1] pointer-events-none" width="200" height="200" viewBox="0 0 200 200" fill="none">
        <line x1="0" y1="0" x2="200" y2="200" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="40" y1="0" x2="200" y2="160" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="80" y1="0" x2="200" y2="120" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="120" y1="0" x2="200" y2="80" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="160" y1="0" x2="200" y2="40" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="0" y1="40" x2="160" y2="200" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="0" y1="80" x2="120" y2="200" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="0" y1="120" x2="80" y2="200" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="0" y1="160" x2="40" y2="200" stroke="#C9A84C" strokeWidth="0.6" />
        <rect x="0" y="0" width="200" height="200" stroke="#C9A84C" strokeWidth="0.5" />
      </svg>

      {/* Adire corner bottom-right */}
      <svg className="absolute bottom-0 right-0 rotate-180 opacity-[0.08] pointer-events-none" width="200" height="200" viewBox="0 0 200 200" fill="none">
        <line x1="0" y1="0" x2="200" y2="200" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="40" y1="0" x2="200" y2="160" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="80" y1="0" x2="200" y2="120" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="120" y1="0" x2="200" y2="80" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="160" y1="0" x2="200" y2="40" stroke="#C9A84C" strokeWidth="0.6" />
        <rect x="0" y="0" width="200" height="200" stroke="#C9A84C" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 w-full max-w-[720px] flex flex-col items-center gap-[1.6rem]">
        <motion.span
          {...fadeUp(0.15)}
          className="inline-flex items-center gap-[10px] text-[10px] font-normal tracking-[0.22em] uppercase text-[#C9A84C]"
        >
          <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
          Professional Yoruba Wedding Host
          <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
        </motion.span>

        <motion.h1
          {...fadeUp(0.3)}
          className="font-light text-4xl md:text-7xl leading-[1.07] text-[#F5ECD6] tracking-[-0.01em]"
        >
          Creating <em className="italic text-[#C9A84C]">Memories</em><br />
          Beyond <em className="italic text-[#C9A84C]">Events</em>
        </motion.h1>

        <motion.div
          {...fadeUp(0.48)}
          className="flex items-center gap-[12px] w-full max-w-[340px]"
        >
          <div className="flex-1 h-px bg-[#C9A84C]/30"></div>
          <div className="w-[5px] h-[5px] bg-[#C9A84C] rotate-45 opacity-70"></div>
          <div className="flex-1 h-px bg-[#C9A84C]/30"></div>
        </motion.div>

        <motion.p
          {...fadeUp(0.55)}
          className="text-[13px] font-light tracking-[0.04em] leading-[1.85] text-[#F0DEBB] max-w-[400px]"
        >
          From the ìdúnàádúrà to the last dance — a masterful host who honours every tradition, every family, every name.
        </motion.p>

        <motion.div
          {...fadeUp(0.62)}
          className="flex items-center gap-0"
        >
          <div className="text-center px-[1.2rem] sm:px-[1.8rem]">
            <div className="font-['Cormorant_Garamond',serif] text-[1.5rem] sm:text-[1.9rem] font-light text-[#C9A84C] leading-none">250+</div>
            <div className="text-[8.5px] font-normal tracking-[0.2em] uppercase text-[#F0DEBB]/35 mt-[5px]">Weddings</div>
          </div>
          <div className="text-center px-[1.2rem] sm:px-[1.8rem] border-l border-[#C9A84C]/20">
            <div className="font-['Cormorant_Garamond',serif] text-[1.5rem] sm:text-[1.9rem] font-light text-[#C9A84C] leading-none">8</div>
            <div className="text-[8.5px] font-normal tracking-[0.2em] uppercase text-[#F0DEBB]/35 mt-[5px]">Years</div>
          </div>
          <div className="text-center px-[1.2rem] sm:px-[1.8rem] border-l border-[#C9A84C]/20">
            <div className="font-['Cormorant_Garamond',serif] text-[1.5rem] sm:text-[1.9rem] font-light text-[#C9A84C] leading-none">5★</div>
            <div className="text-[8.5px] font-normal tracking-[0.2em] uppercase text-[#F0DEBB]/35 mt-[5px]">Rating</div>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp(0.72)}
          className="flex items-center flex-wrap justify-center gap-4"
        >
          <a href="#booking" className="inline-flex items-center gap-[8px] bg-[#C9A84C] text-[#100B07] font-medium text-[11px] tracking-[0.16em] uppercase no-underline px-[28px] py-[14px] transition-all duration-200 hover:bg-[#F0DEBB] hover:-translate-y-[2px]">
            Book Consultation
          </a>
          <a href="#gallery" className="inline-flex items-center gap-[6px] font-light text-[11px] tracking-[0.14em] uppercase text-[#F0DEBB]/60 no-underline border border-[#C9A84C]/30 px-[24px] py-[13px] transition-all duration-200 hover:border-[#C9A84C] hover:text-[#F0DEBB] hover:-translate-y-[2px]">
            View Gallery
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-[8px]"
      >
        <span className="text-[8.5px] tracking-[0.25em] uppercase text-[#C9A84C]/35">Scroll</span>
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
            scaleY: [1, 1.15, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-[36px] origin-top"
          style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)" }}
        ></motion.div>
      </motion.div>
    </section>
  )
}
