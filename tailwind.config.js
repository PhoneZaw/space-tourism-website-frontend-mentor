module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bellefair: ["Bellefair", "serif"],
        "Barlow-Condensed": ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        black: "#0B0D17",
        primary: {
          100: "#D0D6F9",
          200: "#FFFFFF",
        }
      }
    },
  },
  plugins: [],
}