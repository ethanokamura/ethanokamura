import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
const { BUILD_TYPE } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export default defineConfig({
  site: BUILD_TYPE == 'https://paperwrld.github.io',
  // base: 'ethanokamura/',
  base: BUILD_TYPE == 'ethanokamura/',
  output: 'static',
  integrations: [tailwind()],
});