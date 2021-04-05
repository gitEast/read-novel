<!--
 * @Author: your name
 * @Date: 2021-04-05 17:41:15
 * @LastEditTime: 2021-04-05 19:24:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\components\content\finishedPosts\FinishedPosts.vue
-->
<template>
  <div class="finished-posts">
    <div class="posts">
      <post-item 
        v-for="post in currentPosts" 
        :key="post.id"
        @click="clickPost(post.id)">
        <template v-slot:post-title>
          <h3>{{ post.title }}</h3>
        </template>
        <template v-slot:post-author>
          <p>by{{ post.author }}</p>
        </template>
        <template v-slot:post-time>
          <p>{{ post.time }}</p>
        </template>
        <template v-slot:post-content>
          <p>{{ post.content }}</p>
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
      posts: [
        {
          id: '0001',
          title: '乔纳森',
          author: '卡勒',
          time: '2005-01-03 12:11:10',
          content: '1111111111111111111111111111111111111111dafadsfadfdsfa'
        },
        {
          id: '0002',
          title: '作者之死',
          author: '罗兰·巴特',
          time: '2005-01-03 12:11:10',
          content: '1111111111111111111111111111111111111111dafadsfadfdsfa'
        },
        {
          id: '0003',
          title: '恋人絮语',
          author: '罗兰·巴特',
          time: '2005-01-03 12:11:10',
          content: '1111111111111111111111111111111111111111dafadsfadfdsfa'
        },
        {
          id: '0004',
          title: '程序设计',
          author: 'python',
          time: '2005-01-03 12:11:10',
          content: '1111111111111111111111111111111111111111dafadsfadfdsfa'
        },
        {
          id: '0005',
          title: '乔纳森',
          author: '卡勒',
          time: '2005-01-03 12:11:10',
          content: '1111111111111111111111111111111111111111dafadsfadfdsfa'
        },
        {
          id: '0006',
          title: '乔纳森',
          author: '卡勒',
          time: '2005-01-03 12:11:10',
          content: '1111111111111111111111111111111111111111dafadsfadfdsfa'
        },
        {
          id: '0007',
          title: '乔纳森',
          author: '卡勒',
          time: '2005-01-03 12:11:10',
          content: '1111111111111111111111111111111111111111dafadsfadfdsfa'
        },
        {
          id: '0008',
          title: '乔纳森',
          author: '卡勒',
          time: '2005-01-03 12:11:10',
          content: '1111111111111111111111111111111111111111dafadsfadfdsfa'
        },
        {
          id: '0009',
          title: '乔纳森',
          author: '卡勒',
          time: '2005-01-03 12:11:10',
          content: '1111111111111111111111111111111111111111dafadsfadfdsfa'
        },
        {
          id: '0010',
          title: '乔纳森',
          author: '卡勒',
          time: '2005-01-03 12:11:10',
          content: '1111111111111111111111111111111111111111dafadsfadfdsfa'
        },
        {
          id: '0011',
          title: '乔纳森',
          author: '卡勒',
          time: '2005-01-03 12:11:10',
          content: '1111111111111111111111111111111111111111dafadsfadfdsfa'
        },
        {
          id: '0012',
          title: '乔纳森',
          author: '卡勒',
          time: '2005-01-03 12:11:10',
          content: '1111111111111111111111111111111111111111dafadsfadfdsfa'
        },
        {
          id: '0013',
          title: '乔纳森',
          author: '卡勒',
          time: '2005-01-03 12:11:10',
          content: '111111111111111fdfadfdfa1111111111111dafadsfadfdsfa'
        }
      ],
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
    this.currentPosts = this.posts
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
    clickPost(id) {
      console.log('获取到的帖子的id是' + id);
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
