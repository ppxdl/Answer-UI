# DatePicker 日期选择器

用于选择日期或日期范围。

<script setup>
import { ref } from 'vue'
import mDate from '../../packages/date/index.vue'

const date1 = ref('')
const date2 = ref('')
const date3 = ref('')
const date4 = ref('')
const date5 = ref('')
const date6 = ref('')
</script>

## 基础用法

<div class="demo-preview">
  <m-date v-model="date1" placeholder="选择日期"></m-date>
</div>

::: details 查看代码
```vue
<template>
  <m-date v-model="date1" placeholder="选择日期"></m-date>
</template>

<script setup>
import { ref } from 'vue'
const date1 = ref('')
</script>
```
:::

## 禁用状态

<div class="demo-preview">
  <m-date v-model="date2" placeholder="禁用状态" disabled></m-date>
</div>

::: details 查看代码
```vue
<template>
  <m-date v-model="date2" placeholder="禁用状态" disabled></m-date>
</template>
```
:::

## 可清空

<div class="demo-preview">
  <m-date v-model="date3" placeholder="可清空" clearable></m-date>
</div>

::: details 查看代码
```vue
<template>
  <m-date v-model="date3" placeholder="可清空" clearable></m-date>
</template>
```
:::

## 不同尺寸

<div class="demo-preview">
  <m-date v-model="date4" placeholder="大号" size="large"></m-date>
  <m-date v-model="date5" placeholder="默认"></m-date>
  <m-date v-model="date6" placeholder="小号" size="small"></m-date>
</div>

::: details 查看代码
```vue
<template>
  <m-date v-model="date4" placeholder="大号" size="large"></m-date>
  <m-date v-model="date5" placeholder="默认"></m-date>
  <m-date v-model="date6" placeholder="小号" size="small"></m-date>
</template>
```
:::

## API

### DatePicker Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 绑定值 | `string` | `''` |
| type | 日期类型 | `date` \| `year` \| `month` \| `week` | `date` |
| placeholder | 占位文本 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| format | 日期格式 | `string` | `'yyyy/MM/dd'` |
| size | 尺寸 | `large` \| `medium` \| `small` | `medium` |
