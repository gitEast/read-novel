<!--
 * @Author: your name
 * @Date: 2021-04-10 01:07:47
 * @LastEditTime: 2021-04-12 21:19:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\profile\AdminProfile.vue
-->
<template>
  <div class="adminProfile">
    <el-container>
      <el-aside style="width: 201px;">
        <div class="sidebar">
          <el-menu
            :default-active="activeItem"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="jumpTo"
            style="width: 200px;height: 500px; border-radius: 0 0 0 20px;;overflow: hidden">
            <el-menu-item 
              v-for="tag in tags" 
              :index="tag.id" 
              :key="tag.id"
              style="text-align: center;">
              {{ tag.title }}
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-main style="padding: 0; overflow: hidden; height: 500px;">
        <div class="tags">
          <el-tag 
            v-for="(tag, index) in nowTags" 
            :key="tag.id" 
            :effect="tag.effect" 
            size="small"
            closable
            @click="clickTag(tag.path)"
            @close="closeTag(index)"
            style="margin: 0 10px; cursor: pointer;">
            {{ tag.title }}
          </el-tag>
        </div>
        <router-view></router-view>
        <reset-pwd></reset-pwd>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import ResetPwd from 'views/profile/admin/ResetPwd'
export default {
  name: 'AdminProfile',
  components: {
    ResetPwd
  },
  data() {
    return {
      tags: [
        {
          id: 1,
          title: '个人信息',
          path: '/adminprofile',
          effect: 'plain'
        },
        {
          id: 2,
          title:'用户信息',
          path: '/adminprofile/users',
          effect: 'plain'
        },
        {
          id: 3,
          title:'书籍信息',
          path: '/adminprofile/novels',
          effect: 'plain'
        },
        {
          id: 4,
          title:'帖子信息',
          path: '/adminprofile/posts',
          effect: 'plain'
        },
        {
          id: 5,
          title: '登出',
          path: '/home'
        }
      ],
      nowTags: [],
      activeItem: 1 
    }
  },
  methods: {
    // 获取tag
    pushTag(path) {
      this.tags.forEach(tag => {
        if (tag.path === (path)) {
          this.nowTags.push(tag)
        }
      });
    },
    jumpTo(index) {
      if (index === 5) {
        localStorage.setItem('id', '')
        localStorage.setItem('act', '')
        localStorage.setItem('pwd', '')
        localStorage.setItem('role', '')
      }
      console.log(this.tags[index-1].path);
      this.$router.push(this.tags[index-1].path)
    },
    // 点击tag，路由跳转
    clickTag(path) {
      this.$router.push(path)
    },
    // 判断tag是否已经有过
    ifIn(path) {
      let flag = false
      this.nowTags.some(tag => {
        if (tag.path === path) {
          flag = true
          return true
        }
      });
      return flag
    },
    darkTag(path) {
      this.nowTags.forEach(tag => {
        tag.effect = 'light'
        if (tag.path === path) {
          this.activeItem = tag.id
          tag.effect = 'dark'
        }
      });
    },
    // 关闭tag
    closeTag(index) {
      // 如果只有一个tag开启
      if (this.nowTags.length === 1) {
        // 如果这个tag是个人信息页面，则不动
        if (this.nowTags[0].id === 1) {
          return
        } else {
          this.nowTags = []
          this.$router.push('/adminprofile')
          return
        }
      }
      this.nowTags.splice(index, 1)
      // 当有多个tag且是第一个tag时,跳转到后一个tag
      if (index === 0) {
        this.$router.push(this.nowTags[index].path)
        return
      } else {// 如果是后面的tag，则跳转到前一个tag
        this.$router.push(this.nowTags[index-1].path)
      }
    }
  },
  watch: {
    $route(to) {
      if (!this.ifIn(to.path)) {
        this.pushTag(to.path);
      }
      this.darkTag(to.path)
    }
  },
  created() {
    this.nowTags = []
    let route = this.$route.path
    this.pushTag(route)
    this.darkTag(route)
  },
}
</script>
<style>
.adminProfile {
  width: 1100px;
  margin: auto;
  background-color: #eee;
  border-radius: 0 0 20px 20px;
  margin-bottom: -85px;
}
.tags {
  width: 100%;
  border-bottom: 1px solid #545c64;
  padding: 5px;
}
/* .sidebar {
  width: 200px;
} */
</style>
