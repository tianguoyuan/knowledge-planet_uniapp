<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import { getImage } from '@/utils/imageManager'
import CardList from './components/CardList.vue'

const props = defineProps<{
  title: string
  img: string
}>()

console.log('props', props)

uni.setNavigationBarTitle({
  title: props.title,
})

const filterList = ref([
  { title: '全部', value: 'all', active: true },
  { title: '等我回答', value: 'WaitForMeToAnswer', active: false },
  { title: '精华', value: 'essence', active: false },
  { title: '只看星主', value: 'Only lookingStarOwner', active: false },
])

function handleFilterItem(item: (typeof filterList.value)[0]) {
  filterList.value.forEach((v) => (v.active = v.value === item.value))
}

const listData = ref([
  {
    userImg: getImage('common-user-img4'),
    username: '廖庆 Joseph',
    createTime: '2022/5/10 14:14',
    readNum: '1',
    desc: '纯享版-想阅读致敬！微信读书产品设计策略微信读书产品设计策略…',
    fileList: [
      {
        imgUrl: getImage('common-file-ppt'),
        title: '第二学期第37期…习(皇皇).pptx',
      },
    ],
    imgList: [
      {
        url: getImage('home-detail-list-1'),
      },
      {
        url: getImage('home-detail-list-2'),
      },
      {
        url: getImage('home-detail-list-3'),
      },
    ],
    dayFlag: '7天临摹设计挑战',
    starNum: '12',
    msgNum: '1',
  },
])
</script>

<template>
  <view class="">
    <Navbar showBackIcon bgColor="transparent" :bottom-shadow="false" :placeholder="false" />
    <image :src="props.img" class="w-100%" mode="widthFix" />

    <view class="mt--20">
      <view class="ml-5 flex">
        <view
          class="flex items-center rounded-full border-0.5 border-#fff/80 h-10 px-3 py-2 relative"
        >
          <!-- 遮照层 -->
          <view
            class="absolute left-0 right-0 top-0 bottom-0 bg-#000 border-2 border-#fff/80 border-solid opacity-30 rounded-full"
          ></view>
          <image :src="getImage('home-detail-top-user')" class="w-6 h-6 z-1" />
          <view class="color-#fff mx-1.5 z-1">去提问</view>
          <image :src="getImage('common-arrow-right')" class="h-2.5 w-2.5 z-1" />
        </view>
      </view>

      <view class="mt-5 bg-#fff rounded-t-4 p-5 relative z-1">
        <view class="flex justify-between">
          <view class="color-#000 text-4.5">设计大侦探</view>
          <view class="rounded-full h-7 px-4 color-#17B99A flex items-center bg-#E7F8F5">分享</view>
        </view>

        <view class="mt-4 bg-#FEF5EF py-2.5 px-4 color-#FDA956 text-3.5">
          试运营星球最多可加入50人，点击申请升级
        </view>

        <view class="mt-4 flex items-center">
          <view
            v-for="(item, index) in filterList"
            :key="index"
            class="mr-2.5 h-7.5 px-3 text-3.5 flex items-center"
            :class="[item.active ? 'color-#fff bg-#4D4D4D' : 'color-#7A7B7B bg-#F5F6F6']"
            @click="handleFilterItem(item)"
          >
            {{ item.title }}
          </view>
          <image class="w-4 h-4" :src="getImage('common-filter')" />
        </view>

        <view class="h-1px bg-#F7F7F7 mt-3"></view>

        <view class="flex items-center mt-3">
          <view
            class="text-2.5 color-#17B99A border-1 border-solid border-#16B998 p-1 line-height-none"
          >
            置顶
          </view>
          <view class="color-#7F7F7F text-3.5 ml-3">纯享版-想阅读致敬！微信读书产品设计策略</view>
        </view>

        <view class="h-1px bg-#F7F7F7 mt-3"></view>

        <view
          class="mt-3 py-3.5 px-3 rounded-1 border-1 border-solid border-#E0E0E0 flex items-center justify-between"
        >
          <view class="flex items-center">
            <image :src="getImage('common-book')" class="w-4.5 h-4.5" />
            <view class="text-3.75 ml-2 font-600">产品设计分析报告</view>
          </view>
          <image :src="getImage('common-arrow-right-fill')" class="w-3 h-3" />
        </view>

        <view class="mt-3 flex justify-between">
          <view class="bg-#F5F6F6 rounded-1.5 py-3.5 px-3 flex items-center flex-1 justify-between">
            <view class="flex items-center">
              <image :src="getImage('common-clock-in')" class="h-4" mode="heightFix" />
              <view class="ml-1.5">打卡挑战</view>
            </view>
            <image :src="getImage('common-arrow-right-fill')" class="w-3 h-3" />
          </view>
          <view
            class="bg-#F5F6F6 rounded-1.5 py-3.5 px-3 flex items-center flex-1 ml-3 justify-between"
          >
            <view class="flex items-center">
              <image :src="getImage('common-homework')" class="h-4" mode="heightFix" />
              <view class="ml-1.5">作业题目</view>
            </view>
            <image :src="getImage('common-arrow-right-fill')" class="w-3 h-3" />
          </view>
        </view>
        <view class="mt-3">
          <CardList :listData="[...listData, ...listData]" />
        </view>
      </view>
    </view>

    <!-- 占位 底部留白 -->
    <view class="h-12.5"></view>
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
    navigationBarTitleText: '详情',
  },
}
</route>
