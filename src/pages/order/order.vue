<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
</script>

<template>
  <view class="">
    <Tabbar tabbar-path="/pages/order/order" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '点单',
    navigationStyle: 'custom',
  },
}
</route>
