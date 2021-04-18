<!--
 * @Author: your name
 * @Date: 2021-04-10 23:40:43
 * @LastEditTime: 2021-04-12 02:59:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\profile\user\ResetPwd.vue
-->
<template>
  <div class="reset-pwd">
    <div class="form">
      <el-form label-position="right" :model="form" label-width="120px">
        <el-form-item label="账号">
            <el-input 
              style="width: 250px;" 
              v-model="form.act" 
              :disabled="true">
            </el-input>
        </el-form-item>
        <el-form-item label="旧密码">
          <el-input 
            style="width: 250px;" 
            v-model="form.oldPwd" 
            placeholder="请输入原密码" 
            show-password>
          </el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input 
            style="width: 250px;" 
            v-model="form.pwd" 
            placeholder="请输入密码" 
            show-password></el-input>
        </el-form-item>
        <el-form-item>
          <div class="reset-btn">
            <el-button type="primary" @click="resetPwd">修改</el-button>
            <el-button @click="resetForm">清空</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResetPwd',
  data() {
    return {
      form: {
        act: '',
        oldPwd: '',
        pwd: ''
      },
      pwd: '',
      left: 'left'
    }
  },
  methods: {
    // 重置密码
    resetPwd() {
      // 如果原密码输入错误
      if (!(this.pwd === this.form.oldPwd)) {
        this.$message.error('抱歉，原密码输入错误')
        this.resetForm()
        return
      }
      // 如果新密码没有输入
      if (!this.form.pwd) {
        this.$message({
          type: 'warning',
          message: '请输入新密码'
        })
        return
      }
      // 开始修改密码
      const config = {
        uid: localStorage.getItem('id'),
        upwd: this.form.pwd
      }
      this.$post('/user/resetPwd', config)
        .then(res => {
          if (res === 1) {
            this.$message({
              type: 'success',
              message: '密码修改成功'
            })
            this.pwd = this.form.pwd
            localStorage.setItem('pwd', this.pwd)
          } else {
            this.$message.error('密码修改失败')
          }
          this.resetForm()
        })
    },
    // 重置form
    resetForm() {
      this.form.oldPwd = ''
      this.form.pwd = ''
    }
  },
  created() {
    this.pwd = localStorage.getItem('pwd')
    this.form.act = localStorage.getItem('act')
  }
}
</script>
<style scoped>
.reset-pwd {
  width: 400px;
  margin: 80px auto;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 40px;
  padding-bottom: 20px;
  background-color: #fff;
}
</style>
