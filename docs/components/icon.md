# Icon 图标

提供了一套常用的图标集合。

图标通过 CSS 类名的方式使用，无需导入组件。

## 在业务项目引入

```js
import '../../styles/iconfont.css'
```

```vue
<template>
  <i class="iconfont m-icon-search"></i>
</template>
```

## 使用方式

<div class="demo-preview">
  <i class="iconfont m-icon-search"></i>
  <i class="iconfont m-icon-home"></i>
  <i class="iconfont m-icon-user"></i>
  <i class="iconfont m-icon-setting"></i>
</div>

```vue
<template>
  <i class="iconfont m-icon-search"></i>
  <i class="iconfont m-icon-home"></i>
  <i class="iconfont m-icon-user"></i>
  <i class="iconfont m-icon-setting"></i>
</template>
```

## 图标大小

<div class="demo-preview">
  <i class="iconfont m-icon-search" style="font-size: 16px;"></i>
  <i class="iconfont m-icon-search" style="font-size: 24px;"></i>
  <i class="iconfont m-icon-search" style="font-size: 32px;"></i>
</div>

```vue
<template>
  <i class="iconfont m-icon-search" style="font-size: 16px;"></i>
  <i class="iconfont m-icon-search" style="font-size: 24px;"></i>
  <i class="iconfont m-icon-search" style="font-size: 32px;"></i>
</template>
```

## 图标颜色

<div class="demo-preview">
  <i class="iconfont m-icon-search" style="color: #1890ff;"></i>
  <i class="iconfont m-icon-search" style="color: #52c41a;"></i>
</div>

```vue
<template>
  <i class="iconfont m-icon-search" style="color: #1890ff;"></i>
  <i class="iconfont m-icon-search" style="color: #52c41a;"></i>
</template>
```

## 图标列表

图标组件库包含以下几类图标：

- **方向类**: m-icon-arrow-left, m-icon-arrow-right, m-icon-arrow-up, m-icon-arrow-down
- **操作类**: m-icon-search, m-icon-loading, m-icon-close, m-icon-edit
- **提示类**: m-icon-success, m-icon-warning, m-icon-error, m-icon-info
- **用户类**: m-icon-user, m-icon-home, m-icon-setting, m-icon-message

## 在按钮中使用

<div class="demo-preview">
  <m-button leftIcon="m-icon-search">搜索</m-button>
  <m-button leftIcon="m-icon-add">添加</m-button>
  <m-button leftIcon="m-icon-delete">删除</m-button>
</div>

```vue
<template>
  <m-button leftIcon="m-icon-search">搜索</m-button>
  <m-button leftIcon="m-icon-add">添加</m-button>
  <m-button leftIcon="m-icon-delete">删除</m-button>
</template>
```
