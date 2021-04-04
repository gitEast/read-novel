<!--
 * @Author: your name
 * @Date: 2021-03-27 22:02:16
 * @LastEditTime: 2021-04-04 14:36:51
 * @LastEditors: Please set LastEditors
 * @Description: 书籍搜索页
 * @FilePath: \read-novel\src\views\library\Library.vue
-->
<template>
  <div id="library">
    <search-bar></search-bar>
    <div>Page Library</div>
        
  </div>
</template>
<script>
import SearchBar from 'components/common/searchbar/SearchBar'

export default {
  name: 'Library',
  components: {
    SearchBar
  }
}
</script>
<style scoped>
</style>
