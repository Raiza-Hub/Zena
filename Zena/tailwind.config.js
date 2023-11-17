/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          heading: ['Sofia Sans', 'sans-serif'],
          text: ['Sofia Sans', 'sans-serif']
        }
    },
  },
  plugins: [],
}

