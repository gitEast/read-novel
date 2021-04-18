/*
 * @version: 1.0
 * @Author: East Wind
 * @Description: 按需使用element-ui的组件
 * @Date: 2021-02-28 21:49:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-12 01:45:29
 */
import { createApp } from 'vue'
import App from './App.vue'
// import ViewUI from 'view-design'
// import 'view-design/dist/styles/iview.css'
import router from './router'
// import elementPlus from 'element-plus'
import { ElTag, ElPagination, ElTable, ElTableColumn, ElInput, ElForm, ElFormItem, ElButton, ElMessage, ElRadio, ElMenu, ElCol, ElMenuItem, ElContainer, ElAside, ElMain, ElHeader, ElMessageBox, ElDialog, ElCheckboxGroup, ElCheckbox, ElIcon, ElCard, ElFooter, ElRow, ElEmpty } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// import './plugins/element.js'
import { post } from 'network/request.js'
import mitt from 'mitt'

const app = createApp(App)
// app.use(elementPlus)
app.use(ElTag)
app.use(ElPagination)
app.use(ElTable)
app.use(ElTableColumn)
app.use(ElInput)
app.use(ElForm)
app.use(ElFormItem)
app.use(ElButton)
app.use(ElRadio)
app.use(ElMenu)
app.use(ElCol)
app.use(ElMenuItem)
app.use(ElContainer)
app.use(ElAside)
app.use(ElMain)
app.use(ElHeader)
app.use(ElDialog)
app.use(ElCheckboxGroup)
app.use(ElCheckbox)
app.use(ElIcon)
app.use(ElCard)
app.use(ElFooter)
app.use(ElRow)
app.use(ElEmpty)
app.config.globalProperties.$message = ElMessage
app.config.globalProperties.$confirm = ElMessageBox
app.config.globalProperties.$post = post
app.config.globalProperties.$bus = new mitt()
// app.provide('$message', ElMessage)
// app.use(ViewUI)
app.use(router)
app.mount('#app')
