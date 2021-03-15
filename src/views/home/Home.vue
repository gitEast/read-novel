<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 主界面
 * @Date: 2021-02-28 22:55:50
 * @LastEditors: East Wind
 * @LastEditTime: 2021-03-11 18:37:09
-->
<template>
  <div id="home">
    <finished-nav-bar />
    <search-bar />
    <slide-show />
  </div>
</template>
<script>
import FinishedNavBar from 'components/content/finishedNavbar/FinishedNavBar'
import SearchBar from 'components/common/searchbar/SearchBar'
import SlideShow from 'components/common/slideshow/SlideShow'

export default {
  name: 'Home',
  components: {
    FinishedNavBar,
    SearchBar,
    SlideShow
  }
}
</script>
<style scoped>
</style>
