/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'white-smoke': '#f8f7f3',
          'linen': '#ede9e4'
        }
      },
        fontFamily: {
          heading: ['Sofia Sans', 'sans-serif'],
          text: ['Sofia Sans', 'sans-serif']
        }
    },
  },
  plugins: [],
}

