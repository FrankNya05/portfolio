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
        // Graphite / Steel system
        graphite: {
          950: "#0D0E10",
          900: "#12141A",
          850: "#181B22",
          800: "#1E222C",
          700: "#272D3A",
          600: "#333C4E",
          500: "#4A5568",
          400: "#6B7280",
          300: "#9CA3AF",
          200: "#CBD5E1",
          100: "#E2E8F0",
          50:  "#F1F5F9",
        },
        // Primary accent — amber/brass (instrumentation)
        brass: {
          900: "#3D2800",
          700: "#7A5200",
          500: "#B87C0A",
          400: "#D4911A",
          300: "#E8AB3C",
          200: "#F0C870",
          100: "#F7E3B0",
          50:  "#FDF5E0",
        },
        // Secondary accent — cool steel blue
        steel: {
          700: "#1A3A5C",
          600: "#1E4976",
          500: "#2563A8",
          400: "#3B82C4",
          300: "#60A5D8",
          200: "#93C5E8",
          100: "#BFDBF0",
        },
        // Muted green for status / success indicators
        circuit: {
          600: "#1A4A2A",
          500: "#1E6B35",
          400: "#25A045",
          300: "#4DC76A",
          200: "#86DCAA",
        },
      },
      fontFamily: {
        // Primary: sharp geometric sans
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Mono: for technical labels and code references
        mono: ["var(--font-mono)", "Consolas", "monospace"],
        // Display: for large headings
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1.2" }],
        xs:    ["0.75rem", { lineHeight: "1.4" }],
        sm:    ["0.875rem", { lineHeight: "1.5" }],
        base:  ["1rem",    { lineHeight: "1.6" }],
        lg:    ["1.125rem",{ lineHeight: "1.5" }],
        xl:    ["1.25rem", { lineHeight: "1.4" }],
        "2xl": ["1.5rem",  { lineHeight: "1.3" }],
        "3xl": ["1.875rem",{ lineHeight: "1.2" }],
        "4xl": ["2.25rem", { lineHeight: "1.15" }],
        "5xl": ["3rem",    { lineHeight: "1.05" }],
        "6xl": ["3.75rem", { lineHeight: "1.0" }],
        "7xl": ["4.5rem",  { lineHeight: "0.95" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
      },
      borderWidth: {
        DEFAULT: "1px",
        "0.5": "0.5px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "scan-line": "scanLine 3s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanLine: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backgroundImage: {
        "grid-graphite":
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        "grid-fine":
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-64": "64px 64px",
        "grid-32": "32px 32px",
        "grid-16": "16px 16px",
      },
    },
  },
  plugins: [],
};

export default config;
