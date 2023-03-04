import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig(async () => {
  // const videos = await getPublicFileList(path.resolve(publicDir, 'videos'));

  return {
    build: {
      // assetsInlineLimit: 20480,
      // デフォルトの値にする
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      minify: true,
      reportCompressedSize: false,
      // デフォルトが0なので設定しない
      // rollupOptions: {
      //   output: {
      //     experimentalMinChunkSize: 40960,
      //   },
      // },
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom']
          }
        },
        plugins: [
          visualizer(),
        ],
      },
      target: 'chrome87'
    },
    plugins: [
      react(),
      // TODO: トップレベルawait使っているかどうか確認
      topLevelAwait(),
      ViteEjsPlugin({
        module: '/src/client/index.tsx',
        title: '買えるオーガニック',
      }),
    ],
  };
});


// dist/index.html                          0.64 kB
// dist/assets/canvaskit-2a9e3015.wasm  6,836.23 kB
// dist/assets/index-ec4c69a8.js        8,940.68 kB │ gzip: 3,814.77 kB

// (!) Some chunks are larger than 500 kBs after minification. Consider:
// - Using dynamic import() to code-split the application
// - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
// - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.