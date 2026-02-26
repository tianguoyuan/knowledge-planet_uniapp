<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
import { getImage } from '@/utils/imageManager'

const interestList = ref([
  {
    title: '希腊神话交流群',
    member: '成员2000+',
    desc: '圈内设计服务：《户型布局设计》价格:149...',
    image: getImage('discover_interestList_1'),
  },
  {
    title: '三体',
    member: '成员2000+',
    desc: '圈内设计服务：《户型布局设计》价格:149...',
    image: getImage('discover_interestList_2'),
  },
  {
    title: '红色妖姬',
    member: '成员2000+',
    desc: '圈内设计服务：《户型布局设计》价格:149...',
    image: getImage('discover_interestList_3'),
  },
])

const themeList = ref([
  {
    title: '#80天大脑强化 Day1 《断更四年，这次我真的不想半途而废》把一篇公众号',
    auth: '凌子丨黑珍珠',
    image: getImage('discover_themeList_1'),
  },
  {
    title: '#80天大脑强化 Day1 《断更四年，这次我真的不想半途而废》把一篇公众号',
    auth: '凌子丨黑珍珠',
    image: getImage('discover_themeList_2'),
  },
  {
    title: '#80天大脑强化 Day1 《断更四年，这次我真的不想半途而废》把一篇公众号',
    auth: '凌子丨黑珍珠',
    image: getImage('discover_themeList_3'),
  },
])

const filterTagList = ref([
  { title: '全部', value: 'all', active: true },
  { title: '行业交流', value: 'WaitForMeToAnswer', active: false },
  { title: '编程开发', value: 'essence', active: false },
  { title: '设计美学', value: 'Only lookingStarOwner', active: false },
])

function handleFilterItem(item: (typeof filterTagList.value)[0]) {
  filterTagList.value.forEach((v) => (v.active = v.value === item.value))
}

const filterList = ref([
  {
    title: '国学',
    auth: '智享圈主编',
    desc: '4800+人加入学习',
    image: getImage('discover_filterList_1'),
  },
  {
    title: '美与艺术',
    auth: '智享圈主编',
    desc: '4800+人加入学习',
    image: getImage('discover_filterList_2'),
  },
  {
    title: '雕刻之美',
    auth: '智享圈主编',
    desc: '4800+人加入学习',
    image: getImage('discover_filterList_3'),
  },
  {
    title: '每日一本书',
    auth: '智享圈主编',
    desc: '4800+人加入学习',
    image: getImage('discover_filterList_4'),
  },
])
</script>

<template>
  <view>
    <view class="px-5">
      <view class="mt-3 flex items-center justify-between">
        <view class="text-4">热点问题 · 星空问答</view>
        <view class="flex items-center">
          <view class="text-3 color-#17B99A">查看更多</view>
          <image :src="getImage('common-arrow-right-blue')" class="w-2.5 h-2.5" />
        </view>
      </view>

      <view class="mt-4 rounded-2 bg-#FAFBFB p-3">
        <view class="flex justify-between items-center">
          <view class="text-2.5 color-#17B99A py-0.5 px-1.5 bg-#E7F8F4">编辑推荐</view>
          <image :src="getImage('common-arrow-right-gray')" class="w-2.5 h-2.5" />
        </view>
        <view class="mt-2 text-4">更高的工资和更有前景的学习机会，应该选择哪个呢？</view>
      </view>

      <view class="mt-4 rounded-2 bg-#FAFBFB p-3">
        <view class="flex justify-between items-center">
          <view class="text-2.5 color-#17B99A py-0.5 px-1.5 bg-#E7F8F4">编辑推荐</view>
          <image :src="getImage('common-arrow-right-gray')" class="w-2.5 h-2.5" />
        </view>
        <view class="mt-2 text-4">更高的工资和更有前景的学习机会，应该选择哪个呢？</view>
      </view>

      <view class="mt-4 flex justify-between">
        <view class="text-4">你可能感兴趣</view>
        <view class="flex items-center">
          <view class="color-#17B99A text-3">换一批</view>
          <image class="ml-1 w-3 h-3" :src="getImage('common-refresh-blue')" />
        </view>
      </view>
      <view class="mt-4"></view>
      <view class="h-1px bg-#F7F7F7"></view>

      <view>
        <view v-for="(item, index) in interestList" :key="index" class="py-4 flex items-center">
          <image :src="item.image" class="w-16.5 h-16.5 rounded-1" mode="aspectFill" />
          <view class="ml-2">
            <view class="text-4">{{ item.title }}</view>
            <view class="text-3 mt-0.5">{{ item.member }}</view>
            <view class="text-3 mt-0.5 line-clamp-1">{{ item.desc }}</view>
          </view>
        </view>
      </view>

      <view class="mt-5">
        <image :src="getImage('discover_ad1')" class="h-34 rounded-1" mode="widthFix" />
      </view>

      <view class="mt-5 py-4 flex justify-between">
        <view class="text-4">精华主题</view>
        <view class="flex items-center">
          <view class="text-3">换一批</view>
          <image class="ml-1 w-3 h-3" :src="getImage('common-refresh-blue')" />
        </view>
      </view>
      <view class="bg-#F7F7F7 h-1px"></view>

      <view>
        <view v-for="(item, index) in themeList" :key="index">
          <view class="flex justify-between pt-5">
            <view>
              <view class="line-clamp-3 text-4">{{ item.title }}</view>
            </view>
            <image :src="item.image" class="ml-6 w-15 h-15 flex-shrink-0" />
          </view>
          <view class="mt-2 color-#808080">{{ item.auth }}</view>
          <view class="mt-5 h-1px bg-#F7F7F7"></view>
        </view>
      </view>

      <view class="mt-5">
        <view class="p-4 bg-#3F3F3F rounded-2">
          <view class="font-600 text-4 color-#FFFFFF">星球财富周榜</view>
          <view class="text-3 mt-1 color-#B2B2B2">每小时更新一次丨查看完整榜单</view>
        </view>
        <view class="py-5 px-4 text-3.75 bg-#F5F6F6">
          <view>1. 抖音内参</view>
          <view class="mt-2">2. 树泽的成长星球</view>
          <view class="mt-2">3. 以琳设计</view>
        </view>
      </view>

      <!-- filter-menu -->
      <view class="mt-4 flex items-center">
        <view class="flex items-center overflow-auto mr-3">
          <view
            v-for="(item, index) in filterTagList"
            :key="index"
            class="mr-2.5 h-7.5 px-3 text-3.5 flex items-center flex-shrink-0"
            :class="[item.active ? 'color-#fff bg-#17B99A' : 'color-#7A7B7B bg-#F5F6F6']"
            @click="handleFilterItem(item)"
          >
            {{ item.title }}
          </view>
        </view>
        <image class="w-4 h-4 bg-#fff" :src="getImage('common-filter')" />
      </view>

      <view class="mt-3">
        <view class="py-4 flex items-center" v-for="(item, index) in filterList" :key="index">
          <image
            class="w-13.5 h-13.5 flex-shrink-0 rounded-1"
            mode="aspectFill"
            :src="item.image"
          />
          <view class="ml-3">
            <view class="text-4">{{ item.title }}</view>
            <view class="flex mt-2 text-3.25 color-#808080 line-height-3.25">
              <view>{{ item.auth }}</view>
              <view class="w-1px bg-#808080 mx-2"></view>
              <view>{{ item.desc }}</view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <Tabbar tabbar-path="/pages/discover/discover" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '发现',
    navigationStyle: '',
  },
}
</route>
