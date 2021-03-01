<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: About this file
 * @Date: 2021-02-28 21:49:29
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-28 23:24:30
-->
<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from 'views/home/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
  @import url('assets/css/base.css');
</style>
