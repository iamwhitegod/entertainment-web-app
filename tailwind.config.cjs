/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      red: "#FC4747",
      darkBlue: "#10141E",
      greyishBlue: "#5A698F",
      semiDarkBlue: "#161D2F",
      pureWhite: "#FFFFFF",
    },

    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },

    fontWeight: {
      extralight: 200,
      light: 300,
      medium: 500,
    },

    fontSize: {
      1: "3.2rem",
      2: "2.4rem",
      3: "1.8rem",
      4: "1.5rem",
      5: "1.3rem",
    },

    lineHeight: {
      1: "4rem",
      2: "3.2rem",
      3: "2.6rem",
      4: "2.3rem",
      5: "2.1rem",
    },
    extend: {},

    screens: {
      sm: "600px",
      md: "900px",
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },

    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
