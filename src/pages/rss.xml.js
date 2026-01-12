import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: 'Angel’s Blog',
    // `<description>` field in output xml
    description: 'My personal blog with my aloud thoughts',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: await pagesGlobToRssItems(import.meta.glob('./blog/*.{md,mdx}'))
  });
}
