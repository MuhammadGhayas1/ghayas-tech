import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#0b0b0f",
        ink: "#f5f5f7",
        mute: "#a1a1a6",
        accent: "#0a84ff",
        border: "rgba(255,255,255,0.08)"
      },
      fontFamily: {
        sans: [
          "SF Pro Display",
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Helvetica Neue"',
          "Inter",
          "Arial",
          "sans-serif"
        ]
      },
      spacing: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "40px",
        xl: "64px",
        "2xl": "96px",
        "3xl": "128px"
      },
      maxWidth: {
        wrap: "1200px"
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.25, 0.1, 0.25, 1)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeUp: "fadeUp 360ms var(--ease-soft, cubic-bezier(0.25,0.1,0.25,1)) both"
      }
    }
  },
  plugins: []
};

export default config;

