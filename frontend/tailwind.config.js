/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Tailwind blue-600
        secondary: "#1E40AF", // Tailwind blue-900
        accent: "#F59E0B", // Tailwind amber-500
        background: "#F9FAFB", // Tailwind gray-50
        dark: "#111827", // Tailwind gray-900
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

