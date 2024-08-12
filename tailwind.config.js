/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {      
      colors:{
        'app-100': '#012B29',
        'app-200': '#2E625E',
        'app-300': '#EAB42D',
        'app-400': '#184643',
      },
    },
  },
  plugins: [],
}
