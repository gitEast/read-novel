<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: About this file
 * @Date: 2021-02-28 21:49:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-04 14:16:48
-->
<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <Main></Main>
  </div>
</template>

<script>
import Main from 'views/Main'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
  @import url('assets/css/base.css');
</style>
