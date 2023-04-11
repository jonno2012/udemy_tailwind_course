/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  darkMode: "class", // class, media
  theme: {
    extend: {
      colors: ({ colors }) => ({
        white: {
          800: 'pink',
          700: 'orange'
        }
      })
    },

  },
  plugins: [],
}

