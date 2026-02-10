/**
 * 图片管理工具
 * 支持导入导出所有图片，并提供开关控制使用变量拼接还是直接引入图片
 */

// SVG 图标资源导入 - 从 static/icons 目录导入
import PLATFORM from './platform'

const commonNames = [
  'common-arrow-right',
  'common-user-img',
  'common-filter',
  'common-filter',
  'common-arrow-right-fill',
  'common-book',
  'common-homework',
  'common-clock-in',
] as const
const homeNames = [
  'home-banner1',
  'home-banner2',
  'home-banner3',
  'home-banner4',
  'home-banner5',
  'home-banner6',

  // home-detail
  'home-detail-top-user',
] as const

const discover = [] as const
const dynamic = [] as const
const user = [] as const
const imageNames = [
  // Tabbar 图标
  'tabbar-home',
  'tabbar-home-active',
  'tabbar-discover',
  'tabbar-discover-active',
  'tabbar-dynamic',
  'tabbar-dynamic-active',
  'tabbar-user',
  'tabbar-user-active',

  ...commonNames,
  ...homeNames,
  ...discover,
  ...dynamic,
  ...user,
] as const

const isHttpImage = PLATFORM.isMp
const imageBaseUrl = 'https://het-tea-uniapp.netlify.app'
/**
 * 图片名称类型
 */
type ImageName = (typeof imageNames)[number]

/**
 * 获取图片资源
 * @param imageName 图片名称
 * @returns 图片URL或导入的资源
 */
export const getImage = (imageName: ImageName, suffix = '.svg'): string => {
  return (isHttpImage ? imageBaseUrl : '') + `/static/icons/${imageName}${suffix}`
}
