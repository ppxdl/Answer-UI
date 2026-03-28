<template>
  <button :class="isClass" :style="styles">
    <i :class="isIconClass" v-if="leftIcon"></i>
    <span
      :style="{
        'margin-left':
          $slot['default'] == undefined ? '0px' : leftIcon ? '4px' : '0px',
        'margin-right':
          $slot['default'] == undefined ? '0px' : rightIcon ? '4px' : '0px',
      }"
      ><slot
    /></span>
    <i :class="isIconClass" v-if="rightIcon"></i>
  </button>
</template>
<script setup>
defineOptions({
  name: "mButton"
});
import { computed, useSlots } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disabled: Boolean,
  round: Boolean,
  size: {
    type: String,
    default: "default",
  },
  customColor: {
    type: String,
    default: "",
  },
  leftIcon: String,
  rightIcon: String,
  localing: Boolean,
});
const mBtnDeaultStyle = {
  background: props.customColor,
  border: props.customColor,
  color: "#fff",
};
const $slot = useSlots();
const isClass = computed(() => {
  return [
    props.size == "default"
      ? "yuan-button"
      : props.size == "medium"
      ? "yuan-button-medium"
      : props.size == "small"
      ? "yuan-button-small"
      : props.size == "mini"
      ? "yuan-button-mini"
      : "yuan-button",
    props.type ? (props.disabled ? "" : `yuan-button-${props.type}`) : "",
    props.disabled ? `yuan-button-${props.type}-disabled` : "",
    {
      "yuan-button-round": props.round,
    },
  ];
});
const isIconClass = computed(() => {
  return [
    "iconfont",
    props.leftIcon || props.rightIcon,
    props.localing
      ? props.leftIcon == "m-icon-loading1" ||
        props.leftIcon == "m-icon-loading2" ||
        props.leftIcon == "m-icon-loading3" ||
        props.leftIcon == "m-icon-loading4" ||
        props.leftIcon == "m-icon-loading5" ||
        props.leftIcon == "m-icon-loading6" ||
        props.rightIcon == "m-icon-loading1" ||
        props.rightIcon == "m-icon-loading2" ||
        props.rightIcon == "m-icon-loading3" ||
        props.rightIcon == "m-icon-loading4" ||
        props.rightIcon == "m-icon-loading5" ||
        props.rightIcon == "m-icon-loading6"
        ? "yuan-icon-loading"
        : ""
      : "",
  ];
});
const styles = computed(() => {
  return [
    props.customColor == ""
      ? {}
      : props.type == "default"
      ? {}
      : mBtnDeaultStyle,
  ];
});
</script>
<style>
@import url("../../styles/iconfont.css");
@import url("../../styles/main.css");

.yuan-button {
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
}
.yuan-button i {
}
.yuan-button span {
  display: inline-block;
}
.yuan-button-medium {
  padding: 8px 18px;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
}
.yuan-button-medium i {
  font-size: 14px;
}
.yuan-button-small {
  padding: 7px 13px;
  outline: none;
  cursor: pointer;
  font-size: 13px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
}
.yuan-button-small i {
  font-size: 13px;
}
.yuan-button-mini {
  padding: 7px 13px;
  outline: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
}
.yuan-button-mini i {
  font-size: 12px;
}
.yuan-button-round {
  border-radius: 22px;
}
.yuan-button-default {
  border: 1px solid #d9d9d9;
  background: #fff;
  color: #333;
}
.yuan-button-default:hover {
  color: #0e80eb;
  border-color: #0e80eb;
  opacity: 0.8;
}
.yuan-button-default:active {
  opacity: 1;
}
.yuan-button-custom {
  color: #333;
}
.yuan-button-custom:hover {
  opacity: 0.8;
}
.yuan-button-custom:active {
  opacity: 1;
}
.yuan-button-primary {
  border: 1px solid #409eff;
  color: #fff;
  background-color: #409eff;
}
.yuan-button-primary:hover {
  opacity: 0.8;
}
.yuan-button-primary:active {
  opacity: 1;
}
.yuan-button-success {
  border: 1px solid #09b63d;
  color: #fff;
  background-color: #09b63d;
}
.yuan-button-success:hover {
  opacity: 0.8;
}
.yuan-button-success:active {
  opacity: 1;
}
.yuan-button-danger {
  border: 1px solid #ec3437;
  background: #ec3437;
  color: #fff;
}
.yuan-button-danger:hover {
  color: #fff;
  border-color: #ec3437;
  opacity: 0.8;
}
.yuan-button-danger:active {
  opacity: 1;
}
.yuan-button-warning {
  border: 1px solid #f57b29;
  background: #f57b29;
  color: #fff;
}
.yuan-button-warning:hover {
  color: #fff;
  border-color: #f57b29;
  opacity: 0.8;
}
.yuan-button-warning:active {
  opacity: 1;
}
.yuan-button-text {
  border: 1px solid #fff;
  background: none;
  color: #0e80eb;
}
.yuan-button-text:hover {
  color: #0e80eb;
  opacity: 0.8;
}
.yuan-button-text:active {
  opacity: 1;
}
.yuan-button-dashed {
  border: 1px dashed #d9d9d9;
  background: #fff;
  color: #333;
}
.yuan-button-dashed:hover {
  color: #0e80eb;
  border-color: #0e80eb;
  opacity: 0.8;
}
.yuan-button-dashed:active {
  opacity: 1;
}

.yuan-button-default-disabled {
  cursor: no-drop;
  border: 1px solid #d9d9d9;
  background: #fff;
  opacity: 0.5;
  color: #333;
}
.yuan-button-primary-disabled {
  cursor: no-drop;
  border: 1px solid #0e80eb;
  background: #0e80eb;
  opacity: 0.5;
  color: #fff;
}
.yuan-button-success-disabled {
  cursor: no-drop;
  border: 1px solid #09b63d;
  background: #09b63d;
  opacity: 0.5;
  color: #fff;
}
.yuan-button-danger-disabled {
  cursor: no-drop;
  border: 1px solid #ec3437;
  background: #ec3437;
  opacity: 0.5;
  color: #fff;
}
.yuan-button-warning-disabled {
  cursor: no-drop;
  border: 1px solid #f57b29;
  background: #f57b29;
  opacity: 0.5;
  color: #fff;
}
.yuan-button-dashed-disabled {
  cursor: no-drop;
  border: 1px solid #d9d9d9;
  background: #fff;
  opacity: 0.5;
  color: #333;
}
.yuan-button-text-disabled {
  cursor: no-drop;
  border: 1px solid #fff;
  background: none;
  opacity: 0.5;
  color: #0e80eb;
}
.yuan-button-custom-disabled {
  cursor: no-drop;
  opacity: 0.5;
}

.yuan-icon-loading {
  animation: icon-loading 1.5s linear infinite;
  -webkit-animation: icon-loading 1.5s linear infinite;
}
@keyframes icon-loading {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
