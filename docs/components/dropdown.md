# DropDown 下拉菜单

用于展示下拉操作菜单。

<script setup>
import { ref } from 'vue'
import mDropdown from '../../packages/dropDown/index.vue'

const options = [
  { label: '选项一', value: '1', icon: 'm-icon-edit' },
  { label: '选项二', value: '2', icon: 'm-icon-delete' },
  { label: '选项三', value: '3', icon: 'm-icon-setting' }
]

const handleChange = (item, index) => {
  console.log('选中:', item)
}
</script>

## 基础用法

<div class="demo-preview">
  <m-dropdown title="操作菜单" :options="options" @change="handleChange"></m-dropdown>
</div>

::: details 查看代码
```vue
<template>
  <m-dropdown title="操作菜单" :options="options" @change="handleChange"></m-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import mDropdown from '../../packages/dropDown/index.vue'

const options = [
  { label: '选项一', value: '1', icon: 'm-icon-edit' },
  { label: '选项二', value: '2', icon: 'm-icon-delete' },
  { label: '选项三', value: '3', icon: 'm-icon-setting' }
]

const handleChange = (item, index) => {
  console.log('选中:', item)
}
</script>
```
:::

## 触发方式

<div class="demo-preview">
  <m-dropdown title="hover 触发" :options="options" trigger="hover"></m-dropdown>
  <m-dropdown title="click 触发" :options="options" trigger="click"></m-dropdown>
</div>

::: details 查看代码
```vue
<template>
  <m-dropdown title="hover 触发" :options="options" trigger="hover"></m-dropdown>
  <m-dropdown title="click 触发" :options="options" trigger="click"></m-dropdown>
</template>
```
:::

## 不同尺寸

<div class="demo-preview">
  <m-dropdown title="大号" :options="options" size="large"></m-dropdown>
  <m-dropdown title="默认" :options="options"></m-dropdown>
  <m-dropdown title="小号" :options="options" size="small"></m-dropdown>
</div>

::: details 查看代码
```vue
<template>
  <m-dropdown title="大号" :options="options" size="large"></m-dropdown>
  <m-dropdown title="默认" :options="options"></m-dropdown>
  <m-dropdown title="小号" :options="options" size="small"></m-dropdown>
</template>
```
:::

## API

### DropDown Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 标题文字 | `string` | `''` |
| options | 选项列表 | `array` | `[]` |
| trigger | 触发方式 | `hover` \| `click` | `hover` |
| size | 尺寸 | `large` \| `medium` \| `small` | `medium` |

### Options

| 参数 | 说明 | 类型 |
|------|------|------|
| label | 显示文字 | `string` |
| value | 值 | `string` \| `number` |
| icon | 图标类名 | `string` |
