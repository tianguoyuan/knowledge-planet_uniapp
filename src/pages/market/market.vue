<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
import { getImage } from '@/utils/imageManager'
</script>

<template>
  <view class="">
    <Tabbar tabbar-path="/pages/market/market" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '百货',
    navigationStyle: 'custom',
  },
}
</route>
