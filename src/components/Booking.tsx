import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Booking() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const inputClass = "bg-white border border-[#C9A84C]/30 rounded text-sm text-[#1C1410] px-3.5 py-2.5 outline-none focus:border-[#9B6FB5] focus:ring-2 focus:ring-[#5C2E6E]/10 transition-all font-['DM_Sans'] w-full"

  return (
    <section id="booking" className="py-24 px-[5%] bg-[#FDFAF6]" ref={ref}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-20 items-start">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.16em] uppercase text-[#8B6A1F] mb-3">Let's Connect</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-[#1C1410] leading-tight mb-5">
            Book Your <em className="text-[#5C2E6E]">Wedding Host</em>
          </h2>
          <p className="text-[#7A7069] text-sm leading-relaxed">
            Planning your wedding? Let's make your special day unforgettable. Fill in the form and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="bg-[#F7F2EC] border border-[#C9A84C]/20 rounded p-6 py-10 md:p-10"
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wider text-[#1C1410]">Full Name</label>
              <input type="text" placeholder="Enter your full name" className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wider text-[#1C1410]">Email</label>
              <input type="email" placeholder="Enter your email address" className={inputClass} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wider text-[#1C1410]">Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wider text-[#1C1410]">Wedding Date</label>
              <input type="date" className={inputClass} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wider text-[#1C1410]">Event Location</label>
              <input type="text" placeholder="City, Country" className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wider text-[#1C1410]">Type of Event</label>
              <select className={inputClass}>
                <option value="">Select event type</option>
                <option>Traditional Engagement</option>
                <option>Wedding Reception</option>
                <option>Full Wedding Package</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mb-5">
            <label className="text-xs font-medium tracking-wider text-[#1C1410]">Additional Information</label>
            <textarea placeholder="Tell us more about your wedding vision..." rows={4}
              className={`${inputClass} resize-none`} />
          </div>
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#7C309C] text-white text-sm font-medium py-3.5 rounded tracking-wider hover:bg-[#8B6A1F] transition-colors duration-200 cursor-pointer"
          >
            Book Consultation
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}
