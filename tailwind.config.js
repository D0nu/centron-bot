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
        
        // ✅ Correct: Shows on 940px and above (no max-width limit)
        'desktop-940': '940px',
        'view-867': { raw: '(min-width:867px) and (max-width: 1023px)'},
        
        // Add landscape variants
        'landscape': { raw: '(orientation: landscape)' },
        'landscape-md': { raw: '(orientation: landscape) and (max-width: 1024px)' },
        
        // Your existing custom resolutions
        'r412x915': { raw: '(min-width:412px) and (max-width: 412px) and (max-height: 915px)'},
        'r430x932': { raw: '(min-width:430px) and (max-width: 430px) and (max-height: 932px)'},
        'r540x720': { raw: '(min-width:540px) and (max-width: 540px) and (max-height: 720px)'},
        'r853x1280': { raw: '(min-width:853px) and (max-width: 853px) and (max-height: 1280px)'},
        'r912x1368': { raw: '(min-width:912px) and (max-width: 912px) and (max-height: 1368px)'},
        'r1024x600': { raw: '(min-width: 1024px) and (max-width: 1024px) and (max-height: 600px)' },
        'r1280x800': { raw: '(min-width: 1280px) and (max-width: 1280px) and (max-height: 800px)' },
        'r1024x1366': { raw: '(min-width: 1024px) and (max-width: 1024px) and (max-height: 1366px)' },
      },
    },
  },
  plugins: [],
};