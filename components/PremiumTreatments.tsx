interface PremiumTreatmentsProps {
  onBookingClick?: () => void
}

export default function PremiumTreatments({ onBookingClick }: PremiumTreatmentsProps) {
  const treatments = [
    {
      title: 'Single treatment',
      description: 'One full-face CO2 laser session',
      features: ['Full face CO2 laser', 'Acne scars and wrinkles', '3–5 days downtime', 'Klarna available'],
      price: '£395',
      note: 'Was £499',
      featured: false,
    },
    {
      title: '3 treatment package',
      description: 'The course for deeper concerns',
      features: ['3 full-face treatments', 'Maximum collagen response', 'Save £385', 'Klarna available'],
      price: '£800',
      note: 'Was £1,497',
      featured: true,
    },
    {
      title: 'Single area',
      description: 'Targeted treatment for one zone',
      features: ['Under eyes, cheeks or another area', '£100 per area', '3 areas for £250', 'Same downtime guidance'],
      price: 'From £100',
      note: 'Priced by area',
      featured: false,
    },
  ]

  return (
    <section id="treatments" className="py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-12">
          <p className="eyebrow">Treatment options</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink mt-3">
            CO2 Laser
            <span className="text-gold-deep"> treatments</span>
          </h2>
          <p className="text-ink-muted mt-4 max-w-2xl mx-auto">
            Prices are confirmed here. Your consultation checks the area and the number of sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {treatments.map((treatment) => (
            <article
              key={treatment.title}
              className={`bg-surface-raised border p-6 sm:p-8 flex flex-col ${
                treatment.featured ? 'border-gold' : 'border-line'
              }`}
            >
              {treatment.featured && (
                <p className="text-xs uppercase tracking-[0.16em] text-gold-deep mb-4">Best value</p>
              )}
              <h3 className="font-display text-3xl text-ink">{treatment.title}</h3>
              <p className="text-ink-muted mt-2">{treatment.description}</p>
              <p className="font-display text-5xl text-ink mt-6">{treatment.price}</p>
              <p className="text-xs uppercase tracking-[0.12em] text-ink-muted mt-1">{treatment.note}</p>
              <ul className="mt-6 space-y-2 text-sm text-ink flex-grow">
                {treatment.features.map((feature) => (
                  <li key={feature} className="border-t border-line pt-2">{feature}</li>
                ))}
              </ul>
              <button onClick={onBookingClick} className="btn-primary mt-8 w-full">
                Book Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
