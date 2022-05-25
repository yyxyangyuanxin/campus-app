<template>
  <view class="wrapper">

    <!-- 底部背景 -->
    <Backgruond />

    <view class="container">

      <!-- 快捷应用 -->
      <QuickApp class="quick-app" @change="quickAppHandle" />

      <!-- 轮播图 -->
      <Banner class="banner-list" />

      <!-- 学校公告 -->
      <News class="news" />

    </view>

  </view>
</template>

<script setup lang="ts">
import Backgruond from './backgruond.vue'
import QuickApp from './quickApp.vue'
import Banner from './banner.vue'
import News from './news.vue'
import { QuickAppType } from '../../types/index'

function quickAppHandle(type: QuickAppType) {
  console.log(type)
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background: #f5f5f5;
  position: relative;

  .container {
    position: absolute;
    top: 260upx;
    padding: 0 30upx 0;

    .quick-app,
    .banner-list,
    .news {
      margin-bottom: 20upx;
      box-shadow: 0 2upx 10upx rgba($color: #666, $alpha: 0.3);
    }
  }
}
</style>
