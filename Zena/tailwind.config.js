/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          heading: ['Rubik', 'sans-serif'],
          text: ['Rubik', 'sans-serif']
        }
    },
  },
  plugins: [],
}

