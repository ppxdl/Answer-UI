# Tabs 标签页

用于分隔内容上有关联但属于不同类别的数据集合。

<script setup>
import { ref } from 'vue'
import mTabs from '../../packages/tabs/index.vue'

const activeName = ref('user')
const activeName2 = ref('user')
const activeName3 = ref('user')
const activeName4 = ref('user')
</script>

## 基础用法

<div class="demo-preview">
  <m-tabs v-model="activeName">
    <m-tab-pane label="用户管理" name="user">用户管理内容</m-tab-pane>
    <m-tab-pane label="配置管理" name="setting">配置管理内容</m-tab-pane>
    <m-tab-pane label="角色管理" name="role">角色管理内容</m-tab-pane>
  </m-tabs>
</div>

::: details 查看代码
```vue
<template>
  <m-tabs v-model="activeName">
    <m-tab-pane label="用户管理" name="user">用户管理内容</m-tab-pane>
    <m-tab-pane label="配置管理" name="setting">配置管理内容</m-tab-pane>
    <m-tab-pane label="角色管理" name="role">角色管理内容</m-tab-pane>
  </m-tabs>
</template>

<script setup>
import { ref } from 'vue'
const activeName = ref('user')
</script>
```
:::

## 卡片样式

<div class="demo-preview">
  <m-tabs v-model="activeName2" type="card">
    <m-tab-pane label="用户管理" name="user">用户管理内容</m-tab-pane>
    <m-tab-pane label="配置管理" name="setting">配置管理内容</m-tab-pane>
    <m-tab-pane label="角色管理" name="role">角色管理内容</m-tab-pane>
  </m-tabs>
</div>

::: details 查看代码
```vue
<template>
  <m-tabs v-model="activeName2" type="card">
    <m-tab-pane label="用户管理" name="user">用户管理内容</m-tab-pane>
    <m-tab-pane label="配置管理" name="setting">配置管理内容</m-tab-pane>
    <m-tab-pane label="角色管理" name="role">角色管理内容</m-tab-pane>
  </m-tabs>
</template>
```
:::

## 禁用

<div class="demo-preview">
  <m-tabs v-model="activeName3">
    <m-tab-pane label="用户管理" name="user">用户管理内容</m-tab-pane>
    <m-tab-pane label="配置管理" name="setting" disabled>配置管理内容</m-tab-pane>
    <m-tab-pane label="角色管理" name="role">角色管理内容</m-tab-pane>
  </m-tabs>
</div>

::: details 查看代码
```vue
<template>
  <m-tabs v-model="activeName3">
    <m-tab-pane label="用户管理" name="user">用户管理内容</m-tab-pane>
    <m-tab-pane label="配置管理" name="setting" disabled>配置管理内容</m-tab-pane>
    <m-tab-pane label="角色管理" name="role">角色管理内容</m-tab-pane>
  </m-tabs>
</template>
```
:::

## 图标

<div class="demo-preview">
  <m-tabs v-model="activeName4">
    <m-tab-pane label="用户管理" name="user" icon="m-icon-user">用户管理内容</m-tab-pane>
    <m-tab-pane label="配置管理" name="setting" icon="m-icon-setting">配置管理内容</m-tab-pane>
    <m-tab-pane label="角色管理" name="role" icon="m-icon-team">角色管理内容</m-tab-pane>
  </m-tabs>
</div>

::: details 查看代码
```vue
<template>
  <m-tabs v-model="activeName4">
    <m-tab-pane label="用户管理" name="user" icon="m-icon-user">用户管理内容</m-tab-pane>
    <m-tab-pane label="配置管理" name="setting" icon="m-icon-setting">配置管理内容</m-tab-pane>
    <m-tab-pane label="角色管理" name="role" icon="m-icon-team">角色管理内容</m-tab-pane>
  </m-tabs>
</template>
```
:::

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 绑定值 | `string` | `''` |
| type | 标签类型 | `line` \| `card` | `line` |
| activeColor | 激活时的颜色 | `string` | `''` |
| color | 主题色 | `string` | `''` |

### TabPane Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| label | 标签名称 | `string` | `''` |
| name | 唯一标识 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| icon | 图标类名 | `string` | `''` |
