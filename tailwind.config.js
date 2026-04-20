/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.js"],
  safelist: [
    {
      pattern:
        /(bg|text|border|shadow|ring)-(blue|teal|orange|emerald|indigo|violet|rose|cyan|fuchsia|slate)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern:
        /shadow-(blue|teal|orange|emerald|indigo|violet|rose|cyan|fuchsia)-(500\/30)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "sans-serif"] },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-up": "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "toast-enter":
          "toastEnter 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "toast-leave":
          "toastLeave 0.3s cubic-bezier(0.8, 0.2, 1, 0.2) forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        toastEnter: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        toastLeave: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(100%)" },
        },
      },
    },
  },
};
