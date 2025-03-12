import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["scale-in-element"],
  theme: {
    extend: {
      colors: {
        customColor: "#F3EBE0",
        customColorHover: "#e9e8e8",
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(to bottom, #fff7ed, #e5e7eb)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        playfair: ["var(--font-playfair)"],
      },
      animation: {
        "scale-in": "scaleIn 2s ease-out forwards",
        "left-animation": "slideInLeft 2s ease-out forwards",
        "right-animation": "slideInRight 2s ease-out forwards",
      },
      keyframes: {
        scaleIn: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideInLeft: {
          "0%": {
            transform: "translateX(-250%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(250%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
