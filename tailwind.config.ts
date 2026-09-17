import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: "#C8102E",
          deep: "#8F0B20",
        },
        navy: {
          DEFAULT: "#17315C",
          deep: "#0F2143",
        },
        ink: "#0E1116",
        paper: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        fg: "rgb(var(--color-fg) / <alpha-value>)",
        steel: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-border) / 0.10)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
