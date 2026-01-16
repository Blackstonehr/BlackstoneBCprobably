/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#2e2e2e",
        concrete: "#f5f4f2",
        blueprint: "#1e75bb",
        steel: "#797979",
        "brand-accent": "#8b2635",
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["2.75rem", { lineHeight: "1.15" }],
        h2: ["2rem", { lineHeight: "1.25" }],
        h3: ["1.4rem", { lineHeight: "1.35" }],
        body: ["1.125rem", { lineHeight: "1.65" }]
      },
      spacing: {
        section: "5rem",
        sectionLg: "7rem",
        cardGap: "2.5rem",
        inner: "2rem",
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem"
      },
      borderRadius: {
        card: "0.5rem",
        sm: "0.375rem",
        lg: "1rem"
      },
      boxShadow: {
        sm: "0 2px 8px rgba(0,0,0,0.06)",
        card: "0 8px 24px rgba(0,0,0,0.1)",
        cardHover: "0 12px 32px rgba(0,0,0,0.15)",
        xl: "0 20px 40px rgba(0,0,0,0.2)"
      }
    }
  },
  plugins: [],
}
