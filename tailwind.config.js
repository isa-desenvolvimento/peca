module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
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
      pink: '#e4898e',
      pink2: '#e28689',
      pink3: '#e18487',
      pink4: '#f1999c',
      orange: '#fff0e1',
      green: '#13ce66',
      yellow: '#ffa300',
      'yellow-ligth': '#fedba1',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      md: '1.5rem',
      lg: '3rem',
      '6xl': '4.5rem',
      '8xl': '7rem',
    },
    extend: {
      fontFamily: {
        gotham: ['Gotham-Black'],
        manrope: ['Manrope', 'sans-serif'],
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      lineHeight: {
        sm: '5rem',
      },
      backgroundImage: () => ({
        'home-mobile': "url('@/assets/bg_home_mobile.jpeg')",
        'home-image': "url('@/assets/bg_home.jpg')",
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
        'icon-prancheta': "url('@/assets/prancheta.svg')",
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/typography'),
  ],
}
