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
      orange: '#fef1e2',
      green: '#13ce66',
      yellow: '#ffa301',
      'yellow-ligth': '#fedba1',
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
      md: '1.5rem',
      lg: '5rem',
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      lineHeight: {
        sm: '5rem',
      },
      backgroundImage: () => ({
        'background-default':
          "url('https://rollingstone.uol.com.br/media/_versions/rick-morty-temporada-4_widelg.jpg')",
        'home-mobile': "url('@/assets/bg_home_mobile.jpeg')",
        'logo-mobile': "url('@/assets/logo_completa_mobile.png')",

        'icon-contrato': "url('@/assets/icons/menu_contrato.png')",
        'icon-marcador-menu': "url('@/assets/icons/marcador_menu.png')",
        'icon-devolucao': "url('@/assets/icons/menu_devolucao.png')",
        'icon-extrato': "url('@/assets/icons/menu_extrato.png')",
        'icon-produto': "url('@/assets/icons/menu_produtos.png')",
        'icon-calendar': "url('@/assets/icons/calendar.png')",
        'icon-clipboard': "url('@/assets/icons/clipboard.png')",
        'icon-easy-close': "url('@/assets/icons/eye_close_bkp.svg')",
        'icon-easy': "url('@/assets/icons/eye_open_bkp.svg')",
        'icon-home': "url('@/assets/icons/home.svg')",
        'icon-back': "url('@/assets/icons/back.svg')",
      }),
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
