# 按需引入

在项目中按需引入 Answer UI 组件可以有效减少打包体积。

## 自动按需引入

使用 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 可以自动按需引入组件：

```bash
npm install -D unplugin-vue-components
```

配置 Vite：

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite';
import { AnswerUIResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    Components({
      resolvers: [AnswerUIResolver()],
    }),
  ],
});
```

## 手动按需引入

```ts
import { createApp } from 'vue';
import { mButton, mInput } from 'yuan-ui';
import 'yuan-ui/styles/index.css'; // 引入样式
import App from './App.vue';

const app = createApp(App);

app.use(mButton);
app.use(mInput);
app.mount('#app');
```

这样可以根据需要只引入特定组件，减少最终打包体积。