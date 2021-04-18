<!--
 * @Author: your name
 * @Date: 2021-04-10 03:52:31
 * @LastEditTime: 2021-04-10 19:26:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\profile\admin\Novels.vue
-->
<template>
  <div class="novels">
    <el-table
      :data="novels"
      tooltip-effect="dark"
      height="250"
      style="width: 700px; height: 350px; margin: 40px auto 10px;border-radius: 20px;overflow: auto;padding: 0 30px;">
      <el-table-column
        prop="ntitle"  
        label="标题"
        width="150">
      </el-table-column>
      <el-table-column
        prop="nauthor"
        label="作者"
        width="110">
      </el-table-column>
      <el-table-column
        prop="ncreate"
        label="创建时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="nclick"
        label="点击数"
        width="90">
      </el-table-column>
      <el-table-column
        label="操作">
        <template #default="scope">
          <div>
            <el-button 
              type="primary" 
              @click="delNovel(scope.row.nid)" 
              size="mini">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-left: 120px">
      <el-button type="success" size="small" @click="dialogVisible = true">新增</el-button>
    </div>
    <el-dialog
      title="新增小说"
      v-model="dialogVisible"
      width="600px">
      <el-form 
        label-position="right" 
        label-width="80px" 
        :model="form"
        size="mini"
        style="overflow: auto;height: 300px;">
        <el-form-item label="标题">
          <el-input v-model="form.ntitle" style="width: 200px;"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.nauthor" style="width: 200px;"></el-input>
        </el-form-item>
        <el-form-item label="进度">
          <el-radio v-model="form.nschedule" :label="0">连载中</el-radio>
          <el-radio v-model="form.nschedule" :label="1">已完结</el-radio>
        </el-form-item>
        <el-form-item label="原创">
          <el-radio v-model="form.noriginal" :label="0">原创</el-radio>
          <el-radio v-model="form.noriginal" :label="1">衍生</el-radio>
        </el-form-item>
        <el-form-item label="时代">
          <el-radio v-model="form.ntime" :label="0">古代</el-radio>
          <el-radio v-model="form.ntime" :label="1">近代</el-radio>
          <el-radio v-model="form.ntime" :label="2">现代</el-radio>
          <el-radio v-model="form.ntime" :label="3">未来</el-radio>
        </el-form-item>
        <el-form-item label="风格">
          <el-radio v-model="form.nstyle" :label="0">正剧</el-radio>
          <el-radio v-model="form.nstyle" :label="1">悲剧</el-radio>
          <el-radio v-model="form.nstyle" :label="2">喜剧</el-radio>
        </el-form-item>
        <el-form-item label="特点">
          
          <el-checkbox-group v-model="form.nfeature">
            <el-checkbox :label="1">盗墓</el-checkbox>
            <el-checkbox :label="2">快穿</el-checkbox>
            <el-checkbox :label="3">星际</el-checkbox>
            <el-checkbox :label="4">西幻</el-checkbox>
            <el-checkbox :label="5">修真</el-checkbox>
            <el-checkbox :label="6">武侠</el-checkbox>
            <el-checkbox :label="7">血族</el-checkbox>
            <el-checkbox :label="8">宅斗</el-checkbox>
            <el-checkbox :label="9">科举</el-checkbox>
            <el-checkbox :label="10">种田</el-checkbox>
            <el-checkbox :label="11">校园</el-checkbox>
            <el-checkbox :label="12">职场</el-checkbox>
            <el-checkbox :label="13">美食</el-checkbox>
            <el-checkbox :label="14">玄学</el-checkbox>
            <el-checkbox :label="15">虐恋</el-checkbox>
            <el-checkbox :label="16">机甲</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false" size="small">取 消</el-button>
          <el-button type="primary" @click="addNovel" size="small">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Novels',
  data() {
    return {
      novels: [],
      dialogVisible: false,
      form: {
        ntitle: '',
        nauthor: '',
        nschedule: 0,
        noriginal: 0,
        ntime: 0,
        nstyle: 0,
        nfeature: []
      }
    }
  },
  methods: {
    // 获取所有小说对象
    initNovels() {
      this.$post('/admin/getAllNovles', {})
        .then(res => {
          this.novels = res
        })
    },
    // 重置form
    resetForm() {
      this.form.ntitle = '',
      this.form.nauthor = '',
      this.form.nschedule = 0,
      this.form.noriginal = 0,
      this.form.ntime = 0,
      this.form.nstyle = 0,
      this.form.nfeature = []
    },
    // 删除一个novel对象
    delNovel(nid) {
      const config = {
        nid
      }
      console.log(config);
      this.$confirm('此操作将永久删除小说，是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let res = await this.$post('/novel/del', config)
        if (res === 1) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.initNovels()
        } else {
          this.$message.error('删除失败')
        }
      })
    },
    // 添加一部小说
    addNovel() {
      if (this.form.ntitle === '' || this.form.nauthor === '') {
        this.$confirm('请填写完整', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        return
      }
      let nfeature = this.form.nfeature.join()
      const config = {
        ntitle: this.form.ntitle,
        nauthor: this.form.nauthor,
        nschedule: this.form.nschedule,
        noriginal: this.form.noriginal,
        ntime: this.form.ntime,
        nstyle: this.form.nstyle,
        nfeature
      }
      this.$post('/novel/add', config)
        .then(res => {
          if (res === 1) {
            this.$message({
              type: 'success',
              message: '添加成功'
            })
            this.initNovels()
          } else {
            this.$message.error('添加失败')
          }
          this.resetForm()
          this.dialogVisible = false
        })
    }
  },
  created() {
    this.initNovels()
  },
}
</script>
<style scoped>
  
</style>
