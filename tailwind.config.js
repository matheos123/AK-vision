/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'strong': '40px', // Custom strong blur value
      },
      colors:{
        'secondary': "#fcd535",
        'primary':"#111827"
      }
    },
  },
  plugins: [],
}

