<!-- html -->
<template>
<div class="yuan-style">
    <m-progress
      :percent="20"
      progressType="circle"
      :circleSize="120"
      isShowText
      roundCorner
    >
     <m-button type="primary" size="mini" leftIcon="m-icon-prompt" round></m-button>
    </m-progress>
    <m-progress
      :percent="40"
      bgColor="#505050"
      progressType="circle"
      :circleSize="120"
      isShowText
      roundCorner
    >progress</m-progress>
    <m-progress
      :percent="100"
      currentStatus="SUCCESS"
      progressType="circle"
      :circleSize="120"
      :circleHeight="10"
      isShowText
    >
    FULL
    </m-progress>
</div>
</template>
<style scoped>
.yuan-style{
  display: flex;
  flex-wrap: wrap;
}
.yuan-progress {
  margin-bottom: 10px;
  margin-right: 10px;
}
.yuan-button-round {
  border-radius: 50%;
}
.yuan-button-mini {
  padding: 4px;
}
</style>