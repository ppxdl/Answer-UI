# Answer UI

> A Vue 3 + TypeScript Enterprise UI Component Library

[![npm version](https://img.shields.io/npm/v/answer-ui.svg)](https://www.npmjs.com/package/answer-ui)
[![license](https://img.shields.io/npm/l/answer-ui.svg)](https://github.com/ppxdl/Answer-UI/blob/main/LICENSE)

Answer UI 是一个基于 Vue 3 和 TypeScript 的企业级 UI 组件库，专为中后台管理系统设计。

## ✨ 特性

- 🚀 **基于 Vue 3** - 使用 Composition API 和 TypeScript
- 🎨 **主题定制** - 支持灵活的主题色和样式定制
- 🌍 **国际化** - 内置多语言支持
- 📦 **按需引入** - 支持自动按需引入，减小打包体积
- 🛠️ **TypeScript** - 完整的 TypeScript 支持
- 📱 **响应式** - 完美适配移动端和桌面端

## 📦 安装

```bash
# npm
npm install answer-ui

# yarn
yarn add answer-ui

# pnpm
pnpm add answer-ui
```

## 🚀 快速开始

### 完整引入

```javascript
import { createApp } from 'vue'
import AnswerUI from 'answer-ui'
import 'answer-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(AnswerUI)
app.mount('#app')
```

### 按需引入

使用 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 自动按需引入：

```bash
npm install -D unplugin-vue-components
```

配置 Vite：

```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { AnswerUIResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [AnswerUIResolver()],
    }),
  ],
})
```

## 🎯 组件列表

### 基础组件
- Button 按钮
- Input 输入框
- Checkbox 复选框
- Radio 单选框
- Select 选择器
- Switch 开关

### 布局组件
- Layout 布局
- Space 间距
- Grid 栅格

### 反馈组件
- Loading 加载
- Message 消息
- Modal 对话框
- Drawer 抽屉

### 数据展示
- Table 表格
- Progress 进度条
- Badge 徽章

### 导航组件
- Menu 菜单
- Tabs 标签页
- Pagination 分页

## 🎨 主题定制

Answer UI 支持灵活的主题定制：

```javascript
import { createApp } from 'vue'
import AnswerUI from 'answer-ui'

const app = createApp(App)

app.use(AnswerUI, {
  theme: {
    primary: '#0e80eb',
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
    info: '#1890ff',
  },
})
```

## 🌍 国际化

支持多种语言：

```javascript
import { createApp } from 'vue'
import AnswerUI from 'answer-ui'
import zhCN from 'answer-ui/locale/zh-CN'

const app = createApp(App)

app.use(AnswerUI, {
  locale: zhCN,
})
```

## 📖 文档

- [在线文档](https://ppxdl.github.io/Answer-UI/)
- [组件演示](https://ppxdl.github.io/Answer-UI/)

## 🤝 贡献

欢迎贡献代码！请查看 [贡献指南](https://github.com/ppxdl/Answer-UI/blob/main/CONTRIBUTING.md)。

## 📄 许可证

[MIT](https://github.com/ppxdl/Answer-UI/blob/main/LICENSE)

## 🔗 链接

- [GitHub](https://github.com/ppxdl/Answer-UI)
- [NPM](https://www.npmjs.com/package/answer-ui)
- [更新日志](https://github.com/ppxdl/Answer-UI/blob/main/CHANGELOG.md)