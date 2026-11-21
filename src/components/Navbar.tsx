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

  const isHomePage = location.pathname === '/'
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
    if (isAppLink) return isAppPage ? 'text-[#B84F3A] hover:text-[#8E3B30]' : isHomePage ? 'text-[#8C6C4B]' : 'text-[#B84F3A]'
    if (mobileMenuOpen) return 'text-[#1C1410]'
    if (isScrolled || isAppPage || isHomePage) return 'text-[#1C1410] hover:text-[#8C6C4B]'
    return 'text-[#F0DEBB]/90 hover:text-[#C9A84C]'
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-[5%] transition-all duration-500 font-sans ${isScrolled && !mobileMenuOpen
          ? isAppPage
            ? 'bg-[#F7F4EE]/95 backdrop-blur-md shadow-sm border-b border-[#482F2B]/10 py-4'
            : 'bg-[#FDFAF6]/95 backdrop-blur-md shadow-sm border-b border-[#C9A84C]/20 py-4'
          : 'bg-transparent py-8'
          }`}
      >
        <Link to="/" className="relative z-110">
          {isAppPage ? (
            <span className="flex flex-col leading-none">
              <span className="whitespace-nowrap font-display text-lg tracking-[0.08em] text-[#482F2B] sm:text-xl">FOREVER FIND</span>
              <span className="mt-1.5 font-sans text-[8px] uppercase tracking-[0.22em] text-[#482F2B]/60">Love, culture, connection</span>
            </span>
          ) : isHomePage ? (
            // <span className="block font-display text-xl tracking-[0.12em] text-[#29241F]">
            //   FOREVER FIND
            //   <span className="mt-1 block font-sans text-[9px] uppercase tracking-[0.24em] opacity-60">
            //     Love, culture, celebration
            //   </span>
            // </span>
            <img src="/main-logo.webp" alt="Logo" className="h-10 w-auto sm:h-14" />
          ) : (
            <img src="/logo.svg" alt="Logo" className="h-10 w-auto sm:h-14" />
          )}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`text-[11px] font-medium tracking-widest uppercase transition-colors duration-300 ${getTextColorClass(link.isApp)}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={isAppPage ? '#get-the-app' : '#booking'}
            className={`text-[11px] font-medium tracking-widest uppercase py-3 transition-all duration-300 ${isAppPage ? 'whitespace-nowrap rounded-full px-5' : 'rounded-sm px-8'} ${isAppPage
              ? 'bg-[#B84F3A] text-white hover:bg-[#8E3B30]'
              : isScrolled || isHomePage
                ? 'bg-[#1C1410] text-[#FDFAF6] hover:bg-[#C9A84C]'
                : 'bg-[#C9A84C] text-[#100B07] hover:bg-[#FDFAF6]'
              }`}
          >
            {isAppPage ? 'Get the App' : 'Book Now'}
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
              } ${isScrolled || isAppPage || isHomePage || mobileMenuOpen ? 'bg-[#1C1410]' : 'bg-[#F0DEBB]'}`} />
            <span className={`block h-px w-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''
              } ${isScrolled || isAppPage || isHomePage || mobileMenuOpen ? 'bg-[#1C1410]' : 'bg-[#F0DEBB]'}`} />
            <span className={`block h-px w-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              } ${isScrolled || isAppPage || isHomePage || mobileMenuOpen ? 'bg-[#1C1410]' : 'bg-[#F0DEBB]'}`} />
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
              className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm z-110 shadow-2xl flex flex-col pt-24 px-10 pb-10 md:hidden ${isAppPage ? 'bg-[#FFF8F1] border-l border-[#482F2B]/10' : 'bg-[#FDFAF6] border-l border-[#C9A84C]/20'}`}
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`absolute top-8 right-[5%] z-20 p-2 text-[#1C1410] transition-colors ${isAppPage ? 'hover:text-[#B84F3A]' : 'hover:text-[#C9A84C]'}`}
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
                      className={`font-display text-3xl font-light tracking-wide transition-colors ${link.isApp ? isAppPage ? 'text-[#B84F3A] hover:text-[#8E3B30]' : 'text-[#C9A84C] hover:text-[#8C6C4B]' : `text-[#1C1410] ${isAppPage ? 'hover:text-[#B84F3A]' : 'hover:text-[#C9A84C]'}`}`}
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
                  href={isAppPage ? '#get-the-app' : '#booking'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex w-full justify-center text-[11px] font-medium uppercase tracking-[0.2em] px-8 py-4 transition-colors duration-300 ${isAppPage ? 'rounded-full bg-[#B84F3A] text-white hover:bg-[#8E3B30]' : 'rounded-sm bg-[#1C1410] text-[#FDFAF6] hover:bg-[#C9A84C]'}`}
                >
                  {isAppPage ? 'Get the App' : 'Book Consultation'}
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
