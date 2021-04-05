<!--
 * @Author: your name
 * @Date: 2021-03-30 21:47:08
 * @LastEditTime: 2021-04-05 17:44:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\discuss\Discuss.vue
-->
<template>
  <div>
    <search-bar></search-bar>
    <finished-posts></finished-posts>
  </div>
</template>
<script>
import SearchBar from 'components/common/searchbar/SearchBar'
import FinishedPosts from 'components/content/finishedPosts/FinishedPosts'

export default {
  name: 'Discuss',
  components: {
    SearchBar,
    FinishedPosts
  }
}
</script>
<style scoped>
  
</style>
