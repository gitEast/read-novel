<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 小说名 + 作者名
 * @Date: 2021-03-15 20:26:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-12 02:18:18
-->
<template>
  <div class="book-card-item">
    <div class="novel-name" @click="toNovel(item.nid)">《{{item.ntitle}}》</div>
    <div class="novel-author">by{{item.nauthor}}</div>
  </div>
</template>
<script>
export default {
  name: 'BookCardItem',
  props: ['item'],
  methods: {
    toNovel(id) {
      this.$router.push('/novel/' + id)
    }
  },
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
  cursor: pointer;
}
/* 作者：字体大小 */
.novel-author {
  font-size: 1.4rem;
  cursor: default;
}
</style>
