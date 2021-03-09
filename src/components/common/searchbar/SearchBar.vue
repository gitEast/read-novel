<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 搜索框组件
 * @Date: 2021-03-09 20:39:25
 * @LastEditors: East Wind
 * @LastEditTime: 2021-03-09 21:39:57
-->
<template>
  <div class="search-bar content">
    <div class="search-select">
      <le-select v-model="value" aria-placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </le-select>
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
      ]
    }
  }
}
</script>
<style scoped>
</style>
