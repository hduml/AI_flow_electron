/*
 * @Author: Reny
 * @Date: 2023-12-27 10:10:15
 * @LastEditors: Solitario119 1412385393@qq.com
 * @LastEditTime: 2023-12-27 12:11:28
 * @FilePath: \electron-template\electron.vite.config.ts
 * @Description:
 */
/*
 * @Author: Reny
 * @Date: 2023-12-27 10:10:15
 * @LastEditors: Solitario119 1412385393@qq.com
 * @LastEditTime: 2023-12-27 10:40:11
 * @FilePath: \electron-template\electron.vite.config.ts
 * @Description:
 */
import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import AutoImports from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite' // Unocss插件
import presetUno from '@unocss/preset-uno' // Unocss默认预设
import presetAttributify from '@unocss/preset-attributify' // Unocss默认属性预设
import transformerDirective from '@unocss/transformer-directives' // Unocss指令转换插件
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      vue(),
      AutoImports({
        // 需要解析的文件
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        // imports 指定自动引入的包位置（名）
        imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
        // 生成相应的自动导入json文件。
        eslintrc: {
          // 启用
          enabled: true,
          // 生成自动导入json文件位置
          filepath: './.eslintrc-auto-import.json',
          // 全局属性值
          globalsPropValue: true
        },
        dts: resolve('types/auto-imports.d.ts'),
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        dts: resolve('types/components.d.ts'),
        // imports 指定组件所在目录，默认为 src/components
        dirs: ['src/components/', 'src/view/'],
        // 需要去解析的文件
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'icon',
            // 当图标集名字过长时，可使用集合别名
            alias: {}
          })
        ]
      }),
      Unocss({
        presets: [presetUno(), presetAttributify()], // 预设
        transformers: [transformerDirective()], // 指令转换插件
        rules: [] // 自定义规则
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
        // 自定义图标加载
        customCollections: {
          // home图标集
          // 给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
          home: FileSystemIconLoader('src/assets/svg/home', (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          ),
          // about图标集
          about: FileSystemIconLoader('src/assets/svg/about', (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          )
        }
      })
    ]
  }
})
