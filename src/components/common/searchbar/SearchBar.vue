<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 搜索框组件
 * @Date: 2021-03-09 20:39:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-12 02:00:07
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
      <el-button 
        type="info" 
        icon="el-icon-search"
        @click="search">
        搜索
      </el-button>
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
        }
      ],
      value: '1',
      input: ''
    }
  },
  methods: {
    search() {
      // const path = {
      //   path: '/search', 
      //   query: {
      //     select: this.value, 
      //     input: this.input
      //   }
      // }
      // this.$router.push(path)
      if (this.value === '1') {
        // 书名搜索
        this.$post('/novel/ntitle', { ntitle: this.input })
          .then(res => {
            this.$bus.emit('results', res)
          })
      } else {
        // 作者名搜索
        this.$post('/novel/nauthor', { nauthor: this.input })
          .then(res => {
            this.$bus.emit('results', res)
          })
      }
      this.$router.push('search')
    }
  },
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
  width: 878px;
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
  font-size: 1.3rem
}
.search-btn button {
  /* width: 80px; */
  background-color: rgb(99, 110, 114);
  height: 50px;
  outline: none;
  border: 0;
  /* display: inline-block; */
  /* vertical-align: middle */
  position: absolute;
  bottom: -1.04rem;
  border-radius: 0 10px 10px 0;
}
.search-btn button:hover {
  background-color: #777777;
}
/* 按钮被点击 */
.search-btn button:active {
  background-color: #666666;
}
</style>
