import { trackPhoneClick } from './FacebookPixel'

interface CTASectionProps {
  onBookingClick?: () => void
}

const hours = [
  ['Monday', '10:00 – 18:00'],
  ['Tuesday', '10:00 – 18:00'],
  ['Wednesday', 'Closed'],
  ['Thursday', '10:00 – 18:00'],
  ['Friday', '10:00 – 18:00'],
  ['Saturday', '10:00 – 16:00'],
  ['Sunday', 'Closed'],
]

export default function CTASection({ onBookingClick }: CTASectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-surface-alt border-t border-line">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="text-center mb-12">
          <p className="eyebrow">Find us</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink mt-3">
            Ready to see if CO2 laser
            <span className="block text-gold-deep">is right for you?</span>
          </h2>
          <p className="text-ink-muted mt-4 max-w-2xl mx-auto">
            Check suitability, then book a consultation at the South Petherton clinic. £395 for one treatment, or £800 for three.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-surface-raised border border-line p-6">
            <p className="eyebrow">Visit</p>
            <p className="mt-3 text-ink leading-relaxed">
              Amethyst Aesthetics Beauty<br />
              Unit 2, New Cross Hill<br />
              South Petherton<br />
              TA13 5HZ
            </p>
          </div>
          <div className="bg-surface-raised border border-line p-6">
            <p className="eyebrow">Call or email</p>
            <a href="tel:+447366904007" onClick={trackPhoneClick} className="block mt-3 text-ink hover:text-gold-deep">
              07366 904007
            </a>
            <a href="mailto:Ismaymarianne@gmail.com" className="block mt-2 text-ink hover:text-gold-deep break-all">
              Ismaymarianne@gmail.com
            </a>
          </div>
          <div className="bg-surface-raised border border-line p-6">
            <p className="eyebrow">Opening hours</p>
            <ul className="mt-3 space-y-1 text-sm text-ink">
              {hours.map(([day, time]) => (
                <li key={day} className="flex justify-between gap-4 border-b border-line py-1">
                  <span>{day}</span>
                  <span className="text-ink-muted">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button onClick={onBookingClick} className="btn-primary">
            Book consultation
          </button>
        </div>
      </div>
    </section>
  )
}
