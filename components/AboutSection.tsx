interface AboutSectionProps {
  onBookingClick?: () => void
}

export default function AboutSection({ onBookingClick }: AboutSectionProps) {
  return (
    <>
      <section id="about" className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto section-padding grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow">About the clinic</p>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-3">
              Amethyst Aesthetics Beauty
              <span className="block text-gold-deep">South Petherton, Somerset</span>
            </h2>
          </div>
          <div className="space-y-4 text-ink-muted text-base sm:text-lg leading-relaxed">
            <p>
              Amethyst Aesthetics Beauty is a South Petherton clinic on Unit 2, New Cross Hill. Marianne offers fractional CO2 laser resurfacing for acne scars, wrinkles, pigmentation and skin texture.
            </p>
            <p>
              One treatment is £395. Three treatments are £800, a saving of £385. Klarna is available, and suitability is confirmed before you are booked in.
            </p>
            <button onClick={onBookingClick} className="btn-primary mt-2">
              Book consultation
            </button>
          </div>
        </div>
      </section>

      <section id="practitioner" className="py-16 sm:py-24 bg-surface-alt border-y border-line">
        <div className="max-w-6xl mx-auto section-padding grid lg:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden border border-line bg-surface-raised">
            <img
              src="/images/team/Marianne.png"
              alt="Marianne, founder of Amethyst Aesthetics Beauty"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Meet your practitioner</p>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-3">Marianne</h2>
            <p className="text-gold-deep mt-2 uppercase tracking-[0.14em] text-xs">Founder · Amethyst Aesthetics Beauty</p>
            <p className="text-ink-muted text-base sm:text-lg leading-relaxed mt-6">
              Marianne is the founder of Amethyst Aesthetics Beauty. She has completed more than 800 treatments, including CO2 laser resurfacing for acne scars and skin texture. You meet her at the clinic on Unit 2, New Cross Hill, South Petherton.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink">
              {['Advanced CO2 laser specialist', '800+ treatments completed', 'Award-finalist clinic', '4+ years in aesthetics'].map((item) => (
                <li key={item} className="border-b border-line py-2">{item}</li>
              ))}
            </ul>
            <button onClick={onBookingClick} className="btn-secondary mt-8">
              Book consultation
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
