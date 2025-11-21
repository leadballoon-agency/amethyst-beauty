export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Amethyst Aesthetics Beauty",
    "alternateName": "Amethyst Aesthetics",
    "url": "https://co2lasersomerset.co.uk",
    "sameAs": [
      "https://co2lasersomerset.co.uk",
      "https://www.amethystaestheticsbeauty.com/"
    ],
    "logo": "https://co2lasersomerset.co.uk/images/logo.png",
    "image": "https://co2lasersomerset.co.uk/images/co2laser-skin-rejeuvenation.jpeg",
    "description": "Award-finalist beauty salon in Somerset specializing in expert CO2 laser treatments led by Marianne. Over 800+ treatments completed. Acne scar treatment, wrinkle reduction, and skin rejuvenation.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 2, Old Apple Store, New Cross Hill",
      "addressLocality": "South Petherton",
      "addressRegion": "Somerset",
      "postalCode": "TA13 5HV",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.9581",
      "longitude": "-2.8169"
    },
    "telephone": "+447366904007",
    "email": "Ismaymarianne@gmail.com",
    "priceRange": "££",
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-17:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CO2 Laser Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Under Eye & Hooded Eyelids CO2 Laser",
            "description": "Precision CO2 laser treatment for delicate eye area"
          },
          "price": "199",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Face CO2 Laser - BLACK FRIDAY",
            "description": "Comprehensive facial CO2 laser resurfacing for acne scars, wrinkles, and skin rejuvenation. BLACK FRIDAY Special!"
          },
          "price": "395",
          "priceCurrency": "GBP",
          "priceValidUntil": "2024-11-30"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "3 Treatment Package - BLACK FRIDAY",
            "description": "Best value! Three full face CO2 laser treatments. Save £385!"
          },
          "price": "800",
          "priceCurrency": "GBP",
          "priceValidUntil": "2024-11-30"
        }
      ]
    },
    "medicalSpecialty": [
      "Dermatology",
      "Aesthetic Medicine",
      "Laser Therapy"
    ],
    "availableService": [
      {
        "@type": "Service",
        "name": "CO2 Laser Skin Resurfacing",
        "description": "Fractional CO2 laser treatment for acne scars, wrinkles, and skin rejuvenation"
      },
      {
        "@type": "Service",
        "name": "Acne Scar Treatment",
        "description": "Specialized CO2 laser treatment for acne scar reduction"
      },
      {
        "@type": "Service",
        "name": "Pigmentation Treatment",
        "description": "Laser treatment for sun damage and pigmentation removal"
      },
      {
        "@type": "Service",
        "name": "Under Eye Tightening",
        "description": "CO2 laser treatment for under eye area tightening"
      },
      {
        "@type": "Service",
        "name": "Hooded Eyelid Treatment",
        "description": "CO2 laser treatment for hooded eyelids"
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Amethyst Aesthetics Beauty - CO2 Laser Somerset",
    "alternateName": "CO2 Laser Somerset",
    "url": "https://co2lasersomerset.co.uk",
    "description": "Expert CO2 laser treatment for acne scars, wrinkles, skin texture & pigmentation in Somerset by award-winning practitioner Marianne",
    "publisher": {
      "@type": "Organization",
      "name": "Amethyst Aesthetics Beauty"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://co2lasersomerset.co.uk/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Amethyst Aesthetics Beauty",
    "alternateName": "CO2 Laser Somerset",
    "image": "https://co2lasersomerset.co.uk/images/amethyst-clinic.avif",
    "description": "Award-finalist beauty salon in South Petherton, Somerset. Specializing in CO2 laser treatments for acne scar treatment, wrinkle reduction, skin resurfacing, and pigmentation removal. Led by Marianne with 800+ treatments completed.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 2, Old Apple Store, New Cross Hill",
      "addressLocality": "South Petherton",
      "addressRegion": "Somerset",
      "postalCode": "TA13 5HV",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.9581",
      "longitude": "-2.8169"
    },
    "url": "https://co2lasersomerset.co.uk",
    "telephone": "+447366904007",
    "email": "Ismaymarianne@gmail.com",
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "GBP",
    "areaServed": [
      {
        "@type": "City",
        "name": "South Petherton"
      },
      {
        "@type": "City",
        "name": "Yeovil"
      },
      {
        "@type": "City",
        "name": "Crewkerne"
      },
      {
        "@type": "City",
        "name": "Ilminster"
      },
      {
        "@type": "City",
        "name": "Chard"
      },
      {
        "@type": "City",
        "name": "Taunton"
      }
    ],
    "hasMap": "https://maps.google.com/?q=Unit+2,+Old+Apple+Store,+New+Cross+Hill,+South+Petherton,+TA13+5HV",
    "medicalSpecialty": [
      "Dermatology",
      "Aesthetic Medicine",
      "Cosmetic Dermatology"
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CO2 Laser Treatment Somerset",
    "description": "Expert fractional CO2 laser treatment for acne scars, wrinkles, skin texture, and pigmentation led by award-finalist practitioner Marianne",
    "provider": {
      "@type": "BeautySalon",
      "name": "Amethyst Aesthetics Beauty",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 2, Old Apple Store, New Cross Hill",
        "addressLocality": "South Petherton",
        "addressRegion": "Somerset",
        "postalCode": "TA13 5HV",
        "addressCountry": "GB"
      },
      "telephone": "+447366904007"
    },
    "areaServed": [
      "South Petherton",
      "Yeovil",
      "Crewkerne",
      "Ilminster",
      "Chard",
      "Taunton",
      "Martock",
      "Langport",
      "Somerton",
      "Somerset"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://co2lasersomerset.co.uk",
      "serviceSmsNumber": "+447366904007"
    },
    "category": "Beauty Treatment",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CO2 Laser Treatment Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Under Eye & Hooded Eyelids CO2 Laser",
          "price": "199",
          "priceCurrency": "GBP",
          "description": "Precision CO2 laser treatment for delicate eye area"
        },
        {
          "@type": "Offer",
          "name": "Full Face CO2 Laser - BLACK FRIDAY",
          "price": "395",
          "priceCurrency": "GBP",
          "priceValidUntil": "2024-11-30",
          "description": "Comprehensive facial CO2 laser resurfacing for acne scars, wrinkles, and skin rejuvenation. BLACK FRIDAY Special!"
        },
        {
          "@type": "Offer",
          "name": "3 Treatment Package - BLACK FRIDAY",
          "price": "800",
          "priceCurrency": "GBP",
          "priceValidUntil": "2024-11-30",
          "description": "Best value! Three full face CO2 laser treatments. Save £385!"
        }
      ]
    }
  }

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Amethyst Aesthetics Beauty",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Margaret Thresher"
        },
        "datePublished": "2024-11-19",
        "reviewBody": "I have been going to Marianne for over a year. She is very friendly and makes me feel very relaxed, she is very professional and does a brilliant job.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Holly Henderson"
        },
        "datePublished": "2023-12-21",
        "reviewBody": "I've had many treatments with Marianne, all of which have been done to an extremely high standard and I've left feeling more confident in myself everytime. Marianne is kind, caring and an amazing listener. It's like having my lips done and therapy all at the same time. Wouldn't go anywhere else, she's one of a kind!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Joanna Bowers"
        },
        "datePublished": "2023-12-21",
        "reviewBody": "Marianne is the best i would never go elsewhere, highly recommended and well worth the travel. She is kind, caring and attentive she gives you back confidence and uplift she makes you feel welcome on every visit never short on making you feel special.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sheena Wye"
        },
        "datePublished": "2024-07-21",
        "reviewBody": "Wouldn't go anywhere else for my aesthetics this company has helped me find a new love for myself! One thing I pride them in if she don't think it's for you she will say and suggest alternatives! Amazing friendly service.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Shannon Reason"
        },
        "datePublished": "2022-11-21",
        "reviewBody": "I went to Marianne to get my lips done for the first time. I was really scared I have a phobia of needles. Marianne assured me I'd be fine. She was super patient with me, kept checking in with me while my numbing stuff was on. She explained everything clearly and made the whole experience comfortable.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Tracey Groves"
        },
        "datePublished": "2022-11-21",
        "reviewBody": "Marianne is superb. She provides extensive knowledge of the treatment you are having, explaining everything including aftercare which in turn puts you at ease. She goes above and beyond to ensure your treatment is provided under the highest standard.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  )
}