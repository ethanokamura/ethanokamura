import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
const { BUILD_TYPE } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export default defineConfig({
  site: BUILD_TYPE == 'production' ? 'https://paperwrld.github.io' : 'http://localhost:4321',
  // base: 'ethanokamura/',
  base: BUILD_TYPE == 'production' ? 'ethanokamura/' : 'dist/',
  output: 'static',
  integrations: [tailwind()],
});