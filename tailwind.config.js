const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    //"./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.teal['700'],
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
  darkMode: 'class',
  //purge: {
    //enabled: process.env.NODE_ENV === 'production',
    //content: [
      //'components/**/*.vue',
      //'layouts/**/*.vue',
      //'pages/**/*.vue',
      //'plugins/**/*.js',
      //'nuxt.config.js'
    //],
    //options: {
      //whitelist: [
        //'dark-mode',
        //''
      //]
    //}
  //},
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};
