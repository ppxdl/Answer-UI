import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['packages/**/*.test.{ts,js,vue}', 'packages/**/*.spec.{ts,js,vue}'],
    exclude: ['node_modules', 'dist', '.git'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['packages/**/*.{ts,vue}'],
      exclude: [
        'packages/**/*.d.ts',
        'packages/**/*.test.{ts,js,vue}',
        'packages/**/*.spec.{ts,js,vue}',
        'packages/**/index.{js,ts}',
        'packages/**/doc/**'
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      }
    },
    transformMode: {
      web: [/\.vue$/]
    },
    deps: {
      inline: ['@vue/runtime-core']
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'yuan-ui': resolve(__dirname, 'packages/index.js'),
      'yuan-ui/': resolve(__dirname, 'packages/')
    }
  }
});
