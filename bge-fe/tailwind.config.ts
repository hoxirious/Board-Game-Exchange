import type { Config } from "tailwindcss"

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
          DEFAULT: "hsl(var(--color-primary))",
          '50': 'hsl(var(--color-primary-50))',
          '100': 'hsl(var(--color-primary-100))',
          '200': 'hsl(var(--color-primary-200))',
          '300': 'hsl(var(--color-primary-300))',
          '400': 'hsl(var(--color-primary-400))',
          '500': 'hsl(var(--color-primary-500))',
          '600': 'hsl(var(--color-primary-600))',
          '700': 'hsl(var(--color-primary-700))',
          '800': 'hsl(var(--color-primary-800))',
          '900': 'hsl(var(--color-primary-900))',
          '950': 'hsl(var(--color-primary-950))',
          foreground: "hsl(var(--primary-foreground))",
        },
        danger: {
          DEFAULT: "hsl(var(--color-danger))",
        },
        success: {
          DEFAULT: "hsl(var(--color-success))",
        },
        warning: {
          DEFAULT: "hsl(var(--color-warning))",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config