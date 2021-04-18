<!--
 * @Author: your name
 * @Date: 2021-04-12 02:44:34
 * @LastEditTime: 2021-04-12 22:38:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\profile\user\AddPost.vue
-->
<template>
  <div class="add-post">
    <div class="form">
      <el-form label-position="right" :model="form" label-width="120px">
        <el-form-item label="账号">
            <el-input 
              style="width: 250px;" 
              v-model="form.uact" 
              :disabled="true">
            </el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input 
            style="width: 250px;" 
            v-model="form.ptitle" >
          </el-input>
      </el-form-item>
        <el-form-item label="内容">
          <el-input 
            type="textarea"
            style="width: 300px" 
            v-model="form.pcontent" 
            placeholder="请输入帖子内容" 
            show-password>
          </el-input>
        </el-form-item>
        <el-form-item>
          <div class="reset-btn">
            <el-button type="primary" @click="addPost">发布</el-button>
            <el-button @click="resetForm">清空</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddPost',
  data() {
    return {
      form: {
        uid: '',
        uact: '',
        ptitle: '',
        pcontent: ''
      }
    }
  },
  methods: {
    // 重置form
    resetForm() {
      this.form.pcontent = ''
      this.form.ptitle = ''
    },
    addPost() {
      const config = {
        ptitle: this.form.ptitle,
        uid: this.form.uid,
        pcontent: this.form.pcontent
      }
      if (config.uid === '' || config.pcontent === '') {
        this.$message({
          type: 'warning',
          message: '请填写完整'
        })
        return
      }
      this.$post('/post/add', config)
        .then(res => {
          if (res === 1) {
            this.$message({
              type: 'success',
              message: '帖子发布成功'
            })
          } else {
            this.$message.error('帖子发布失败')
          }
          this.resetForm()
        })
    }
  },
  created() {
    this.form.uid = localStorage.getItem('id')
    this.form.uact = localStorage.getItem('act')
  },
}
</script>
<style scoped>
.add-post {
  width: 400px;
  margin: 80px auto;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 40px;
  padding-bottom: 20px;
  background-color: #fff;
}
</style>
