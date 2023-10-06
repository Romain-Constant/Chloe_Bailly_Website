import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prata: ["var(--font-prata)"],
      },
      boxShadow: {
        basic: "-6px 8px 18px 0px rgba(0, 0, 0, 0.25);",
      },
      padding: {
        "2/5": "33%",
        full: "100%",
      },
    },
    colors: {
      black: "#000000",
      green: "#7B7B6B",
      marron: "#CB997E",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;
