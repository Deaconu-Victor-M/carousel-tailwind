/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          100: "#FFF8FF",
          200: "#FAEFFF",
          300: "#EAC5FC",
          900: "#2D003D",
        },
      },
      animation: {
        'infinite-slide': 'infinite-slide 15s linear infinite',
      },
      keyframes: {
        'infinite-slide': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};
