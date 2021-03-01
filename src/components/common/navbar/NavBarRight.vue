<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 导航栏右部三个链接，可跳转至不同页面；点击时，显示XXX色
 * @Date: 2021-02-28 22:43:44
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-28 23:28:22
-->
<template>
  <div class="nav-bar-right">
    <div class="interface-name" :style="activeInterface"><slot name="right-01"></slot></div>
    <div class="split-line">|</div>
    <div class="interface-name" :style="activeInterface"><slot name="right-02"></slot></div>
    <div class="split-line">|</div>
    <div class="interface-name" :style="activeInterface"><slot name="right-03"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'NavBarRight',
  props: {

  }
}
</script>
<style scoped>
  .nav-bar-right {
    font-size: 1rem;
    color: aliceblue;
  }
  
  .interface-name{
    display: inline-block;
    line-height: 44px;
  }

  .split-line {
    background-color: aliceblue;
    color: #707070;
    display: inline-block;
    width: 1px;
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
