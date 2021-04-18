<!--
 * @Author: your name
 * @Date: 2021-04-10 03:51:40
 * @LastEditTime: 2021-04-12 21:30:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\profile\admin\Users.vue
-->
<template>
  <div class="users">
    <el-table
      :data="users"
      tooltip-effect="dark"
      height="250"
      style="width: 700px; height: 350px; margin: 40px auto 10px;border-radius: 20px;overflow: auto;padding: 0 30px;">
      <el-table-column
        prop="uid"  
        label="Id">
      </el-table-column>
      <el-table-column
        prop="uact"
        label="账号">
      </el-table-column>
      <el-table-column
        prop="upwd"
        label="密码">
      </el-table-column>
      <el-table-column
        label="操作">
        <template #default="scope">
          <div>
            <el-button 
              type="primary" 
              @click="delUser(scope.row.uid)" 
              size="mini">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-left: 120px">
      <el-button type="success" size="small" @click="dialogVisible = true">新增</el-button>
    </div>
    <el-dialog
      title="新增用户"
      v-model="dialogVisible"
      width="400px">
      <el-form label-position="right" label-width="80px" :model="form">
        <el-form-item label="账号">
          <el-input v-model="form.uact"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.upwd"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false" size="small">取 消</el-button>
          <el-button type="primary" @click="addUser" size="small">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Users',
  data() {
    return {
      users: [],
      dialogVisible: false,
      form: {
        uact: '',
        upwd: ''
      }
    }
  },
  methods: {
    // 获取所有users
    initUsers() {
      this.$post('/admin/getAllusers', {})
        .then(res => {
          this.users = res
        })
    },
    // 删除一个user
    delUser(uid) {
      const config = {
        uid
      }
      this.$confirm('此操作将永久删除用户，是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let res = await this.$post('/admin/delUser', config)
        if (res === 1) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.initUsers()
        } else {
          this.$message.error('删除失败')
        }
      })
    },
    // 重置form
    resetForm() {
      this.form.uact = ''
      this.form.upwd = ''
    },
    // 新增一个user
    addUser() {
      if (this.form.uact === '' || this.form.upwd === '') {
        this.$confirm('请填写完整', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        return
      }
      let ifRegistere = this.users.some(user => {
        if (user.uact === this.form.uact) {
          return true
        }
      });
      if (ifRegistere) {
        this.$message.error('该账号已被注册')
        this.resetForm()
        return
      }
      this.$post('/user/add', this.form)
        .then(res => {
          if (res === 1) {
            this.$message({
              type: 'success',
              message: '添加成功'
            })
            this.initUsers()
          } else {
            this.$message.error('添加失败')
          }
          this.resetForm()
          this.dialogVisible = false
        })
    }
  },
  mounted() {
    this.initUsers()
  },
}
</script>
<style scoped>
  
</style>
