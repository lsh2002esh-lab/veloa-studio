/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B2B5E",
        accent: "#2FA8D5",
        bg: "#F8F9FB",
        surface: "#FFFFFF",
        text: "#1A1A2E",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      boxShadow: {
        nav: "0 4px 14px rgba(15, 23, 42, 0.05)",
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
};
