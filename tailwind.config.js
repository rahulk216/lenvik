/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        blue1: "#031f43",
        blue2: "#0057db",
        blue3: "#aceaff",
        grey: "#414140",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        zoomIn: "zoomIn 0.7s ease-out forwards",
      },
    },
  },
};
