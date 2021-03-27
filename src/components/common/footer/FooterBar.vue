<!--
 * @Author: your name
 * @Date: 2021-03-26 21:00:43
 * @LastEditTime: 2021-03-27 22:24:18
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
/* 底部：宽度，水平居中，上下间隔，文字水平居中，文字颜色 */
.footer {
  width: 1100px;
  margin: 100px auto 50px;
  text-align: center;
  color: #636e72;
}
/* 链接的大div：宽度，水平居中，上下间隙，flex布局使链接居中，分割线，字体大小 */
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
/* 链接：去下划线，文字颜色 */
.links a {
  text-decoration: none;
  color: #636e72;
}
/* 被鼠标移至的时候：文字颜色 */
a:hover {
  color: #444;
}
/* 邮箱：上下间隙，水平居中，背景图片，背景图片缩放，设置宽高（否则背景图片无法展示），相对定位，鼠标图标 */
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
/* 邮箱被鼠标移至：变色 */
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
