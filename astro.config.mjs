// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  build: {
    inlineStylesheets: 'always'
  },
  image: {
    remotePatterns: [{ protocol: "https://raw.githubusercontent.com/Marco90v/**", hostname: "raw.githubusercontent.com" }],
  },
  adapter: netlify()
});