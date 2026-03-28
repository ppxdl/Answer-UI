# Switch 开关

表示两种相互对立的状态间的切换。

<script setup>
import { ref } from 'vue'
import mSwitch from '../../packages/switch/index.vue'

const switch1 = ref(false)
const switch2 = ref(false)
const switch3 = ref(false)
const switch4 = ref(false)
const switch5 = ref(false)
const switch6 = ref(false)
const switch7 = ref(false)
const switch8 = ref(false)
</script>

## 基础用法

<div class="demo-preview">
  <m-switch v-model="switch1"></m-switch>
</div>

::: details 查看代码
```vue
<template>
  <m-switch v-model="switch1"></m-switch>
</template>

<script setup>
import { ref } from 'vue'
const switch1 = ref(false)
</script>
```
:::

## 禁用状态

<div class="demo-preview">
  <m-switch v-model="switch2" disabled></m-switch>
  <m-switch v-model="switch3" disabled></m-switch>
</div>

::: details 查看代码
```vue
<template>
  <m-switch v-model="switch2" disabled></m-switch>
  <m-switch v-model="switch3" disabled></m-switch>
</template>
```
:::

## 带有文字

<div class="demo-preview">
  <m-switch v-model="switch4" activeText="开" inactiveText="关"></m-switch>
</div>

::: details 查看代码
```vue
<template>
  <m-switch v-model="switch4" activeText="开" inactiveText="关"></m-switch>
</template>
```
:::

## 不同尺寸

<div class="demo-preview">
  <m-switch v-model="switch5" size="large"></m-switch>
  <m-switch v-model="switch6"></m-switch>
  <m-switch v-model="switch7" size="small"></m-switch>
</div>

::: details 查看代码
```vue
<template>
  <m-switch v-model="switch5" size="large"></m-switch>
  <m-switch v-model="switch6"></m-switch>
  <m-switch v-model="switch7" size="small"></m-switch>
</template>
```
:::

## 加载状态

<div class="demo-preview">
  <m-switch v-model="switch8" loading></m-switch>
</div>

::: details 查看代码
```vue
<template>
  <m-switch v-model="switch8" loading></m-switch>
</template>
```
:::

## API

### Switch Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 绑定值 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| size | 尺寸 | `large` \| `medium` \| `small` | `medium` |
| activeText | 开启时的文字 | `string` | `''` |
| inactiveText | 关闭时的文字 | `string` | `''` |
| activeColor | 开启时的背景色 | `string` | `''` |
| inactiveColor | 关闭时的背景色 | `string` | `''` |
