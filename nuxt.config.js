
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'styles/style.scss'
  ],
  pageTransition: {
    name: 'route',
    duration: 100
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/base-components',
    {
      src: 'plugins/vue-unicons',
      mode: 'client'
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
    '@nuxtjs/color-mode'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap'
  ],
  markdownit: {
    injected: true
  },
  sitemap: {
    hostname: 'https://makmonty.com',
    exclude: [
      '/blog',
      '/games'
    ]
  },
  colorMode: {
    preference: 'light'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    routes() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./assets/content/blog').map((file) => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/blog/${file}`)
        };
      });
    }

  }
};
