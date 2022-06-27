/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'black-1': '#000000',
      'black-2': '#333333',
      'blue-1': '#002D63',
      'blue-2': '#00A1E6',
      'green-1': '#019501',
      'green-2': '#ECFBEC',
      'grey-1': '#F5F5F5',
      'grey-2': '#757575',
      'grey-3': '#DDDDDD',
      'orange-1': '#EE8F13',
      'orange-2': '#FFFBE8',
      'red-1': '#D80000',
      'red-2': '#FFE8E8',
      'white-1': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
    },
    extend: {
      animation: {
        'pulse-fast': 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
