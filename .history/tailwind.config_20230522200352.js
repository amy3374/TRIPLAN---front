/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      pink: "#E4AEC5",
      lightpink: "#FFC4DD",
      green: "#446A46",
      ligntgreen: "#82A284",
      gray: "#e7e5e4",
    },
  },
  plugins: [],
};
