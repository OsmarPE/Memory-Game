/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary:["Outfit"," sans-serif"]
      },
      colors:{
        YellowMain:'#FFCE67',
        grayMain:'#F0F0F0',
        purpleMain:'#7945FF',
        purpleMain200:'#5C2DD5'
      },
      boxShadow:{
        main:'0 4px 0 #000',
        main200:'0 5px 0 #000',
      }
    },
  },
  plugins: [],
}