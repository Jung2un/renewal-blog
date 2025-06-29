import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/**/dist/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: "540px",
      },
      scale: {
        101: '1.01',
      },
    },
  },
  plugins: [heroui()],
};

export default config;
