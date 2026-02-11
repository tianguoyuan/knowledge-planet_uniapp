<script lang="ts" setup>
import { getImage } from '@/utils/imageManager'

const props = defineProps<{
  list: {
    title: string
    rightTitle: string
    rightImg: string
  }[]
}>()
</script>

<template>
  <view class="">
    <view
      class="py-4 pl-7 pr-5 flex justify-between"
      v-for="(item, index) in props.list"
      :key="index"
    >
      <view class="flex">
        <view class="w-6 h-6 rounded-1.5 bg-#F3F7F8"></view>
        <view class="text-4 ml-4">{{ item.title }}</view>
      </view>
      <view class="flex items-center">
        <view class="color-#7F8080 text-4">{{ item.rightTitle }}</view>
        <view>
          <image :src="item.rightImg" class="w-3 h-3 ml-2" />
        </view>
      </view>
    </view>
  </view>
</template>
