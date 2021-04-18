<!--
 * @Author: your name
 * @Date: 2021-04-11 06:14:00
 * @LastEditTime: 2021-04-12 22:21:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\novel\Chapter.vue
-->
<template>
  <div class="chapter">
    <!-- 上一章    章节标题    下一章 -->
    <el-header style="height: 70px">
      <div class="header">
        <el-button 
          type="text"  
          style="color: #606266;" 
          @click="prevChapter"
          :disabled="prevDisabled">
          <i class="el-icon-back"></i>
          上一章
        </el-button>
        <el-button 
          type="text"  
          style="color: #000;" 
          @click="toNovel">
          <h2>{{ novel.ntitle }}</h2>
        </el-button>
        <el-button 
          type="text"  
          style="color: #606266;" 
          @click="nextChapter"
          :disabled="nextDisabled">
          下一章
          <i class="el-icon-right"></i>
        </el-button>
      </div>
    </el-header>
    <el-main style="border-bottom: 1px solid #ddd; border-top: 1px solid #ddd;">
      <chapter-content :chapter="chapter"></chapter-content>
    </el-main>
    <el-footer>
      <div class="header footer">
        <el-button 
          type="text"  
          style="color: #606266;" 
          @click="prevChapter"
          :disabled="prevDisabled">
          <i class="el-icon-back"></i>
          上一章
        </el-button>
        <el-button 
          type="text"  
          style="color: #606266;" 
          @click="nextChapter"
          :disabled="nextDisabled">
          下一章
          <i class="el-icon-right"></i>
        </el-button>
      </div>
    </el-footer>
  </div>
</template>
<script>
import ChapterContent from './ChapterContent'
export default {
  name: 'Chapter',
  components: {
    ChapterContent
  },
  data() {
    return {
      novel: {
        nid: '',
        ntitle: '111'
      },
      chapters: [],
      cindex: 0,
      chapter: [],
      prevDisabled: false,
      nextDisabled: false
    }
  },
  methods: {
    // 上一章
    prevChapter() {
      this.prevDisabled = false
      
      this.cindex--
      
      this.nextDisabled = false
      this.chapter = []
      this.chapter.push(this.cindex)
      this.chapter.push(this.chapters[this.cindex])
      this.$bus.emit('novels', this.chapter)
      if (this.cindex === 0) {
        this.prevDisabled = true
        return
      }
    },
    // 下一章
    nextChapter() {
      this.nextDisabled = false
      
      this.cindex++
      
      this.prevDisabled = false
      this.chapter = []
      this.chapter.push(this.cindex)
      this.chapter.push(this.chapters[this.cindex])
      this.$bus.emit('novels', this.chapter)
      if (this.cindex === (this.chapters.length - 1)) {
        this.nextDisabled = true
        return
      }
    },
    // 跳转到对应novel页面
    toNovel() {
      this.$router.push('/novel/' + this.novel.nid)
    }
  },
  created() {
    // 获取该小说的id与对应title
    let nid = parseInt(this.$route.query.nid)
    this.cindex = parseInt(this.$route.query.cindex)
    this.$post('/novel/bynid', { nid })
      .then(async (res) => {
        console.log(res);
        this.novel = res
        let chapters = await this.$post('/chapter/all', { nid })
        this.chapters = chapters
        if (this.cindex === -1) {
          this.cindex = this.chapters.length - 1
        }
        this.chapter.push(this.cindex)
        this.chapter.push(this.chapters[this.cindex])
        this.$bus.emit('novels', this.chapter)
        if (this.cindex === 0) {
          this.prevDisabled = true
        }
        if (this.cindex === (chapters.length - 1)) {
          this.nextDisabled = true
        }
        console.log(this.prevDisabled);
        console.log(this.nextDisabled);
      })
  }
}
</script>
<style scoped>
.chapter {
  width: 1100px;
  margin: 40px auto;
  border: 1px solid #aaaaaa;
  border-radius: 20px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: default;
}
.footer {
  margin-top: 10px;
}
</style>
