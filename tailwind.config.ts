import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#07172c",
          blue: "#0b2b4b",
          sky: "#124765",
          lime: "#a9d84f",
          limeSoft: "#dff879",
          limeDark: "#416911",
          mist: "#f4f8f5",
          soft: "#fbfcf7",
          cream: "#f8f7ef",
          charcoal: "#111923",
          slate: "#465768",
          line: "#dbe4eb",
        },
      },
      boxShadow: {
        panel: "0 28px 72px rgba(7, 23, 44, 0.15)",
        soft: "0 14px 34px rgba(7, 23, 44, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(92deg, rgba(7,23,44,0.97) 0%, rgba(7,23,44,0.9) 42%, rgba(7,23,44,0.55) 100%)",
      },
      maxWidth: {
        "8xl": "86rem",
      },
    },
  },
  plugins: [],
};

export default config;
