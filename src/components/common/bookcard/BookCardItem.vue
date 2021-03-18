<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 小说名 + 作者名
 * @Date: 2021-03-15 20:26:55
 * @LastEditors: East Wind
 * @LastEditTime: 2021-03-15 21:17:33
-->
<template>
  <div class="book-card-item">
    <div class="novel-author"><slot name="novel-author"></slot></div>
    <div class="novel-name"><slot name="novel-name"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'BookCardItem'
}
</script>
<style scoped>
.book-card-item {
  margin: auto 10px;
  border-bottom: 1px solid #dfe6e9;
  font-size: 1rem;
  color: #636e72;
}
.novel-author {
  float: right;
}
</style>
