export default function Footer() {
  return (
    <footer className="bg-surface-inverse text-ink-inverse py-14">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img
              src="/images/amethyst-logo.avif"
              alt="Amethyst Aesthetics Beauty"
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gold-gilt">CO2 laser skin resurfacing</p>
            <p className="text-ink-inverse/70 mt-2 text-sm">South Petherton, Somerset</p>
            <div className="mt-5 inline-flex items-center gap-3 bg-white px-3 py-2">
              <img
                src="https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
                alt="Klarna"
                className="h-5"
              />
              <span className="text-xs text-ink uppercase tracking-[0.12em]">Accepted</span>
            </div>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.16em] text-xs text-gold-gilt mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-ink-inverse/80">
              <li><a href="tel:+447366904007" className="hover:text-gold-gilt">07366 904007</a></li>
              <li><a href="mailto:Ismaymarianne@gmail.com" className="hover:text-gold-gilt">Ismaymarianne@gmail.com</a></li>
              <li className="pt-3">Amethyst Aesthetics Beauty</li>
              <li>Unit 2, New Cross Hill</li>
              <li>South Petherton, TA13 5HZ</li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.16em] text-xs text-gold-gilt mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm text-ink-inverse/80">
              <li><a href="#about" className="hover:text-gold-gilt">About</a></li>
              <li><a href="#practitioner" className="hover:text-gold-gilt">Marianne</a></li>
              <li><a href="#awards" className="hover:text-gold-gilt">Awards</a></li>
              <li><a href="#finance" className="hover:text-gold-gilt">Pay with Klarna</a></li>
              <li><a href="#treatments" className="hover:text-gold-gilt">Treatments</a></li>
              <li><a href="#results" className="hover:text-gold-gilt">Results</a></li>
              <li><a href="#reviews" className="hover:text-gold-gilt">Reviews</a></li>
              <li><a href="#assessment" className="hover:text-gold-gilt">Check suitability</a></li>
              <li><a href="#faq" className="hover:text-gold-gilt">FAQ</a></li>
              <li><a href="https://www.amethystaestheticsbeauty.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-gilt">Main website</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-10 pt-6 text-sm text-ink-inverse/60">
          <p>&copy; {new Date().getFullYear()} Amethyst Aesthetics Beauty. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy-policy" className="hover:text-gold-gilt underline">Privacy Policy</a>
          </p>
          <p className="mt-2 text-xs">
            This site may use Meta tracking technologies to improve user experience and analyse site performance.
          </p>
        </div>
      </div>
    </footer>
  )
}
