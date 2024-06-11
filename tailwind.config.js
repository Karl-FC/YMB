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
        "primary": "#92C7CF", //buttons
        "secondary": "#FBF4D9", //Backdrop ng mga card
        "accent": "#191E24", // Yun navbar
        "neutral": "#EDECDD", //Background ng table at dropdowns
        "base-50": "#FBFAE8",
        "base-100": "#fffffa", //Main background
        "base-200": "#E5E1DA", //Hover background ng table
        "info": "#AAD7D9", //Main buttons at results
        "success": "#C6EBC5",
        "warning": "#FFBE98",
        "error": "#FA7070",
        "base-content": "#000", //Default text
        "primary-content": "#fff",//Accent text
        "accent-content": "#FFF177",//Accent text
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
        "base-content": "#FFF177", //Default text
        "primary-content": "#FFA500",
        "accent-content": "#000",
      },
      midnight: {
        ...require("daisyui/src/theming/themes")["dark"],
        "primary": "#393939",
        "secondary": "#191919", 
        "accent": "#FFA500",
        "neutral": "#23282E",
        "base-50": "#23282E",
        "base-100": "#202020",
        "base-200": "#191E24",
        "info": "#393939",
        "success": "#102A5B",
        "warning": "#310046",
        "error": "#4B0304",
        "base-content": "#FFF177", //Default text
        "primary-content": "#FFA500",
        "accent-content": "#000",
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
        "base-content": "#FFF177", //Default text
        "primary-content": "#FFA500",
        "accent-content": "#000",
      },
      yellowish: {
        ...require("daisyui/src/theming/themes")["autumn"],
        "primary": "#D3CCA5",
        "secondary": "#d1ffdd",
        "accent": "#abffa4",
        "neutral": "#FBF4D9",
        "base-50": "#FBF4D9",
        "base-100": "#FBF4D9",
        "base-200": "#ddffe6",
        "info": "#795A2D",
        "success": "#D5DE2E",
        "warning": "#B0C400",
        "error": "#523213",
        "base-content": "#FFF177", //Default text
        "primary-content": "#FFA500",
        "accent-content": "#000",
      },
    },  'pastel','garden','dark', 'lemonade', 'autumn', 'bumblebee']
  }
}
