// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  env:{
    schema:{
      PUBLIC_SERVICE_ID: envField.string({context:"client", access: "public", optional: false}),
      PUBLIC_TEMPLATE_ID: envField.string({context:"client", access: "public", optional: false}),
      PUBLIC_KEY: envField.string({context:"client", access: "public", optional: false}),
    }
  },
  build: {
    inlineStylesheets: 'always'
  },
});