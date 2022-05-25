<template>
  <view class="tab-item-wrapper">

    <!-- 内容 -->
    <slot v-if="current == index"></slot>

  </view>
</template>

<script lang="ts">
export default {
  inject: ['getParent', 'tabActive'],
  props: {
    title: String
  },
  data () {
    return {
      parent: null,
      index: 0
    }
  },
  computed: {
    current () {
      return this.tabActive()
    }
  },
  created() {
    this.parent = this.getParent()
    this.index = this.parent.getCurrentLength()
    this.parent.appendTab({
      context: this,
      title: this.title
    })
  },
  beforeUnmount () {
    this.parent.removeTab(this.index)
  }
}
</script>

<style lang="scss" scoped>

</style>