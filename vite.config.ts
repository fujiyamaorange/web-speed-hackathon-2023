import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
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
    ],
  };
});
