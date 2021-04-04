<!--
 * @Author: your name
 * @Date: 2021-03-27 22:02:16
 * @LastEditTime: 2021-04-04 15:40:36
 * @LastEditors: Please set LastEditors
 * @Description: 书籍搜索页
 * @FilePath: \read-novel\src\views\library\Library.vue
-->
<template>
  <div id="library">
    <search-bar></search-bar>
    <finished-search-tags></finished-search-tags>
    <div>Page Library</div>
        
  </div>
</template>
<script>
import SearchBar from 'components/common/searchbar/SearchBar'
import FinishedSearchTags from 'components/content/finishedSearchTags/FinishedSearchTags'

export default {
  name: 'Library',
  components: {
    SearchBar,
    FinishedSearchTags
  }
}
</script>
<style scoped>
</style>
