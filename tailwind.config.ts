import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "electric-blue": "hsl(var(--electric-blue))",
        "cyber-purple": "hsl(var(--cyber-purple))",
        "neon-cyan": "hsl(var(--neon-cyan))",
        "plasma-pink": "hsl(var(--plasma-pink))",
        "quantum-orange": "hsl(var(--quantum-orange))",
        "matrix-green": "hsl(var(--matrix-green))",
        "void-indigo": "hsl(var(--void-indigo))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 30px hsl(210 100% 55% / 0.3), 0 0 60px hsl(270 95% 65% / 0.2)" 
          },
          "50%": { 
            boxShadow: "0 0 50px hsl(210 100% 55% / 0.5), 0 0 80px hsl(270 95% 65% / 0.3)" 
          },
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(1deg)" },
        },
        "rotate-slow": {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
        "accordion-up": "accordion-up 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        "fade-in-scale": "fade-in-scale 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        "slide-in-left": "slide-in-left 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        "slide-in-right": "slide-in-right 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float-gentle": "float-gentle 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
