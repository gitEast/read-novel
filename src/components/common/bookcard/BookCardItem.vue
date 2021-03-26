<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 小说名 + 作者名
 * @Date: 2021-03-15 20:26:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-26 20:06:17
-->
<template>
  <div class="book-card-item">
    <div class="novel-name">《{{item.name}}》</div>
    <div class="novel-author">by{{item.author}}</div>
  </div>
</template>
<script>
export default {
  name: 'BookCardItem',
  props: ['item'],
  mounted() {
    console.log(this.item)
  }
}
</script>
<style scoped>
/* 小说每一项列表：外间距，内间距，间隔的线，flex布局，字体颜色 */
.book-card-item {
  margin: 10px;
  padding: 10px 10px 0 0;
  border-top: 1px solid #dfe6e9;
  /* 使用flex布局使小说名与作者名分开 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #545b5e;
}
/* 小说题目：字体大小 */
.novel-name {
  font-size: 1.5rem;
}
/* 作者：字体大小 */
.novel-author {
  font-size: 1.4rem;
}
</style>
