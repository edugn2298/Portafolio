/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'terra': {
          '50': '#fef3f2',
          '100': '#fee4e2',
          '200': '#ffcdc9',
          '300': '#fdaba4',
          '400': '#fa7a6f',
          '500': '#f24f41',
          '600': '#df3223',
          '700': '#af2418',
          '800': '#9b2319',
          '900': '#80241c',
          '950': '#460e09',
        },
      },
    },
  },
  plugins: [],
}