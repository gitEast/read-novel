<!--
 * @Author: your name
 * @Date: 2021-03-27 22:02:16
 * @LastEditTime: 2021-04-11 02:49:05
 * @LastEditors: Please set LastEditors
 * @Description: 书籍搜索页
 * @FilePath: \read-novel\src\views\library\Library.vue
-->
<template>
  <div id="library">
    <search-bar></search-bar>
    <finished-search-tags @getNovels="getNovels"></finished-search-tags>
    <finished-search-books :novels="novels"></finished-search-books>
  </div>
</template>
<script>
import SearchBar from 'components/common/searchbar/SearchBar'
import FinishedSearchTags from 'components/content/finishedSearchTags/FinishedSearchTags'
import FinishedSearchBooks from 'components/content/finishedSearchBooks/FinishedSearchBooks'

export default {
  name: 'Library',
  data() {
    return {
      novels: []
    }
  },
  methods: {
    // 父组件接收子组件传来的值data
    getNovels(data) {
      this.novels = data
      console.log(data);
    }
  },
  components: {
    SearchBar,
    FinishedSearchTags,
    FinishedSearchBooks
  }
}
</script>
<style scoped>
</style>
