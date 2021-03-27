<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 导航栏右部三个链接，可跳转至不同页面；点击时，显示XXX色
 * @Date: 2021-02-28 22:43:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-27 21:52:46
-->
<template>
  <div class="nav-bar-right">
    <div class="interface-name" :style="activeInterface">
      <div id="right-01"><slot name="right-01"></slot></div>
      <div class="split-line"></div>
    </div>
    <div class="interface-name" :style="activeInterface">
      <div id="right-02"><slot name="right-02"></slot></div>
      <div class="split-line"></div>
    </div>
    <div class="interface-name" :style="activeInterface">
      <div id="right-03"><slot name="right-03"></slot></div>
    </div>
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
    position: relative;
    display: inline-block;
    margin: 0 6px;
  }

  .split-line {
    position: absolute;
    top: 0.75rem;
    right: -6px;
    background-color: aliceblue;
    display: inline-block;
    height: 1.5rem;
    width: 1px;
  }

  #right-01, #right-02, #right-03 {
    cursor: pointer;
  }
</style>
