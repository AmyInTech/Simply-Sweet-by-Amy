/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fontScript: ["Sacramento"],
      fontSans: ["Raleway, Roboto, Open Sans, Arial"],
      fontSansSerif: ["Lora, Georgia, Cambria, Times New Roman"],
    },
    extend: {
      fontSize: {
        huge: ["80rem", { lineheight: "1" }],
      },
      height: {
        screen: "100dvh",
      },
      backgroundImage: {
        hero: "url(/img/macaron-background-1.avif)",
      },
    },
    screens: {
      mobile: "375px",
      ...defaultTheme.screens,
      xs: "50px",
      lgmobile: "450px",
      slider600: "600px",
      slider900: "900px",
      slider1020: "1020px",
      slider1060: "1060px",
    },
  },

  // plugins: [require("@tailwindcss/forms")],
};
