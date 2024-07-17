import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
//import vitePluginRequire from 'vite-plugin-require'
//import requireSupport from 'vite-plugin-require-support'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    //vitePluginRequire(), 
    //requireSupport({filters: /.ts$|.js$|.tsx$|.vue$/})
  ],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
