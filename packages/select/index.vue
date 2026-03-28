<template>
  <div
    :class="[selectClass, customClass]"
    :style="[
      customClass ? {} : { width: parseInt(width) < 100 ? '100px' : width },
    ]"
    v-click-outside
  >
    <div :class="selectInputClass">
      <input
        type="text"
        :readonly="!searchable"
        :placeholder="selVal == '' ? placeholder : selVal"
        :style="[customClass ? {} : customStyle]"
        :class="[selVal == '' ? 'yuan-select-input' : 'yuan-select-input-value']"
        :disabled="disabled"
        @input="input"
        :value="selVal"
      />
      <i :class="iconClass" :style="[{ transform: rotate }, fixIcon]"></i>
    </div>
    <transition name="slide-fade">
      <div class="yuan-select-option" v-if="isShow">
        <div class="yuan-select-option-find">
          <ul>
            <li
              class="yuan-select-option-li"
              v-for="(item, index) in optionsData"
              :key="index"
              @click="selChange(item, index)"
              :class="{
                'yuan-select-active':
                  activeIndex == index ||
                  selVal == item[labelFiled] ||
                  item.selected,
                'yuan-select-disabled': item.disabled,
              }"
            >
              {{ item[labelFiled] }}
              <i
                class="iconfont m-icon-select-bold"
                v-if="multiple && item.selected"
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
defineOptions({
  name: "mSelect"
});
import {
  ref,
  computed,
  reactive,
  onMounted,
  watch,
  nextTick,
  onUpdated,
} from "vue";
const emit = defineEmits(["update:modelValue", "change"]);
const props = defineProps({
  modelValue: String | Array,
  placeholder: String,
  customClass: String,
  disabled: Boolean,
  searchable: Boolean,
  size: {
    type: String,
    default: "default",
  },
  width: {
    type: String,
    default: "260px",
  },
  height: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => {
      return [];
    },
  },
  //默认需要显示的label字段
  labelFiled: {
    type: String,
    default: "label",
  },
  //默认需要显示的value字段
  valueFiled: {
    type: String,
    default: "value",
  },
  multiple: Boolean,
});
props.options.forEach((item, index) => {
  if (!props.multiple) {
    item.selected = false;
  } else {
    props.modelValue.forEach((item1, index1) => {
      if (item[props.valueFiled] == item1) {
        item.selected = true;
      }
    });
    console.log();
  }
});

const activeIndex = ref(-1);
const isShow = ref(false);
const rotate = ref("rotate(0deg)");
const optionsData = ref(props.options || []);
const selVal = ref(
  props.multiple
    ? props.modelValue
    : props.modelValue != ""
    ? props.options.filter((item) => {
        return item[props.valueFiled] == props.modelValue;
      })[0][props.labelFiled]
    : ""
);
/*1.增加选择框width和height属性的大小限制 高度最小是25px,width属性最小是100px
 *2.动态计算下拉图标的行高
 */
const fixIcon = reactive({});

// icon class
const iconClass = computed(() => {
  return ["select-icon iconfont m-icon-arrow-down"];
});

//根据自定义的组件尺寸适配组件里面的下拉框相对位置以及图标居中
const customStyle = computed(() => {
  let styles = {};
  if (props.height) {
    let height = parseInt(props.height) < 25 ? "25px" : props.height;
    styles.height = height;
    fixIcon.lineHeight = height;
    fixIcon.top = 0;
    fixIcon.height = "100%";
  }
  return styles;
});

// selece class
const selectClass = computed(() => {
  return [
    `yuan-select-${props.size}`,
    props.disabled ? `yuan-select-${props.size}-disabled` : "",
  ];
});
// select input class
const selectInputClass = computed(() => {
  return [
    "yuan-select-input-box",
    `yuan-select-input-${props.size}`,
    props.disabled ? `yuan-select-input-${props.size}-disabled` : "",
  ];
});
const blur = (e) => {
  isShow.value = false;
  rotate.value = "rotate(0deg)";
};

const input = (e) => {
  selVal.value = e.target.value;
  optionsData.value = [];
  let filterList = props.options.filter((item) => {
    return item[props.labelFiled].indexOf(e.target.value) != -1;
  });
  filterList.forEach((item, index) => {
    optionsData.value.push(item);
  });
};
const vClickOutside = {
  beforeMount(el) {
    let handler = (e) => {
      if (!props.disabled) {
        if (!props.multiple) {
          if (
            el.contains(e.target) &&
            e.target.className.indexOf("yuan-select-option-li") == -1
          ) {
            if (!isShow.value) {
              isShow.value = !isShow.value;
              if (isShow.value) {
                rotate.value = "rotate(180deg)";
              } else {
                rotate.value = "rotate(0deg)";
              }
            }
          } else {
            if (isShow.value) {
              blur();
            }
          }
        } else {
          if (el.contains(e.target)) {
            if (!isShow.value) {
              isShow.value = !isShow.value;
              if (isShow.value) {
                rotate.value = "rotate(180deg)";
              } else {
                rotate.value = "rotate(0deg)";
              }
            }
          } else {
            if (isShow.value) {
              blur();
            }
          }
        }
      }
    };
    el.handler = handler;
    if (typeof document !== "undefined") {
      document.addEventListener("click", handler);
    }
  },
  unmounted(el) {
    if (typeof document !== "undefined") {
      document.removeEventListener("click", el.handler);
    }
  },
};
// 选择事件
let labels = [];
let indexs = [];
const selChange = (item, index) => {
  if (!props.multiple) {
    if (!item.disabled) {
      activeIndex.value = index;
      selVal.value = item[props.labelFiled];
      emit("update:modelValue", item[props.valueFiled]);
      emit("change", { lable: item.label, value: item.value, index: index });
      blur();
    }
  } else {
    if (!item.disabled) {
      Array.prototype.indexOf = function (val) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] == val) return i;
        }
        return -1;
      };
      item.selected = !item.selected;
      if (item.selected) {
        selVal.value.push(item[props.valueFiled]);
        labels.push(item.label);
        indexs.push(index);
      } else {
        selVal.value.splice(selVal.value.indexOf(item[props.valueFiled]), 1);
        labels.splice(labels.indexOf(item.label), 1);
        indexs.splice(indexs.indexOf(index), 1);
      }
      emit("update:modelValue", selVal.value);
      emit("change", { lable: labels, value: selVal.value, index: indexs });
    }
  }
};
</script>

<style>
@import url("../../styles/iconfont.css");
@import url("../../styles/main.css");

/* 默认 */
.yuan-select-input-box,
.yuan-select-default {
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
}

.yuan-select-default .yuan-select-multiple {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.yuan-select-default .yuan-select-input-default {
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  position: relative;
}

.yuan-select-default .yuan-select-input-default input {
  height: 100%;
  width: 100%;
  font-size: 14px;
  outline: none;
  border: 0;
  margin: 0;
  padding: 10px 30px 10px 10px;
  box-sizing: border-box;
  border-radius: 4px;
  color: #606266;
  cursor: pointer;
  border: 1px solid #dcdfe6f6;
  transition: all 0.2s ease;
}

.yuan-select-default .yuan-select-input-default input:focus {
  border-color: #0e80eb;
}

.yuan-select-default .yuan-select-input-default .yuan-select-input::placeholder {
  color: #c6c8cc;
  font-size: 14px;
}

.yuan-select-default .yuan-select-input-default .yuan-select-input-value::placeholder {
  color: #626262;
  font-size: 14px;
}

.yuan-select-default .yuan-select-input-default .select-icon {
  position: absolute;
  right: 10px;
  top: 11px;
  color: #94969b;
  transition: all 0.2s ease;
  cursor: pointer;
  transform-origin: 50% 50%;
}

.yuan-select-default .yuan-select-input-default .select-icon-tranfromOut {
  transform: rotate(180deg);
}

.yuan-select-default .yuan-select-input-default .select-icon-tranfromIn {
  transform: rotate(0deg);
}

.yuan-select-default .yuan-select-option {
  min-width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #fff;
  top: 100%;
  z-index: 99;
}

.yuan-select-default .yuan-select-option .yuan-select-option-find {
  width: 100%;
  max-height: 211px;
  height: auto;
  position: relative;
  margin-top: 13px;
  padding: 4px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #dcdfe6f6;
  border-radius: 3px;
  transition: all 0.1s ease;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.yuan-select-default .yuan-select-option .yuan-select-option-find:before {
  box-sizing: content-box;
  width: 0px;
  height: 0px;
  position: absolute;
  top: -15.7px;
  right: 50.27%;
  padding: 0;
  border-bottom: 8px solid #ffffff;
  border-top: 8px solid transparent;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  display: block;
  content: "";
  z-index: 12;
}

.yuan-select-default .yuan-select-option .yuan-select-option-find:after {
  box-sizing: content-box;
  width: 0px;
  height: 0px;
  position: absolute;
  top: -18px;
  right: 50%;
  padding: 0;
  border-bottom: 9px solid #dcdfe6f6;
  border-top: 9px solid transparent;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  display: block;
  content: "";
  z-index: 10;
}

.yuan-select-default .yuan-select-option .yuan-select-option-find ul {
  width: 100%;
  max-height: 205px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  margin: 0;
  padding: 0;
  list-style: none;
}

.yuan-select-default .yuan-select-option .yuan-select-option-find ul li {
  padding: 0 12px;
  line-height: 40px;
  font-size: 14px;
  cursor: pointer;
  color: #626262;
  user-select: none;
  white-space: nowrap;
}

.yuan-select-default .yuan-select-option .yuan-select-option-find ul li i {
  float: right;
}

.yuan-select-default .yuan-select-option .yuan-select-option-find ul li:hover {
  background: rgba(96, 98, 102, 0.1);
}

.yuan-select-default .yuan-select-option .yuan-select-option-find ul li.yuan-select-active {
  color: #0e80eb;
}

.yuan-select-default .yuan-select-option .yuan-select-option-find ul li.yuan-select-disabled {
  color: #9d9d9d;
  cursor: no-drop;
}

.yuan-select-default .yuan-select-option .yuan-select-option-find ul li.yuan-select-disabled:hover {
  background-color: #fff;
}

.yuan-select-default .yuan-select-option .yuan-select-option-find ul::-webkit-scrollbar {
  width: 5px;
  height: 1px;
}

.yuan-select-default .yuan-select-option .yuan-select-option-find ul::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: #d5d5d6;
}

.yuan-select-default .yuan-select-option .yuan-select-option-find ul::-webkit-scrollbar-track {
  border-radius: 8px;
  background: #fff;
}

/* small */
.yuan-select-small {
  width: 100%;
  height: auto;
  margin: 0;
  position: relative;
}

.yuan-select-small .yuan-select-input-small {
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  position: relative;
}

.yuan-select-small .yuan-select-input-small input {
  height: 100%;
  width: 100%;
  font-size: 13px;
  outline: none;
  border: 0;
  margin: 0;
  padding: 8px 28px 8px 8px;
  box-sizing: border-box;
  border-radius: 4px;
  color: #606266;
  cursor: pointer;
  border: 1px solid #dcdfe6f6;
  transition: all 0.2s ease;
}

.yuan-select-small .yuan-select-input-small input:focus {
  border-color: #0e80eb;
}

.yuan-select-small .yuan-select-input-small .yuan-select-input::placeholder {
  color: #c6c8cc;
  font-size: 14px;
}

.yuan-select-small .yuan-select-input-small .yuan-select-input-value::placeholder {
  color: #626262;
  font-size: 14px;
}

.yuan-select-small .yuan-select-input-small .select-icon {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #94969b;
  transition: all 0.2s ease;
  cursor: pointer;
  transform-origin: 50% 50%;
}

.yuan-select-small .yuan-select-input-small .select-icon-tranfromOut {
  transform: rotate(180deg);
}

.yuan-select-small .yuan-select-input-small .select-icon-tranfromIn {
  transform: rotate(0deg);
}

.yuan-select-small .yuan-select-option {
  min-width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #fff;
  top: 100%;
  z-index: 99;
}

.yuan-select-small .yuan-select-option .yuan-select-option-find {
  width: 100%;
  max-height: 211px;
  height: auto;
  position: relative;
  margin-top: 13px;
  padding: 4px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #dcdfe6f6;
  border-radius: 3px;
  transition: all 0.1s ease;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.yuan-select-small .yuan-select-option .yuan-select-option-find:before {
  box-sizing: content-box;
  width: 0px;
  height: 0px;
  position: absolute;
  top: -15.7px;
  right: 50.27%;
  padding: 0;
  border-bottom: 8px solid #ffffff;
  border-top: 8px solid transparent;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  display: block;
  content: "";
  z-index: 12;
}

.yuan-select-small .yuan-select-option .yuan-select-option-find:after {
  box-sizing: content-box;
  width: 0px;
  height: 0px;
  position: absolute;
  top: -18px;
  right: 50%;
  padding: 0;
  border-bottom: 9px solid #dcdfe6f6;
  border-top: 9px solid transparent;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  display: block;
  content: "";
  z-index: 10;
}

.yuan-select-small .yuan-select-option .yuan-select-option-find ul {
  width: 100%;
  max-height: 205px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
  scrollbar-width: thin;
}

.yuan-select-small .yuan-select-option .yuan-select-option-find ul li {
  padding: 0 12px;
  line-height: 35px;
  font-size: 13px;
  cursor: pointer;
  color: #626262;
  user-select: none;
  white-space: nowrap;
}

.yuan-select-small .yuan-select-option .yuan-select-option-find ul li i {
  float: right;
}

.yuan-select-small .yuan-select-option .yuan-select-option-find ul li:hover {
  background: rgba(96, 98, 102, 0.1);
}

.yuan-select-small .yuan-select-option .yuan-select-option-find ul li.yuan-select-active {
  color: #0e80eb;
}

.yuan-select-small .yuan-select-option .yuan-select-option-find ul li.yuan-select-disabled {
  color: #9d9d9d;
  cursor: no-drop;
}

.yuan-select-small .yuan-select-option .yuan-select-option-find ul li.yuan-select-disabled:hover {
  background-color: #fff;
}

.yuan-select-small .yuan-select-option .yuan-select-option-find ul::-webkit-scrollbar {
  width: 5px;
  height: 1px;
}

.yuan-select-small .yuan-select-option .yuan-select-option-find ul::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: #d5d5d6;
}

.yuan-select-small .yuan-select-option .yuan-select-option-find ul::-webkit-scrollbar-track {
  border-radius: 8px;
  background: #fff;
}

/* mini */
.yuan-select-mini {
  width: 100%;
  height: auto;
  margin: 0;
  position: relative;
}

.yuan-select-mini .yuan-select-input-mini {
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  position: relative;
}

.yuan-select-mini .yuan-select-input-mini input {
  height: 100%;
  width: 100%;
  font-size: 12px;
  outline: none;
  border: 0;
  margin: 0;
  padding: 7px 26px 7px 6px;
  box-sizing: border-box;
  border-radius: 4px;
  color: #606266;
  cursor: pointer;
  border: 1px solid #dcdfe6f6;
  transition: all 0.2s ease;
}

.yuan-select-mini .yuan-select-input-mini input:focus {
  border-color: #0e80eb;
}

.yuan-select-mini .yuan-select-input-mini .yuan-select-input::placeholder {
  color: #c6c8cc;
  font-size: 12px;
}

.yuan-select-mini .yuan-select-input-mini .yuan-select-input-value::placeholder {
  color: #626262;
  font-size: 12px;
}

.yuan-select-mini .yuan-select-input-mini .select-icon {
  position: absolute;
  right: 10px;
  top: 8px;
  color: #94969b;
  transition: all 0.2s ease;
  cursor: pointer;
  transform-origin: 50% 50%;
}

.yuan-select-mini .yuan-select-input-mini .select-icon-tranfromOut {
  transform: rotate(180deg);
}

.yuan-select-mini .yuan-select-input-mini .select-icon-tranfromIn {
  transform: rotate(0deg);
}

.yuan-select-mini .yuan-select-option {
  min-width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #fff;
  top: 100%;
  z-index: 99;
}

.yuan-select-mini .yuan-select-option .yuan-select-option-find {
  width: 100%;
  max-height: 185px;
  height: auto;
  position: relative;
  margin-top: 13px;
  padding: 4px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #dcdfe6f6;
  border-radius: 3px;
  transition: all 0.1s ease;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.yuan-select-mini .yuan-select-option .yuan-select-option-find:before {
  box-sizing: content-box;
  width: 0px;
  height: 0px;
  position: absolute;
  top: -15.7px;
  right: 50.27%;
  padding: 0;
  border-bottom: 8px solid #ffffff;
  border-top: 8px solid transparent;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  display: block;
  content: "";
  z-index: 12;
}

.yuan-select-mini .yuan-select-option .yuan-select-option-find:after {
  box-sizing: content-box;
  width: 0px;
  height: 0px;
  position: absolute;
  top: -18px;
  right: 50%;
  padding: 0;
  border-bottom: 9px solid #dcdfe6f6;
  border-top: 9px solid transparent;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  display: block;
  content: "";
  z-index: 10;
}

.yuan-select-mini .yuan-select-option .yuan-select-option-find ul {
  width: 100%;
  max-height: 179px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
  scrollbar-width: thin;
}

.yuan-select-mini .yuan-select-option .yuan-select-option-find ul li {
  padding: 0 12px;
  line-height: 32px;
  font-size: 12px;
  cursor: pointer;
  color: #626262;
  user-select: none;
  white-space: nowrap;
}

.yuan-select-mini .yuan-select-option .yuan-select-option-find ul li i {
  float: right;
}

.yuan-select-mini .yuan-select-option .yuan-select-option-find ul li:hover {
  background: rgba(96, 98, 102, 0.1);
}

.yuan-select-mini .yuan-select-option .yuan-select-option-find ul li.yuan-select-active {
  color: #0e80eb;
}

.yuan-select-mini .yuan-select-option .yuan-select-option-find ul li.yuan-select-disabled {
  color: #9d9d9d;
  cursor: no-drop;
}

.yuan-select-mini .yuan-select-option .yuan-select-option-find ul li.yuan-select-disabled:hover {
  background-color: #fff;
}

.yuan-select-mini .yuan-select-option .yuan-select-option-find ul::-webkit-scrollbar {
  width: 5px;
  height: 1px;
}

.yuan-select-mini .yuan-select-option .yuan-select-option-find ul::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: #d5d5d6;
}

.yuan-select-mini .yuan-select-option .yuan-select-option-find ul::-webkit-scrollbar-track {
  border-radius: 8px;
  background: #fff;
}

.yuan-select-default-disabled {
  cursor: no-drop;
}

.yuan-select-default-disabled .yuan-select-input-default-disabled {
  cursor: no-drop;
}

.yuan-select-default-disabled .yuan-select-input-default-disabled input {
  cursor: no-drop;
}

.yuan-select-default-disabled .yuan-select-input-default-disabled .yuan-select-input-value::placeholder {
  color: #c6c8cc;
  font-size: 14px;
}

.yuan-select-small-disabled {
  cursor: no-drop;
}

.yuan-select-small-disabled .yuan-select-input-small-disabled {
  cursor: no-drop;
}

.yuan-select-small-disabled .yuan-select-input-small-disabled input {
  cursor: no-drop;
  color: #c6c8cc;
}

.yuan-select-small-disabled .yuan-select-input-small-disabled .yuan-select-input-value::placeholder {
  color: #c6c8cc;
  font-size: 14px;
}

.yuan-select-mini-disabled {
  cursor: no-drop;
}

.yuan-select-mini-disabled .yuan-select-input-mini-disabled {
  cursor: no-drop;
}

.yuan-select-mini-disabled .yuan-select-input-mini-disabled input {
  cursor: no-drop;
}

.yuan-select-mini-disabled .yuan-select-input-mini-disabled .yuan-select-input-value::placeholder {
  color: #c6c8cc;
  font-size: 12px;
}

input::-webkit-input-placeholder {
  color: #c6c8cc;
}

input:-moz-placeholder {
  color: #c6c8cc;
}

input::-moz-placeholder {
  color: #c6c8cc;
}

input:-ms-input-placeholder {
  color: #c6c8cc;
}

input::-ms-input-placeholder {
  color: #c6c8cc;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
