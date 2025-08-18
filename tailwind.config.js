/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FE8C00",
        gray: {
          100: "#878787"
        },
        red: {
          "mine": "#D33B0D"
        },
        green: {
          "mine": "#084137"
        },
        error: "#F14141",
        success: "#2F9B65"
      },
      fontFamily: {
        quicksand: ["Quicksand-Regular", "sans-serif"],
        "quicksand-bold": ["Quicksand-Bold", "sans-serif"],
        "quicksand-light": ["Quicksand-Light", "sans-serif"],
        "quicksand-medium": ["Quicksand-Medium", "sans-serif"],
        "quicksand-semibold": ["Quicksand-SemiBold", "sans-serif"],
        spacemono: ["SpaceMono-Regular", "sans-serif"]
      }
    }
  },
  plugins: []
};
