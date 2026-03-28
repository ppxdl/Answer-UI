import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import Dts from "vite-plugin-dts";
import { resolve } from "path";
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    Dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.json",
      outputDir: "dist/types",
      rollupTypes: true,
      exclude: [
        "node_modules",
        "dist",
        "**/*.spec.ts",
        "**/*.test.ts",
        "docs/.vitepress/**",
      ],
    }),
  ],
  build: {
    rollupOptions: {
      external: ["vue", "highlight.js", "sass"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
        extend: true,
      },
    },
    lib: {
      entry: "./packages/index.js",
      name: "answer-ui",
      formats: ["es", "umd"],
      fileName: (format) => `answer-ui.${format}.js`,
    },
    minify: "esbuild",
    minifySyntax: true,
    cssCodeSplit: false, // 不分割 CSS，确保所有样式合并
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "answer-ui": resolve(__dirname, "packages/index.js"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/variables.scss" as *;',
      },
    },
  },
});
