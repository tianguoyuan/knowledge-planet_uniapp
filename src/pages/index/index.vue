<script lang="ts" setup>
import PLATFORM from '@/utils/platform'
import Tabbar from '@/components/Tabbar.vue'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'
import { TnInput } from '@tuniao/tnui-vue3-uniapp'
import { getImage } from '@/utils/imageManager'
//
onLoad(() => PLATFORM.isApp && uni.hideTabBar())

const { navBarInfo } = useUniAppSystemRectInfo()

// 打开喜卡页面
function pageToDemo() {
  uni.navigateTo({
    url: '/pagesA/demo/demo',
  })
}

const form = ref({
  search: '',
})
const bannerList = ref([
  {
    title: '设计大侦探',
    desc: '廖庆 Joseph',
    userImg: getImage('userImg'),
    img: getImage('home-banner1'),
  },

  {
    title: '三体读者群',
    desc: '廖庆 Joseph',
    userImg: getImage('userImg'),
    img: getImage('home-banner2'),
  },

  {
    title: '雕刻的艺术',
    desc: '廖庆 Joseph',
    userImg: getImage('userImg'),
    img: getImage('home-banner3'),
  },

  {
    title: '希腊神话',
    desc: '廖庆 Joseph',
    userImg: getImage('userImg'),
    img: getImage('home-banner4'),
  },

  {
    title: '这是一个星球',
    desc: '廖庆 Joseph',
    userImg: getImage('userImg'),
    img: getImage('home-banner5'),
  },

  {
    title: '星球学院',
    desc: '廖庆 Joseph',
    userImg: getImage('userImg'),
    img: getImage('home-banner6'),
  },
])

function pageToDetail(title: string) {
  uni.navigateTo({
    url: '/pages/index/detail?title=' + title,
  })
}
</script>

<template>
  <view class="overflow-hidden">
    <view :style="{ height: navBarInfo.statusHeight + 'px' }" class="bg-#6ff6f6"></view>

    <view class="p-5 pt-0">
      <view class="h-10 bg-#F5F6F6 flex items-center px-2">
        <TnInput
          v-model="form.search"
          placeholder="搜索星球、用户或内容"
          right-icon="search"
          :border="false"
        />
      </view>
      <view class="mt-5"></view>
      <view class="grid grid-cols-2 gap-5">
        <view
          v-for="(item, index) in [...bannerList, ...bannerList]"
          :key="index"
          class="overflow-hidden rounded-2 bg-#F5F6F6"
          @click="pageToDetail(item.title)"
        >
          <image class="h-40 w-full" mode="aspectFill" :src="item.img" />
          <view class="p-2">
            <view class="color-#313131 text-4.25">{{ item.title + index }}</view>
            <view class="flex justify-between mt-0.5 color-#7A7B7B">
              <view>{{ item.desc }}</view>
              <image :src="item.userImg" class="w-4 h-4" />
            </view>
          </view>
        </view>
      </view>
    </view>

    <Tabbar tabbar-path="/pages/index/index" />
  </view>
</template>

<route lang="json5" type="home">
{
  layout: 'default',
  style: {
    navigationStyle: 'default',
    navigationBarTitleText: '首页',
  },
  needLogin: false,
}
</route>
