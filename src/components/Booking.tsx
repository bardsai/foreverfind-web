import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Booking() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const inputClass = "bg-white border border-[#C9A84C]/20 rounded-sm text-[13px] text-[#1C1410] px-4 py-3 outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/10 transition-all font-['Jost',sans-serif] w-full placeholder:text-[#7A7069]/40"

  return (
    <section id="booking" className="py-24 px-[5%] bg-[#FDFAF6] font-['Jost',sans-serif]" ref={ref}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-16 md:gap-24 items-start">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-[10px] mb-4">
            <span className="block w-[24px] h-px bg-[#C9A84C]"></span>
            <p className="text-[10px] font-normal tracking-[0.22em] uppercase text-[#C9A84C]">Let's Connect</p>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] font-light text-[clamp(2.5rem,5vw,3.5rem)] text-[#1C1410] leading-tight mb-6 tracking-[-0.01em]">
            Book Your <br />
            <em className="italic text-[#C9A84C]">Wedding Host</em>
          </h2>
          <p className="text-[#7A7069] text-[13px] font-light leading-[1.8] max-w-sm">
            Planning your special day? Let's make it truly unforgettable with cultural depth and professional hosting. Fill in the form and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="bg-[#F7F2EC] border border-[#C9A84C]/10 rounded-sm p-8 py-12 md:p-14 relative"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Full Name</label>
              <input type="text" placeholder="e.g. John Doe" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Email Address</label>
              <input type="email" placeholder="e.g. hello@example.com" className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Phone Number</label>
              <input type="tel" placeholder="e.g. +44 7423 243282" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Wedding Date</label>
              <input type="date" className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Event Location</label>
              <input type="text" placeholder="e.g. London, UK" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Type of Event</label>
              <select className={inputClass}>
                <option value="">Select event type</option>
                <option>Traditional Engagement</option>
                <option>Wedding Reception</option>
                <option>Full Wedding Package</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-10">
            <label className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Additional Information</label>
            <textarea placeholder="Tell us more about your wedding vision..." rows={4}
              className={`${inputClass} resize-none`} />
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#C9A84C] text-[#100B07] font-medium text-xs tracking-[0.16em] uppercase py-4 rounded-sm hover:bg-[#F0DEBB] transition-all duration-300 shadow-lg shadow-[#C9A84C]/10"
          >
            Submit Booking Request
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}
