<script setup>
defineOptions({
  name: "mDivider"
});
const props = defineProps({
    position: {
        type: String,
        default: 'left'
    },
    direction: {
        type: String,
        default: 'horizontal'
    },
    lineStyle:{
        type: String,
        default: 'solid'
    }
})
</script>

<template>
    <div class="yuan-divider"  :class="{ 'yuan-vertical': direction === 'vertical' }" :style="{ 'justify-content': position, 'border-top': `1px ${lineStyle} #dcdfe6` }">
        <div class="yuan-divider-title" v-if="position">
            <slot></slot>
        </div>
    </div>
</template> 

<style scoped>
.yuan-divider {
    width: 100%;
    height: 1px;
    margin: 24px 0;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
}

.yuan-vertical {
    display: inline-block;
    width: 1px;
    height: 1em;
    margin: 0 8px;
    border-top: none;
    border-left: 1px solid #dcdfe6;
    padding: 0;
}

.yuan-divider-title {
    border-left: 20px solid white;
    border-right: 20px solid white;
    background-color: white;
}
</style>
