<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 书本列表卡片
 * @Date: 2021-03-15 20:26:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-09 01:23:29
-->
<template>
  <div class="book-card">
    <div class="novels-title">
      <slot name="novels-title"></slot>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BookCard',
  data() {
    return {
      
    }
  }
}
</script>
<style scoped>
/* 小说列表卡片：宽度，圆角矩形，边，内间距 */
.book-card {
  width: 500px;
  border-radius: 15px;
  border: 1px solid #636e72;
  padding: 10px;
}
/* 通称标题：小说标题字体，文本居中，颜色 */
.novels-title {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #2d3436;
  cursor: default;
}
</style>
