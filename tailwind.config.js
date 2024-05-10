/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx","./index.html"],
  theme: {
    extend: {
      color:{
        primary: "#121212",
        lista: "#39C3FF",
        cmm: "#F6CC56"
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'sans-serif'],
        'sedan' : ["Sedan SC",  'sans-serif']
      },
    },
  },
  plugins: [],
}

