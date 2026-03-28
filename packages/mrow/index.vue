<template>
  <div class="yuan-row-default"><slot></slot></div>
</template>
<script setup>
defineOptions({
  name: "mRow"
});
</script>

<style lang="scss" scoped>
.yuan-row-default{
  width:100%;
  height:auto;
  box-sizing: border-box;
  overflow: hidden;
}
</style>