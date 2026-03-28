<script setup>
defineProps({
    value: String | Number,
    hidden: {
        type: Boolean,
        default: false
    },
    isDot: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'danger'
    },
    max: {
        type: Number,
        default: 99
    }
})
</script>

<template>
    <div class="yuan-badge">
        <slot></slot>
        <div v-show="!hidden">
            <sup v-if="!isDot" :class='type' class="badge">
                <span v-if="typeof value === 'number'">{{ value <= max ? value : `${max}+` }}</span>
                        <span v-else>{{ value }}</span>
            </sup>
            <sup v-else class="isdot"></sup>
        </div>
    </div>
</template>

<style>
.yuan-badge {
    position: relative;
    white-space: nowrap;
}

.yuan-badge .badge,
.yuan-badge .isdot {
    position: absolute;
    top: 0;
    right: 0;
    border: 1px solid white;
}

.yuan-badge .badge {
    transform: translateX(80%) translateY(-50%);
    padding: 2px 10px;
    box-sizing: border-box;
    border-radius: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.yuan-badge .isdot {
    transform: translateX(50%) translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #f56c6c;
}

.yuan-badge .primary {
    background-color: #409eff;
}

.yuan-badge .info {
    background-color: #909399;
}

.yuan-badge .success {
    background-color: #67c23a;
}

.yuan-badge .warning {
    background-color: #e6a23c;
}

.yuan-badge .danger {
    background-color: #f56c6c;
}
</style>