/*
 * @version: 1.0
 * @Author: East Wind
 * @Description: 按需使用element-ui的组件
 * @Date: 2021-02-28 21:49:29
 * @LastEditors: East Wind
 * @LastEditTime: 2021-03-10 16:36:05
 */
import { createApp } from 'vue'
import App from './App.vue'
import { ElSelect, ElOption, ElInput, ElButton } from 'element-plus'

const app = createApp(App)
app.use(ElSelect)
app.use(ElOption)
app.use(ElInput)
app.use(ElButton)
app.mount('#app')
