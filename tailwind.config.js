/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkColor: "#161619",
        formGray: "#4D4D4D",
        primaryBlack: "#303030",
        buttonDark: "rgba(21, 21, 24, 0.56)",
        darkBackground: "rgba(16, 16, 16, 0.3)",
        darkPhotographyBackground: "rgba(21, 21, 24, 0.76)",
        borderColor: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
