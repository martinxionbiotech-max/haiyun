// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // Emit hreflang alternates for the translated funnel pages so search
      // engines discover /ru/, /es/ and /ar/ as translations, not duplicates.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ru: 'ru', es: 'es', ar: 'ar' },
      },
      // /search/ is noindex and its content is the index itself — submitting it
      // would put a duplicate-of-everything URL in front of crawlers.
      filter: (page) => !page.endsWith('/search/'),
    }),
  ],
  site: 'https://flourmillingpro.com',
  build: { inlineStylesheets: 'auto' },
});
