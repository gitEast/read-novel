<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 轮播图
 * @Date: 2021-03-10 20:44:40
 * @LastEditors: East Wind
 * @LastEditTime: 2021-03-15 19:59:48
-->
<template>
  <div class="slide-show">
    <div class="sentences">
      <!-- <div v-for="item in sentences" :key="item.index">{{item.content}}</div> -->
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
        // console.log(this.currentIndex);
        this.currentIndex++;
        this.currentIndex = this.validCurrentIndex(this.currentIndex)
        // console.log(this.currentIndex);
      }, this.interval)
    },
    // 检测currentIndex是否合法，并返回currentIndex
    validCurrentIndex(currentIndex) {
      // alert(currentIndex)
      // currentIndex++;
      if (currentIndex > 3) {
        // console.log("-----------------------");
        currentIndex = 0
      } else if (currentIndex < 0) {
        // console.log("---------------------------------");
        currentIndex = 3
      }
      // console.log(currentIndex);
      // alert(currentIndex)
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
/* .sentences {
  color: #dfe6e9;
  overflow: hidden;
}
.sentences div {
  margin-top: 130px;
} */
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
.left-btn {
  top: 70px;
  left: 20px;
}
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
.dot-ul {
  position: absolute;
  list-style: none;
  font-size: 2.5rem;
  /* width: 240px; */
  /* margin: 0px auto -20px; */
  left: 420px;
  bottom: 0px;
}
.dot-ul li {
  display: inline-block;
  background-color: #dfe6e9;
  width: 10px;
  height: 10px;
  margin: 0 20px 0 20px;
  border-radius: 50%;
  cursor: pointer;
}
.dot-li-active {
  background-color: #fff !important;
}
.dot-ul li:hover {
  background-color: #fff;
}

/* .sentences-ui li span {
  
  font-size: 2rem;
} */
</style>
