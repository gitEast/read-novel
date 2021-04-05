<!--
 * @Author: your name
 * @Date: 2021-04-04 19:23:09
 * @LastEditTime: 2021-04-05 17:34:54
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
          prop="author"
          label="作者名"
          width="190">
        </el-table-column>
        <el-table-column
          prop="name"
          label="小说名"
          width="230">
          <template #default="scope">
            <a 
              href="https://google.com" 
              target="_blank" 
              class="reset-a">
              {{ scope.row.name }}
            </a>
          </template>
        </el-table-column>
        <el-table-column
          prop="style"
          label="风格"
          width="150">
        </el-table-column>
        <el-table-column
          prop="schedule"
          label="进度"
          width="150">
        </el-table-column>
        <el-table-column
          prop="words"
          label="字数"
          width="150">
        </el-table-column>
        <el-table-column
          prop="publicationTime"
          label="发表时间">
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
// import ResultStatistics from 'components/common/searchbooks/ResultStatistics'
// import ResultBooks from 'components/common/searchbooks/ResultBooks'

export default {
  name: 'FinishedSearchBooks',
  data() {
    return {
      books: [
        {
          id: '00001',
          name: '地上霜',
          author: '明月光',
          style: '正剧',
          schedule: '已完结',
          words: '2222223',
          publicationTime: '2017-08-07 17:12:10'
        },
        {
          id: '00002',
          name: '白玉盘',
          author: '云端',
          style: '喜剧',
          schedule: '连载中',
          words: '222123',
          publicationTime: '2017-11-07 17:12:10'
        },
        {
          id: '00003',
          name: '将进酒',
          author: '明镜',
          style: '悲剧',
          schedule: '已完结',
          words: '225223',
          publicationTime: '2018-08-07 17:12:10'
        },
        {
          id: '00004',
          name: '鹳雀楼',
          author: '孟浩然',
          style: '正剧',
          schedule: '已完结',
          words: '22223',
          publicationTime: '2017-08-07 17:12:10'
        },
        {
          id: '00005',
          name: '缘愁似个长',
          author: '赠李白',
          style: '正剧',
          schedule: '已完结',
          words: '2222223',
          publicationTime: '2017-08-07 17:12:10'
        },
        {
          id: '00006',
          name: '蜻蜓早有',
          author: '小荷',
          style: '正剧',
          schedule: '已完结',
          words: '2222223',
          publicationTime: '2017-08-07 17:12:10'
        },
        {
          id: '00007',
          name: '花满蹊',
          author: '恰恰',
          style: '正剧',
          schedule: '已完结',
          words: '2222223',
          publicationTime: '2017-08-07 17:12:10'
        },
        {
          id: '00008',
          name: '莲叶何田田',
          author: '鱼戏',
          style: '正剧',
          schedule: '已完结',
          words: '2222223',
          publicationTime: '2017-08-07 17:12:10'
        },
        {
          id: '00009',
          name: '锦官城',
          author: '花重',
          style: '正剧',
          schedule: '已完结',
          words: '2222223',
          publicationTime: '2017-08-07 17:12:10'
        },
        {
          id: '00010',
          name: '向天歌',
          author: '曲项',
          style: '正剧',
          schedule: '已完结',
          words: '2222223',
          publicationTime: '2017-08-07 17:12:10'
        }
      ],
      currentPage: 1,
      total: 0,
      pageSize: 2,
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
    },
    // 当前页码改变
    handleCurrentChange(val) {
      this.currentPage = val
      this.getCurrentTable()
    },
    // 获取初始化数据
    getData() {
      this.total = this.books.length
      this.currentBooks = this.books
    },
    // 获取当前table的data数据
    getCurrentTable() {
      this.currentBooks = this.books.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      console.log(this.currentBooks);
    }
  },
  // 初始化
  created() {
    this.getData()
    this.getCurrentTable()
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
  margin: 10px auto 20px;
}

/* 重置a链接的CSS：去下划线，字体颜色 */
.reset-a {
  text-decoration: none;
  color: #606266;
}
</style>
