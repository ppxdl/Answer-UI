# Layout 布局

用于构建页面布局。

<script setup>
import mRow from '../../packages/mrow/index.vue'
import mCol from '../../packages/mcol/index.vue'
</script>

## 基础用法

<div class="demo-preview">
  <m-row>
    <m-col :span="12">
      <div style="background: #f5f5f5; padding: 20px; text-align: center;">左侧内容</div>
    </m-col>
    <m-col :span="12">
      <div style="background: #f5f5f5; padding: 20px; text-align: center;">右侧内容</div>
    </m-col>
  </m-row>
</div>

::: details 查看代码
```vue
<template>
  <m-row>
    <m-col :span="12">
      <div style="background: #f5f5f5; padding: 20px;">左侧内容</div>
    </m-col>
    <m-col :span="12">
      <div style="background: #f5f5f5; padding: 20px;">右侧内容</div>
    </m-col>
  </m-row>
</template>
```
:::

## 不同比例

<div class="demo-preview">
  <m-row>
    <m-col :span="6">
      <div style="background: #f5f5f5; padding: 20px; text-align: center;">占6格</div>
    </m-col>
    <m-col :span="6">
      <div style="background: #f5f5f5; padding: 20px; text-align: center;">占6格</div>
    </m-col>
    <m-col :span="12">
      <div style="background: #f5f5f5; padding: 20px; text-align: center;">占12格</div>
    </m-col>
  </m-row>
</div>

::: details 查看代码
```vue
<template>
  <m-row>
    <m-col :span="6">
      <div style="background: #f5f5f5; padding: 20px;">占6格</div>
    </m-col>
    <m-col :span="6">
      <div style="background: #f5f5f5; padding: 20px;">占6格</div>
    </m-col>
    <m-col :span="12">
      <div style="background: #f5f5f5; padding: 20px;">占12格</div>
    </m-col>
  </m-row>
</template>
```
:::

## 带偏移

<div class="demo-preview">
  <m-row>
    <m-col :span="6" :offset="6">
      <div style="background: #f5f5f5; padding: 20px; text-align: center;">占6格，偏移6格</div>
    </m-col>
  </m-row>
</div>

::: details 查看代码
```vue
<template>
  <m-row>
    <m-col :span="6" :offset="6">
      <div style="background: #f5f5f5; padding: 20px;">占6格，偏移6格</div>
    </m-col>
  </m-row>
</template>
```
:::

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|

### Col Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| span | 占据的栅格数 (1-24) | `number` | `24` |
| offset | 左侧的间隔格数 | `number` | `0` |
