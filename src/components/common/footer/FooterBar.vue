<!--
 * @Author: your name
 * @Date: 2021-03-26 21:00:43
 * @LastEditTime: 2021-03-27 21:37:12
 * @LastEditors: Please set LastEditors
 * @Description: 尾部
 * @FilePath: \read-novel\src\components\common\footer\Footer.vue
-->
<template>
  <div class="footer">
    <div class="links">
      <a href="#">首页</a>
      <a href="#">博客</a>
      <a href="https://github.com/gitEast/read-novel" target="_blank">github</a>
    </div>
    <div class="email">
      <!-- <img src="~assets/img/footer/email.png" alt="email icon"> -->
    </div>
    <div class="copyright">&copy;&nbsp;&middot;&nbsp;East&nbsp;Wind&nbsp;&middot;&nbsp;2021</div>
  </div>
  
</template>
<script>
export default {
  name: 'FooterBar'
}
</script>
<style scoped>
.footer {
  width: 1100px;
  margin: 100px auto 50px;
  text-align: center;
  color: #636e72;
}
.links {
  width: 40%;
  margin: 0 auto;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #636e72;
  font-size: 1.3rem;
}
.links a {
  text-decoration: none;
  color: #636e72;
}
a:hover {
  color: #444;
}
.email {
  margin: 10px auto;
  background-image: url('~assets/img/footer/email.png');
  background-size: contain;
  width: 40px;
  height: 40px;
  position: relative;
  left: -12px;
  cursor: pointer;
}
.email:hover {
  background-image: url('~assets/img/footer/email-02.png');
}
/* .email img {
  width: 40px;
  position: relative;
  left: -11px;
  cursor: pointer;
} */
.copyright {
  cursor: default;
}
</style>
