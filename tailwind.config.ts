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
        // Brand baseline — black tin, ivory paper, warm gold filigree
        ink: {
          950: "#06060A",
          900: "#0B0B0F",
          800: "#15151B",
          700: "#1F1F27",
          600: "#2A2A33",
        },
        ivory: {
          50: "#FBF7EE",
          100: "#F5EFE3",
          200: "#ECE3CE",
          300: "#DACFB4",
        },
        gold: {
          300: "#F0D38A",
          400: "#E5C97E",
          500: "#C9A24A",
          600: "#A8842F",
          700: "#7C611F",
        },

        // Per-flavor palettes (from brief)
        butter: {
          bg: "#F6D57A",
          accent: "#FFF1C1",
          deep: "#8A6A20",
        },
        saffron: {
          bg: "#F4B400",
          accent: "#7CB342",
          deep: "#6E4F00",
        },
        cocoa: {
          bg: "#3B2417",
          accent: "#8D5B3B",
          deep: "#1A0F09",
        },
        coconut: {
          bg: "#F5E6CC",
          accent: "#D9A441",
          deep: "#7A5A28",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -20px rgba(0, 0, 0, 0.35)",
        glow: "0 0 40px -5px rgba(201, 162, 74, 0.45)",
        "glow-lg": "0 0 80px -10px rgba(229, 201, 126, 0.5)",
        tin: "0 40px 80px -20px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(229, 201, 126, 0.15)",
        glass:
          "0 8px 32px 0 rgba(0, 0, 0, 0.18), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        "grain":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.10  0 0 0 0 0.08  0 0 0 0 0.06  0 0 0 0.20 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        "gold-sheen":
          "linear-gradient(135deg, #7C611F 0%, #C9A24A 25%, #F0D38A 50%, #C9A24A 75%, #7C611F 100%)",
        "radial-ink":
          "radial-gradient(ellipse at center, #15151B 0%, #06060A 100%)",
      },
      perspective: {
        "1000": "1000px",
        "1500": "1500px",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
