<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 搜索框组件
 * @Date: 2021-03-09 20:39:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-04 14:35:44
-->
<template>
  <div class="search-bar content">
    <div class="search-select">
      <select v-model="value" placeholder="请选择">
        <option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </option>
      </select>
    </div>
    <div class="search-input">
      <input 
        type="text" 
        name="" 
        id=""
        placeholder="请输入内容"
        v-model="input">
    </div>
    <div class="search-btn">
      <button>
        <img src="~assets/img/logo.png" alt="放大镜图片">
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      options: [
        {
          value: '1',
          label: '书名'
        },
        {
          value: '2',
          label: '作者'
        },
        {
          value: '3',
          label: '主角'
        },
        {
          value: '4',
          label: 'ID'
        }
      ],
      value: '1',
      input: ''
    }
  }
}
</script>
<style scoped>
.search-bar {
  margin: 40px auto;
}
/* 选择框样式 */
.search-select {
  display: inline-block;
  /* 使得select与input的边重合，只有1px */
  margin-right: -1px;
}
.search-select select {
  width: 130px;
  height: 50px;
  font-size: 1.3rem;
  /* text-indent: 0.5rem; */
  text-align-last: center;
  letter-spacing: 0.3rem;
  padding: 6px 0;
  border: 1px solid #aaaaaa;
  border-radius: 10px 0 0 10px;
  outline: none;
}
.search-select select:hover {
  border-color: skyblue;
}
.search-select select option {
  font-size: 1rem;
}
/* 输入框样式 */
.search-input {
  display: inline-block;
  padding: 0;
}
.search-input input {
  height: 48px;
  padding: 0;
  width: 888px;
  font-size: 1.3rem;
  text-indent: 1rem;
  outline: none;
  border: 1px solid #aaaaaa;
}
/* 输入框选中样式 */
.search-input input:focus {
  border-color: skyblue;
}
/* 按钮样式 */
.search-btn {
  /* width: 60px; */
  display: inline-block;
  position: relative;
}
.search-btn button {
  width: 80px;
  background-color: rgb(99, 110, 114);
  height: 50px;
  outline: none;
  border: 0;
  /* display: inline-block; */
  /* vertical-align: middle */
  position: absolute;
  bottom: -1.04rem;
  border-radius: 0 10px 10px 0;
  /* outline: none; */
  /* vertical-align: text-top; */
}
.search-btn button:hover {
  background-color: #777777;
}
/* 按钮被点击 */
.search-btn button:active {
  background-color: #666666;
}
.search-btn button img {
  width: 30px;
  /* text-align: center; */
  /* margin: 0 auto; */
  /* line-height: 50px; */
  /* position: absolute;
  left: 25px;
  top: -20px; */
  position: relative;
  top: 2px;
}
</style>
