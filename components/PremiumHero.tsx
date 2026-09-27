interface PremiumHeroProps {
  onBookingClick?: () => void
  onVideoClick?: () => void
}

const VIDEO_URL = 'https://storage.googleapis.com/msgsndr/yE0ZTtTwqOwpiUubrP0k/media/69245121e4747c667cc2e776.mp4?v=3'

function HeroVideo({ className }: { className?: string }) {
  return (
    <video autoPlay muted loop playsInline className={className}>
      <source src={VIDEO_URL} type="video/mp4" />
      <img src="/images/home1.jpg" alt="CO2 laser treatment at Amethyst Aesthetics Beauty" className="w-full h-full object-cover" />
    </video>
  )
}

export default function PremiumHero({ onBookingClick, onVideoClick }: PremiumHeroProps) {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-surface-alt border-b border-line" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 animate-slide-up text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-surface-raised border border-gold rounded-sm mx-auto lg:mx-0">
              <span className="text-gold-deep font-medium text-xs sm:text-sm uppercase tracking-[0.16em]">CO2 laser skin resurfacing</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] text-ink">
              CO2 Laser
              <span className="block text-gold-deep mt-1">in South Petherton</span>
            </h1>

            <p className="text-sm sm:text-lg text-ink-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              Fractional CO2 laser for acne scars, wrinkles, pigmentation and skin texture at Amethyst Aesthetics Beauty. £395 for one treatment, or £800 for three.
            </p>

            <div className="bg-surface-raised border border-line rounded-sm p-5 sm:p-6 mx-auto lg:mx-0 max-w-xl">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center bg-surface border border-line p-3 sm:p-4">
                  <p className="font-display text-3xl sm:text-4xl text-ink mb-1">£395</p>
                  <p className="text-xs sm:text-sm text-ink-muted">1 treatment</p>
                </div>
                <div className="text-center bg-ink text-surface-raised p-3 sm:p-4">
                  <p className="font-display text-3xl sm:text-4xl mb-1">£800</p>
                  <p className="text-xs sm:text-sm text-gold-gilt">3 treatments</p>
                  <p className="text-xs text-gold-pale mt-1 uppercase tracking-[0.12em]">Save £385</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-3">
                <img
                  src="https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
                  alt="Klarna"
                  className="h-6"
                />
                <p className="text-xs sm:text-sm text-ink-muted">Pay in 3 with Klarna · 3–5 days downtime</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#assessment" className="btn-primary w-full sm:w-auto">
                Check Suitability
              </a>
              <button onClick={onBookingClick} className="btn-secondary w-full sm:w-auto">
                Book consultation
              </button>
              <button onClick={onVideoClick} className="btn-secondary w-full sm:w-auto">
                Meet Marianne
              </button>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center lg:justify-start gap-4 sm:gap-8 pt-2">
              {[
                ['70–80%', 'Scar reduction'],
                ['95%', 'Satisfaction'],
                ['1–3', 'Sessions'],
                ['800+', 'Treatments'],
              ].map(([value, label]) => (
                <div key={label} className="text-center lg:text-left">
                  <p className="font-display text-2xl text-ink">{value}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-ink-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-[320px] lg:max-w-[380px]">
              <div className="relative aspect-[9/16] overflow-hidden border border-line bg-ink shadow-premium">
                <HeroVideo className="w-full h-full object-cover" />
              </div>
              <p className="mt-3 text-center text-xs uppercase tracking-[0.14em] text-ink-muted">
                South Petherton, Somerset
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center">
        <a href="#assessment" className="flex flex-col items-center text-ink-muted">
          <span className="text-xs uppercase tracking-[0.16em] mb-2">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
