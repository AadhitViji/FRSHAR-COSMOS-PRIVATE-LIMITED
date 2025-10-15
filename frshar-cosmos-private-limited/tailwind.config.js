/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0b0b0b',
          surface: '#121212',
          accent: '#7EF14F',
          accent2: '#A3FF6F'
        }
      }
    }
  },
  plugins: []
}
