// tailwind.config.js
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      // backgroundColor: ['active'],
    },
  },
  theme: {
    extend: {
      screens: {
        xm: "900px",
        base: "992px",
        small: "400px",
        xs: "500px",
        mmd: "600px",
        700: "700px",
        large: "1100px",
      },
      fontFamily: {
        // grotesk: ["grotesk", "sans-serif"],
      },
      backgroundImage: {
        icon: "url('/public/checkboxIcon')",
      },
      colors: {
        // floralWhite: floralWhite,
      },
    },
  },
  plugins: [nextui()],
};
