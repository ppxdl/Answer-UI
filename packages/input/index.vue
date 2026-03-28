<template>
  <div :class="[`yuan-group-input-${size}`]" :style="{'min-width':'auto'}">
    <div :class="isClass" :style="isStyle" style="">
      <i :class="['left-icon','iconfont',leftIcon]" v-if="!showPassword&&leftIcon!=''"></i>
      <input :type="inptype" @focus="focus" @blur="blur" :value="modelValue"  @input="iptChange" :disabled="disabled" @change="change" :placeholder="placeholder" :autofocus="autofocus" :readonly="readonly" :form="form"/>
       <transition name="slide-fade">
        <i class="clearable-icon iconfont m-icon-close" v-if="!showPassword&&clearable&&modelValue!=''" @click="clear"></i>
      </transition>
      <i :class="['right-icon','iconfont',rightIcon]" v-if="!showPassword&&rightIcon!=''"></i>
      <i v-if="showPassword"  :class="['password-icon','iconfont m-icon-browse']" @click="showPwd(type)"></i>
    </div>
    <slot name="btn"/>
  </div>
</template>
<script setup>
defineOptions({
  name: "mInput"
});
import { ref, useSlots, computed } from "vue";
const emit = defineEmits(['update:modelValue','clear','focus','blur','input','change'])
const props = defineProps({
  modelValue:String|Number,
  disabled:Boolean,
  clearable:Boolean,
  showPassword:Boolean,
  type:String,
  size:{
    type:String,
    default:'default'
  },
  leftIcon:{
    type:String,
    default:""
  },
  rightIcon:{
    type:String,
    default:""
  },
  placeholder:String,
  autofocus:Boolean,
  focusColor:{
    type:String,
    default:'#0e80eb'
  },
  readonly:Boolean,
  form:String
})
const slot = useSlots()
const isStyle = ref({})
const inptype = ref(props.type)
let focusStyle = {
  'width':!!slot.btn?'auto':'100%',
  'float':!!slot.btn?'left':'auto',
  'border-radius':!!slot.btn?'4px 0 0 4px':'4px',
  'border-color':'#dcdfe6f6'
}
isStyle.value = focusStyle
const focus  = (e) =>{
  focusStyle['border-color'] = "#0e80eb"
  isStyle.value = {
  'width':!!slot.btn?'auto':'100%',
  'float':!!slot.btn?'left':'auto',
  'border-radius':!!slot.btn?'4px 0 0 4px':'4px',
  'border-color':props.focusColor
}
  emit('focus',e)
}
const blur  = (e) =>{
  isStyle.value = {
    'width':!!slot.btn?'auto':'100%',
    'float':!!slot.btn?'left':'auto',
    'border-radius':!!slot.btn?'4px 0 0 4px':'4px',
  }
  emit('blur',e)
}
const iptChange = (e) => {
  emit('update:modelValue', e.target.value)
  emit('input',e.target.value)
}
const change = (e) =>{
  emit('change',e)
}
const clear = (e) =>{
  emit('update:modelValue', "")
  emit('clear')
}
const showPwd = (e) =>{
  if(inptype.value=='text'){
    inptype.value = 'password'
  }else{
    inptype.value = 'text'
  }
}
const isClass = computed(()=>{
  return [
    props.clearable?'yuan-input-clearable':props.size=='default'?'yuan-input-default':`yuan-input-${props.size}`,
    props.leftIcon!=""?`yuan-input-left-icon-${props.size}`:!props.clearable?props.rightIcon!=""?`yuan-input-right-icon-${props.size}`:'':'',
    props.disabled?'yuan-input-disabled':'',
    props.type=='password'?props.showPassword?`yuan-input-password-showpassword-${props.size}`:`yuan-input-password-${props.size}`:''
  ]
})
</script>
<style>
@import url("../../styles/iconfont.css");
@import url("../../styles/main.css");

.yuan-input-default,.yuan-input-password-default,.yuan-input-password-showpassword-default,.yuan-group-input-default{
  width:100%;
  height:35px;
  border:1px solid #dcdfe6f6;
  overflow: hidden;
  border-radius:4px;
  transition: all .2s ease;
  position: relative;
  box-sizing: border-box;
}
.yuan-input-default input,.yuan-input-password-default input,.yuan-input-password-showpassword-default input,.yuan-group-input-default input{
  width:100%;
  font-size:14px;
  outline:none;
  border:0;
  margin:0;
  padding:10px 10px 10px 10px;
  box-sizing: border-box;
  color:#606266;
}
.yuan-input-default input::placeholder,.yuan-input-password-default input::placeholder,.yuan-input-password-showpassword-default input::placeholder,.yuan-group-input-default input::placeholder{
  color: #c6c8cc;
  font-size: 14px;
}
.yuan-input-default i.password-icon,.yuan-input-password-default i.password-icon,.yuan-input-password-showpassword-default i.password-icon,.yuan-group-input-default i.password-icon{
  position:absolute;
  right:10px;
  top:11px;
  color:#94969b;
  transition: all .2s ease;
  cursor: pointer;
}
.yuan-input-password-showpassword-default input{
  padding-right:30px
}
.yuan-input-clearable{
  width:100%;
  height:35px;
  border:1px solid #dcdfe6f6;
  overflow: hidden;
  border-radius:4px;
  transition: all .2s ease;
  position: relative;
  box-sizing: border-box;
}
.yuan-input-clearable input{
  width:100%;
  font-size:14px;
  outline:none;
  border:0;
  margin:0;
  padding:10px 30px 10px 10px;
  box-sizing: border-box;
  color:#606266;
}
.yuan-input-clearable input::placeholder{
  color: #c6c8cc;
  font-size: 14px;
}
.yuan-input-clearable .clearable-icon{
  position:absolute;
  right:10px;
  top:10px;
  color:#94969b;
  transition: all .2s ease;
  cursor: pointer;
}
.yuan-input-small,.yuan-input-password-small,.yuan-input-password-showpassword-small,.yuan-group-input-small{
  width:100%;
  height:30px;
  border:1px solid #dcdfe6f6;
  overflow: hidden;
  border-radius:4px;
  transition: all .2s ease;
  position: relative;
  box-sizing: border-box;
}
.yuan-input-small input,.yuan-input-password-small input,.yuan-input-password-showpassword-small input,.yuan-group-input-small input{
  width:100%;
  font-size:13px;
  outline:none;
  border:0;
  margin:0;
  padding:7px 30px 7px 10px;
  box-sizing: border-box;
  color:#606266
}
.yuan-input-small input::placeholder,.yuan-input-password-small input::placeholder,.yuan-input-password-showpassword-small input::placeholder,.yuan-group-input-small input::placeholder{
  color: #c6c8cc;
  font-size: 13px;
}
.yuan-input-small i.password-icon,.yuan-input-password-small i.password-icon,.yuan-input-password-showpassword-small i.password-icon,.yuan-group-input-small i.password-icon{
  position:absolute;
  right:10px;
  top:8px;
  color:#94969b;
  transition: all .2s ease;
  cursor: pointer;
}
.yuan-input-password-showpassword-small input{
  padding-right:30px
}
.yuan-input-mini,.yuan-input-password-mini,.yuan-input-password-showpassword-mini,.yuan-group-input-mini{
  width:100%;
  height:28px;
  border:1px solid #dcdfe6f6;
  overflow: hidden;
  border-radius:4px;
  transition: all .2s ease;
  position: relative;
  box-sizing: border-box;
}
.yuan-input-mini input,.yuan-input-password-mini input,.yuan-input-password-showpassword-mini input,.yuan-group-input-mini input{
  width:100%;
  font-size:12px;
  outline:none;
  border:0;
  margin:0;
  padding:6px 10px 6px 10px;
  box-sizing: border-box;
  color:#606266;
}
.yuan-input-mini input::placeholder,.yuan-input-password-mini input::placeholder,.yuan-input-password-showpassword-mini input::placeholder,.yuan-group-input-mini input::placeholder{
  color: #c6c8cc;
  font-size: 12px;
}
.yuan-input-mini i.password-icon,.yuan-input-password-mini i.password-icon,.yuan-input-password-showpassword-mini i.password-icon,.yuan-group-input-mini i.password-icon{
  position:absolute;
  right:10px;
  top:7px;
  color:#94969b;
  transition: all .2s ease;
  cursor: pointer;
}
.yuan-input-password-showpassword-mini input{
  padding-right:30px
}
.yuan-input-left-icon-default{
  height:35px;
}
.yuan-input-left-icon-default input{
  padding:10px 25px 10px 32px;
}
.yuan-input-left-icon-default input::placeholder{
  color: #c6c8cc;
  font-size: 14px;
}
.yuan-input-left-icon-default .left-icon{
  position:absolute;
  left:10px;
  top:11px;
  color:#94969b;
}
.yuan-input-left-icon-small{
  height:30px;
}
.yuan-input-left-icon-small input{
  padding:7px 25px 7px 32px;
  font-size: 13px;
}
.yuan-input-left-icon-small input::placeholder{
  color: #c6c8cc;
  font-size: 13px;
}
.yuan-input-left-icon-small .left-icon{
  position:absolute;
  left:10px;
  top:8px;
  font-size:13px;
  color:#94969b;
}
.yuan-input-left-icon-small .clearable-icon{
  font-size:13px;
  top:8px;
}
.yuan-input-left-icon-mini{
  height:28px;
}
.yuan-input-left-icon-mini input{
  padding:6px 25px 6px 32px;
  font-size: 12px;
}
.yuan-input-left-icon-mini input::placeholder{
  color: #c6c8cc;
  font-size: 12px;
}
.yuan-input-left-icon-mini .left-icon{
  position:absolute;
  left:10px;
  top:7px;
  font-size:12px;
  color:#94969b;
}
.yuan-input-left-icon-mini .clearable-icon{
  font-size:12px;
  top:7px;
}
.yuan-input-right-icon-default{
  height:35px;
}
.yuan-input-right-icon-default input{
  padding:10px 32px 10px 10px;
}
.yuan-input-right-icon-default input::placeholder{
  color: #c6c8cc;
}
.yuan-input-right-icon-default .right-icon{
  position:absolute;
  right:10px;
  top:11px;
  color:#94969b;
}
.yuan-input-right-icon-small{
  height:30px;
}
.yuan-input-right-icon-small input{
  padding:7px 32px 7px 10px;
  font-size: 13px;
}
.yuan-input-right-icon-small input::placeholder{
  color: #c6c8cc;
  font-size: 13px;
}
.yuan-input-right-icon-small .right-icon{
  position:absolute;
  right:10px;
  top:8px;
  font-size:13px;
  color:#94969b;
}
.yuan-input-right-icon-mini{
  height:28px;
}
.yuan-input-right-icon-mini input{
  padding:6px 32px 6px 10px;
  font-size: 12px;
}
.yuan-input-right-icon-mini input::placeholder{
  color: #c6c8cc;
  font-size: 12px;
}
.yuan-input-right-icon-mini .right-icon{
  position:absolute;
  right:10px;
  top:7px;
  font-size:12px;
  color:#94969b;
}
.yuan-input-disabled input{
  cursor: no-drop;
  color:#c3bfbf;
}
.yuan-input-disabled .clearable-icon{
  display:none
}
.yuan-input-disabled .left-icon{
  position:absolute;
  left:10px;
  top:10px;
  color:#c6c8cc;
}
.yuan-input-disabled .right-icon{
  position:absolute;
  right:10px;
  top:10px;
  color:#c6c8cc;
}
.yuan-group-input-default{
  border: none;
  height: auto;
}
.yuan-group-input-small{
  border: none;
  height: auto;
}
.yuan-group-input-small .yuan-input-clearable{
  height: 30px;
}
.yuan-group-input-small .yuan-input-clearable .clearable-icon{
  top:7px;
  font-size: 13px;
}
.yuan-group-input-mini{
  border: none;
}
.yuan-group-input-mini .yuan-input-clearable{
  height: 28px;
}
.yuan-group-input-mini .yuan-input-clearable .clearable-icon{
  top:8px;
  font-size: 12px;
}
.yuan-group-input-default .yuan-button{
  padding:9px 20px !important;
  border-radius: 0 2px 2px 0;
}
.yuan-group-input-small .yuan-button{
  padding:6.6px 15px !important;
  border-radius: 0 2px 2px 0;
}
.yuan-group-input-mini .yuan-button{
  padding:7px 15px !important;
  font-size: 12px;
  border-radius: 0 2px 2px 0;
}
.yuan-group-input-mini .yuan-button i{
  font-size: 12px;
}
input::-webkit-input-placeholder{
  color: #c6c8cc;
}
input:-moz-placeholder{
  color: #c6c8cc;
}
input::-moz-placeholder{
  color: #c6c8cc;
}
input:-ms-input-placeholder{
  color: #c6c8cc;
}
input::-ms-input-placeholder{
  color: #c6c8cc;
}
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}
.slide-fade-enter-from,.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
