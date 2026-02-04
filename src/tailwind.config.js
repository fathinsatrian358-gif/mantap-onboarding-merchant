/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mantap-yellow': '#FFB81C', 
        'mantap-blue': '#003D79',
      }
    },
  },
  plugins: [],
}