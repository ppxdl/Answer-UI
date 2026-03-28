<template>
  <div :class="['yuan-breadcrumb-item', customClass]">
    <slot />
  </div>
</template>

<script setup>
defineOptions({
  name: 'mBreadcrumbItem'
});
const props = defineProps({
  customClass: String
})
</script>

<style lang="scss" scoped></style>
