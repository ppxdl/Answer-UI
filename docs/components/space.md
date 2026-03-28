# Space 间距

用于控制组件之间的间距。

## 基础用法

<div class="demo-preview">
  <m-space>
    <m-button>按钮1</m-button>
    <m-button>按钮2</m-button>
    <m-button>按钮3</m-button>
  </m-space>
</div>

::: details 查看代码
```vue
<template>
  <m-space>
    <m-button>按钮1</m-button>
    <m-button>按钮2</m-button>
    <m-button>按钮3</m-button>
  </m-space>
</template>
```
:::

## 不同间距大小

<div class="demo-preview">
  <m-space :size="10">
    <m-button>紧凑</m-button>
    <m-button>紧凑</m-button>
  </m-space>
  <div style="height: 10px;"></div>
  <m-space :size="20">
    <m-button>默认</m-button>
    <m-button>默认</m-button>
  </m-space>
  <div style="height: 10px;"></div>
  <m-space :size="30">
    <m-button>宽松</m-button>
    <m-button>宽松</m-button>
  </m-space>
</div>

::: details 查看代码
```vue
<template>
  <m-space :size="10">
    <m-button>紧凑</m-button>
    <m-button>紧凑</m-button>
  </m-space>
  <m-space :size="20">
    <m-button>默认</m-button>
    <m-button>默认</m-button>
  </m-space>
  <m-space :size="30">
    <m-button>宽松</m-button>
    <m-button>宽松</m-button>
  </m-space>
</template>
```
:::

## 分别设置横向与纵向间距

<div class="demo-preview">
  <m-space :size="[24, 8]">
    <m-button>横向 24</m-button>
    <m-button>横向 24</m-button>
    <m-button>横向 24</m-button>
  </m-space>
</div>

::: details 查看代码
```vue
<template>
  <m-space :size="[24, 8]">
    <m-button>横向 24</m-button>
    <m-button>横向 24</m-button>
    <m-button>横向 24</m-button>
  </m-space>
</template>
```
:::

## 垂直排列

<div class="demo-preview">
  <m-space :inline="false" :size="20">
    <m-button>垂直排列按钮1</m-button>
    <m-button>垂直排列按钮2</m-button>
    <m-button>垂直排列按钮3</m-button>
  </m-space>
</div>

::: details 查看代码
```vue
<template>
  <m-space :inline="false" :size="20">
    <m-button>垂直排列按钮1</m-button>
    <m-button>垂直排列按钮2</m-button>
    <m-button>垂直排列按钮3</m-button>
  </m-space>
</template>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| size | 间距大小 | `number \| [number, number]` | `10` |
| inline | 是否行内显示 | `boolean` | `true` |
| alignItems | 对齐方式 | `start` \| `center` \| `end` \| `stretch` | `center` |
