const { Kaushan_Script } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kaushanScript: ["Kaushan Script, cursive"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customOrange: {
          DEFAULT: "#F7941D",
        },
        customGray: {
          DEFAULT: "#23231A",
        },
        customPale: {
          DEFAULT: "#FDEAD4",
          dark: "#F9DCBB"
        }
      },
    },
  },
  plugins: [],
};
