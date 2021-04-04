/*
 * @version: 1.0
 * @Author: East Wind
 * @Description: 按需使用element-ui的组件
 * @Date: 2021-02-28 21:49:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-30 21:58:38
 */
import { createApp } from 'vue'
import App from './App.vue'
// import { ElSelect, ElOption, ElInput, ElButton } from 'element-plus'
import router from './router'

const app = createApp(App)
// app.use(ElSelect)
// app.use(ElOption)
// app.use(ElInput)
// app.use(ElButton)
app.use(router)
app.mount('#app')
