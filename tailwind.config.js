module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#FFFFFF',
      red: '#c63f3b',
      purple: '#7e5bef',
      pink: '#e5898f',
      orange: '#ffa301',
      green: '#13ce66',
      yellow: '#ffa301',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '5rem',
    },
    extend: {
      lineHeight: {
        sm: '5rem',
      },
      backgroundImage: () => ({
        'background-default':
          "url('https://rollingstone.uol.com.br/media/_versions/rick-morty-temporada-4_widelg.jpg')",
        'logo-mobile': "url('@/assets/logo_completa_mobile.png')",
      }),
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
