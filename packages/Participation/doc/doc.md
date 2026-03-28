---
version: 0.8.9
title: 贡献指南
---

# Answer UI 贡献指南

## 欢迎参与

首先，非常感谢您选择使用和贡献 Answer UI！Answer UI 是基于 Vue 3.2+ 开发的轻量级 UI 组件库，旨在提供更小的体积、更快的响应、更强的扩展性、更完美的支持和更友好的渲染体验。

任何一个开源项目的成长都离不开社区的共同努力。无论是提交 bug 报告、修复问题、添加新功能，还是改进文档，您的贡献都将对 Answer UI 的发展产生重要影响。

## 贡献流程

### 1. 环境准备

- **Node.js**: 16.0+ （推荐 18.0+）
- **npm**: 7.0+ 或 **yarn**: 1.22+
- **Vite**: 4.0+（项目已集成）

### 2. 克隆项目

```bash
# 1. Fork 仓库到自己的 GitHub 账号
# 2. 克隆 Fork 后的仓库
git clone https://github.com/[your-username]/answer-ui.git
cd answer-ui
git remote add upstream https://github.com/your-username/answer-ui.git

# 4. 切换到 dev 分支
git checkout dev
```

### 3. 安装依赖

```bash
npm install
# 或
yarn install
```

### 4. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

### 5. 开发与提交

1. **创建新分支**：从 dev 分支创建功能分支

   ```bash
   git checkout -b feature/[feature-name]
   # 或修复 bug
   git checkout -b fix/[bug-name]
   ```

2. **开发代码**：遵循代码规范，实现功能或修复 bug

3. **提交代码**：使用规范的 commit 信息

   ```bash
   git add .
   git commit -m "[ComponentName]: 简短描述"
   # 示例: git commit -m "Button: 修复按钮禁用状态样式问题"
   ```

4. **同步上游代码**：提交 PR 前，确保代码与上游 dev 分支同步

   ```bash
   git fetch upstream
   git rebase upstream/dev
   git push origin [your-branch]
   ```

5. **创建 Pull Request**：在 GitHub 上从您的分支向 Answer UI 的 dev 分支创建 PR

## 项目结构

```
answer-ui/
├── packages/           # 组件源码
│   ├── [component]/    # 组件目录
│   │   ├── index.vue   # 组件实现
│   │   ├── index.js    # 组件入口
│   │   └── doc/        # 组件文档
│   │       ├── doc.md  # 文档内容
│   │       └── demo.vue # 示例代码
│   └── index.js        # 整体入口
├── src/                # 官网源码
│   ├── const/          # 常量定义
│   ├── router/         # 路由配置
│   ├── components/     # 官网组件
│   └── views/          # 官网页面
├── tests/              # 测试文件
├── vite.config.js      # Vite 配置
└── package.json        # 项目配置
```

## 组件开发规范

### 1. 组件目录结构

```
[component]/
├── index.vue           # 组件实现
├── index.js            # 组件入口（必须）
└── doc/                # 文档目录（必须）
    ├── doc.md          # 组件文档（必须）
    ├── demo.vue        # 示例代码（必须）
    ├── Attributes.vue  # 属性说明（可选）
    └── Events.vue      # 事件说明（可选）
```

### 2. 组件入口文件

每个组件必须在 `index.js` 中导出，并包含 `install` 方法：

```javascript
import mButton from "./index.vue";

mButton.install = (app) => {
  app.component(mButton.name, mButton);
};

export default mButton;
```

### 3. 文档规范

- **doc.md**：使用 Markdown 编写，包含组件介绍、使用方法、配置项、事件等
- **demo.vue**：提供完整的使用示例
- **代码预览**：使用 `src/components/Preview.vue` 组件展示代码

### 4. 代码规范

- **ESLint**：遵循项目配置的 ESLint 规范
- **Vue 3**：使用 Composition API 和 `<script setup>` 语法糖
- **命名规范**：
  - 组件名：大驼峰命名（如 `mButton`）
  - 文件和目录名：小写字母，单词间用连字符连接（如 `date-picker`）
  - 变量名：小驼峰命名

- **样式规范**：
  - 使用 SCSS 预处理器
  - 遵循 BEM 命名规范
  - 使用项目统一的颜色变量

## 测试规范

### 1. 测试文件

- 测试文件存放于 `tests/` 目录
- 命名规范：`[component].spec.js`（如 `button.spec.js`）

### 2. 测试内容

每个组件的测试应包含：

- 初始化测试
- 渲染测试
- 属性测试
- 事件测试
- 插槽测试

### 3. 运行测试

```bash
npm run test
# 或
yarn test
```

## Issue 规范

### 提交 Issue 前

1. **搜索现有 Issue**：确保您要提交的问题尚未被他人提出
2. **检查是否为最新版本**：确认问题在最新版本中仍然存在

### Issue 内容

提交 Issue 时，请包含以下信息：

1. **问题描述**：清晰、简洁地描述问题
2. **复现步骤**：详细的操作步骤
3. **预期结果**：您期望的行为
4. **实际结果**：当前的错误行为
5. **环境信息**：
   - Answer UI 版本
   - Vue 版本
   - 操作系统
   - 浏览器
6. **复现链接**：推荐使用 CodeSandbox 或 JSFiddle 提供在线示例
7. **截图**：如有必要，提供相关截图

## Pull Request 规范

### PR 内容

提交 PR 时，请确保：

1. **标题清晰**：简明扼要地描述 PR 的目的
2. **描述详细**：
   - 解决了什么问题
   - 实现了什么功能
   - 如何测试
3. **关联 Issue**：如果 PR 是为了解决某个 Issue，请在描述中关联
4. **代码质量**：
   - 通过 ESLint 检查
   - 通过测试
   - 代码风格一致

### 构建测试

提交 PR 前，请确保：

```bash
# 构建组件库
npm run build
# 或
yarn build

# 构建官网
npm run build:html
# 或
yarn build:html
```

## 设计规范

### 1. 色彩系统

- **主色**：`#1890ff`（Ant Design 蓝色）
- **辅助色**：成功 `#52c41a`、警告 `#faad14`、错误 `#f5222d`
- **中性色**：各种灰度色值

### 2. 字体系统

- **字体家族**：系统默认字体
- **字号**：12px、14px、16px、18px、20px、24px

### 3. 间距系统

- **基础间距**：4px、8px、12px、16px、20px、24px、32px

### 4. 阴影系统

- **层级 1**：`0 2px 8px rgba(0, 0, 0, 0.09)`
- **层级 2**：`0 4px 16px rgba(0, 0, 0, 0.12)`

## 联系与沟通

- **GitHub Issues**：提交问题和建议
- **GitHub Discussions**：讨论功能和使用方法
- **贡献者社区**：欢迎加入我们的开发者社区

## 许可证

Answer UI 使用 MIT 许可证，详见 [LICENSE](https://github.com/your-username/answer-ui/blob/main/LICENSE) 文件。

## 致谢

感谢所有为 Answer UI 做出贡献的开发者和用户！您的支持和参与是 Answer UI 不断进步的动力。

---

让我们一起构建更美好的前端生态！
