/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B1447",
          hover: "#2E2566",
          dark: "#120D31",
          light: "#251C5C",
        },
        magenta: {
          DEFAULT: "#8C1D82",
          hover: "#A93F9E",
          light: "#FDF2FC",
          soft: "#F6E5F5",
        },
        surface: {
          DEFAULT: "#F7F6FB",
          card: "#FFFFFF",
          muted: "#EFECEF",
        },
        copy: {
          DEFAULT: "#1B1447",
          muted: "#5C5A73",
          light: "#82809A",
        },
        borderColor: {
          DEFAULT: "#E4E2ED",
          light: "#F0EEF7",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(27, 20, 71, 0.06)",
        "card-hover": "0 12px 30px -4px rgba(27, 20, 71, 0.12)",
        magenta: "0 4px 14px 0 rgba(140, 29, 130, 0.3)",
      },
    },
  },
  plugins: [],
};
