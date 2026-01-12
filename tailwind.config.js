const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.teal['500'],
        dark: colors.gray['900'],
        light: colors.white
      }
    },
    darkSelector: '.dark-mode'
  },
  variants: {
    backgroundColor: ['hover', 'dark'],
    borderColor: ['hover', 'dark'],
    textColor: ['hover', 'dark']
  },
  experimental: {
    darkModeVariant: true
  },
  dark: 'class',
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
