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
          navy: "#132b25",
          blue: "#1d4037",
          sky: "#315c4e",
          lime: "#a9bd83",
          limeSoft: "#e2ead2",
          limeDark: "#536e45",
          mist: "#edf1e8",
          soft: "#fbfaf6",
          cream: "#f2eee5",
          charcoal: "#18201d",
          slate: "#59645f",
          line: "#d8d8cf",
        },
      },
      boxShadow: {
        panel: "0 28px 72px rgba(19, 43, 37, 0.14)",
        soft: "0 14px 34px rgba(19, 43, 37, 0.07)",
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
