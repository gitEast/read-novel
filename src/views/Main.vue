<!--
 * @Author: your name
 * @Date: 2021-04-04 13:51:00
 * @LastEditTime: 2021-04-10 03:28:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\Main.vue
-->
<template>
  <div>
    <finished-nav-bar />
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import FinishedNavBar from 'components/content/finishedNavbar/FinishedNavBar'
import FooterBar from 'components/common/footer/FooterBar'

export default {
  name: 'Main',
  components: {
    FinishedNavBar,
    FooterBar
  },
  created() {
    // localStorage.setItem('id', '')
    // localStorage.setItem('act', '')
    // localStorage.setItem('pwd', '')
    // localStorage.setItem('role', '')
  }
}
</script>
<style scoped>
  
</style>
