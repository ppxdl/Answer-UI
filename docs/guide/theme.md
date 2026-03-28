# 主题定制

Answer UI 支持灵活的主题定制功能，可以自定义组件的主题色和其他样式变量。

## 默认主题色

Answer UI 的默认主题色配置：

```ts
{
  primary: '#0e80eb',
  success: '#52c41a',
  warning: '#faad14',
  error: '#ff4d4f',
  info: '#1890ff',
}
```

## 完整主题配置

在全局配置中设置主题：

```ts
import { createApp } from 'vue';
import AnswerUI from 'answer-ui';

const app = createApp(App);

app.use(YuanUI, {
  theme: {
    primary: '#1890ff',
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
    info: '#1890ff',
  },
});
```

## CSS 变量覆盖

如果需要更深度的定制，可以通过 CSS 变量覆盖默认样式：

```css
:root {
  --yuan-primary-color: #1890ff;
  --yuan-success-color: #52c41a;
  --yuan-warning-color: #faad14;
  --yuan-error-color: #ff4d4f;
  --yuan-info-color: #1890ff;
}
```

## 局部主题定制

针对特定组件进行主题定制：

```css
.yuan-button-primary {
  --button-bg-color: #1890ff;
  --button-border-color: #1890ff;
}
```