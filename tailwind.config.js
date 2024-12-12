/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "410px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      "desktop-lg": "1440px",
      "desktop-xl": "1536px",
    },
    colors: {
      // Basic colors
      background: "#F9FAFB",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      primaryLightGray: "#F5F5F5",

      // Main colors
      primary: "#5D5FEF",
      primaryLight: "#F0F9FF",
      primaryDark: "#737791",
      secondary: "#636364",
      accent: "#E62875",
      divider: "#EAEAEA",
      success: "#46CE6C",

      checkoutGray: "#F1F1F1",
      checkoutPrimary: "#292756",

      // Additional colors
      lightGray: "#B1B1B1",
      lightGreen: "#F0FDF4",
      lightBlue: "#F0F9FF",

      paywallGray: "#F2F2F2",

      //Review
      reviewRed: "#EA4335",
      reviewYellow: "#FFF2E2",
      reviewPurple: "#BF83FF",
      reviewLightLavender: "#FAF5FF",
      reviewLightPink: "#FFF5F9",
      reviewDarkPurple: "#444A6D",

      darkGray: "#444A6D",

      // Custom colors
      authBlue: "#292756",
      modalGray: "rgba(0, 0, 0, 0.25)",

      // Action button colors
      actionButtonBackground: "#F5F5F5",
      actionButtonBorder: "#D1D2DA",

      //Table colors
      tablePrimary: "#0095FF",
      tableSuccess: "#00E58F",
      tableWarning: "#FF8900",
      tableDanger: "#FA5A7D",

      subscriptionAccent: "#F5AE23",
    },
    extend: {
      borderRadius: {
        "2xs": "0.25rem",
        default: "1.25rem",
      },
      gap: {
        3.5: "0.875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        68: "17.5rem",
        74: "19.5rem",
        92: "23.5rem",
      },
      margin: {
        3.5: "0.875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        9.5: "2.375rem",
        14.5: "3.6875rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        30.5: "7.8125rem", // 125px
        68: "17.5rem",
        74: "19.5rem",
        92: "23.5rem",
      },
      padding: {
        3.5: "0.875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        14.5: "3.6875rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        68: "17.5rem",
        74: "19.5rem",
        92: "23.5rem",
      },
      height: {
        0.25: "1px",
        3.5: "0.875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        10.5: "2.625rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        25: "6.563rem",
        26.5: "6.6875rem", // 107px
        30: "7.5rem",
        68: "17.5rem",
        74: "19.5rem",
        92: "23.5rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        136: "34rem",
        "device-screen": "100dvh",
        dashboardPaywall: "calc(100vh - 9rem)",
      },
      width: {
        0.25: "1px",
        3.5: "0.875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        25: "6.563rem",
        30: "7.5rem",
        34: "134px",
        26.5: "6.6875rem", // 107px
        30.5: "7.8125rem", // 125px
        65: "16.25rem", // 260px
        66: "17.1875rem", // 275px
        68: "17.5rem",
        72: "18rem", // 288px
        73: "18.25rem", // 292px
        74: "19.5rem",
        92: "23.5rem",
        98: "24.7rem",
        112: "25rem",
        128: "32rem",
        136: "34rem",
      },
      minHeight: {
        15: "3.75rem",
        22: "5.5rem",
        30: "7.5rem",
        136: "34rem",
      },
      minWidth: {
        22: "5.5rem",
        30: "7.5rem",
        136: "34rem",
      },
      maxHeight: {
        22: "5.5rem",
        30: "7.5rem",
        128: "32rem",
        136: "34rem",
        "backstage-preview": "calc(100dvh - 8.5rem)",
        "backstage-list-preview": "1048px",
      },
      maxWidth: {
        22: "5.5rem",
        30: "7.5rem",
        69: "17.25rem",
        70: "17.5rem",
        71: "17.75rem",
        136: "34rem",
      },
      inset: {
        3.5: "0.875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        38: "9.5rem",
        68: "17.5rem",
        82: "20.5rem",
      },

      aspectRatio: {
        portrait: "9/16",
      },
      zIndex: {
        999: 999,
      },
      keyframes: {
        "appear-dropdown": {
          "0%": { maxHeight: "8px", maxWidth: "8px" },
          "100%": { maxHeight: "100%", maxWidth: "100%" },
        },
        "disappear-dropdown": {
          "0%": { maxHeight: "100%", maxWidth: "100%" },
          "100%": { maxHeight: "8px", maxWidth: "8px" },
        },
        "appear-dropdown-item": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "appear-bottom-sheet": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "disappear-bottom-sheet": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        "appear-modal": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "disappear-modal": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "appear-dropdown": "appear-dropdown 0.2s ease-in",
        "disappear-dropdown": "disappear-dropdown 0.2s linear",
        "appear-dropdown-item": "appear-dropdown-item 0.4s ease-in",
        "appear-bottom-sheet": "appear-bottom-sheet 0.3s ease-in-out",
        "disappear-bottom-sheet": "disappear-bottom-sheet 0.3s ease-in-out",
        "appear-modal": "appear-modal 0.3s ease-in-out",
        "disappear-modal": "disappear-modal 0.3s ease-in-out",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
