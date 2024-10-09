import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  fontFamily: {
    sans: ["Inter var", "ui-sans-serif", "system-ui"],
  },
  colors: {
    yellow600: "#FFAF14",
    yellow500: "#FFC001",
    yellow400: "#FFCE20",
    yellow300: "#FFE587",
    yellow200: "#FFF0C3",
    yellow100: "#FFF9E7",

    purple600: "#5429EF",
    purple500: "#1E51F9",
    purple400: "#0571FF",
    purple300: "#8A77FF",
    purple200: "#B5A9FF",
    purple100: "#EAECFF",

    success600: "#007D3A",
    success500: "#00AB56",
    success400: "#2DC26D",
    success300: "#78DA90",
    success200: "#D7FAE0",
    success100: "#EFFFF4",

    warning600: "#FF8B00",
    warning500: "#FFAB00",
    warning400: "#FFCD4D",
    warning300: "#FFE380",
    warning200: "#FFF0B3",
    warning100: "#FFFAE6",

    error600: "#B21907",
    error500: "#DE3618",
    error400: "#FE613F",
    error300: "#FFA690",
    error200: "#FFA690",
    error100: "#FFF2F0",

    additional600: "#2F338C",
    additional500: "#5656D8",
    additional400: "#6C6CFA",
    additional300: "#8F8FFF",
    additional200: "#C9C9FF",
    additional100: "#E0E3FF",

    "ink-basic": "#212B36",
    "ink-light": "#314154",
    "ink-lighter": "#727F8E",
    "ink-lightest": "#919EAB",
    "sky-basic": "#DBDFE2",
    "sky-light": "#E7EAEC",
    "sky-lighter": "#F4F6F8",
    "sky-lightest": "#F9FAFB",
  },
  fontSize: {
    caption: ["0.75rem", "1.125rem"] /* 12px, 18px */,
    "sub-body": ["0.875rem", "1.25rem"] /* 14px, 20px */,
    base: ["1rem", "1.5rem"] /* 16px, 24px */,
    h5: ["1.125rem", "1.625rem"] /* 18px, 26px */,
    h4: ["1.25rem", "1.75rem"] /* 20px, 28px */,
    h3: ["1.5rem", "2.125rem"] /* 24px, 34px */,
    h2: ["2rem", "2.75rem"] /* 32px, 44px */,
    h1: ["2.5rem", "3.5rem"] /* 40px, 56px */,
  },

  opacity: {
    15: ".15",
  },
  spacing: {
    "1/2": "6px",
    "6.5": "26px",
    15: "60px",
    25: "100px",
    26: "104px",
    30: "120px",
    37: "148px",
    38: "152px",
    45: "180px",
  },
  container: {
    center: true,
    screen: {
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1280px",
    },
  },
  listStyleType: {
    none: "none",
    disc: "disc",
    decimal: "decimal",
    square: "square",
    circle: "circle",
    roman: "upper-roman",
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        /* Hide scrollbar for Chrome, Safari and Opera */
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },

        /* Hide scrollbar for IE, Edge and Firefox */
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": " none" /* Firefox */,
        },
      });
    }),
  ],
};
export default config;
