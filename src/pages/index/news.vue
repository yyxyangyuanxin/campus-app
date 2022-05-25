<template>
  <view class="news-wrapper">

    <!-- tab列表 -->
    <Tabs class="news-tabs" v-model="currentIndex">

      <!-- 学校公告 -->
      <TabsItem title="学校公告">
        <Announce />
      </TabsItem>
      
      <!-- 服务通知 -->
      <TabsItem title="服务通知">
        hfvghjfhjguj
      </TabsItem>

      <!-- 互动通知 -->
      <TabsItem title="互动消息">
        fdf
      </TabsItem>

    </Tabs>

  </view>
</template>

<script setup lang="ts">
import Tabs from '@/components/tabs/index.vue'
import TabsItem from '@/components/tabs/item.vue'
import Announce from './components/news/announce.vue'
import { ref, Ref } from 'vue'

const currentIndex: Ref<number> = ref(0)
</script>

<style lang="scss" scoped>
.news-wrapper {
  width: 100%;
  height: 520upx;
  background: #fff;
  border-radius: 10upx;
  padding: 30upx;
  box-sizing: border-box;

  .news-tabs {
    
  }
}
</style>