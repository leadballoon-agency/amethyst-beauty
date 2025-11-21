import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BLACK FRIDAY: CO2 Laser Treatment Somerset £395 - Expert Skin Resurfacing | Amethyst Aesthetics Beauty',
  description: 'BLACK FRIDAY SPECIAL! Transform your skin with CO2 laser treatment at Amethyst Aesthetics Beauty, South Petherton. £395 for 1 treatment or £800 for 3 (Save £385!). Celebrity endorsed, gold standard treatment for acne scars, wrinkles & skin texture. Award-finalist clinic with 800+ treatments. Klarna available.',
  keywords: 'CO2 laser Somerset, Black Friday CO2 laser, acne scar treatment Somerset, laser skin resurfacing, CO2 laser treatment, pigmentation treatment, wrinkle treatment, Amethyst Aesthetics Beauty, Marianne aesthetics, South Petherton aesthetics, Somerset aesthetics, laser resurfacing UK, CO2 laser acne scars, fractional laser Somerset, Yeovil aesthetics, CO2 laser deals',
  authors: [{ name: 'Amethyst Aesthetics Beauty' }],
  creator: 'Amethyst Aesthetics Beauty',
  publisher: 'Amethyst Aesthetics Beauty',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://co2lasersomerset.co.uk'),
  alternates: {
    canonical: 'https://co2lasersomerset.co.uk',
  },
  openGraph: {
    title: 'BLACK FRIDAY: CO2 Laser Treatment Somerset £395 - Save £385 on 3 Treatments | Amethyst Aesthetics Beauty',
    description: 'BLACK FRIDAY SPECIAL! Celebrity endorsed CO2 laser treatment. £395 for 1 treatment or £800 for 3 (Save £385!). Gold standard treatment for acne scars, wrinkles & skin texture. Award-finalist Somerset clinic with 800+ treatments. Klarna available.',
    url: 'https://co2lasersomerset.co.uk',
    siteName: 'Amethyst Aesthetics Beauty - CO2 Laser Somerset',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/co2laser-skin-rejeuvenation.jpeg',
        width: 1200,
        height: 675,
        alt: 'BLACK FRIDAY - CO2 Laser Skin Resurfacing Before and After Results - Amethyst Aesthetics Beauty Somerset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLACK FRIDAY: CO2 Laser Treatment Somerset £395 | Amethyst Aesthetics Beauty',
    description: 'BLACK FRIDAY SPECIAL! Celebrity endorsed CO2 laser. £395 for 1 treatment or £800 for 3 (Save £385!). Gold standard treatment for acne scars & wrinkles. Klarna available.',
    images: ['/images/co2laser-skin-rejeuvenation.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'GB-SOM',
    'geo.placename': 'South Petherton',
    'geo.position': '50.9581;-2.8169',
    'ICBM': '50.9581, -2.8169',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        {/* Meta Pixel Code - Awaiting Facebook Pixel ID from client */}
        {/* TODO: Add Facebook Pixel ID when provided by Marianne */}
        {/*
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID_HERE');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID_HERE&ev=PageView&noscript=1"
          />
        </noscript>
        */}

        <StructuredData />
        {children}
      </body>
    </html>
  )
}