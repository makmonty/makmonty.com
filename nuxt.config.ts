import { defineNuxtConfig } from 'nuxt3'
import fs from 'fs';
import path from 'path';

interface RoutePayload {
  route: string;
  payload: any;
}

const generatePages = function(
  contentPath: string,
  baseRoute: string
): RoutePayload[] {
  return fs.readdirSync(contentPath).map(file => ({
    route: `${baseRoute}/${path.parse(file).name}`,
    payload: require(`${contentPath}/${file}`)
  }));
};

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  buildModule: ['@nuxtjs/tailwindcss'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  meta: {
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
  css: [
    '@/node_modules/line-awesome/dist/line-awesome/css/line-awesome.css',
    '@/styles/style.scss'
  ],
  colorMode: {
    classSuffix: ''
  },
  generate: {
    async routes() {
      return [
        ...generatePages('./assets/content/blog', '/blog'),
        ...generatePages('./assets/content/games', '/games'),
      ];
    }
  },
  routes: {
    '*': { static: true }
  }
});
