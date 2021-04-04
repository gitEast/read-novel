<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 导航栏右部三个链接，可跳转至不同页面；点击时，显示XXX色
 * @Date: 2021-02-28 22:43:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-04 13:48:45
-->
<template>
  <div class="nav-bar-right">
    <div class="interface-name" :style="activeInterface">
      <div id="right-01"><slot name="right-01"></slot></div>
      <div class="split-line"></div>
    </div>
    <div class="interface-name" :style="activeInterface">
      <div id="right-02"><slot name="right-02" @click="toView"></slot></div>
      <div class="split-line"></div>
    </div>
    <div class="interface-name" :style="activeInterface">
      <div id="right-03"><slot name="right-03"></slot></div>
    </div>
    <!-- <slot></slot>
    <div class="split-line"></div>
    <slot></slot>
    <div class="split-line"></div>
    <slot></slot> -->
  </div>
</template>
<script>
export default {
  name: 'NavBarRight'
  // methods: {
  //   toView() {
  //     console.log('============');
  //     // this.$router.push(this.path)
  //     console.log(this.path);
  //   }
  // }
}
</script>
<style scoped>
  .nav-bar-right {
    /* width: 300px; */
    font-size: 1rem;
    /* color: aliceblue; */
    color: black;
    display: flex;
    flex-direction: row;
    line-height: 50px;
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
