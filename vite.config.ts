import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import requireTransform from "vite-plugin-require-transform";
import path from "path";

// https://vitejs.dev/config/
const { resolve } = require("path");
export default defineConfig({
  plugins: [
    vue(),
    requireTransform({
      fileRegex: /.js$|.jsx$|.ts$/,
    }),
    vueJsx(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "src/icons")],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",

      /**
       * custom insert position
       * @default: body-last
       */
      inject: "body-last",

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: "__svg__icons__dom__",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/doubi-api": {
        target: "www.pkdoutu.com",
        rewrite: (path) => path.replace(/^\/doubi-api/, '')
      },
      '^/blogBoot': {
        target: "http://101.42.105.58:9527/",
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // '^/blogBoot': {
      //   target: "http://localhost:9527",
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // }
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        /**如果引入多个文件，可以使用
         * '@import "@/assets/scss/globalVariable1.scss";
         * @import"@/assets/scss/globalVariable2.scss";'
         **/
        additionalData:
          '@import "@/style/variable.scss";@import "@/style/global.scss";@import "@/style/theme.scss";@import "@/style/scss-variables.scss";',
      },
    },
  },
});
