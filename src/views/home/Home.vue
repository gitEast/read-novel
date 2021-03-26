<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 主界面
 * @Date: 2021-02-28 22:55:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-26 19:09:31
-->
<template>
  <div id="home">
    <finished-nav-bar />
    <search-bar />
    <slide-show />
    <finished-book-card />
  </div>
</template>
<script>
import FinishedNavBar from 'components/content/finishedNavbar/FinishedNavBar'
import SearchBar from 'components/common/searchbar/SearchBar'
import SlideShow from 'components/common/slideshow/SlideShow'
import FinishedBookCard from 'components/content/finishedBookCard/FinishedBookCard'

export default {
  name: 'Home',
  components: {
    FinishedNavBar,
    SearchBar,
    SlideShow,
    FinishedBookCard
  }
}
</script>
<style scoped>
</style>
