/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require("tailwindcss/plugin");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        gloock: ["var(--font-gloock)"],
        noto: ["var(--font-noto)"],
      },
      colors: {
        "highlight-pink": "#EA13F2",
        "highlight-red": "#E6213A",
        "highlight-blue": "#0052FF",

        "text-off-white": "#F2F2F3",
        "text-gray": "#4D4A4F",
        "text-dark": "#121212",
        "text-pink": "#FCADFF",
        "text-light-grey": "#9E9E9E",

        "bg-off-black": "#0F0F0F",
        "bg-off-white": "#F9F9F9",

        "shadown-purple": "#8264BE",
        "shadow-red": "#DC6062",
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #EA13F2 0%, #E6213A 100%)",
        "gradient-primary-light":
          "linear-gradient(90deg, #EA13F2 0%, #E6213A 100%)",
        "gradient-primary-radial":
          "radial-gradient(1067.57% 100.06% at 0% 49.75%, #EA13F2 0%, #E6213A 60.4%, #EA13F2 100%)",
        "gradient-primary-light-radial":
          "radial-gradient(1067.57% 100.06% at 0% 49.75%, #C41CCB 0%, #C4182D 60.4%, #C41CCB 100%)",

        "gradient-dark-linear":
          "linear-gradient(180deg, #1E1E1E 0%, #141414 100.4%)",
        "gradient-light-radial":
          "linear-gradient(180deg, #E9E9E9 0%, #D8D8D8 100.4%)",
        "linear-blue":
          "linear-gradient(93deg, rgba(0, 82, 255, 0.80) 0%, rgba(0, 49, 153, 0.80) 100%)",
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".gradient-text": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
});
