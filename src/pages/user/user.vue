<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
import { getImage } from '@/utils/imageManager'
import UserList from './components/UserList.vue'
import Navbar from '@/components/Navbar.vue'

const list = ref([
  {
    title: '星球币',
    rightTitle: '',
    rightImg: getImage('common-arrow-right-gray'),
  },
  {
    title: '邀请码',
    rightTitle: '10',
    rightImg: getImage('common-arrow-right-gray'),
  },
])
const listOther = ref([
  {
    title: '星球币',
    rightTitle: '',
    rightImg: getImage('common-arrow-right-gray'),
  },
  {
    title: '邀请码',
    rightTitle: '',
    rightImg: getImage('common-arrow-right-gray'),
  },
  {
    title: '星球币',
    rightTitle: '',
    rightImg: getImage('common-arrow-right-gray'),
  },
  {
    title: '邀请码',
    rightTitle: '',
    rightImg: getImage('common-arrow-right-gray'),
  },
])
</script>

<template>
  <view class="bg-#F3F7F8">
    <Navbar :bottomShadow="false" :fixed="false" />
    <view class="h-12 pr-5 flex items-center justify-end bg-#fff">
      <view class="px-2 py-0.5 rounded-full flex items-center bg-#EDFCF8">
        <image :src="getImage('common-book-active')" class="h-5 w-5" />
        <view class="ml-0.5 color-#55B396 line-height-5">阅读数据</view>
      </view>
      <view>
        <image :src="getImage('common-bell')" class="w-5 h-5 ml-2" />
      </view>
    </view>

    <view class="pt-4 flex items-center justify-between px-7 bg-#fff">
      <view class="flex items-center">
        <view
          class="w-18 h-18 border-1 border-solid border-#eee rounded-full flex justify-center items-center"
        >
          <image :src="getImage('user-user-img')" class="w-12 h-12" />
        </view>
        <view class="ml-3.5">
          <view class="text-4 font-bold">廖尔摩斯丨设计大侦探</view>
          <view class="mt-0.5 color-#B2B3B3 text-3.5">已实名认证</view>
        </view>
      </view>
      <view>
        <image :src="getImage('common-arrow-bottom-fill-gray')" class="w-3 h-3 rotate--90" />
      </view>
    </view>

    <view class="pt-6 flex justify-around pb-7 bg-#fff">
      <view class="flex flex-col justify-center items-center">
        <view class="text-5 font-bold line-height-none">15</view>
        <view class="mt-1 text-3.5 color-#7F8080">足迹</view>
      </view>

      <view class="flex flex-col justify-center items-center">
        <view class="text-5 font-bold line-height-none">2</view>
        <view class="mt-1 text-3.5 color-#7F8080">回答</view>
      </view>

      <view class="flex flex-col justify-center items-center">
        <view class="text-5 font-bold line-height-none">0</view>
        <view class="mt-1 text-3.5 color-#7F8080">收藏</view>
      </view>
    </view>

    <view class="h-3 bg-#F3F7F8"></view>
    <UserList :list="list" class="bg-#fff" />
    <view class="h-3 bg-#F3F7F8"></view>
    <UserList :list="listOther" class="bg-#fff" />

    <Tabbar tabbar-path="/pages/user/user" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '我的',
    navigationStyle: 'custom',
  },
}
</route>
