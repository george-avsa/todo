/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'light-blue': '#21436B',
        'dark-blue': '#172737',
        'kek-blue': '#172F4B',
        'blue': '#254D79'
      },
      screens: {
        'sm': {'max': '767px'},
        'md': {'min': '768px', 'max': '1024px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1290px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
      fontFamily: {
        'sans': ['Asap', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}