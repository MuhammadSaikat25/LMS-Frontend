import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:['class'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["var(--front-Poppins)"],
        Josefin: ["var(--front-Josefin)"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #010313, #010313, #24243e)',
        "gradient-radial": "radial-gradient(var--tw-gradient-stops)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%,var(--tw-gradient-stops))",
      },
      screens: {
        "1000px": "1000px",
        "1500px": "1500px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "800px": "800px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
export default config;
