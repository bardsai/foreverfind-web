import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, Link } from 'react-router-dom'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Matchmaking', href: '/app', isApp: true },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isAppPage = location.pathname === '/app'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileMenuOpen])

  // Helper to determine text color class
  const getTextColorClass = (isAppLink = false) => {
    if (isAppLink) return 'text-[#C9A84C]'
    if (mobileMenuOpen) return 'text-[#1C1410]'
    if (isScrolled || isAppPage) return 'text-[#1C1410] hover:text-[#C9A84C]'
    return 'text-[#F0DEBB]/90 hover:text-[#C9A84C]'
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-[5%] transition-all duration-500 font-['Jost',sans-serif] ${isScrolled && !mobileMenuOpen
          ? 'bg-[#FDFAF6]/95 backdrop-blur-md shadow-sm border-b border-[#C9A84C]/20 py-4'
          : 'bg-transparent py-8'
          }`}
      >
        <Link to="/" className="relative z-110">
          <img
            src={isAppPage ? "/logo.svg" : "/main-logo.webp"}
            alt="Logo"
            className={`h-10 sm:h-14 w-auto transition-all duration-500 ${!isScrolled && !isAppPage && !mobileMenuOpen ? '' : ''
              }`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 ${getTextColorClass(link.isApp)}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            className={`text-[11px] font-medium tracking-[0.22em] uppercase px-8 py-3 transition-all duration-300 rounded-sm ${isScrolled || isAppPage
              ? 'bg-[#1C1410] text-[#FDFAF6] hover:bg-[#C9A84C]'
              : 'bg-[#C9A84C] text-[#100B07] hover:bg-[#FDFAF6]'
              }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-110 p-2"
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px w-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              } ${isScrolled || isAppPage || mobileMenuOpen ? 'bg-[#1C1410]' : 'bg-[#F0DEBB]'}`} />
            <span className={`block h-px w-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''
              } ${isScrolled || isAppPage || mobileMenuOpen ? 'bg-[#1C1410]' : 'bg-[#F0DEBB]'}`} />
            <span className={`block h-px w-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              } ${isScrolled || isAppPage || mobileMenuOpen ? 'bg-[#1C1410]' : 'bg-[#F0DEBB]'}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Side-Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-90 bg-[#1C1410]/40 backdrop-blur-sm md:hidden"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm z-110 bg-[#FDFAF6] shadow-2xl flex flex-col pt-24 px-10 pb-10 md:hidden border-l border-[#C9A84C]/20"
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-8 right-[5%] z-20 p-2 text-[#1C1410] hover:text-[#C9A84C] transition-colors"
                aria-label="Close Menu"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #C9A84C 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

              <div className="relative z-10 flex flex-col items-start gap-8 flex-1 mt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 + 0.15, duration: 0.4 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-['Cormorant_Garamond',serif] text-3xl font-light tracking-wide hover:text-[#C9A84C] transition-colors ${link.isApp ? 'text-[#C9A84C]' : 'text-[#1C1410]'}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 + 0.2, duration: 0.4 }}
                className="relative z-10 mt-auto pt-8 border-t border-[#C9A84C]/20"
              >
                <a
                  href="#booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex justify-center w-full bg-[#1C1410] text-[#FDFAF6] text-[11px] font-medium tracking-[0.2em] uppercase px-8 py-4 rounded-sm hover:bg-[#C9A84C] transition-colors duration-300"
                >
                  Book Consultation
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
