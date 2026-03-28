# Input 输入框

用于输入文本内容。

<script setup>
import { ref } from 'vue'
import mInput from '../../packages/input/index.vue'

const inputValue = ref('')
const inputValue2 = ref('禁用状态')
const inputValue3 = ref('')
const clearableValue = ref('可清空')
</script>

## 基础用法

<div class="demo-preview">
  <m-input v-model="inputValue" placeholder="请输入内容" style="width: 200px;"></m-input>
</div>

::: details 查看代码
```vue
<template>
  <m-input v-model="value" placeholder="请输入内容"></m-input>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

## 禁用状态

<div class="demo-preview">
  <m-input v-model="inputValue2" placeholder="禁用状态" disabled style="width: 200px;"></m-input>
</div>

::: details 查看代码
```vue
<template>
  <m-input v-model="value" placeholder="禁用状态" disabled></m-input>
</template>
```
:::

## 可清空

<div class="demo-preview">
  <m-input v-model="clearableValue" placeholder="可清空" clearable style="width: 200px;"></m-input>
</div>

::: details 查看代码
```vue
<template>
  <m-input v-model="value" placeholder="可清空" clearable></m-input>
</template>
```
:::

## 不同尺寸

<div class="demo-preview">
  <m-input placeholder="大号" size="large" style="width: 200px;"></m-input>
  <m-input placeholder="默认" style="width: 200px;"></m-input>
  <m-input placeholder="小号" size="small" style="width: 200px;"></m-input>
</div>

::: details 查看代码
```vue
<template>
  <m-input placeholder="大号" size="large"></m-input>
  <m-input placeholder="默认"></m-input>
  <m-input placeholder="小号" size="small"></m-input>
</template>
```
:::

## 密码框

<div class="demo-preview">
  <m-input type="password" placeholder="请输入密码" showPassword style="width: 200px;"></m-input>
</div>

::: details 查看代码
```vue
<template>
  <m-input type="password" placeholder="请输入密码" showPassword></m-input>
</template>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 绑定值 | `string` | `''` |
| type | 输入框类型 | `text` \| `password` \| `textarea` | `text` |
| placeholder | 占位文本 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| showPassword | 是否显示切换密码图标 | `boolean` | `false` |
| size | 尺寸 | `large` \| `medium` \| `small` | `medium` |
