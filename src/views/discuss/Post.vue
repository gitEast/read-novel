<!--
 * @Author: your name
 * @Date: 2021-04-11 22:37:01
 * @LastEditTime: 2021-04-12 22:32:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\discuss\Post.vue
-->
<template>
  <div class="post">
    <!-- 帖子详情 -->
    <el-card>
      <div class="title">
        <i class="el-icon-edit-outline"></i>
        {{ post.ptitle }}
      </div>
      <div class="author">
        <i class="el-icon-user"></i>
        {{ post.uact?post.uact: '用户已注销' }}
      </div>
      <div class="content">
        <p>{{ post.pcontent}}</p>
      </div>
    </el-card>
    <!-- 回复 -->
    <el-card v-if="replies" style="margin-top: 30px;">
      回复
      <post-item 
        v-for="reply in replies" 
        :key="reply.rid">
        <template v-slot:post-title>
          <h3>{{ reply.rtitle }}</h3>
        </template>
        <template v-slot:post-author>
          <p>{{ reply.uact?reply.uact: '用户已注销' }}</p>
        </template>
        <template v-slot:post-time>
          <p>{{ reply.rcreate }}</p>
        </template>
        <template v-slot:post-content>
          <p>{{ reply.rtext }}</p>
        </template>
      </post-item>
    </el-card>
    <!-- 我想要回复 -->
    <el-card v-if="ifLogin" style="margin-top: 30px;">
      <el-form :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.uact" :disabled="true" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="回复">
          <el-input type="textarea" v-model="form.rtext" style="width: 600px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="reply">盖楼</el-button>
          <el-button type="info" size="small" @click="resetForm">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import PostItem from 'components/common/posts/PostItem'
export default {
  name: 'Post',
  data() {
    return {
      post: {
        pid: '',
        ptitle: '',
        uid: '',
        uact: '',
        pcreate: '',
        pcontent: ''
      },
      ifLogin: false,
      replies: [],
      form: {
        uid: '',
        uact: '',
        rtext: ''
      }
      
    }
  },
  components: {
    PostItem
  },
  methods: {
    // 重置form
    resetForm() {
      this.form.rtext = ''
    },
    // 回复
    reply() {
      const config = {
        uid: this.form.uid,
        rtext: this.form.rtext,
        pid: this.post.pid
      }
      if (config.rtext === '') {
        this.$message({
          type: 'warning',
          message: '请输入回复内容'
        })
        return
      }
      this.$post('/reply/add', config)
        .then(async res => {
          if (res === 1) {
            this.$message({
              type: 'success',
              message: '回复成功'
            })
            this.resetForm()
            // 刷新回复
            let pid = this.post.pid
            let replies = await this.$post('/reply/list', { pid })
            this.replies = replies
          } else {
            this.$message.error('回复失败')
          }
        })
    }
  },
  created() {
    // 判断是否登录
    this.ifLogin = false
    let role = localStorage.getItem('role')
    if (role === 'user' || role === 'admin') {
        this.ifLogin = true
        this.form.uid = localStorage.getItem('id')
        this.form.uact = localStorage.getItem('act')
    }
    let pid = this.$route.params.pid
    // 获取帖子信息
    this.$post('post/bypid', { pid })
      .then(async res => {
        this.post = res
        // 对应的回复
        let replies = await this.$post('/reply/list', { pid })
        this.replies = replies
        console.log(replies);
      })
  },
}
</script>
<style scoped>
.post {
  width: 1100px;
  border: 1px solid #ccc;
  margin: 40px auto 0;
  border-radius: 20px;
  padding: 30px 20px;
  color: #626066;
  cursor: default;
}
.title {
  font-size: 1.3rem;
  font-weight: 700;
}
.author {
  font-size: 1.1rem;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.content {
  text-indent: 2em;
  font-size: 1rem;
}
.reply {
  padding-bottom: 20px;
}
</style>
