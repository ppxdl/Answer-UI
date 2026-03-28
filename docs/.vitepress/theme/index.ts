import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import YuanUI from '../../../packages/index.js';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    app.use(YuanUI);
  }
} satisfies Theme;
