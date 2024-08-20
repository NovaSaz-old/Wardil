/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        zf: "344px", // Galaxy Z Fold
        ss: "360px",
        ss2: "375px", // IPhone SE
        ss3: "380px",
        ss4: "410px",
        sms: "454px",
        sms2: "500px",
        sm: "640px",
        ms: "704px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        // Your custom breakpoint
      },
    },
  },
  plugins: [],
};
