import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://maxwilsonpereira.github.io',
  base: '/sensesschool',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: {
          pt: 'pt-BR',
          en: 'en',
        },
      },
      serialize(item) {
        const campusRoutes = {
          pt: 'https://maxwilsonpereira.github.io/sensesschool/nossa-casa/',
          en: 'https://maxwilsonpereira.github.io/sensesschool/en/campus/',
        };

        if (item.url === campusRoutes.pt || item.url === campusRoutes.en) {
          item.links = [
            { lang: 'pt-BR', url: campusRoutes.pt },
            { lang: 'en', url: campusRoutes.en },
          ];
        }

        return item;
      },
    }),
  ],
});
