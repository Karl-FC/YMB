/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
      wisdom: {
        ...require("daisyui/src/theming/themes")["garden"],
        "primary": "#92C7CF", //header ng table
        "secondary": "#DBDACC", //Backdrop ng mga card
        "accent": "#E5E1DA", // Yun navbar at focused columns ng table
        "neutral": "#EDECDD", //Background ng table at dropdowns
        "base-50": "#FFFFF7",
        "base-100": "#FEFDED", //Main background
        "base-200": "#E5E1DA", //Hover background ng table
        "info": "#AAD7D9", //Main buttons at results
        "success": "#C6EBC5",
        "warning": "#FFBE98",
        "error": "#FA7070",
      },
      coquette: {
        ...require("daisyui/src/theming/themes")["pastel"],
        "primary": "#EEB9E0",
        "secondary": "#F6DAF0",
        "accent": "#FFCCE7",
        "neutral": "#FDF2FA",
        "base-50": "#FDF2FA",
        "base-100": "#FCE9F6",
        "base-200": "#FFDDF4",
        "info": "#EED2FE",
        "success": "#C0DEBA",
        "warning": "#FDF4D0",
        "error": "#FFD19B",
        "base": "#EED2FE", // Kung alam ko lang kung ano classification sa input/forms
      },
      midnight: {
        ...require("daisyui/src/theming/themes")["dark"],
        "primary": "#393939",
        "secondary": "#191919", 
        "accent": "#191E24",
        "neutral": "#23282E",
        "base-50": "#23282E",
        "base-100": "#202020",
        "base-200": "#191E24",
        "info": "#393939",
        "success": "#102A5B",
        "warning": "#310046",
        "error": "#4B0304",
        "base-content": "#FFA500", //Default text
        "primary-content": "#FFA500",
      },
      three: {
        ...require("daisyui/src/theming/themes")["dark"],
        "primary": "#030F33",
        "secondary": "#000",
        "accent": "#2B0933",
        "neutral": "#2A233D",
        "base-50": "#23282E",
        "base-100": "#17021A",
        "base-200": "#2B0933",
        "info": "#02234D",
        "success": "#102A5B",
        "warning": "#310046",
        "error": "#4B0304",
        "base-content": "#8D79B3"
      },
      shrek: {
        ...require("daisyui/src/theming/themes")["garden"],
        "primary": "#D3CCA5",
        "secondary": "#d1ffdd",
        "accent": "#abffa4",
        "neutral": "#effff3",
        "base-50": "#effff3",
        "base-100": "#effff3",
        "base-200": "#ddffe6",
        "info": "#795A2D",
        "success": "#D5DE2E",
        "warning": "#B0C400",
        "error": "#523213",
      },
    },  'pastel','garden','dark', 'lemonade', 'autumn', 'bumblebee']
  }
}
