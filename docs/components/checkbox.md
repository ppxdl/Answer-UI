# Checkbox 多选框

用于选择多个选项。

<script setup>
import { ref } from 'vue'
import mCheckbox from '../../packages/checkbox/index.vue'

const checkbox1 = ref(false)
const checkbox2 = ref(true)
const checkboxGroup1 = ref(['1'])
const checkboxOptions = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
]
</script>

## 基础用法

<div class="demo-preview">
  <m-checkbox v-model="checkbox1">选项一</m-checkbox>
  <m-checkbox v-model="checkbox2">选项二</m-checkbox>
</div>

::: details 查看代码
```vue
<template>
  <m-checkbox v-model="checkbox1">选项一</m-checkbox>
  <m-checkbox v-model="checkbox2">选项二</m-checkbox>
</template>

<script setup>
import { ref } from 'vue'
const checkbox1 = ref(false)
const checkbox2 = ref(true)
</script>
```
:::

## 禁用状态

<div class="demo-preview">
  <m-checkbox v-model="checkbox1" disabled>禁用选项</m-checkbox>
  <m-checkbox v-model="checkbox2" disabled>禁用选项</m-checkbox>
</div>

::: details 查看代码
```vue
<template>
  <m-checkbox v-model="checkbox1" disabled>禁用选项</m-checkbox>
  <m-checkbox v-model="checkbox2" disabled>禁用选项</m-checkbox>
</template>
```
:::

## 多选组

<div class="demo-preview">
  <m-checkbox-group v-model="checkboxGroup1" :options="checkboxOptions"></m-checkbox-group>
</div>

::: details 查看代码
```vue
<template>
  <m-checkbox-group v-model="checkboxGroup1" :options="checkboxOptions"></m-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
const checkboxGroup1 = ref(['1'])
const checkboxOptions = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
]
</script>
```
:::

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 绑定值 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| label | 选中时的值 | `string` | - |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 绑定值 | `array` | `[]` |
| options | 选项列表 | `array` | `[]` |
| disabled | 是否禁用 | `boolean` | `false` |
