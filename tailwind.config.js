module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        black: { "900_01": "#000000", "900_7f": "#0000007f" },
        light_blue: { A700: "#0093ff" },
        gray: { 200: "#eaeaea", 600: "#848484", "400_7f": "#cacaca7f" },
        blue: { A400: "#257cff" },
        cyan: { 500: "#00bbc7" },
        red: { A700: "#ff0000" },
      },
      boxShadow: { xs: "0px 4px 4px 0px #0000003f" },
      backgroundImage: {
        gradient: "linear-gradient(270deg, #00eeff,#00a5ff)",
        gradient1: "linear-gradient(180deg, #00efff,#00a3ff)",
        gradient2: "linear-gradient(180deg, #00efff,#00a5ff)",
      },
      fontFamily: { notosans: "Noto Sans", play: "Play", kantumruy: "Kantumruy" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
