<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import { useAppStore } from '@/store/app'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'

const { navBarInfo } = useUniAppSystemRectInfo()
const appStore = useAppStore()
</script>

<template>
  <view
    class="bg-#9f9f9f"
    :style="{
      'min-height': `${appStore.systemScreenHeight}px`,
    }"
  >
    <Navbar title="Demo" show-back-icon show-home-icon />
    <view>demo - page</view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: 'demo',
  },
}
</route>
