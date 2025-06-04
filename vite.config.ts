import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import vitePluginSvgr from "vite-plugin-svgr";
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;
// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react(),vitePluginSvgr({
      svgrOptions:{
          plugins:["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
          svgoConfig: {
              floatPrecision: 2,
          },
      }
  }),
      vanillaExtractPlugin()],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
    resolve:{
      alias:{
          '@': path.resolve(__dirname, './src'),
          '@styles': path.resolve(__dirname, './src/styles'),
          '@types': path.resolve(__dirname, './src/types'),
          '@components': path.resolve(__dirname, './src/components'),
      }
    },
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
