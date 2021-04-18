<!--
 * @Author: your name
 * @Date: 2021-04-04 19:23:09
 * @LastEditTime: 2021-04-11 17:45:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\components\content\finishedSearchBooks\FinishedSearchBooks.vue
-->
<template>
  <div class="finished-search-books">
    <div class="reset-table">
      <el-table
        :data="currentBooks"
        style="width: 100%">
        <el-table-column
          prop="nauthor"
          label="作者名"
          width="190">
        </el-table-column>
        <el-table-column
          prop="ntitle"
          label="小说名"
          width="230">
          <template #default="scope">
            <el-button 
              type="text" 
              @click="jumpTo(scope.row.nid)"
              style="color: #606266">
              {{ scope.row.ntitle }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="nschedule"
          label="进度">
        </el-table-column>
        <el-table-column
          prop="noriginal"
          label="原创">
        </el-table-column>
        <el-table-column
          prop="ntime"
          label="时代">
        </el-table-column>
        <el-table-column
          prop="nstyle"
          label="风格">
        </el-table-column>
        <el-table-column
          prop="ncreate"
          label="创建时间"
          width="180">
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FinishedSearchBooks',
  props: ['novel'],
  data() {
    return {
      books: [],
      currentPage: 1,
      total: 0,
      pageSize: 5,
      currentBooks: []
    }
  },
  methods: {
    // 条数改变
    handleSizeChange(val) {
      this.pageSize = val
      this.currentBooks = this.books
      this.currentPage = 1
      this.getCurrentTable()
      console.log(this.books);
    },
    // 当前页码改变
    handleCurrentChange(val) {
      this.currentPage = val
      this.getCurrentTable()
    },
    // 获取初始化数据
    getData() {
      if (this.books === undefined) {
        return
      }
      this.total = this.books.length
      this.currentBooks = this.books
    },
    // 获取当前table的data数据
    getCurrentTable() {
      if (this.books === undefined) {
        return
      }
      this.currentBooks = this.books.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      console.log(this.currentBooks);
    },
    formatNovels(data) {
      this.books = data
      if (this.books === undefined) {
        return
      }
      this.books.forEach(novel => {
        console.log((typeof novel));
        if (novel === undefined) {
          return 
        }
        if ((typeof novel) === 'number') {
          return
        }
        console.log(novel);
        console.log(typeof novel.nschedule);
        novel.nschedule===1? novel.nschedule='已完结': novel.nschedule='连载中'
        novel.noriginal===1? novel.noriginal='衍生': novel.noriginal='原创'
        switch (novel.ntime) {
          case 0:
            novel.ntime = '古代'
            break;
          case 1:
            novel.ntime = '近代'
            break;
          case 2:
            novel.ntime = '现代'
            break;
          case 3:
            novel.ntime = '未来'
            break;
          default:
            break;
        }
        switch (novel.nstyle) {
          case 0:
            novel.nstyle = '正剧'
            break;
          case 1:
            novel.nstyle = '悲剧'
            break;
          case 2:
            novel.nstyle = '喜剧'
            break;
          default:
            break;
        }
      });
    },
    // 跳转到Novel页面
    jumpTo(id) {
      this.$router.push('/novel/' + id)
    }
  },
  mounted() {
    this.$bus.on('novels', data => {
      this.formatNovels(data)
      this.currentPage = 1
      this.getCurrentTable()
      this.getData()
      this.getCurrentTable()
    })
  }
}
</script>
<style scoped>
/* 整体的CSS：宽度，边框，边框弧度，外间距，内间距 */
.finished-search-books {
  width: 1060px;
  border: 1px solid #aaaaaa;
  border-radius: 15px;
  margin: 40px auto 0;
  padding: 20px;
}

/* 重置el-table的CSS：鼠标形状，外间距 */
.reset-table {
  cursor: default;
  margin: 0 auto 20px;
}
</style>
