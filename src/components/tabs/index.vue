<template>
  <view class="tabs-wrapper">

    <!-- tab标题 -->
    <ul class="tab-list">
      <li
        :class="['tab-item', {'active': index === modelValue}]"
        v-for="(item, index) in tabList"
        :key="index"
        @click="clickHandle(index)">

        <text>{{ item.title }}</text>
        
      </li>
    </ul>

    <!-- tab内容 -->
    <view class="tab-content">
      <slot></slot>
    </view>

  </view>
</template>

<script lang="ts">
export default {
  provide () {
    return {
      getParent: () => {
        return this
      },
      tabActive: () => this.modelValue
    }
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: Number
  },
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  data () {
    return {
      tabList: []
    }
  },
  methods: {
    clickHandle (index) {
      this.$emit('update:modelValue', index)
    },
    appendTab (tab) {
      this.tabList.push(tab)
    },
    removeTab (index) {
      this.tabList.splice(index, 1)
    },
    getCurrentLength () {
      return this.tabList.length
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-wrapper {

  .tab-list {
    display: flex;
    margin-bottom: 20upx;

    .tab-item {
      flex: 0 0 25%;
      color: #666;
      font-size: 28upx;
      line-height: 30upx;

      &.active {
        color: #000;
        font-size: 30upx;
        font-weight: bold;
      }
    }
  }
}
</style>