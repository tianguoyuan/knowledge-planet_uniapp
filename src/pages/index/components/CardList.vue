<script lang="ts" setup>
import { getImage } from '@/utils/imageManager'

//
const props = defineProps<{
  listData: {
    userImg: string
    username: string
    createTime: string
    readNum: string
    desc: string
    fileList: {
      imgUrl: string
      title: string
    }[]
    imgList: {
      url: string
    }[]
    dayFlag: string
    starNum: string
    msgNum: string
  }[]
}>()
</script>

<template>
  <view class="">
    <view v-for="(item, index) in props.listData" :key="index" class="pt-5">
      <view class="flex">
        <view>
          <image class="w-7.5 h-7.5" :src="item.userImg" />
        </view>
        <view class="ml-2.5 flex-1">
          <view class="flex justify-between items-center line-height-5">
            <view>
              <view class="text-3.5 color-#FDA956">{{ item.username }}</view>
              <view class="text-2.5 color-#B3B3B3 flex">
                <view>{{ item.createTime }}</view>
                <view class="ml-2">阅读人数{{ item.readNum }}</view>
              </view>
            </view>
            <view>
              <image :src="getImage('common-arrow-bottom-fill-gray')" class="w-3 h-3" />
            </view>
          </view>

          <view class="text-4 line-clamp-2 mt-2">{{ item.desc }}</view>

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

          <view class="mt-3 flex">
            <view class="flex items-center p-1.25 bg-#F5F6F6 rounded-0.5 text-2.5 color-#567895">
              <image :src="getImage('home-detail-clock-in')" class="w-3.5 h-3.5" />
              <view class="ml-1">{{ item.dayFlag }}</view>
            </view>
          </view>

          <view class="mt-4 flex">
            <view class="flex-1 flex items-center justify-center">
              <image :src="getImage('common-star')" class="w-5 h-5" />
              <view class="ml-1 color-#808080 ml-1">{{ item.readNum }}</view>
            </view>
            <view class="flex-1 flex items-center justify-center">
              <image :src="getImage('common-massage')" class="w-5 h-5" />
              <view class="ml-1 color-#808080 ml-1">{{ item.msgNum }}</view>
            </view>
            <view class="flex-1 flex items-center justify-center">
              <image :src="getImage('common-share')" class="w-5 h-5" />
            </view>
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
