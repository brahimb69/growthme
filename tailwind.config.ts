import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        amber: {
          accent: "#c8956c",
          light: "#e8c9a8",
          dark: "#a67444",
        },
        forest: {
          accent: "#4a7c59",
          light: "#7db88e",
          dark: "#2d5a3a",
        },
        surface: {
          light: "#fafaf8",
          dark: "#111110",
        },
        card: {
          light: "#ffffff",
          dark: "#1a1a19",
        },
        muted: {
          light: "#94928d",
          dark: "#6b6965",
        },
        border: {
          light: "#e8e6e1",
          dark: "#2a2a28",
        },
      },
    },
  },
  plugins: [],
};
export default config;
