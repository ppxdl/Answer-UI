# Loading 加载

用于显示加载状态。

<script setup>
import { ref } from 'vue'
import mButton from '../../packages/button/index.vue'

const loading1 = ref(false)
</script>

## 指令用法

<div class="demo-preview">
  <div v-loading="loading1" style="height: 200px; border: 1px solid #e8e8e8; padding: 20px;">
    <p>这是内容区域</p>
    <p>加载时会显示加载动画</p>
  </div>
  <m-button @click="loading1 = !loading1" style="margin-top: 16px;">切换加载状态</m-button>
</div>

::: details 查看代码
```vue
<template>
  <div v-loading="loading1" style="height: 200px; border: 1px solid #e8e8e8; padding: 20px;">
    <p>这是内容区域</p>
    <p>加载时会显示加载动画</p>
  </div>
  <m-button @click="loading1 = !loading1">切换加载状态</m-button>
</template>

<script setup>
import { ref } from 'vue'
const loading1 = ref(false)
</script>
```
:::

## 服务用法

<div class="demo-preview">
  <m-button @click="showLoading">显示加载</m-button>
</div>

::: details 查看代码
```vue
<template>
  <m-button @click="showLoading">显示加载</m-button>
</template>

<script setup>
import Loading from '@/packages/loading/index'

const showLoading = () => {
  const loading = Loading.service({
    lock: true,
    text: '加载中...'
  })

  setTimeout(() => {
    loading.close()
  }, 2000)
}
</script>
```
:::

## 全屏加载

<div class="demo-preview">
  <m-button @click="showFullscreenLoading">全屏加载</m-button>
</div>

::: details 查看代码
```vue
<template>
  <m-button @click="showFullscreenLoading">全屏加载</m-button>
</template>

<script setup>
import Loading from '@/packages/loading/index'

const showFullscreenLoading = () => {
  const loading = Loading.service({
    lock: true,
    fullscreen: true,
    text: '加载中...'
  })

  setTimeout(() => {
    loading.close()
  }, 2000)
}
</script>
```
:::

## API

### Loading Options

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| lock | 是否锁住滚动条 | `boolean` | `false` |
| fullscreen | 是否全屏显示 | `boolean` | `false` |
| text | 加载文案 | `string` | `''` |
| spinner | 自定义加载图标 | `string` | `''` |

### Loading Methods

| 方法名 | 说明 |
|--------|------|
| close | 关闭加载 |
