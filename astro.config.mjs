// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://qylosai.vercel.app',
  integrations: [tailwind({
    applyBaseStyles: false, // We import globals.css manually
  }), react(), sitemap()]
});