import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ConnectionBridge() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 px-[5%] bg-[#FDFAF6] font-['Jost',sans-serif] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#F7F2EC] border border-[#C9A84C]/10 rounded-sm overflow-hidden relative">

          {/* Subtle decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C9A84C]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="grid md:grid-cols-2 items-stretch min-h-[500px]">

            {/* Left side: Narrative */}
            <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-[10px] mb-6">
                  <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
                  <p className="text-[10px] font-normal tracking-[0.22em] uppercase text-[#C9A84C]">The Forever Ecosystem</p>
                </div>

                <h2 className="font-light text-[clamp(2.5rem,5vw,3rem)] text-[#1C1410] leading-tight mb-8 tracking-[-0.01em]">
                  Beyond the <em className="italic font-medium text-[#C9A84C]">Alaga</em>: <br />
                  Finding Your <em className="italic font-medium text-[#C9A84C]">Forever</em>
                </h2>

                <p className="text-[#7A7069] text-[15px] font-light leading-[1.8] mb-10 max-w-lg">
                  We don't just celebrate weddings; we help ignite them. Our legacy began with <strong>Forever Find Matchmaking</strong>, a premium service dedicated to helping individuals find their life partners.
                  <br /><br />
                  Whether you are searching for your partner or ready to celebrate your union, we are with you every step of the way—from the first connection to the final dance.
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  <Link
                    to="/app"
                    className="inline-flex items-center justify-center gap-[8px] bg-[#C9A84C] text-[#100B07] font-medium text-[11px] tracking-[0.16em] uppercase no-underline px-[32px] py-[14px] transition-all duration-200 hover:bg-[#F0DEBB] hover:-translate-y-[2px]"
                  >
                    Explore Matchmaking App
                  </Link>
                  <a
                    href="#booking"
                    className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#1C1410] hover:text-[#C9A84C] transition-colors"
                  >
                    Host Your Wedding
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right side: Visual Representation */}
            <div className="relative min-h-[400px] md:min-h-full overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10" style={{ backgroundImage: "radial-gradient(circle at center, #C9A84C 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src="/forever_journey_bridge.png"
                  alt="Heritage meets Matchmaking"
                  className="w-full h-full object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-2000"
                />

                {/* Gradient Overlay for better text integration and depth */}
                <div className="absolute inset-0 bg-linear-to-r from-[#1C1410]/60 via-transparent to-transparent md:hidden" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#1C1410]/40" />
              </motion.div>

              {/* Floating Premium Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-8 right-8 z-20"
              >
                <div className="bg-[#FDFAF6]/10 backdrop-blur-md border border-white/20 p-4 rounded-sm">
                  <p className="text-white text-[10px] tracking-[0.2em] uppercase font-light">Established Excellence</p>
                  <div className="w-8 h-px bg-[#C9A84C] mt-2" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
