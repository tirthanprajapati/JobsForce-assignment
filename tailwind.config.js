/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: '12px',
        md: '10px',
        sm: '8px',
      },
      colors: {
        background: '#1A1A2E', // dark background
        foreground: '#EAEAEA', // light text
        card: {
          DEFAULT: '#2D2D44',
          foreground: '#FFFFFF',
        },
        popover: {
          DEFAULT: '#33334D',
          foreground: '#FFFFFF',
        },
        primary: {
          DEFAULT: '#FF6B6B', // bright primary color
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#4ECDC4',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#6B6B6B',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#F7D794',
          foreground: '#000000',
        },
        destructive: {
          DEFAULT: '#FF6B6B',
          foreground: '#FFFFFF',
        },
        border: '#444444',
        input: '#333333',
        ring: '#444444',
        chart: {
          1: '#F72585',
          2: '#B5179E',
          3: '#7209B7',
          4: '#3A0CA3',
          5: '#4361EE',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};