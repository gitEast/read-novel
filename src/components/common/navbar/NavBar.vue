<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 导航栏组件
 * @Date: 2021-02-28 22:38:45
 * @LastEditors: East Wind
 * @LastEditTime: 2021-03-09 20:12:42
-->
<template>
  <div class="top">
    <div class="nav-bar content">
      <div class="right"><slot name="right"></slot></div>
      <div class="logo"><slot name="logo"></slot></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
  .top {
    background-color: #636e72;
  }
  
  .nav-bar {
    height: 50px;
    margin: 0 auto;
  }

  .logo {
    /* float: left; */
    line-height: 50px;
  }

  .logo >>> img {
    width: 30px;
    vertical-align: middle;
    /* line-height: 50px; */
  }

  .right {
    float: right;
    line-height: 50px;
  }
</style>
