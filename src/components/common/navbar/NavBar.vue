<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 导航栏组件
 * @Date: 2021-02-28 22:38:45
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-28 23:35:50
-->
<template>
  <div class="nav-bar">
    <div class="logo"><slot name="logo"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
  .nav-bar {
    background-color: #707070;
    height: 50px;
  }

  .logo {
    float: left;
    line-height: 44px;
    margin-left: 8%;
  }

  .logo >>> img {
    width: 30px;
    vertical-align: middle;
  }

  .right {
    float: right;
    margin-right: 8%;
  }
</style>
