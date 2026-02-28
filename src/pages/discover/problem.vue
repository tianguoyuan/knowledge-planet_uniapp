<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import { getImage } from '@/utils/imageManager'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'

const { navBarInfo } = useUniAppSystemRectInfo()
const appStore = useAppStore()
const minHeight = computed(() => appStore.systemScreenHeight - navBarInfo.height)

const tabList = ref([
  {
    title: '首页',
    active: true,
    id: '1',
  },
  {
    title: '问题广场',
    active: false,
    id: '2',
  },
])
function changeTabListActive(index: number) {
  tabList.value = tabList.value.map((item, i) => ({
    ...item,
    active: index === i,
  }))
}

const hotProblemList = ref([
  {
    title: '更高的工资和更有前景的学习机会，应该选择哪个呢？',
    image: getImage('common-fire'),
  },
  {
    title: '更高的工资和更有前景的学习机会，应该选择哪个呢？',
    image: getImage('common-fire'),
  },
])

const problemList = ref([
  {
    title: '知识星球为什么要做星空问答？',
    authImage: getImage('common-user-img'),
    authName: 'wulujia@星球创业笔记',
    content:
      '对目前的知识星球来说，一个个星球是创作对目前的知识星球来说，一个个星球是创作目前的知识星球来说，一个个星球是创作...',
    replyUserMessage: 'wulujia、方军、垃圾分类…、沈月 等也发表了8个回答',
    likeNum: '12',
    commentNum: '12',
    id: '1',
  },
  {
    title: '知识星球为什么要做星空问答？',
    authImage: getImage('common-user-img'),
    authName: 'wulujia@星球创业笔记',
    content:
      '对目前的知识星球来说，一个个星球是创作对目前的知识星球来说，一个个星球是创作目前的知识星球来说，一个个星球是创作...',
    replyUserMessage: 'wulujia、方军、垃圾分类…、沈月 等也发表了8个回答',
    likeNum: '12',
    commentNum: '12',
    id: '2',
  },
])

function pageToDetail(id: string, title: string) {
  uni.navigateTo({
    url: `/pages/discover/problemDetail?id=${id}&title=${title}`,
  })
}
</script>

<template>
  <view class="bg-#F3F7F8 px-5 pt-2" :style="{ 'min-height': minHeight + 'px' }">
    <view class="p-1 bg-#ECF0F1 flex rounded-1.5">
      <view
        v-for="(item, index) in tabList"
        :key="index"
        class="flex-1 text-center line-height-10 rounded-1.5 font-600"
        :class="[item.active ? 'bg-#FEFFFF' : '']"
        @click="changeTabListActive(index)"
      >
        {{ item.title }}
      </view>
    </view>

    <view class="rounded-3 bg-#FEFFFF px-4 py-5 mt-3">
      <view
        v-for="(item, index) in hotProblemList"
        :key="index"
        class="flex"
        :class="[
          index !== hotProblemList.length - 1
            ? 'pb-4 border-0 border-b border-solid border-#F7F7F7'
            : 'pt-4',
        ]"
      >
        <view
          class="flex justify-center items-center w-4 h-4 rounded-0.5 bg-#EC936D flex-shrink-0 mt-0.5"
        >
          <image :src="item.image" class="w-2.5 h-2.5" />
        </view>
        <view class="ml-2 text-4">{{ item.title }}</view>
      </view>
    </view>

    <view
      class="mt-3 bg-#FEFFFF py-5 px-4"
      :class="[index === 0 ? 'hasClickBox' : '']"
      v-for="(item, index) in problemList"
      :key="index"
      @click="pageToDetail(item.id, item.title)"
    >
      <view class="text-4.75">{{ item.title }}</view>
      <view class="mt-4 flex items-center">
        <image :src="item.authImage" class="w-5 h-5" />
        <view class="ml-2 text-3.75 color-#333333">{{ item.authName }}</view>
      </view>
      <view class="mt-3 text-3.75 color-#7F7F7F line-clamp-3">{{ item.content }}</view>

      <view class="mt-3 px-3 py-1.5 text-3.75 color-#7F7F7F bg-#F9FDFE rounded-1.5">
        {{ item.replyUserMessage }}
      </view>

      <view class="mt-5 flex items-center rounded-3">
        <view class="flex items-center">
          <image :src="getImage('common-like-gray')" class="w-3.5 h-3.5" />
          <view class="ml-2">{{ item.likeNum }}</view>
        </view>
        <view class="flex items-center ml-9">
          <image :src="getImage('common-message-gray')" class="w-3.5 h-3.5" />
          <view class="ml-2">{{ item.commentNum }}</view>
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
