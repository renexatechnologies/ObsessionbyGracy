/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary": "#695a67", "surface-tint": "#725572", "on-secondary-container": "#6d5e6b", 
        "on-primary-fixed-variant": "#593d5a", "secondary-fixed-dim": "#d4c1d1", "on-background": "#1e1b1c", "primary-fixed": 
        "#fdd7fb", "on-tertiary-fixed-variant": "#424a23", "outline": "#7e747c", "on-secondary": "#ffffff", "secondary-fixed": 
        "#f1dded", "on-tertiary-fixed": "#171e00", "on-primary-container": "#100014", "primary-container": "#8c6d8c", 
        "inverse-on-surface": "#f6eff1", "surface-variant": "#e8e1e3", "error": "#ba1a1a", "surface-container-low": "#f9f2f4", 
        "on-secondary-fixed-variant": "#50424f", "on-error-container": "#93000a", "on-primary-fixed": "#2a132c", 
        "outline-variant": "#cfc3cb", "on-tertiary": "#ffffff", "primary-fixed-dim": "#dfbbde", "tertiary-fixed": "#dee8b3", 
        "on-tertiary-container": "#ffffff", "tertiary": "#596238", "on-error": "#ffffff", "surface": "#fff7f9", "error-container": 
        "#ffdad6", "surface-dim": "#dfd8da", "surface-container-highest": "#e8e1e3", "on-primary": "#ffffff", 
        "tertiary-container": "#727b4f", "on-surface": "#1e1b1c", "background": "#fff7f9", "surface-container-high": "#eee6e8", 
        "on-surface-variant": "#4c444b", "inverse-primary": "#dfbbde", "tertiary-fixed-dim": "#c2cb99", "inverse-surface": 
        "#332f31", "surface-container-lowest": "#ffffff", "surface-bright": "#fff7f9", "on-secondary-fixed": "#231823", 
        "primary": "#725572", "surface-container": "#f3ecee", "secondary-container": "#eedaea"
      },
      borderRadius: {
        DEFAULT: "1rem", lg: "2rem", xl: "3rem", full: "9999px"
      },
      spacing: {
        "stack-md": "32px", "container-max": "1200px", "unit": "8px", 
        "stack-sm": "16px", "margin-desktop": "64px", "gutter": "24px", "margin-mobile": "20px", "stack-lg": "64px"
      },
      fontFamily: {
        "body-lg": ["Inter"], "label-md": ["Inter"], "headline-md": ["Noto Serif"], "headline-xl": ["Noto Serif"], 
        "headline-lg": ["Noto Serif"], "button": ["Inter"], "body-md": ["Inter"], "headline": ["Noto Serif"], "display": 
        ["Noto Serif"], "body": ["Inter"], "label": ["Inter"]
      },
      fontSize: {
        "body-lg": ["18px", {lineHeight: "1.6", fontWeight: "400"}], 
        "label-md": ["14px", {lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "500"}], 
        "headline-md": ["24px", {lineHeight: "1.3", fontWeight: "400"}], 
        "headline-xl": ["48px", {lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "400"}], 
        "headline-lg": ["32px", {lineHeight: "1.2", fontWeight: "400"}], 
        "button": ["15px", {lineHeight: "1", letterSpacing: "0.02em", fontWeight: "600"}], 
        "body-md": ["16px", {lineHeight: "1.6", fontWeight: "400"}]
      }
    },
  },
  plugins: [],
}
