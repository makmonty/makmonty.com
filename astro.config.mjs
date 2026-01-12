import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://makmonty.com',
  integrations: [ sitemap(), vue() ]
});