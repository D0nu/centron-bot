const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Aeonik', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        ...defaultTheme.screens,
        'r540x720' : { raw: '(min-width:540px) and (max-width: 540px) and (max-height: 720px)'},

        'r853x1280' : { raw: '(min-width:853px) and (max-width: 853px) and (max-height: 1280px)'},

        'r912x1368' : { raw: '(min-width:912px) and (max-width: 912px) and (max-height: 1368px)'},
        // Exact resolution: 1024 x 600
        'r1024x600': { raw: '(min-width: 1024px) and (max-width: 1024px) and (max-height: 600px)' },

        // Exact resolution: 1240 x 800
        'r1280x800': { raw: '(min-width: 1280px) and (max-width: 1280px) and (max-height: 800px)' },

        // Exact resolution: 1024 x 1366
        'r1024x1366': { raw: '(min-width: 1024px) and (max-width: 1024px) and (max-height: 1366px)' },
      },
    },
  },
  plugins: [],
};
