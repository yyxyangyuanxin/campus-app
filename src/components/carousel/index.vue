<template>
  <view class="carousel-wrapper">

    <!-- 轮播图 -->
    <ul class="carousel-list">
      <li
        class="carousel-item"
        v-for="(item, index) in list"
        :key="index">

        <img class="carousel-item-image" :src="item.imgUrl" >

      </li>
    </ul>

  </view>
</template>

<script setup lang="ts">
import { toRefs, ref, Ref } from 'vue'
import { CarouselItem } from '../../types/index'

interface Prop {
  list: Array<CarouselItem>
  width: string
  height: string
  moveTime: number
}
const props = withDefaults(defineProps<Prop>(), {
  list: () => [
    {
      imgUrl: ''
    }
  ],
  width: '100%',
  height: '100px',
  moveTime: 2000
})

// 设置轮播图的宽高
const { width, height, list, moveTime } = toRefs(props)
list.value.push(list.value[0])

// 轮播图列表宽度
const bannerWidth = `${ list.value.length * parseInt(width.value) }%`

// 每隔一段时间让轮播图往左移动
let count: number = 1
let left: Ref<string> = ref('0')
let transition: Ref<string> = ref('all 0.5s')
/**
 * 轮播图运动
 * 
 * @param time 移动频率
 */
function carouselMove(time: number) {
  setTimeout(() => {

    left.value = `${ -(parseInt(width.value) * count % parseInt(bannerWidth)) }%`
    
    if(count === list.value.length) {
      transition.value = 'none'
      count = 1
      carouselMove(0)
    } else {
      transition.value = 'all 0.5s'
      count++
      carouselMove(moveTime.value)
    }

  }, time)
}
carouselMove(moveTime.value)
</script>

<style lang="scss" scoped>
$border_radius_15: 10upx;

.carousel-wrapper {
  width: v-bind(width);
  height: v-bind(height);
  border-radius: $border_radius_15;
  overflow: hidden;

  .carousel-list {
    width: v-bind(bannerWidth);
    height: 100%;
    display: flex;
    margin-left: v-bind(left);
    transition: v-bind(transition);

    .carousel-item {
      width: 100%;
      height: 100%;
      border-radius: $border_radius_15;

      .carousel-item-image {
        width: 100%;
        height: 100%;
        border-radius: $border_radius_15;
      }
    }
  }
}
</style>