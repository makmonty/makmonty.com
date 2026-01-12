const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.teal['700'],
        dark: colors.gray['900'],
        light: colors.white
      }
    },
  },
  variants: {
    backgroundColor: ['hover', 'dark'],
    borderColor: ['hover', 'dark'],
    textColor: ['hover', 'dark']
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
