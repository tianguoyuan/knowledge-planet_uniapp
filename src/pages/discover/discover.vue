<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
</script>

<template>
  <view>
    <Tabbar tabbar-path="/pages/discover/discover" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '发现',
    navigationStyle: '',
  },
}
</route>
