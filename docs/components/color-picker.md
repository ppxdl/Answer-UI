# ColorPicker 颜色选择器

用于选择颜色。

<script setup>
import { ref } from 'vue'
import mColorPicker from '../../packages/colorPicker/index.vue'

const color1 = ref('#1890ff')
const color2 = ref('#52c41a')
</script>

## 基础用法

<div class="demo-preview">
  <m-color-picker v-model="color1"></m-color-picker>
</div>

::: details 查看代码
```vue
<template>
  <m-color-picker v-model="color1"></m-color-picker>
</template>

<script setup>
import { ref } from 'vue'
const color1 = ref('#1890ff')
</script>
```
:::

## 带默认颜色

<div class="demo-preview">
  <m-color-picker v-model="color2" :defaultColor="'#52c41a'"></m-color-picker>
</div>

::: details 查看代码
```vue
<template>
  <m-color-picker v-model="color2" :defaultColor="'#52c41a'"></m-color-picker>
</template>
```
:::

## API

### ColorPicker Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 绑定值 | `string` | `''` |
| defaultColor | 默认颜色 | `string` | `'#000000'` |
| customClass | 自定义类名 | `string` | `''` |
| autoClose | 选择后是否自动关闭 | `boolean` | `false` |
