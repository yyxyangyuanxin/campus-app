<template>
  <view class="carousel-wrapper">

    <!-- 轮播图 -->
    <Carousel :list="list" width="100%" height="140px" />

  </view>
</template>

<script setup lang="ts">
import Carousel from '@/components/carousel/index.vue'
import { CarouselItem } from '../../types/index'
import imgUrl from '@/static/images/banner/1000.jpg'
import imgUrl2 from '@/static/images/banner/1001.jpg'
import imgUrl3 from '@/static/images/banner/1002.jpeg'

const list: Array<CarouselItem> = [
  {
    imgUrl
  },
  {
    imgUrl: imgUrl2
  },
  {
    imgUrl: imgUrl3
  },
]
</script>

<style lang="scss" scoped>

</style>