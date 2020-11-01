const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.teal['600'],
        dark: colors.gray['900'],
        light: colors.white
      }
    },
    darkSelector: '.dark-mode'
  },
  variants: {
    backgroundColor: ['hover', 'dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    borderColor: ['hover', 'dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
    textColor: ['hover', 'dark', 'dark-hover', 'dark-active', 'dark-placeholder']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: [
        'dark-mode',
        ''
      ]
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};
