import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        200: '#AFAEAE',
        300: '#9B9B9B',
        400: '#848383',
        500: '#6B6B6B',
        600: '#535252',
        700: '#3C3B3B',
        800: '#262626'
      },
      blue: {
        200: '#7392FF',
        300: '#4F75FF',
        400: '#476CF0',
        500: '#4062DB',
        600: '#3857C6',
        700: '#2B449D',
        800: '#243986'
      },
      yellow: {
        200: '#FFF3B1',
        300: '#FFEF9C',
        400: '#FFEB83',
        500: '#FFE768',
        600: '#FFDF35',
        700: '#FFD911',
        800: '#FAD204'
      },
      green: {
        200: '#D1FFC1',
        300: '#BBFFA3',
        400: '#A6FF87',
        500: '#8DFF65',
        600: '#71FF40',
        700: '#5BFB24',
        800: '#41FB00'
      },
    },
    extend: {
      fontFamily: {
        display: 'Inter, sans-serif',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
