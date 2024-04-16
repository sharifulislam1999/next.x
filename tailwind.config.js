/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        outfit : '"Outfit", sans-serif',
      },
      textColor:{
        main: "#65B110"
      },
      backgroundImage: {
        'sliderbg-1': "url('/src/assets/slider/slider_1.jpg')",
        'sliderbg-2': "url('/src/assets/slider/slider_2.jpg')",
        'sliderbg-3': "url('/src/assets/slider/slider_3.jpg')",
        'sliderbg-4': "url('/src/assets/slider/slider_4.jpg')",
        
      }
    },
  },
  plugins: [require("daisyui")],
}