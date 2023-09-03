/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        0.33: '0.33'
      },
      extend: {
        aspectRatio: {
          '9/16': '9 / 16',
        },
        transitionDuration: {
          '10000': '10000ms',
        }
      }
    },
    screens: {
      'sm': '420px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}