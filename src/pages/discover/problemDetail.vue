<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import { getImage } from '@/utils/imageManager'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'

const { navBarInfo } = useUniAppSystemRectInfo()
const appStore = useAppStore()
const minHeight = computed(() => appStore.systemScreenHeight - navBarInfo.height)

const props = defineProps<{
  title: string
  id: string
}>()
onLoad(() => {
  if (!props) return

  props.title &&
    uni.setNavigationBarTitle({
      title: props.title,
    })
})

const messageList = ref([
  {
    authImage: getImage('common-user-img2'),
    authName: '饭团大妈',
    content: '精神追随者一直在寻觅一个乌托邦',
    createTime: '2022/5/8 11:37',
    likeNum: '12',
    messageNum: '12',
  },
  {
    authImage: getImage('common-user-img2'),
    authName: '饭团大妈',
    content: '精神追随者一直在寻觅一个乌托邦',
    createTime: '2022/5/8 11:37',
    likeNum: '12',
    messageNum: '12',
  },
  {
    authImage: getImage('common-user-img2'),
    authName: '饭团大妈',
    content: '精神追随者一直在寻觅一个乌托邦',
    createTime: '2022/5/8 11:37',
    likeNum: '12',
    messageNum: '12',
  },
  {
    authImage: getImage('common-user-img2'),
    authName: '饭团大妈',
    content: '精神追随者一直在寻觅一个乌托邦',
    createTime: '2022/5/8 11:37',
    likeNum: '12',
    messageNum: '12',
  },
])
</script>

<template>
  <view
    class="bg-[linear-gradient(360deg,#FFFFFF_0%,#F3F4F6_100%)]"
    :style="{ 'min-height': minHeight + 'px' }"
  >
    <view class="pt-10.5 px-5">
      <view class="text-4.75">知识星球为什么要做星空问答？</view>
      <view class="mt-4 color-#7E7E7E">以及，我作为知识星球现有用户，应该怎样使用这款产品？</view>

      <view class="mt-3 flex items-center">
        <image :src="getImage('common-user-img')" class="w-5 h-5" />
        <view class="ml-2">wulujia · 提问</view>
      </view>

      <view class="mt-5.5 flex justify-between items-center">
        <view class="text-3 color-#7C7C7D flex">
          <view>8</view>
          <view class="ml-1">个回答</view>
        </view>
        <view class="flex items-center">
          <view class="flex items-center">
            <image :src="getImage('common-follow-blue')" class="w-6 h-6" />
            <view>关注回答</view>
          </view>
          <view class="ml-4 flex items-center">
            <image :src="getImage('common-share-blue')" class="w-6 h-6" />
            <view>分享给朋友</view>
          </view>
        </view>
      </view>
    </view>

    <view
      class="px-3 mt-3 py-5 px-4 mx-3 bg-#FEFFFF rounded-2"
      v-for="(item, index) in messageList"
      :key="index"
    >
      <view class="flex justify-between">
        <view class="flex items-center">
          <image :src="item.authImage" class="w-5 h-5" />
          <view class="ml-2 text-#7F8080">{{ item.authName }}</view>
        </view>
        <image class="w-5 h-5" :src="getImage('common-more-gray')" />
      </view>

      <view class="text-4 mt-4">{{ item.content }}</view>

      <view class="flex justify-between mt-5">
        <view>{{ item.createTime }}</view>
        <view class="flex items-center color-#7F8080">
          <image :src="getImage('common-like-gray')" class="w-5 h-5" />
          <view class="ml-1.5">12</view>
          <image :src="getImage('common-message-gray')" class="w-5 h-5 ml-3" />
          <view class="ml-1.5">{{ item.messageNum }}</view>
          <image :src="getImage('common-share-blue')" class="w-5 h-5 ml-3" />
        </view>
      </view>
    </view>

    <view class="h-15"></view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'default',
    navigationBarTitleText: '星空问答',
  },
}
</route>
