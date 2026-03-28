# Table 表格

用于展示多条结构类似的数据。

<script setup>
import { ref } from 'vue'
import mTable from '../../packages/table/index.vue'

const columns1 = [
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '地址', key: 'address' }
]

const columns2 = [
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age', sortable: true },
  { title: '地址', key: 'address' }
]

const columns3 = [
  { type: 'selection', width: 50 },
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '地址', key: 'address' }
]

const data1 = [
  { name: '张三', age: 18, address: '北京市' },
  { name: '李四', age: 25, address: '上海市' },
  { name: '王五', age: 30, address: '广州市' }
]

const handleSelect = (selection) => {
  console.log('选中项:', selection)
}
</script>

## 基础用法

<div class="demo-preview">
  <m-table :columns="columns1" :data="data1"></m-table>
</div>

::: details 查看代码
```vue
<template>
  <m-table :columns="columns1" :data="data1"></m-table>
</template>

<script setup>
import { ref } from 'vue'
import mTable from '../../packages/table/index.vue'

const columns1 = [
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '地址', key: 'address' }
]

const data1 = [
  { name: '张三', age: 18, address: '北京市' },
  { name: '李四', age: 25, address: '上海市' },
  { name: '王五', age: 30, address: '广州市' }
]
</script>
```
:::

## 带边框

<div class="demo-preview">
  <m-table :columns="columns1" :data="data1" border></m-table>
</div>

::: details 查看代码
```vue
<template>
  <m-table :columns="columns1" :data="data1" border></m-table>
</template>
```
:::

## 斑马纹

<div class="demo-preview">
  <m-table :columns="columns1" :data="data1" stripe></m-table>
</div>

::: details 查看代码
```vue
<template>
  <m-table :columns="columns1" :data="data1" stripe></m-table>
</template>
```
:::

## 排序

<div class="demo-preview">
  <m-table :columns="columns2" :data="data1"></m-table>
</div>

::: details 查看代码
```vue
<template>
  <m-table :columns="columns2" :data="data1"></m-table>
</template>

<script setup>
const columns2 = [
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age', sortable: true },
  { title: '地址', key: 'address' }
]
</script>
```
:::

## 多选

<div class="demo-preview">
  <m-table :columns="columns3" :data="data1" selection @selection-change="handleSelect"></m-table>
</div>

::: details 查看代码
```vue
<template>
  <m-table :columns="columns3" :data="data1" selection @selection-change="handleSelect"></m-table>
</template>

<script setup>
const columns3 = [
  { type: 'selection', width: 50 },
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '地址', key: 'address' }
]

const handleSelect = (selection) => {
  console.log('选中项:', selection)
}
</script>
```
:::

## API

### Table Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| columns | 列配置 | `array` | `[]` |
| data | 数据列表 | `array` | `[]` |
| border | 是否显示边框 | `boolean` | `false` |
| stripe | 是否斑马纹 | `boolean` | `false` |
| selection | 是否显示多选列 | `boolean` | `false` |

### Column Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 列标题 | `string` | `''` |
| key | 数据字段名 | `string` | `''` |
| width | 列宽度 | `string` | `''` |
| type | 列类型 | `selection` \| `index` | `''` |
| sortable | 是否可排序 | `boolean` | `false` |
