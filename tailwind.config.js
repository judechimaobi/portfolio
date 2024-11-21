/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      // colors: {
      //   primary: "#050816",
      //   secondary: "#aaa6c3",
      //   tertiary: "#151030",
      //   "black-100": "#100d25",
      //   "black-200": "#090325",
      //   "white-100": "#f3f3f3",
      // },
      colors: {
        // primary: "#02081c",
        primary: "#010d1a",
        secondary: "#a1acd1",
        tertiary: "#0a1939",
        "black-100": "#0e182b",
        "black-200": "#030b25",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1e2335",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        'title': ['"Bebas Neue"'],
        'display': ['"Funnel Display"'],
      }
    },
  },
  plugins: [],
};