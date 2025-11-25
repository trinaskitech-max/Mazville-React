/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#192743',
        'navy': '#1f3153',
        'blue': '#92acc9',
        'white': '#faf7f2',
        'gray': '#ede9e4',
      },
      fontFamily: {
        'sans': ['interstate', 'sans-serif'],
        'serif': ['Spectral', 'serif'],
        'headings': ['Nicola', 'serif'],
        'mono': ['Pitch', 'monospace'],
      },
      fontSize: {
        'fluid-xl': 'clamp(1.875rem, 2.5vw + 1rem, 3rem)',
        'fluid-lg': 'clamp(1.5rem, 2vw + 1.25rem, 2.25rem)',
        'fluid-md': 'clamp(1.5rem, 1.5vw + 1rem, 2rem)',
        'fluid': 'clamp(0.9375rem, 1vw + 0.5rem, 1.25rem)',
        'fluid-sm': 'clamp(0.8125rem, 0.875vw + 0.75rem, 1rem)',
      },
      spacing: {
        'fluid': 'max(2rem, min(6vw, 5.625rem))',
        'fluid-sm': 'max(0.875rem, min(2vw, 4rem))',
        'fluid-lg': 'max(4.25rem, min(8.6vw, 7.75rem))',
      },
    },
  },
  plugins: [],
}

