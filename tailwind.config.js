/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        batik: {
          dark: '#2A1810',
          brown: '#4A2511',
          gold: '#C5A059',
          amber: '#8B4513',
          cream: '#FDFBF7',
          sand: '#F4ECE1',
        }
      }
    },
  },
  plugins: [],
}
