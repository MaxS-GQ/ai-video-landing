import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://maxs-gq.github.io/ai-video-landing/
export default defineConfig({
  site: 'https://maxs-gq.github.io',
  base: '/ai-video-landing',
  trailingSlash: 'ignore',
  build: {
    assets: 'assets/build',
  },
});
