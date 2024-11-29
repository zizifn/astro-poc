// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
    enabled: true,
    // configPath: 'wrangler.json',
    // experimentalJsonConfig: true,
    // persist: './.cache/wrangler/v3',
    }
  }),
  integrations: [tailwind()],
});