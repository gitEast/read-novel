/*
 * @version: 1.0
 * @Author: East Wind
 * @Description: 按需使用element-ui的组件
 * @Date: 2021-02-28 21:49:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-04 17:03:10
 */
import { createApp } from 'vue'
import App from './App.vue'
// import ViewUI from 'view-design'
// import 'view-design/dist/styles/iview.css'
import router from './router'
// import elementPlus from 'element-plus'
import {ElTag} from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
// app.use(elementPlus)
app.use(ElTag)
// app.use(ViewUI)
app.use(router)
app.mount('#app')
