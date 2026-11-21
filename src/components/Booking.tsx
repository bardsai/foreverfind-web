import { useRef, useState, type FormEvent } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight2 } from 'iconsax-reactjs'

export default function Booking() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const inputClass = 'w-full rounded-xl border border-[#482F2B]/15 bg-[#FFFCF8] px-4 py-3.5 font-sans text-sm text-[#482F2B] outline-none transition placeholder:text-[#482F2B]/35 focus:border-[#B84F3A] focus:ring-2 focus:ring-[#B84F3A]/10'
  const labelClass = 'text-[10px] font-medium uppercase tracking-[0.16em] text-[#482F2B]/75'

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
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
    <section
      id="booking"
      className="scroll-mt-32 bg-[#F7F4EE] px-5 py-20 font-sans sm:px-8 sm:py-28 md:scroll-mt-36"
      ref={ref}
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <motion.div
          initial={{ opacity: prefersReducedMotion ? 1 : 0, x: prefersReducedMotion ? 0 : -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-32"
        >
          <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B84F3A]">
            <span className="h-px w-8 bg-current" />
            Let&apos;s connect
          </p>
          <h2 className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.025em] text-[#29241F] sm:text-6xl">
            Book your
            <br />
            <em className="text-[#B84F3A]">wedding host.</em>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#29241F]/70 sm:text-base">
            Planning your special day? Let&apos;s make it truly unforgettable with cultural depth and professional hosting. Fill in the form and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="mt-8 border-l-2 border-[#B84F3A] pl-5">
            <p className="font-display text-xl italic text-[#482F2B]">A thoughtful first step toward a celebration that feels like you.</p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.12 }}
          className="relative rounded-4xl border border-[#482F2B]/10 bg-white p-6 shadow-[0_20px_70px_rgba(72,47,43,0.07)] sm:p-8 lg:p-10"
        >
          <p className="mb-7 text-[10px] font-medium uppercase tracking-[0.2em] text-[#B84F3A]">
            Tell us about your day
          </p>

          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2.5">
              <label htmlFor="name" className={labelClass}>Full Name</label>
              <input id="name" type="text" name="name" required placeholder="e.g. John Doe" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="email" className={labelClass}>Email Address</label>
              <input id="email" type="email" name="email" required placeholder="e.g. hello@example.com" className={inputClass} />
            </div>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2.5">
              <label htmlFor="phone" className={labelClass}>Phone Number</label>
              <input id="phone" type="tel" name="phone" placeholder="e.g. +44 7423 243282" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="wedding_date" className={labelClass}>Wedding Date</label>
              <input id="wedding_date" type="date" name="wedding_date" required className={inputClass} />
            </div>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2.5">
              <label htmlFor="location" className={labelClass}>Event Location</label>
              <input id="location" type="text" name="location" required placeholder="e.g. London, UK" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="event_type" className={labelClass}>Type of Event</label>
              <select id="event_type" name="event_type" required className={inputClass}>
                <option value="">Select event type</option>
                <option>Traditional Engagement</option>
                <option>Wedding Reception</option>
                <option>Full Wedding Package</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="mb-8 flex flex-col gap-2.5">
            <label htmlFor="message" className={labelClass}>Additional Information</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us more about your wedding vision..."
              rows={4}
              className={`${inputClass} resize-y`}
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={prefersReducedMotion ? undefined : { y: -2 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#B84F3A] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#8E3B30] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === 'sending' ? 'Sending...' : 'Submit booking request'}
            {status !== 'sending' && <ArrowRight2 size={16} variant="Linear" aria-hidden="true" />}
          </motion.button>

          {status === 'success' && (
            <p className="mt-5 text-sm leading-6 text-emerald-800" role="status">
              Thank you! Your request has been sent. We&apos;ll be in touch within 24 hours.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-5 text-sm leading-6 text-red-700" role="alert">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
