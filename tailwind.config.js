/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 5s ease-out infinite',
      },
      fontFamily: {
        'Poppins': 'Poppins',
      },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primaryColor': '#33BBCF',
        'secondaryColor': '#1A1A1A',
        'white': '#FFFFFF',
        'gray': '#EDEDED',
        'error': '#BB2D2D',
        'check': '#00D295',
    },
  },
  plugins: [],
}