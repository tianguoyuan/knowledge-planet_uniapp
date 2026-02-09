<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'
import { navigateToInterceptor } from './interceptors/route'
import { useAppStore } from './store/app'

const appStore = useAppStore()
onLaunch((options) => {
  console.log('App Launch', options)
  // 首次进入判断页面是否需要登录
  navigateToInterceptor.invoke({ url: '/' + options.path })
  const windowInfo = uni.getWindowInfo()
  console.log('屏幕高度：', windowInfo.screenHeight)
  appStore.changeSystemScreenHeight(windowInfo.screenHeight)
})
onReady(() => {})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
// 微信 tabbar.custom隐藏， h5单独设置
// #ifndef MP
.uni-tabbar-bottom {
  display: none;
}
// #endif
</style>
