// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("tailwind-scrollbar-hide")],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        scrollbar: {
          track: "#f5f5f5", // Custom track color
          thumb: "#cccccc", // Custom thumb color
          thumbHover: "#999999", // Custom thumb hover color
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar": {
          "scrollbar-width": "thin",
          "scrollbar-color": "#cccccc #f5f5f5",
        },
        ".scrollbar::-webkit-scrollbar": {
          width: "8px",
        },
        ".scrollbar::-webkit-scrollbar-track": {
          background: "#f5f5f5",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          background: "#cccccc",
          borderRadius: "4px",
        },
        ".scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "#999999",
        },
      });
    },
  ],
};
