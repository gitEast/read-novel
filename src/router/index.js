/*
 * @Author: your name
 * @Date: 2021-03-30 21:42:16
 * @LastEditTime: 2021-04-04 14:34:16
 * @LastEditors: Please set LastEditors
 * @Description: 路由跳转
 * @FilePath: \read-novel\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载
const Home = () => import('views/home/Home')
const Library = () => import('views/library/Library')
const Discuss = () => import('views/discuss/Discuss')
const Profile = () => import('views/profile/Profile')

// 创建路由对象
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: { title: '首页' }
  },
  {
    path: '/library',
    component: Library,
    meta: { title: '书库' }
  },
  {
    path: '/discuss',
    component: Discuss,
    meta: { title: '讨论' }
  },
  {
    path: '/profile',
    component: Profile,
    meta: { title: '个人' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 后置钩子改变网页title
router.afterEach((to) => {
  document.title = to.matched[0].meta.title
})

// 导出路由
export default router
