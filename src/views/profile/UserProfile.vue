<!--
 * @Author: your name
 * @Date: 2021-03-30 21:48:50
 * @LastEditTime: 2021-04-12 21:42:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\profile\UserProfile.vue
-->
<template>
  <div class="user-profile">
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
        <!-- <div class="tags">
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
        </div> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      tags: [
        {
          id: 1,
          title: '个人信息',
          path: '/userprofile',
          effect: 'plain'
        },
        {
          id: 2,
          title:'发布帖子',
          path: '/userprofile/addpost'
        },
        {
          id: 3,
          title:'登出',
          path: '/home'
        },
        {
          id: 4,
          title:'注销',
          path: '/home'
        }
      ],
      activeItem: 1
    }
  },
  methods: {
    jumpTo(index) {
      // 注销
      if (index === 4) {
        let uid = localStorage.getItem('id')
        this.$confirm('此操作将永久删除注销，是否继续', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let res = await this.$post('/admin/delUser', { uid })
          if (res === 1) {
            this.$message({
              type: 'success',
              message: '注销成功'
            })
            localStorage.setItem('id', '')
            localStorage.setItem('act', '')
            localStorage.setItem('pwd', '')
            localStorage.setItem('role', '')
            console.log('-----------------------');
            this.$router.push(this.tags[index-1].path)
            return
          } else {
            this.$message.error('注销失败')
          }
        })
      } else if (index === 3) {
        // 登出
        localStorage.setItem('id', '')
        localStorage.setItem('act', '')
        localStorage.setItem('pwd', '')
        localStorage.setItem('role', '')
        this.$router.push(this.tags[index-1].path)
      } else if (index === 2) {
        this.$router.push('/userprofile/addpost')
      } else {
        this.$router.push('/userprofile')
      }
      
    }
  }
}
</script>
<style scoped>
.user-profile {
  width: 1100px;
  margin: auto;
  background-color: #eee;
  border-radius: 0 0 20px 20px;
  margin-bottom: -85px;
}
</style>
