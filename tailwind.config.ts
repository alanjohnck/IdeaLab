import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "download-button-gradient":"linear-gradient(90deg, rgba(0,29,36,0.8716736694677871) 0%, rgba(9,115,121,1) 0%, rgba(0,255,252,0.8632703081232493) 100%)"
      },
    },
  },
  plugins: [],
};
export default config;
