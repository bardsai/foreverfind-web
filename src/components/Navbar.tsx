import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'App', href: '/app' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  // const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [menuOpen])

  // const isHomePage = location.pathname === '/'

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-60 flex items-center justify-between px-[5%] py-4 transition-all duration-300 ${
          scrolled && !menuOpen ? 'bg-[#FDFAF6]/95 backdrop-blur-md shadow-sm border-b border-[#C9A84C]/20' : 'bg-transparent'
        }`}
      >
      <Link to="/" className="font-display font-semibold text-[#5C2E6E] relative z-70">
        <img src="/logo.svg" alt="Logo" className="w-24 h-auto" />
      </Link>

      <div className="flex items-center gap-x-8">
        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link.label}>
              {link.href.startsWith('/') ? (
                <Link
                  to={link.href}
                  className={`text-sm tracking-wider hover:text-[#7C309C] transition-colors duration-200 ${scrolled ? 'text-[#1C1410]' : 'text-[#FDFAF6]'}`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={`text-sm tracking-wider hover:text-[#7C309C] transition-colors duration-200 ${scrolled ? 'text-[#1C1410]' : 'text-[#FDFAF6]'}`}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="hidden md:inline-block bg-[#5C2E6E] text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-[#8B6A1F] transition-colors duration-200"
        >
          Book Consultation
        </a>
      </div>

      <button 
        className={`md:hidden relative z-70 p-2 -mr-2 transition-colors duration-300 ${menuOpen || scrolled ? 'text-[#1C1410]' : 'text-[#FDFAF6]'}`} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          {menuOpen
            ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
          }
        </svg>
      </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-55 bg-[#FDFAF6] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 mt-10">
              {links.map((link, i) => (
                link.href.startsWith('/') ? (
                  <motion.div key={link.label}>
                    <Link 
                      to={link.href} 
                      onClick={() => setMenuOpen(false)}
                      className="font-display text-4xl font-medium tracking-wide text-[#5C2E6E] hover:text-[#C9A84C] transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a 
                    key={link.label} 
                    href={link.href} 
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.4 }}
                    className="font-display text-4xl font-medium tracking-wide text-[#5C2E6E] hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                )
              ))}
            </div>

            <motion.a 
              href="#booking" 
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + (links.length * 0.05), duration: 0.4 }}
              className="mt-8 border-2 border-[#5C2E6E] flex items-center justify-center text-[#5C2E6E] px-8 py-3.5 rounded text-sm tracking-widest font-medium hover:bg-[#5C2E6E] hover:text-white transition-all duration-300"
            >
              BOOK CONSULTATION
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
