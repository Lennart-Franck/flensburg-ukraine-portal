// tailwind.config.js
module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#004F9F',
          secondary: '#3499FF',
          accent: '#EFDE43',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
    ],
  },
}

