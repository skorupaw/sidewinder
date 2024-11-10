// import * as defaultTheme from "tailwindcss/defaultConfig";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      // sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      sans: ["Roboto"]
    },
    colors: {
      black: "#121212",
      white: "#ffffff",
      primary: "#4cf3bf",
      secondary: "#b2ff73",
      gray: "#4d4d4d",
    },
  },
  plugins: [],
};

export default config;
