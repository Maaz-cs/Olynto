/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'olynto-green': '#1e7a56',
        'olynto-green-bright': '#269b6d',
        'olynto-green-dark': '#0b2b1e',
        'olynto-green-tint': '#f3f9f5',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        display: ['Cinzel', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
