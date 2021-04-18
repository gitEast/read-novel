<!--
 * @Author: your name
 * @Date: 2021-04-10 03:53:00
 * @LastEditTime: 2021-04-12 22:49:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\profile\admin\Posts.vue
-->
<template>
  <div class="posts">
    <el-table
      :data="posts"
      tooltip-effect="dark"
      height="250"
      style="width: 700px; height: 350px; margin: 40px auto 10px;border-radius: 20px;overflow: auto;padding: 0 30px;">
      <el-table-column
        prop="pid"  
        label="Id"
        width="40">
      </el-table-column>
      <el-table-column
        prop="ptitle"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="uact"
        label="发帖者">
      </el-table-column>
      <el-table-column
        prop="pcreate"
        label="创建时间"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作">
        <template #default="scope">
          <div>
            <el-button 
              type="primary" 
              @click="delPost(scope.row.pid)" 
              size="mini">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'Posts',
  data() {
    return {
      posts: []
    }
  },
  methods: {
    // 获取所有帖子对象
    initPosts() {
      this.$post('/post/list', {})
        .then(res => {
          this.posts = res
          this.posts.forEach(post => {
            if (!post.uact) {
              post.uact = '[用户已注销]'
            }
          });
          console.log(res);
        })
    },
    // 删除帖子
    delPost(pid) {
      this.$confirm('此操作将永久删除帖子，是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let res = await this.$post('/post/del', { pid })
        if (res === 1) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.initPosts()
        } else {
          this.$message.error('删除失败')
        }
      })
    }
  },
  created() {
    this.initPosts()
  },
}
</script>
<style scoped>
  
</style>
