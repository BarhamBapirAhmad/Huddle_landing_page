module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "670px",
      lg: "976px",
      xl: "1440px",
      xxl: "1700px",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primaryPink: "hsl(322, 100%, 66%)",
        veryPaleCyan: "hsl(193, 100%, 96%)",
        veryDarkCyan: "hsl(192, 100%, 9%)",
        grayishBlue: "hsl(208, 11%, 55%)",
      },
    },
  },
  plugins: [],
};
