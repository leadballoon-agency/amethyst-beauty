'use client'

import { useState, useEffect } from 'react'

interface NavigationProps {
  onBookingClick?: () => void
}

const links = [
  { label: 'About', href: '#about' },
  { label: 'Awards', href: '#awards' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Results', href: '#results' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation({ onBookingClick }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY > 100)
      setIsScrolled(currentScrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isVisible ? 'top-0' : '-top-24'
    } ${
      isScrolled ? 'bg-surface-raised/95 backdrop-blur-lg shadow-lg py-4 border-b border-line' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex justify-between items-center gap-4 min-w-0">
          <a href="/" className="flex items-center min-w-0 shrink">
            <img
              src="/images/amethyst-logo.avif"
              alt="Amethyst Aesthetics Beauty"
              className="h-12 sm:h-14 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.16em] whitespace-nowrap text-ink hover:text-gold-deep transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <a
              href="#assessment"
              className="text-xs font-medium uppercase tracking-[0.16em] whitespace-nowrap text-gold-deep hover:text-ink transition-colors"
            >
              Take Assessment
            </a>
            <span className="text-ink-muted">|</span>
            <button
              onClick={onBookingClick}
              className="inline-flex bg-transparent text-gold-deep border border-gold hover:bg-gold-link hover:border-gold-link hover:text-surface-raised px-5 xl:px-6 py-2.5 rounded-sm text-sm font-semibold uppercase tracking-[0.08em] whitespace-nowrap transition-colors duration-200"
            >
              Book Now
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 shrink-0"
            aria-label="Open menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-ink transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-ink transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-ink transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-line bg-surface-raised">
            <div className="flex flex-col space-y-3">
              {links.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-ink hover:text-gold-deep font-medium uppercase tracking-[0.16em] text-xs py-2"
                >
                  {item.label}
                </a>
              ))}

              <div className="border-t border-line pt-3 mt-2 space-y-3">
                <a
                  href="#assessment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center border border-gold text-gold-deep px-6 py-3 rounded-sm font-semibold uppercase tracking-[0.08em] text-sm"
                >
                  Take Assessment
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onBookingClick?.()
                  }}
                  className="btn-primary w-full"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
