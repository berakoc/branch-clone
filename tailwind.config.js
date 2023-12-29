/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'lunar-green': '#314438',
      pampas: '#f3eeea',
      'half-baked': '#8CC1D2',
      white: '#fff',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      serif: ['Frank Ruhl Libre', 'serif'],
    },
    extend: {
      textDecorationThickness: {
        3: '3px',
      },
      spacing: {
        18: '72px',
        410: '410px',
      },
      textUnderlineOffset: {
        28: '28px',
      },
    },
  },
  plugins: [],
};
