<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 导航栏组件
 * @Date: 2021-02-28 22:38:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-04 14:25:50
-->
<template>
  <div class="top">
    <div class="nav-bar content">
      <!-- <div class="right"><slot name="right"></slot></div>
      <div class="logo"><slot name="logo"></slot></div> -->
      <div class="logo"><slot name="logo"></slot></div>
      <div class="right"><slot name="right"></slot></div>
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
    /* background-color: #636e72; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #636e72;
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

  /* .right {
    float: right;
    line-height: 50px;
  } */
</style>
