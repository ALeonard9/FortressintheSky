import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ALeonard9.github.io',
  base: '/FortressintheSky',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'file',
  },
});
