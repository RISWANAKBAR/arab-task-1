/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '180': '600px',
      },
      colors: {
        'pale-green': '#98FB98', // Change this hex code to your desired pale green color
      },
    },
  },
  plugins: [],
}
