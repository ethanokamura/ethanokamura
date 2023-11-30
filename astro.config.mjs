import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://paperwrld.github.io',
  base: 'ethanokamura/',
  // output: 'static',
  integrations: [tailwind()],
  vite: {
    ssr: {
      noExternal: ['tailwind'],
    }
  }
});