/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-muted": "var(--card-muted)",
        border: "var(--border)",
        "muted-foreground": "var(--muted-foreground)",
      },
    },
  },
  plugins: [],
}
