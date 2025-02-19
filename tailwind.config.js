/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['Dancing Script', 'cursive'],
        body: ['Caveat', 'cursive'],
      },
      colors: {
        primary: '#0066cc',
        accent: '#00cc99',
      },
    },
  },
  plugins: [],
}