import { useRef, useState, type FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Booking() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const inputClass = "bg-white border border-[#C9A84C]/20 rounded-sm text-[13px] text-[#1C1410] px-4 py-3 outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/10 transition-all font-['Jost',sans-serif] w-full placeholder:text-[#7A7069]/40"

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget // grab it before the await
    setStatus('sending')

    const formData = new FormData(form)
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY)
    formData.append('subject', 'New Wedding Host Booking Request')
    formData.append('from_name', 'Website Booking Form')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="booking" className="py-24 px-[5%] bg-[#FDFAF6] font-['Jost',sans-serif] scroll-mt-32 md:scroll-mt-36" ref={ref}>
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

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="bg-[#F7F2EC] border border-[#C9A84C]/10 rounded-sm p-8 py-12 md:p-14 relative"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

          {/* Spam trap: bots fill this in, humans never see it */}
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Full Name</label>
              <input id="name" type="text" name="name" required placeholder="e.g. John Doe" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Email Address</label>
              <input id="email" type="email" name="email" required placeholder="e.g. hello@example.com" className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Phone Number</label>
              <input id="phone" type="tel" name="phone" placeholder="e.g. +44 7423 243282" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="wedding_date" className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Wedding Date</label>
              <input id="wedding_date" type="date" name="wedding_date" required className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Event Location</label>
              <input id="location" type="text" name="location" required placeholder="e.g. London, UK" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="event_type" className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Type of Event</label>
              <select id="event_type" name="event_type" required className={inputClass}>
                <option value="">Select event type</option>
                <option>Traditional Engagement</option>
                <option>Wedding Reception</option>
                <option>Full Wedding Package</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-10">
            <label htmlFor="message" className="text-xs font-normal tracking-[0.15em] uppercase text-[#745f25]">Additional Information</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us more about your wedding vision..."
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#C9A84C] text-[#100B07] font-medium text-xs tracking-[0.16em] uppercase py-4 rounded-sm hover:bg-[#F0DEBB] transition-all duration-300 shadow-lg shadow-[#C9A84C]/10 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending...' : 'Submit Booking Request'}
          </motion.button>

          {status === 'success' && (
            <p className="mt-4 text-center text-[13px] text-[#745f25]" role="status">
              Thank you! Your request has been sent. We'll be in touch within 24 hours.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-center text-[13px] text-red-700" role="alert">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </motion.form>

      </div>
    </section>
  )
}
