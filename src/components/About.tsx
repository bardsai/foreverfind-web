import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import host from '../assets/host.jpg'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-24 px-[5%] bg-[#FDFAF6] overflow-hidden font-['Jost',sans-serif]" ref={ref}>
      {/* Background Motifs */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #C9A84C 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#C9A84C]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-md md:max-w-none"
        >
          <img
            src={host}
            alt="Wedding Host"
            className="relative z-10 w-full h-112 md:h-144 object-cover rounded-sm shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#C9A84C]/30 rounded-sm z-0" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-[10px] mb-6">
            <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
            <p className="text-[10px] font-normal tracking-[0.22em] uppercase text-[#C9A84C]">About Us</p>
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] font-light text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] text-[#1C1410] mb-6 tracking-[-0.01em]">
            Sophisticated Alaga <br /> and <em className="italic text-[#C9A84C]">Events</em>
          </h2>

          <p className="text-[13px] font-light tracking-[0.04em] leading-[1.85] text-[#7A7069] mb-5">
            Sophisticated Alaga and Events is an innovative event service business that specializes in creating unforgettable celebrations and meaningful connections.
          </p>
          <p className="text-[13px] font-light tracking-[0.04em] leading-[1.85] text-[#7A7069] mb-10">
            We offer a unique blend of services, including traditional wedding compering, singles matchmaking, birthday chanting, and surprise birthday celebration planning.
          </p>

          <div className="w-full border border-[#C9A84C]/20 rounded-sm p-8 mb-10 relative bg-[#F7F2EC]">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
            <h3 className="font-['Cormorant_Garamond',serif] font-light text-[1.6rem] text-[#1C1410] mb-3 italic">Our Mission</h3>
            <p className="text-[13px] font-light tracking-[0.04em] leading-[1.85] text-[#7A7069]">
              To celebrate life's milestones with creativity, culture, and connection.
            </p>
          </div>

          <a href="#booking"
            className="inline-flex items-center justify-center gap-[8px] bg-[#C9A84C] text-[#100B07] font-medium text-[11px] tracking-[0.16em] uppercase no-underline px-[32px] py-[14px] transition-all duration-200 hover:bg-[#F0DEBB] hover:-translate-y-[2px]"
          >
            Book Consultation
          </a>
        </motion.div>

      </div>
    </section>
  )
}
