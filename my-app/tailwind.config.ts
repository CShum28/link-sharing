import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        primary: "#633CFF",
        active: "#BEADFF",
        disabled: "#EFEBFF",
        text: "#333333",
        secondaryText: "#737373",
        lightGray: "#D9D9D9",
        background: "#FAFAFA",
        white: "#FFFFFF",
        error: "#FF3939",
      },
      screens: {
        mobile: { max: "375px" },
        tablet: { min: "376px", max: "768px" },
        desktop: { min: "769px" },
      },
    },
  },
  plugins: [],
};
export default config;
