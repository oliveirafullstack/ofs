/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        redColor: "#e3646e",
        purpleColor: "#BB72e9",
        blueColor: "#3996db",
        greenColor: "#82bc4f",
        yellowColor: "#EABd5f",
        base_100: "#0D0e11",
        base_200: "#16181D",
        base_300: "#292C34",
        base_400: "#878EA1",
        base_500: "#c0c4ce",
        base_600: "#e2e4e9",
      },
      fontFamily: {
        sans: ["Maven Pro"],
        serif: ["Asap"],
        mono: ["Inconsolata"],
      },
      backgroundImage: {
        intro: "url('src/assets/images/bg-intro.png')",
        contacts: "url('src/assets/images/bg-contacts.png')",
      },
    },
  },
  plugins: [],
};
