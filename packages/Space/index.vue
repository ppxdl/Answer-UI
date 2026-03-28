<template>
  <div class="m-space" :style="containerStyle">
    <div v-for="(node, index) in nodes" :key="index" class="m-space-item">
      <component :is="node" />
    </div>
  </div>
</template>
<script setup>
import { Comment, computed, useSlots } from "vue";
defineOptions({
  name: "mSpace"
});
const props = defineProps({
  inline: {
    type: Boolean,
    default: true,
  },
  size: {
    type: [Number, Array],
    default: 10,
  },
  alignItems: {
    type: String,
    default: "center",
  },
});

const slots = useSlots();
const alignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
};

const nodes = computed(() => {
  if (!slots.default) {
    return [];
  }
  return slots.default().filter((node) => node.type !== Comment);
});

const spaceSize = computed(() => {
  if (Array.isArray(props.size)) {
    const [x = 10, y = x] = props.size;
    return [Number(x), Number(y)];
  }
  const value = Number(props.size);
  return [value, value];
});

const containerStyle = computed(() => {
  const [horizontal, vertical] = spaceSize.value;
  const align = alignMap[props.alignItems] || props.alignItems;
  return {
    display: "inline-flex",
    flexDirection: props.inline ? "row" : "column",
    alignItems: align,
    columnGap: `${horizontal}px`,
    rowGap: `${vertical}px`,
    flexWrap: props.inline ? "wrap" : "nowrap",
    width: "100%",
  };
});
</script>
<style scoped>
.m-space-item {
  display: inline-flex;
}
</style>
