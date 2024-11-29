import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4d8c40",
        primary_shade: "#6ebf6f",
        primary_light: "#a3e1a5",
        secondary: "#f0f7d4",
        tertiary: "#f7c940",
        black: "#27292d",
        black_extra: "#2b2d32",
        black_light: "#404247",
        black_third: "#222428",
        black_forth: "#1e1f23",
        grey: "#adb5bd",
        white: "#eee",
      },
    },
  },
  plugins: [],
} satisfies Config;
