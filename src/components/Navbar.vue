<script lang="ts" setup>
import { PageEnum } from '@/enums/PageEnum'
import TnIcon from '@tuniao/tnui-vue3-uniapp/components/icon/src/icon.vue'
import TnNavbar from '@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.vue'

const props = withDefaults(
  defineProps<{
    title: string
    showBackIcon: boolean
    showHomeIcon: boolean
    bottomShadow: boolean
    showBorder: boolean
    bgColor: string
    textColor: string
    frosted: boolean
    opacity: number
    placeholder: boolean
    clickBackIcon?: () => void
    clickHomeIcon?: () => void
  }>(),
  {
    title: '',
    showBackIcon: false,
    showHomeIcon: false,
    bottomShadow: true,
    showBorder: false,
    bgColor: 'white',
    textColor: 'black',
    frosted: false,
    opacity: 1,
    placeholder: true,
  },
)

const showLeftBox = computed(() => props.showBackIcon || props.showHomeIcon)

function handleClickBackIcon() {
  if (props.clickBackIcon) {
    props.clickBackIcon()
  } else {
    if (getCurrentPages().length <= 1) {
      uni.reLaunch({ url: PageEnum.HOME_PATH })
    } else {
      uni.navigateBack({
        fail: () => {
          uni.reLaunch({ url: PageEnum.HOME_PATH })
        },
      })
    }
  }
}

function handleClickHomeIcon() {
  if (props.clickHomeIcon) {
    props.clickHomeIcon()
  } else {
    uni.reLaunch({ url: PageEnum.HOME_PATH })
  }
}
</script>

<template>
  <TnNavbar
    fixed
    :bottom-shadow="props.bottomShadow"
    :bg-color="props.bgColor"
    :text-color="props.textColor"
    :frosted="props.frosted"
    :opacity="props.opacity"
    :placeholder="props.placeholder"
  >
    <!-- :status-height="navBarInfo.statusHeight"
    height="90rpx" -->
    <slot name="title" />
    {{ props.title }}

    <!-- border -->
    <view
      v-if="props.showBorder"
      class="absolute bottom-0 left-0 right-0 h-[1px] scale-y-50 bg-#efefef"
    />
    <template #back>
      <view
        v-if="showLeftBox"
        class="relative w-full h-8 flex items-center justify-center rounded-full bg-[rgba(0,0,0,.15)] text-3.75 box-border"
        :class="[!props.showBackIcon || !props.showHomeIcon ? 'w-70%!' : '']"
      >
        <TnIcon
          v-if="props.showBackIcon"
          name="left-arrow"
          color="#fff"
          :custom-class="[props.showBackIcon && props.showHomeIcon ? 'flex-1' : ''].join(' ')"
          @click="handleClickBackIcon"
        />
        <view
          v-if="props.showBackIcon && props.showHomeIcon"
          class="absolute left-50% top-50% h-60% translate-x--50% translate-y--50% bg-#fff opacity-20 w-1px"
        ></view>
        <TnIcon
          v-if="props.showHomeIcon"
          name="home-capsule-fill"
          color="#fff"
          :custom-class="[props.showBackIcon && props.showHomeIcon ? 'flex-1' : ''].join(' ')"
          @click="handleClickHomeIcon"
        />
      </view>
    </template>
  </TnNavbar>
</template>

<style lang="scss" scoped>
//
</style>
