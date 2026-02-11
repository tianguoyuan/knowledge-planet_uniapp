<script lang="ts" setup>
import { getImage } from '@/utils/imageManager'

//
const props = defineProps<{
  list: {
    userImg: string
    username: string
    title: string
    desc: string
    fileList: {
      imgUrl: string
      title: string
    }[]
    imgList: {
      url: string
    }[]
    createTime: string
    mark: string
  }[]
}>()
</script>

<template>
  <view class="">
    <view v-for="(item, index) in props.list" :key="index" class="pb-5">
      <view class="flex">
        <view>
          <image class="w-7.5 h-7.5" :src="item.userImg" />
        </view>
        <view class="ml-2.5 flex-1">
          <view class="flex justify-between items-center line-height-5">
            <view class="text-3.5 line-clamp-1">
              <text class="font-bold">{{ item.username }}：</text>
              <text class="">{{ item.title }}</text>
            </view>
          </view>

          <view class="text-4 line-clamp-2 mt-1.5">{{ item.desc }}</view>

          <view
            class="mt-3 rounded-1 overflow-hidden flex bg-#F5F6F6 h-11"
            v-for="(file, fileIndex) in item.fileList"
            :key="fileIndex"
          >
            <view class="flex justify-center items-center w-11 bg-#FDA956">
              <image class="h-5.5 w-5.5" :src="file.imgUrl" />
            </view>
            <view class="p-3">{{ file.title }}</view>
          </view>

          <view class="mt-3 grid grid-cols-3 gap-1">
            <image
              v-for="(img, imgIndex) in item.imgList"
              :key="imgIndex"
              :src="img.url"
              class="w-24 h-24"
            />
          </view>

          <view class="mt-4 flex justify-between color-#B3B3B3">
            <view>{{ item.createTime }}</view>
            <view>{{ item.mark }}</view>
          </view>
        </view>
      </view>

      <view class="mt-5 h-1px bg-#F7F7F7"></view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
