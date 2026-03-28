# Radio 单选框

用于在多个备选项中选中单个选项。

<script setup>
import { ref } from 'vue'
import mRadio from '../../packages/radio/index.vue'
import mRadioGroup from '../../packages/radio/index.vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radioGroup1 = ref('1')
const radioGroup2 = ref('1')
const radioGroup3 = ref('1')
</script>

## 基础用法

<div class="demo-preview">
  <m-radio v-model="radio1" label="1">选项一</m-radio>
  <m-radio v-model="radio1" label="2">选项二</m-radio>
  <m-radio v-model="radio1" label="3">选项三</m-radio>
</div>

::: details 查看代码
```vue
<template>
  <m-radio v-model="radio1" label="1">选项一</m-radio>
  <m-radio v-model="radio1" label="2">选项二</m-radio>
  <m-radio v-model="radio1" label="3">选项三</m-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio1 = ref('1')
</script>
```
:::

## 禁用状态

<div class="demo-preview">
  <m-radio v-model="radio2" label="1" disabled>禁用选项</m-radio>
  <m-radio v-model="radio2" label="2" disabled>选中禁用</m-radio>
</div>

::: details 查看代码
```vue
<template>
  <m-radio v-model="radio2" label="1" disabled>禁用选项</m-radio>
  <m-radio v-model="radio2" label="2" disabled>选中禁用</m-radio>
</template>
```
:::

## 单选框组

<div class="demo-preview">
  <m-radio-group v-model="radioGroup1">
    <m-radio label="1">选项一</m-radio>
    <m-radio label="2">选项二</m-radio>
    <m-radio label="3">选项三</m-radio>
  </m-radio-group>
</div>

::: details 查看代码
```vue
<template>
  <m-radio-group v-model="radioGroup1">
    <m-radio label="1">选项一</m-radio>
    <m-radio label="2">选项二</m-radio>
    <m-radio label="3">选项三</m-radio>
  </m-radio-group>
</template>

<script setup>
import { ref } from 'vue'
const radioGroup1 = ref('1')
</script>
```
:::

## 按钮样式

<div class="demo-preview">
  <m-radio-group v-model="radioGroup3" :button="true">
    <m-radio label="1">选项一</m-radio>
    <m-radio label="2">选项二</m-radio>
    <m-radio label="3">选项三</m-radio>
  </m-radio-group>
</div>

::: details 查看代码
```vue
<template>
  <m-radio-group v-model="radioGroup3" :button="true">
    <m-radio label="1">选项一</m-radio>
    <m-radio label="2">选项二</m-radio>
    <m-radio label="3">选项三</m-radio>
  </m-radio-group>
</template>
```
:::

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 绑定值 | `string` \| `number` | `''` |
| label | 选项标签值 | `string` \| `number` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 绑定值 | `string` \| `number` | `''` |
| size | 尺寸 | `large` \| `medium` \| `small` | `medium` |
| disabled | 是否禁用 | `boolean` | `false` |
| button | 是否按钮样式 | `boolean` | `false` |
