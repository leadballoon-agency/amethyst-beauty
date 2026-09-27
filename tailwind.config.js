/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#22201d',
          muted: '#6b635a',
          inverse: '#f5efe6',
        },
        gold: {
          DEFAULT: '#b08d57',
          deep: '#6f5430',
          display: '#9a7842',
          gilt: '#d4b27c',
          pale: '#d8c6a8',
          link: '#8a6a3b',
          mark: '#c9a66f',
        },
        surface: {
          DEFAULT: '#f7f3ee',
          alt: '#f0e9e3',
          raised: '#fbf8f3',
          inverse: '#1c1917',
        },
        line: {
          DEFAULT: '#e3d9ca',
          strong: '#c9b893',
        },
        primary: {
          50: '#f7f3ee',
          100: '#f0e9e3',
          200: '#e3d9ca',
          300: '#d8c6a8',
          400: '#c9a66f',
          500: '#b08d57',
          600: '#8a6a3b',
          700: '#6f5430',
          800: '#22201d',
        },
        neutral: {
          50: '#fbf8f3',
          100: '#f7f3ee',
          200: '#e3d9ca',
          300: '#d8c6a8',
          400: '#a3988c',
          500: '#6b635a',
          600: '#525252',
          700: '#3a342e',
          800: '#262626',
          900: '#1c1917',
        }
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      boxShadow: {
        'premium': '0 20px 25px -5px rgba(34, 32, 29, 0.08), 0 10px 10px -5px rgba(34, 32, 29, 0.04)',
        'premium-lg': '0 25px 50px -12px rgba(34, 32, 29, 0.18)',
      }
    },
  },
  plugins: [],
}
