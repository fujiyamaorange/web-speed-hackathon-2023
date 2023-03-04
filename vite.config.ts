import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import topLevelAwait from 'vite-plugin-top-level-await';

import { getFileList } from './tools/get_file_list';

const publicDir = path.resolve(__dirname, './public');
const getPublicFileList = async (targetPath: string) => {
  const filePaths = await getFileList(targetPath);
  const publicFiles = filePaths
    .map((filePath) => path.relative(publicDir, filePath))
    .map((filePath) => path.join('/', filePath));

  return publicFiles;
};

export default defineConfig(async () => {
  const videos = await getPublicFileList(path.resolve(publicDir, 'videos'));

  return {
    build: {
      // assetsInlineLimit: 20480,
      // デフォルトの値にする
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      minify: true,
      // デフォルトが0なので設定しない
      // rollupOptions: {
      //   output: {
      //     experimentalMinChunkSize: 40960,
      //   },
      // },
      target: 'chrome87',
    },
    plugins: [
      react(),
      // TODO: トップレベルawait使っているかどうか確認
      topLevelAwait(),
      ViteEjsPlugin({
        module: '/src/client/index.tsx',
        title: '買えるオーガニック',
        videos,
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