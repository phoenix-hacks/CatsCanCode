/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regrade: ["Regrade", "sans-serif"],
      },
      colors: {
        bgBlack: "#0D0D0D",
        subText: "#989191FF",
        stroke: "#707070",
        lightWhite: "#FCFCFC",
        blackishGray: "#111111",
        accent: "#92E4F8",
        cardBg: "#161616",
      },
    },
  },
  plugins: [],
};
