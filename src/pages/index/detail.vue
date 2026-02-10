<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import { getImage } from '@/utils/imageManager'

//
</script>

<template>
  <view class="">
    <Navbar showBackIcon bgColor="transparent" :bottom-shadow="false" :placeholder="false" />
    <image :src="getImage('index-detail-cover')" class="w-100%" mode="widthFix" />
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
    navigationBarTitleText: '',
  },
}
</route>
