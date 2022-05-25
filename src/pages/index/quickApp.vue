<template>
  <view class="quick-app-wrapper">

    <!-- 标题 -->
    <text class="quick-app-title">快捷应用</text>

    <!-- 列表 -->
    <ul class="quick-app-list">
      <li
        class="quick-app-item"
        v-for="(item, index) in list"
        :key="index"
        @click="quickAppHandle(item.type)">

        <img class="quick-app-item-image" src="@/static/icon/quickApp/course.png" />
        <text class="quick-app-item-title">{{ item.title }}</text>
        
      </li>
    </ul>

  </view>
</template>

<script setup lang="ts">
import { QuickAppItem, QuickAppType } from '../../types/index'

interface Prop {
  list: Array<QuickAppItem>
}
const props = withDefaults(defineProps<Prop>(), {
  list: () => [
    {
      title: '课程表',
      iconUrl: '@/static/icon/quickApp/course.png',
      type: 'course'
    },
    {
      title: '我的成绩',
      iconUrl: '@/static/icon/quickApp/course.png',
      type: 'course'
    },
    {
      title: '我的考勤',
      iconUrl: '@/static/icon/quickApp/course.png',
      type: 'course'
    },
    {
      title: '我的日记',
      iconUrl: '@/static/icon/quickApp/course.png',
      type: 'course'
    },
    {
      title: '我的阅读',
      iconUrl: '@/static/icon/quickApp/course.png',
      type: 'course'
    },
    {
      title: '校园新闻',
      iconUrl: '@/static/icon/quickApp/course.png',
      type: 'course'
    },
    {
      title: '失物招领',
      iconUrl: '@/static/icon/quickApp/course.png',
      type: 'course'
    },
    {
      title: '失物招领',
      iconUrl: '@/static/icon/quickApp/course.png',
      type: 'course'
    },
  ]
})

// 点击快捷应用处理
const emit = defineEmits<{
  (e: 'change', type: QuickAppType): void
}>()
function quickAppHandle(type: QuickAppType) {
  emit('change', type)
}
</script>

<style lang="scss" scoped>
.quick-app-wrapper {
  display: block;
  width: 100%;
  height: 435upx;
  background: #fff;
  border-radius: 10upx;
  box-sizing: border-box;
  padding: 30upx 0;

  .quick-app-title {
    margin-left: 30upx;
  }

  .quick-app-list {
    width: 100%;
    height: 280upx;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin-top: 35upx;
    
    .quick-app-item {
      flex: 0 0 25%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .quick-app-item-image {
        width: 80upx;
        height: 80upx;
      }

      .quick-app-item-title {
        font-size: 24upx;
        margin-top: 10upx;
      }
    }
  }
}
</style>
