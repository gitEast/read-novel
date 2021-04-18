<!--
 * @Author: your name
 * @Date: 2021-04-11 14:55:20
 * @LastEditTime: 2021-04-11 17:44:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\novel\ChapterContent.vue
-->
<template>
  <div class="chapter-content">
    <div class="title"><h3>第{{ index }}章 {{ chapterContent.ctitle }}</h3></div>
    <div class="content" @click="click">
      <p v-for="(p, index) in paragraphs" :key="index" style="text-indent: 2em;">{{ p }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChapterContent',
  data() {
    return {
      chapterContent: {
        ctitle: '抱歉该小说没有上传任何章节',
        ccontent: ''
      },
      paragraphs: [],
      index: 0
    }
  },
  mounted() {
    this.$bus.on('novels', chapter => {
      if (chapter[1] === undefined || chapter[1].ccontent === undefined) {
        return 
      }
      this.index = chapter[0] + 1
      this.chapterContent = chapter[1]
      console.log(this.chapterContent);
      
      let content = chapter[1].ccontent.replace(/\u3000\u3000/g, '')
      this.paragraphs = content.split('\n')
      console.log(chapter);
    })
  },

}
</script>
<style scoped>
.chapter-content {
  color: #666;
}
.title {
  text-align: center;
}
.content {
  width: 950px;
  margin: auto;
}
</style>
