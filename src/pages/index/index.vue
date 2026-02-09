<script lang="ts" setup>
import PLATFORM from '@/utils/platform'
import Tabbar from '@/components/Tabbar.vue'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'
//
onLoad(() => PLATFORM.isApp && uni.hideTabBar())

const { navBarInfo } = useUniAppSystemRectInfo()

// 打开喜卡页面
function pageToDemo() {
  uni.navigateTo({
    url: '/pagesA/demo/demo',
  })
}
</script>

<template>
  <view class="overflow-hidden">
    <view :style="{ height: navBarInfo.statusHeight + 'px' }" class="bg-#6ff6f6"></view>
    <view
      :style="{ height: navBarInfo.height - navBarInfo.statusHeight + 'px' }"
      class="bg-#f6f66f"
    ></view>
    <view class="bg-#99f w-20 h-10 line-height-10 center color-white m-3" @click="pageToDemo">
      去demo页面
    </view>

    <Tabbar tabbar-path="/pages/index/index" />
  </view>
</template>

<route lang="json5" type="home">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
  needLogin: false,
}
</route>
