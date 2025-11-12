/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}',
    './data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          50: '#fff5f7',
          100: '#ffe4ec',
          200: '#ffc1d5',
          300: '#ff99ba',
          400: '#ff6a99',
          500: '#f9427c',
          600: '#df245f',
          700: '#b71a4b',
          800: '#8f173c',
          900: '#741432'
        },
        indigo: {
          950: '#0d1028'
        }
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans],
        display: ['"Zen Maru Gothic"', ...defaultTheme.fontFamily.sans],
        mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono]
      },
      backgroundImage: {
        grid: 'linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 0), linear-gradient(180deg, rgba(15,23,42,0.08) 1px, transparent 0)',
        'pattern-kikko':
          'radial-gradient(circle at 15% 15%, rgba(255,255,255,0.15) 0, rgba(255,255,255,0) 50%), radial-gradient(circle at 85% 35%, rgba(255,255,255,0.08) 0, rgba(255,255,255,0) 55%)'
      },
      boxShadow: {
        glow: '0 20px 45px -20px rgba(249, 66, 124, 0.45)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
