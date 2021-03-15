<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 轮播图
 * @Date: 2021-03-10 20:44:40
 * @LastEditors: East Wind
 * @LastEditTime: 2021-03-15 20:16:46
-->
<template>
  <div class="slide-show">
    <div class="sentences">
      <div>{{sentences[currentIndex].content}}</div>
    </div>
    <div class="left-btn" id="left-btn" @click="leftClick">&lt;</div>
    <div class="right-btn" id="right-btn" @click="rightClick">&gt;</div>
    <ul class="dot-ul">
      <li v-for="(item, index) in sentences" 
          :key="index" 
          :class="{ 'dot-li-active': index === currentIndex}"
          @click="liClick(index)"></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SlideShow',
  data() {
    return {
      sentences: [
        {
          index: 1,
          content: '念念不忘，必有回响'
        },
        {
          index: 2,
          content: '你的气质里，藏着你走过的路，读过的书，爱过的人'
        },
        {
          index: 3,
          content: '愿你出走半生，归来依然是少年'
        },
        {
          index: 4,
          content: '行有道，达天下'
        }
      ],
      currentIndex: 0,
      interval: 5000,
      timer: ''
    }
  },
  mounted() {
    setTimeout(() => {
      // 开启定时器
      this.timer = this.startTimer()
    }, 100)
  },
  methods: {
    // 定时器操作
    startTimer() {
      return setInterval(() => {
        this.currentIndex++;
        this.currentIndex = this.validCurrentIndex(this.currentIndex)
      }, this.interval)
    },
    // 检测currentIndex是否合法，并返回currentIndex
    validCurrentIndex(currentIndex) {
      if (currentIndex > 3) {
        currentIndex = 0
      } else if (currentIndex < 0) {
        currentIndex = 3
      }
      return currentIndex
    },
    // 点击左边的按钮
    leftClick() {
      // 清除定时器
      clearInterval(this.timer)
      this.currentIndex--;
      this.currentIndex = this.validCurrentIndex(this.currentIndex)
      // 重启定时器
      this.timer = this.startTimer()
    },
    // 点击右边的按钮
    rightClick() {
      // 清除定时器
      clearInterval(this.timer)
      this.currentIndex++;
      this.currentIndex = this.validCurrentIndex(this.currentIndex)
      // 重启定时器
      this.timer = this.startTimer()
    },
    // 点击li实心圆
    liClick(index) {
      // 清除定时器
      clearInterval(this.timer)
      this.currentIndex = index
      // 重启定时器
      this.timer = this.startTimer()
    }
  }
}
</script>
<style scoped>
/* 整块背景：背景色、宽高、水平居中、圆角、父相 */
.slide-show {
  background-color: #636e72;
  width: 1100px;
  height: 300px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
}
/* 文字部分：文字大小粗细颜色，div高度，水平居中， */
.sentences {
  font-size: 3rem;
  font-weight: 600;
  /* color: #f4f8fa; */
  color: #f7f7f7;
  width: 900px;
  margin: 0 auto;
  padding-top: 80px;
  text-align: center;
  line-height: 4.2rem;
  cursor: default;
}
/* 按钮：子绝，背景色，字体大小，鼠标形状 */
.left-btn, .right-btn {
  position: absolute;
  color: #dfe6e9;
  font-size: 120px;
  cursor: pointer;
}
/* 左按钮位置 */
.left-btn {
  top: 70px;
  left: 20px;
}
/* 右按钮位置 */
.right-btn {
  top: 70px;
  right: 20px
}
/* 按钮碰到 */
.left-btn:hover, .right-btn:hover {
  color: #f7f7f7;
}
/* 按钮被激活 */
.left-btn:active, .right-btn:active {
  color: #fff;
}
/* 实心圆列表：子绝，去li前面的圆，设置大小，设置位置 */
.dot-ul {
  position: absolute;
  list-style: none;
  font-size: 2.5rem;
  left: 420px;
  bottom: 0px;
}
/* 实心圆：行内块级元素，背景色，宽高，与兄弟的间距，形成实心圆，鼠标形状 */
.dot-ul li {
  display: inline-block;
  background-color: #dfe6e9;
  width: 10px;
  height: 10px;
  margin: 0 20px 0 20px;
  border-radius: 50%;
  cursor: pointer;
}
/* 实心圆被点击 */
.dot-li-active {
  background-color: #fff !important;
}
/* 实心圆被鼠标碰到 */
.dot-ul li:hover {
  background-color: #fff;
}
</style>
