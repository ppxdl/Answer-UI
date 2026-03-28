# Message 消息提示

用于展示全局的提示信息。

<script setup>
import { Message } from '../../packages/index.js'
import mButton from '../../packages/button/index.vue'

const handleInfo = () => {
  Message.info('这是一条消息提示')
}
const handleSuccess = () => {
  Message.success('这是一条成功消息')
}
const handleWarning = () => {
  Message.warning('这是一条警告消息')
}
const handleError = () => {
  Message.error('这是一条错误消息')
}
const handleClose = () => {
  Message.info('3秒后自动关闭', { duration: 3000 })
}
</script>

## 不同类型

<div class="demo-preview">
  <m-button @click="handleSuccess">成功</m-button>
  <m-button @click="handleWarning">警告</m-button>
  <m-button @click="handleError">错误</m-button>
  <m-button @click="handleInfo">信息</m-button>
</div>

::: details 查看代码
```vue
<template>
  <m-button @click="handleSuccess">成功</m-button>
  <m-button @click="handleWarning">警告</m-button>
  <m-button @click="handleError">错误</m-button>
  <m-button @click="handleInfo">信息</m-button>
</template>

<script setup>
import { Message } from 'yuan-ui-vue3'

const handleSuccess = () => {
  Message.success('这是一条成功消息')
}

const handleWarning = () => {
  Message.warning('这是一条警告消息')
}

const handleError = () => {
  Message.error('这是一条错误消息')
}

const handleInfo = () => {
  Message.info('这是一条消息提示')
}
</script>
```
:::

## 手动关闭

<div class="demo-preview">
  <m-button @click="handleClose">手动关闭</m-button>
</div>

::: details 查看代码
```vue
<template>
  <m-button @click="handleClose">手动关闭</m-button>
</template>

<script setup>
import { Message } from 'yuan-ui-vue3'

const handleClose = () => {
  Message.info('3秒后自动关闭', { duration: 3000 })
}
</script>
```
:::

## API

### Message 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| Message.info | 显示普通消息 | `message, options` |
| Message.success | 显示成功消息 | `message, options` |
| Message.warning | 显示警告消息 | `message, options` |
| Message.error | 显示错误消息 | `message, options` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| duration | 显示时长(毫秒) | `number` | `3000` |
| closable | 是否显示关闭按钮 | `boolean` | `false` |
