<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 主界面
 * @Date: 2021-02-28 22:55:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-04 14:10:42
-->
<template>
  <div id="home">
    <search-bar />
    <slide-show />
    <finished-book-card />
  </div>
</template>
<script>
// import FinishedNavBar from 'components/content/finishedNavbar/FinishedNavBar'
import SearchBar from 'components/common/searchbar/SearchBar'
import SlideShow from 'components/common/slideshow/SlideShow'
import FinishedBookCard from 'components/content/finishedBookCard/FinishedBookCard'
// import FooterBar from 'components/common/footer/FooterBar'

export default {
  name: 'Home',
  components: {
    SearchBar,
    SlideShow,
    FinishedBookCard
  }
}
</script>
<style scoped>
</style>
