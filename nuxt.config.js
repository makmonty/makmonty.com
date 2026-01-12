const fs = require('fs');
const path = require('path');

const generatePages = function(contentPath, baseRoute) {
  return fs.readdirSync(contentPath).map((file) => {
    return {
      route: `${baseRoute}/${path.parse(file).name}`, // Return the slug
      payload: require(`${contentPath}/${file}`)
    };
  });
};

export default {
  ssr: true,
  target: 'static',
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
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
    'node_modules/line-awesome/dist/line-awesome/css/line-awesome.css',
    'styles/style.scss'
  ],
  pageTransition: {
    name: 'route',
    duration: 100
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
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
      '/blog/**',
    ]
  },
  colorMode: {
    preference: 'light',
    classSuffix: ''
  },
  /*
  ** Build configuration
  */
  // build: {
  //   /*
  //   ** You can extend webpack config here
  //   */
  //   extend(config, ctx) {
  //   }
  // },
  generate: {
    routes() {
      return [
        ...generatePages('./assets/content/blog', '/blog'),
        ...generatePages('./assets/content/games', '/games'),
      ];
    }

  }
};
