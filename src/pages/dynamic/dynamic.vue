<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
import { getImage } from '@/utils/imageManager'
import SystemList from './components/SystemList.vue'
import DynamicList from './components/DynamicList.vue'

const systemListData = ref([
  {
    userImg: getImage('common-bell'),
    title: '系统消息',
    desc: '您好，欢迎加入「云端书馆」，希望大家…',
    createTime: '昨天 23:50',
    mark: '设计情报局',
  },
])

const dynamicListData = ref([
  {
    userImg: getImage('common-user-img'),
    username: '啊哈哈~',
    title: '#每周模仿训练连接线其实不错',
    desc: '纯享版-想阅读致敬！微信读书产品设计策略微信读书产品设计策略…',
    fileList: [
      {
        imgUrl: getImage('common-file-ppt'),
        title: '第二学期第37期…习(皇皇).pptx',
      },
    ],
    imgList: [
      {
        url: getImage('dynamic-list-1'),
      },
      {
        url: getImage('dynamic-list-2'),
      },
      {
        url: getImage('dynamic-list-3'),
      },
    ],
    createTime: '昨天 23:50',
    mark: '7天临摹设计挑战',
  },
  {
    userImg: getImage('common-user-img2'),
    username: 'Joseph',
    title: '#每周模仿训练连接线其实不错',
    desc: '纯享版-想阅读致敬！微信读书产品设计策略微信读书产品设计策略…',
    fileList: [
      {
        imgUrl: getImage('common-file-ppt'),
        title: '第二学期第37期…习(皇皇).pptx',
      },
    ],
    imgList: [
      {
        url: getImage('dynamic-list-4'),
      },
      {
        url: getImage('dynamic-list-5'),
      },
      {
        url: getImage('dynamic-list-6'),
      },
    ],
    createTime: '昨天 23:50',
    mark: '设计情报局',
  },
])
</script>

<template>
  <view>
    <view class="p-5 pb-0">
      <SystemList :list="systemListData" />
    </view>
    <view class="p-5 pb-0">
      <DynamicList :list="dynamicListData" />
    </view>
    <Tabbar tabbar-path="/pages/dynamic/dynamic" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '动态',
    navigationStyle: 'custom',
  },
}
</route>
