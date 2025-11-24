/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        solarYellow: '#FFB703',
        ecoGreen: '#2A9D8F',
        efficiencyBlue: '#264653',
        midnight: '#0B1F32'
      }
    }
  },
  plugins: []
};

