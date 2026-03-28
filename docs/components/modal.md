# Modal 对话框

在当前页面打开一个浮层，承载相关操作。

<script setup>
import { ref } from 'vue'
import mModal from '../../packages/modal/index.vue'
import mButton from '../../packages/button/index.vue'
import mInput from '../../packages/input/index.vue'

const visible = ref(false)
const visible2 = ref(false)
const inputVal = ref('')
</script>

## 基础用法

<div class="demo-preview">
  <m-button @click="visible = true">打开弹窗</m-button>
  <m-modal v-model:visible="visible" title="基础弹窗" @confirm="visible = false" @cancel="visible = false">
    <p>这是弹窗的基本内容</p>
  </m-modal>
</div>

::: details 查看代码
```vue
<template>
  <m-button @click="visible = true">打开弹窗</m-button>
  <m-modal v-model:visible="visible" title="基础弹窗" @confirm="visible = false" @cancel="visible = false">
    <p>这是弹窗的基本内容</p>
  </m-modal>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>
```
:::

## 自定义内容

<div class="demo-preview">
  <m-button @click="visible2 = true">自定义内容</m-button>
  <m-modal v-model:visible="visible2" title="自定义内容" width="600px" :showFooter="false">
    <template #default>
      <div style="padding: 20px;">
        <m-input v-model="inputVal" placeholder="输入内容"></m-input>
        <div style="margin-top: 16px;">
          <m-button type="primary" @click="visible2 = false">提交</m-button>
          <m-button @click="visible2 = false">取消</m-button>
        </div>
      </div>
    </template>
  </m-modal>
</div>

::: details 查看代码
```vue
<template>
  <m-button @click="visible2 = true">自定义内容</m-button>
  <m-modal v-model:visible="visible2" title="自定义内容" width="600px" :showFooter="false">
    <template #default>
      <div style="padding: 20px;">
        <m-input v-model="inputVal" placeholder="输入内容"></m-input>
        <div style="margin-top: 16px;">
          <m-button type="primary" @click="visible2 = false">提交</m-button>
          <m-button @click="visible2 = false">取消</m-button>
        </div>
      </div>
    </template>
  </m-modal>
</template>

<script setup>
import { ref } from 'vue'
const visible2 = ref(false)
const inputVal = ref('')
</script>
```
:::

## API

### Modal Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| visible | 是否显示 | `boolean` | `false` |
| title | 标题 | `string` | `''` |
| width | 宽度 | `string` | `'500px'` |
| mask | 是否显示遮罩 | `boolean` | `true` |
| maskClosable | 点击遮罩是否关闭 | `boolean` | `true` |
| showFooter | 是否显示底部按钮 | `boolean` | `true` |
| confirmText | 确认按钮文字 | `string` | `'确定'` |
| cancelText | 取消按钮文字 | `string` | `'取消'` |

### Modal Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| confirm | 点击确认时触发 | `()` |
| cancel | 点击取消时触发 | `()` |
| close | 关闭弹窗时触发 | `()` |

### Modal Slots

| 插槽名 | 说明 |
|--------|------|
| default | 弹窗内容 |
| title | 自定义标题 |
