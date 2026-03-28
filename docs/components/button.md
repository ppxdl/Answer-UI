# Button 按钮

按钮用于触发一个操作，如提交表单、打开对话框等。

<script setup>
import { ref } from 'vue'
import mButton from '../../packages/button/index.vue'

const button1 = ref('default')
const buttonType = ref('primary')
const buttonSize = ref('default')
const roundButton = ref(false)
const disabledButton = ref(false)
</script>

## 基础用法

<div class="demo-preview">
  <m-button>默认按钮</m-button>
  <m-button type="primary">主要按钮</m-button>
  <m-button type="success">成功按钮</m-button>
  <m-button type="warning">警告按钮</m-button>
  <m-button type="danger">危险按钮</m-button>
  <m-button type="info">信息按钮</m-button>
</div>

::: details 查看代码
```vue
<template>
  <m-button>默认按钮</m-button>
  <m-button type="primary">主要按钮</m-button>
  <m-button type="success">成功按钮</m-button>
  <m-button type="warning">警告按钮</m-button>
  <m-button type="danger">危险按钮</m-button>
  <m-button type="info">信息按钮</m-button>
</template>
```
:::

## 禁用状态

<div class="demo-preview">
  <m-button disabled>默认按钮</m-button>
  <m-button type="primary" disabled>主要按钮</m-button>
  <m-button type="success" disabled>成功按钮</m-button>
  <m-button type="warning" disabled>警告按钮</m-button>
  <m-button type="danger" disabled>危险按钮</m-button>
</div>

::: details 查看代码
```vue
<template>
  <m-button disabled>默认按钮</m-button>
  <m-button type="primary" disabled>主要按钮</m-button>
</template>
```
:::

## 圆角按钮

<div class="demo-preview">
  <m-button round>默认圆角</m-button>
  <m-button type="primary" round>主要圆角</m-button>
  <m-button type="success" round>成功圆角</m-button>
</div>

::: details 查看代码
```vue
<template>
  <m-button round>默认圆角</m-button>
  <m-button type="primary" round>主要圆角</m-button>
</template>
```
:::

## 不同尺寸

<div class="demo-preview">
  <m-button size="large">大型按钮</m-button>
  <m-button>默认按钮</m-button>
  <m-button size="small">小型按钮</m-button>
  <m-button size="mini">迷你按钮</m-button>
</div>

::: details 查看代码
```vue
<template>
  <m-button size="large">大型按钮</m-button>
  <m-button>默认按钮</m-button>
  <m-button size="small">小型按钮</m-button>
  <m-button size="mini">迷你按钮</m-button>
</template>
```
:::

## 带图标

<div class="demo-preview">
  <m-button leftIcon="m-icon-search">搜索</m-button>
  <m-button rightIcon="m-icon-arrow-right">下一步</m-button>
</div>

::: details 查看代码
```vue
<template>
  <m-button leftIcon="m-icon-search">搜索</m-button>
  <m-button rightIcon="m-icon-arrow-right">下一步</m-button>
</template>
```
:::

## 加载中

<div class="demo-preview">
  <m-button loading>加载中</m-button>
  <m-button type="primary" loading>加载中</m-button>
</div>

::: details 查看代码
```vue
<template>
  <m-button loading>加载中</m-button>
  <m-button type="primary" loading>加载中</m-button>
</template>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 按钮类型 | `primary` \| `success` \| `warning` \| `danger` \| `info` \| `default` | `default` |
| size | 按钮尺寸 | `large` \| `medium` \| `small` \| `mini` | `medium` |
| disabled | 是否禁用 | `boolean` | `false` |
| round | 是否圆角 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| leftIcon | 左侧图标类名 | `string` | `''` |
| rightIcon | 右侧图标类名 | `string` | `''` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 按钮内容 |
