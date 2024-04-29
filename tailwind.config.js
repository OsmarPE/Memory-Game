/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary:["Atkinson Hyperlegible"," sans-serif"]
      },
      colors:{
        blueMain:'#304859',
        YellowMain:'#FDA214',
        grayMain:'#DFE7EC',
        grayMain200:'#BCCED9',
      }
    },
  },
  plugins: [],
}