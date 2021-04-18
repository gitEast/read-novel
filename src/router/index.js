/*
 * @Author: your name
 * @Date: 2021-03-30 21:42:16
 * @LastEditTime: 2021-04-12 21:17:26
 * @LastEditors: Please set LastEditors
 * @Description: 路由跳转
 * @FilePath: \read-novel\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载
const Home = () => import('views/home/Home')
// const Library = () => import('views/library/Library')
// const Discuss = () => import('views/discuss/Discuss')
// const Login = () => import('views/login/Login')
// const Profile = () => import('views/profile/UserProfile')

// 创建路由对象
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { title: '首页' }
  },
  {
    path: '/library',
    name: 'library',
    component: () => import('views/library/Library'),
    meta: { title: '书库' }
  },
  {
    path: '/discuss',
    name: 'discuss',
    component: () => import('views/discuss/Discuss'),
    meta: { title: '讨论' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login/Login'),
    meta: { title: '登录' }
  },
  {
    path: '/adminprofile',
    name: 'adminprofile',
    component: () => import('views/profile/AdminProfile'),
    meta: { title: '个人' },
    children: [
      {
        path: '/adminprofile',
        name: 'resetpwd',
        component: () => import('views/profile/admin/ResetPwd'),
        meta: { title: '个人信息' }
      },
      {
        path: '/adminprofile/users',
        name: 'users',
        component: () => import('views/profile/admin/Users'),
        meta: { title: '用户信息' }
      },
      {
        path: '/adminprofile/novels',
        name: 'novels',
        component: () => import('views/profile/admin/Novels'),
        meta: { title: '书籍信息' }
      },
      {
        path: '/adminprofile/posts',
        name: 'posts',
        component: () => import('views/profile/admin/Posts'),
        meta: { title: '帖子信息' }
      }
    ]
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: () => import('views/profile/UserProfile'),
    meta: { title: '个人' },
    children: [
      {
        path: '/userprofile',
        name: 'resetpwd',
        component: () => import('views/profile/user/ResetPwd')
      },
      {
        path: '/userprofile/addpost',
        name: 'addpost',
        component: () => import('views/profile/user/AddPost')
      }
    ]
  },
  {
    path: '/novel/:nid',
    name: 'novel',
    component: () => import('views/novel/Novel'),
    meta: { title: '小说页面' }
  },
  {
    path: '/chapter',
    name: 'chapter',
    component: () => import('views/novel/Chapter'),
    meta: { title: '章节页面' }
  },
  {
    path: '/post/:pid',
    name: 'post',
    component: () => import('views/discuss/Post'),
    meta: { title: '帖子页面' }
  },
  {
    path: '/search',
    name: 'chapsearchter',
    component: () => import('views/library/Search'),
    meta: { title: '搜索页面' }
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
