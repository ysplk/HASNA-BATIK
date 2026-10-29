/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        lumina: {
          bg: '#FAF8F5',
          card: '#FFFFFF',
          hero: '#F4ECE1',
          active: '#F4EDE4',
          border: '#EFECE6',
          accent: '#8C6D46',
          gold: '#C5A059',
          dark: '#1F1A17',
          dot: '#6B4B3E',
        }
      }
    },
  },
  plugins: [],
}
