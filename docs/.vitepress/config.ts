import { defineConfig } from 'vitepress';
import { resolve } from 'path';

export default defineConfig({
  title: 'Answer UI',
  description: 'A Vue 3 + TypeScript Enterprise UI Component Library',
  lang: 'zh-CN',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  },
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/button' },
      { text: '指南', link: '/guide/quickstart' },
      { text: '更新日志', link: '/changelog' }
    ],
    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Space 间距', link: '/components/space' }
          ]
        },
        {
          text: '布局组件',
          items: [
            { text: 'Layout 布局', link: '/components/layout' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Select 选择器', link: '/components/select' },
            { text: 'Checkbox 多选框', link: '/components/checkbox' },
            { text: 'Radio 单选框', link: '/components/radio' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'DatePicker 日期选择器', link: '/components/date-picker' },
            { text: 'ColorPicker 颜色选择器', link: '/components/color-picker' }
          ]
        },
        {
          text: '导航组件',
          items: [
            { text: 'DropDown 下拉菜单', link: '/components/dropdown' },
            { text: 'Tabs 标签页', link: '/components/tabs' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'Table 表格', link: '/components/table' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: 'Modal 对话框', link: '/components/modal' },
            { text: 'Message 消息提示', link: '/components/message' },
            { text: 'Loading 加载', link: '/components/loading' }
          ]
        }
      ],
      '/guide/': [
        {
          text: '开发指南',
          items: [
            { text: '快速上手', link: '/guide/quickstart' },
            { text: '国际化', link: '/guide/i18n' },
            { text: '主题定制', link: '/guide/theme' },
            { text: '按需引入', link: '/guide/import' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/yuan-ui-vue3' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present yuan-ui'
    },
    outline: 'deep'
  },
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../packages'),
        'yuan-ui': resolve(__dirname, '../dist/yuan-ui.es.js'),
        'yuan-ui/': resolve(__dirname, '../packages/'),
        'yuan-ui-vue3': resolve(__dirname, '../dist/yuan-ui.es.js'),
        '@yuan-ui/dist': resolve(__dirname, '../dist/yuan-ui.es.js'),
        '@yuan-ui/style': resolve(__dirname, '../dist/index.css')
      }
    },
    optimizeDeps: {
      include: ['vue', '@vueuse/core']
    }
  }
});
