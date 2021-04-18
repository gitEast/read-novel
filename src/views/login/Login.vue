<!--
 * @Author: your name
 * @Date: 2021-04-07 23:00:13
 * @LastEditTime: 2021-04-12 20:47:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\components\common\login\Login.vue
-->
<template>
  <div class="login">
    <h2 class="title">Sign in / Sign up</h2>
    <div class="form">
      <el-form label-position="top" :model="form">
        <el-form-item label="Acount">
          <el-input v-model="form.act" placeholder="请输入账号" clearable></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.pwd" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio v-model="identity" label="user">用户</el-radio>
          <el-radio v-model="identity" label="admin">管理员</el-radio>
        </el-form-item>
        <el-form-item>
          <div class="reset-btn">
            <el-button v-if="identity === 'user'" type="primary" @click="login">登录</el-button>
            <el-button v-else type="primary" @click="loginAdmin">登录</el-button>
            <el-button @click="signup" :disabled="identity === 'admin'">注册</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Login',
  data() {
    return {
      form: {
        act: '',
        pwd: ''
      },
      identity: 'user'
    }
  },
  methods: {
    // 用户-登录
    login() {
      const config = {
        uact: this.form.act,
        upwd: this.form.pwd
      }
      console.log(config.uact);
      if ((config.uact === '') || (config.upwd === '')) {
        console.log('-----------------');
        this.$message({
          type: 'warning',
          message: '请输入完整信息'
        })
        return 
      }
      this.$post('/user/login', config)
        .then(res => {
          if (res === -1) {
            this.$message({
              type: 'warning',
              message: '请注册'
            })
            return 
          }
          if (res.upwd === this.form.pwd) {
            localStorage.setItem('id', parseInt(res.uid))
            localStorage.setItem('act', res.uact)
            localStorage.setItem('pwd', res.upwd)
            localStorage.setItem('role', 'user')
            this.$router.push('/home')
          } else {
            this.$message.error('您的密码有误')
            this.form.upwd = ''
          }
        })
    },
    // 用户-注册
    signup() {
      const config = {
        uact: this.form.act,
        upwd: this.form.pwd
      }
      // console.log(config.uact);
      if ((config.uact === '') || (config.upwd === '')) {
        console.log('-----------------');
        this.$message({
          type: 'warning',
          message: '请输入完整信息'
        })
        return 
      }
      console.log(config.uact);
      this.$post('/user/login', config)
        .then(async (res) => {
          if (res !== -1) {
            this.$message({
              type: 'warning',
              message: '该账号已被注册'
            })
            return 
          }
          try {
            let resSign = await this.$post('/user/add', config)
            if (resSign === 1) {
              // (inject('$message')).success("注册成功")
              this.$message({
                type: 'success',
                message: '注册成功'
              })
              let res02 = await this.$post('/user/login', config)
              localStorage.setItem('id', parseInt(res02.uid))
              localStorage.setItem('act', res02.uact)
              localStorage.setItem('pwd', res02.upwd)
              localStorage.setItem('role', 'user')
              this.$router.push('/home')
            } else {
              this.$message.error('注册失败')
            }
          } catch(e) {
            console.log(e);
          }
        })
    },
    // 管理员-登录
    loginAdmin() {
      console.log('Admin登录');
      const config = {
        aact: this.form.act,
        apwd: this.form.pwd
      }
      if ((config.aact === '') || (config.apwd === '')) {
        this.$message({
          type: 'warning',
          message: '请输入完整信息'
        })
        return 
      }
      this.$post('/admin/login', config)
        .then(res => {
          if (res === -1) {
            this.$message({
              type: 'warning',
              message: '您不是管理员'
            })
            return 
          }
          if (res.apwd === this.form.pwd) {
            localStorage.setItem('id', parseInt(res.aid))
            localStorage.setItem('act', res.aact)
            localStorage.setItem('pwd', res.apwd)
            localStorage.setItem('role', 'admin')
            this.$router.push('/home')
          } else {
            this.$message.error('您的密码有误')
            this.form.upwd = ''
          }
        })
    }
  }
}
</script>
<style scoped>
.login {
  width: 1100px;
  margin: auto;
  text-align: center;
  margin-bottom: -70px;
}

.title {
  font-size: 1.9rem;
  margin: 30px auto;
  color: #636e72;
}

.form {
  width: 40%;
  margin: auto;
  padding: 40px;
  border: 1px solid #636e72;
  border-radius: 15px;
  background-color: #f6f8fa;
  text-align: left;
}

.reset-btn {
  margin-left: 150px;
}
</style>
