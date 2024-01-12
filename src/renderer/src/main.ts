/*
 * @Author: Reny
 * @Date: 2023-12-27 10:10:15
 * @LastEditors: Solitario119 1412385393@qq.com
 * @LastEditTime: 2023-12-27 11:04:42
 * @FilePath: \electron-template\src\renderer\src\main.ts
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'uno.css'
import './assets/css/style.scss'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
