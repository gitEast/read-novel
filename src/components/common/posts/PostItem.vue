<!--
 * @Author: your name
 * @Date: 2021-04-05 17:54:25
 * @LastEditTime: 2021-04-05 18:27:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\components\common\posts\PostItem.vue
-->
<template>
  <div class="post-item">
    <div class="post-info">
      <div class="title"><slot name="post-title"></slot></div>
      <div class="author"><slot name="post-author"></slot></div>
      <div class="time"><slot name="post-time"></slot></div>
    </div>
    <div class="post-content"><slot name="post-content"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'PostItem'
}
</script>
<style scoped>
.post-item {
  border-bottom: 1px solid #aaaaaa;
  color: #606260;
  cursor: pointer;
  margin-top: -15px;
}

.post-info {
  margin-top: 10px;
}

.title {
  font-size: 1rem;
  display: inline-block;
}

.author {
  font-size: 1rem;
  margin: 0 15px;
  display: inline-block;
}

.time {
  font-size: 1rem;
  display: inline-block;
}

.post-content {
  font-size: 1rem;
  margin: -25px 0 -12px;
  color: #777;
  text-indent: 2rem;
}
</style>
