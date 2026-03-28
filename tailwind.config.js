/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7FFFD4',    // Green dark mode highlight
        dark: '#0f172a',       // Dark background
        darker: '#020617',     // Darker background
        card: '#1e293b',       // Card background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
