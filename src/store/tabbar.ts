import { getImage } from '@/utils/imageManager'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export type TabbarPathType =
  | '/pages/index/index'
  | '/pages/dynamic/dynamic'
  | '/pages/discover/discover'
  | '/pages/user/user'

interface TabbarItem {
  title: string
  icon: string
  activeIcon: string
  path: TabbarPathType
  messageCount: number
}

export const useTabbarStore = defineStore('tabbar', () => {
  const hideTabbar = ref(false)

  const tabbarList = ref<TabbarItem[]>([
    {
      title: '星球',
      icon: getImage('tabbar-home'),
      activeIcon: getImage('tabbar-home-active'),
      path: '/pages/index/index',
      messageCount: 0,
    },
    {
      title: '动态',
      icon: getImage('tabbar-dynamic'),
      activeIcon: getImage('tabbar-dynamic-active'),
      path: '/pages/dynamic/dynamic',
      messageCount: 0,
    },
    {
      title: '发现',
      icon: getImage('tabbar-discover'),
      activeIcon: getImage('tabbar-discover-active'),
      path: '/pages/discover/discover',
      messageCount: 0,
    },
    {
      title: '我',
      icon: getImage('tabbar-user'),
      activeIcon: getImage('tabbar-user-active'),
      path: '/pages/user/user',
      messageCount: 30,
    },
  ])

  function changeTabbarMessageCount(path: TabbarPathType, count: number) {
    tabbarList.value = tabbarList.value.map((item) => {
      return {
        ...item,
        messageCount: item.path === path ? count : item.messageCount,
      }
    })
  }

  function changeHideTabbar(v: boolean) {
    hideTabbar.value = v
  }
  const tabbarIndex = ref(0)
  function changeTabbarIndex(v: number) {
    tabbarIndex.value = v
  }

  return {
    tabbarList,
    changeTabbarMessageCount,
    hideTabbar,
    changeHideTabbar,
    tabbarIndex,
    changeTabbarIndex,
  }
})
