<template>
  <view class="backgruond-wrapper">

    <!-- 文字 -->
    <view class="backgruond-left">
      <text>欢迎进入</text>
      <text>信息智慧校园之旅</text>
    </view>

    <!-- 背景图 -->
    <view class="backgruond-right">
      
    </view>
  </view>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.backgruond-wrapper {
  width: 200%;
  height: 350upx;
  display: flex;
  margin-left: -50%;
  border-bottom-left-radius: 60%;
  border-bottom-right-radius: 60%;
  background: linear-gradient(180deg, #ff6d50, #ff826f, #f8a68d);

  .backgruond-left {
    position: absolute;
    top: 55upx;
    left: 30upx;
    display: flex;
    flex-direction: column;
    font-size: 44upx;
    color: #eee;
  }

  .backgruond-right {
    width: 280upx;
    height: 280upx;
    position: absolute;
    right: 20upx;
    background: url('@/static/images/bg.png');
    background-size: 100% 100%;
  }
}
</style>