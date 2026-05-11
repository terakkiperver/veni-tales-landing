import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#03594d",
          light: "#04746a",
        },
        accent: {
          DEFAULT: "#82eda6",
          light: "#a8f2be",
        },
        /** Secondary pills (outline CTA) — warm orange neo stack */
        orange: {
          DEFAULT: "#ea580c",
          surface: "#fff4ed",
          shadow: "#9a3412",
        },
        bg: {
          pink: "#fccddc",
          yellow: "#fffd94",
          /** Onboarding slide 3 & neo-yellow accents (#FFFF95 in app onboarding) */
          yellowBright: "#ffff95",
          purple: "#f6bbfd",
          /** Align with onboarding slide 1 & design rhythm (#FAFBF7) */
          cream: "#fafbf7",
        },
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "spin-slow": "spin 20s linear infinite",
        "fade-ss": "fadeSs 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeSs: {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
