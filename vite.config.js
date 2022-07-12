import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess';
import replace from '@rollup/plugin-replace';

import conf from './config.json' assert {type: 'json'};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: preprocess()
    }),

    replace({
      env_isProd: conf.is_prod,
      env_api_url: conf.is_prod ? conf.prod_url : conf.dev_url
    })

  ],
  /* build: {
    outDir: "../public"
  } */
})
