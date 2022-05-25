<template>
  <view class="announce-wrapper">

    <!-- 学校公告列表 -->
    <ul class="announce-list">
      <li
        class="announce-item"
        v-for="(item, index) in list"
        :key="index">

        <img class="item-image" :src="item.imgUrl" >
        <view class="item-content">
          <text class="item-content-title">{{ item.title }}</text>
          <view class="item-content-date">
            <text>{{ item.date }}</text>
            <text>{{ item.time }}</text>
          </view>
        </view>

      </li>
    </ul>

  </view>
</template>

<script setup lang="ts">
import { AnnounceItem } from '../../../../types/index'
import imgUrl from '@/static/images/banner/1000.jpg'

interface Prop {
  list: Array<AnnounceItem>
}
const props = withDefaults(defineProps<Prop>(), {
  list: () => [
    {
      title: '音乐学院举办2021年元旦文艺晚会',
      imgUrl,
      date: '12月29日',
      time: '14:02'
    },
    {
      title: '音乐学院举办2021年元旦文艺晚会',
      imgUrl,
      date: '12月29日',
      time: '14:02'
    },
    {
      title: '音乐学院举办2021年元旦文艺晚会',
      imgUrl,
      date: '12月29日',
      time: '14:02'
    },
  ]
})
</script>

<style lang="scss" scoped>
.announce-wrapper {

  .announce-list {

    .announce-item {
      display: flex;
      padding: 20upx 0;
      border-bottom: 1px solid #f5f5f5;
      &:nth-last-child(1) {
        border-bottom: none;
      }

      .item-image {
        width: 100upx;
        height: 100upx;
        border-radius: 10upx;
      }

      .item-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5upx 0;
        margin-left: 20upx;

        .item-content-title {
          color: #333;
        }

        .item-content-date {
          color: #666;
          font-size: 24upx;
        }
      }
    }
  }
}
</style>