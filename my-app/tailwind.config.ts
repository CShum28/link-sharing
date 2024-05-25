import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        mobile: { max: "640px" },
        tablet: { min: "641px", max: "768px" },
        desktop: { min: "769px" },
      },
    },
  },
  plugins: [],
};
export default config;
