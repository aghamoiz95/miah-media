/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'brand-black': '#0a0a0b',
        'brand-dark': '#121214',
        'brand-gold': '#e0c88f',
        'brand-cream': '#f8f8f6',
      },
    },
  },
  plugins: [],
}
