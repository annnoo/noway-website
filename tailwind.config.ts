import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
        euw: '#3b82f6',
        na: '#ef4444',
        kr: '#eab308',
        kor: '#eab308',
        eune: '#f97316',
        br: '#22c55e',
        bra: '#22c55e',
        jp: '#ffffff',
        lan: '#a855f7',
        la1: '#a855f7',
        las: '#ec4899',
        la2: '#ec4899',
        oce: '#06b6d4',
        ru: '#6b7280',
        rus: '#6b7280',
        tr: '#14b8a6',
        tur: '#14b8a6',
        blueteam: colors.blue[600],
        redteam: colors.red[600],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "accordion-down 0.2s ease-out",
        "collapsible-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    {
      pattern: /^(bg|text|border)-(euw|na|kr|eune|br|jp|lan|las|oce|ru|tr|bra|tur|kor|rus|la1|la2|blueteam|redteam)$/,
    },
    {
      pattern: /^(bg|text|border)-l-(euw|na|kr|eune|br|jp|lan|las|oce|ru|tr|bra|tur|kor|rus|la1|la2|blueteam|redteam)$/,
    },
  ]
} satisfies Config

export default config
