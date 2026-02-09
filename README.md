## 预览

[h5](https://het-tea-uniapp.netlify.app/)

<table align="center">
<tr>
  <td><img width="160" src="./screenshots/h5.png"></td>
  <td><img width="160" src="./screenshots/android.png"></td>
  <td><img width="160" src="./screenshots/wechat.png"></td>
</tr>
</table>

## ⚙️ 环境

- node>=18
- pnpm>=7.30
- Vue Official>=2.1.10
- TypeScript>=5.0

## 📦 运行（支持热更新）

- 图片添加在static/icons文件夹下, 并且在src/utils/imageManager.ts 文件中添加图片路径(小程序使用https://图片路径, 其余本地路径)
- web平台： `pnpm dev:h5`, 然后打开 [http://localhost:9000/](http://localhost:9000/)。
- weixin平台：`pnpm dev:mp-weixin` 然后打开微信开发者工具，导入本地文件夹，选择本项目的`dist/dev/mp-weixin` 文件。
- APP平台：`pnpm dev:app`, 然后打开 `HBuilderX`，导入刚刚生成的`dist/dev/app` 文件夹，选择运行到模拟器(开发时优先使用)，或者运行的安卓/ios基座。

## 🔗 发布

- web平台： `pnpm build:h5`，打包后的文件在 `dist/build/h5`，可以放到web服务器，如nginx运行。如果最终不是放在根目录，可以在 `manifest.config.ts` 文件的 `h5.router.base` 属性进行修改。
- weixin平台：`pnpm build:mp-weixin`, 打包后的文件在 `dist/build/mp-weixin`，然后通过微信开发者工具导入，并点击右上角的“上传”按钮进行上传。
- APP平台：`pnpm build:app`, 然后打开 `HBuilderX`，导入刚刚生成的`dist/build/app` 文件夹，选择发行 - APP云打包。

## 📄 License

[MIT](https://opensource.org/license/mit/)

Copyright (c) 2025 KaiKoTian
