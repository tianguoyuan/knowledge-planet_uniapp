<script lang="ts" setup>
//
const props = defineProps<{
  list: {
    userImg: string
    title: string
    desc: string
    createTime: string
    mark: string
  }[]
}>()
</script>

<template>
  <view v-for="(item, index) in props.list" :key="index">
    <view class="flex">
      <view class="flex justify-center items-center w-7.5 h-7.5 bg-#E7F7F4 rounded-full">
        <image :src="item.userImg" class="w-3.75 h-3.75" />
      </view>
      <view class="ml-2.5 line-height-5">
        <view class="text-4">{{ item.title }}</view>
        <view class="line-clamp-2 text-3.5 mt-1.5">{{ item.desc }}</view>
        <view class="flex justify-between text-3 color-#B2B3B2 mt-2">
          <view>{{ item.createTime }}</view>
          <view>{{ item.mark }}</view>
        </view>
      </view>
    </view>
    <view class="mt-5 h-1px bg-#F7F7F7"></view>
  </view>
</template>
