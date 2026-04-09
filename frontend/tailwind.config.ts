import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        secondary: "#EC4899",
        accent: "#06B6D4",
        dark: "#0a0a0a",
        "dark-card": "rgba(15, 10, 25, 0.7)",
        "dark-border": "rgba(139, 92, 246, 0.2)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(236, 72, 153, 0.15)",
        "glow-sm": "0 0 10px rgba(139, 92, 246, 0.2)",
        card: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;

// tw: 1775238585292

// tw: 1775271995646

// tw: 1775284564498

// tw: 1775383477706

// tw: 1775389844157

// tw: 1775437153092

// tw: 1775510907072

// tw: 1775598518198

// tw: 1775643452371

// tw: 1775695386791
