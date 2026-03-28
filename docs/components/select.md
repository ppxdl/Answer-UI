# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

<script setup>
import { ref } from 'vue'
import mSelect from '../../packages/select/index.vue'

const select1 = ref('')
const select2 = ref('')
const select3 = ref('')
const select4 = ref('')
const select5 = ref('')
const select6 = ref('')
const select7 = ref(['1', '2'])
const select8 = ref('')

const options1 = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
]

const options2 = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
]

const options3 = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
]

const options4 = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
]
</script>

## 基础用法

<div class="demo-preview">
  <m-select v-model="select1" :options="options1" placeholder="请选择"></m-select>
</div>

::: details 查看代码
```vue
<template>
  <m-select v-model="select1" :options="options1" placeholder="请选择"></m-select>
</template>

<script setup>
import { ref } from 'vue'
import mSelect from '../../packages/select/index.vue'

const select1 = ref('')
const options1 = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
]
</script>
```
:::

## 禁用状态

<div class="demo-preview">
  <m-select v-model="select2" :options="options2" placeholder="禁用状态" disabled></m-select>
</div>

::: details 查看代码
```vue
<template>
  <m-select v-model="select2" :options="options2" placeholder="禁用状态" disabled></m-select>
</template>
```
:::

## 可清空

<div class="demo-preview">
  <m-select v-model="select3" :options="options3" placeholder="可清空" clearable></m-select>
</div>

::: details 查看代码
```vue
<template>
  <m-select v-model="select3" :options="options3" placeholder="可清空" clearable></m-select>
</template>
```
:::

## 不同尺寸

<div class="demo-preview">
  <m-select v-model="select4" :options="options1" placeholder="大号" size="large"></m-select>
  <m-select v-model="select5" :options="options1" placeholder="默认"></m-select>
  <m-select v-model="select6" :options="options1" placeholder="小号" size="small"></m-select>
</div>

::: details 查看代码
```vue
<template>
  <m-select v-model="select4" :options="options1" placeholder="大号" size="large"></m-select>
  <m-select v-model="select5" :options="options1" placeholder="默认"></m-select>
  <m-select v-model="select6" :options="options1" placeholder="小号" size="small"></m-select>
</template>
```
:::

## 多选

<div class="demo-preview">
  <m-select v-model="select7" :options="options4" placeholder="多选" multiple></m-select>
</div>

::: details 查看代码
```vue
<template>
  <m-select v-model="select7" :options="options4" placeholder="多选" multiple></m-select>
</template>

<script setup>
import { ref } from 'vue'
const select7 = ref(['1', '2'])
const options4 = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
]
</script>
```
:::

## 带搜索

<div class="demo-preview">
  <m-select v-model="select8" :options="options1" placeholder="可搜索" filterable></m-select>
</div>

::: details 查看代码
```vue
<template>
  <m-select v-model="select8" :options="options1" placeholder="可搜索" filterable></m-select>
</template>
```
:::

## API

### Select Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 绑定值 | `string` \| `number` \| `array` | `''` |
| options | 选项列表 | `Array<{label: string, value: string\|number}>` | `[]` |
| placeholder | 占位文本 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| multiple | 是否多选 | `boolean` | `false` |
| filterable | 是否可搜索 | `boolean` | `false` |
| size | 尺寸 | `large` \| `medium` \| `small` | `medium` |
