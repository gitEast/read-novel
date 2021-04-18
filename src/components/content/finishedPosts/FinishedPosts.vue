<!--
 * @Author: your name
 * @Date: 2021-04-05 17:41:15
 * @LastEditTime: 2021-04-12 22:26:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\components\content\finishedPosts\FinishedPosts.vue
-->
<template>
  <div class="finished-posts">
    <div class="posts">
      <post-item 
        v-for="post in currentPosts" 
        :key="post.pid"
        @click="clickPost(post.pid)">
        <template v-slot:post-title>
          <h3>{{ post.ptitle }}</h3>
        </template>
        <template v-slot:post-author>
          <p>{{ post.uact?post.uact: '用户已注销' }}</p>
        </template>
        <template v-slot:post-time>
          <p>{{ post.pcreate }}</p>
        </template>
        <template v-slot:post-content>
          <p>{{ post.pcontent.length>20?(post.pcontent.slice(0, 20)+'...'): post.pcontent }}</p>
        </template>
      </post-item>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        v-model:currentPage="currentPage1"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="posts.length">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import PostItem from 'components/common/posts/PostItem'

export default {
  name: 'FinishedPosts',
  data() {
    return {
      total: 0,
      posts: [],
      currentPage: 1,
      pageSize: 10,
      currentPosts: []
    }
  },
  components: {
    PostItem
  },
  created() {
    // 获取初始化数据
    this.$post('/post/list', {})
      .then(res => {
        this.posts = res
        this.getCurrentTable()
      })
    // this.currentPosts = this.posts
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
      this.getCurrentTable()
    },
    // 获取当前table的data数据
    getCurrentTable() {
      this.currentPosts = this.posts.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    },
    clickPost(pid) {
      this.$router.push('/post/' + pid)
    }
    
  },
}
</script>
<style>
.finished-posts {
  width: 1060px;
  border: 1px solid #aaaaaa;
  border-radius: 15px;
  margin: 40px auto 0;
  padding: 20px;
}

.posts {
  padding-bottom: 20px;
}
</style>
