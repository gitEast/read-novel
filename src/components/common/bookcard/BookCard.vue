<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 书本列表卡片
 * @Date: 2021-03-15 20:26:44
 * @LastEditors: East Wind
 * @LastEditTime: 2021-03-15 21:11:16
-->
<template>
  <div class="book-card">
    <div class="novels-title">
      <slot name="novels-title"></slot>
    </div>
    <div>
      <slot name="{{novels-$}}" v-for="item in novels" :key="item.id" :itme="item"></slot>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'BookCard',
  data() {
    return {
      novels: [
        {
          id: '00001',
          name: '地上霜',
          author: '明月光'
        },
        {
          id: '00002',
          name: '白玉盘',
          author: '云端'
        },
        {
          id: '00003',
          name: '将进酒',
          author: '明镜'
        },
        {
          id: '00004',
          name: '鹳雀楼',
          author: '孟浩然'
        },
        {
          id: '00005',
          name: '缘愁似个长',
          author: '赠李白'
        },
        {
          id: '00006',
          name: '蜻蜓早有',
          author: '小荷'
        },
        {
          id: '00007',
          name: '花满蹊',
          author: '恰恰'
        },
        {
          id: '00008',
          name: '莲叶何田田',
          author: '鱼戏'
        },
        {
          id: '00009',
          name: '锦官城',
          author: '花重'
        },
        {
          id: '00010',
          name: '向天歌',
          author: '曲项'
        }
      ]
    }
  }
}
</script>
<style scoped>
/* 书卡 */
.book-card {
  width: 500px;
  border-radius: 15px;
  border: 1px solid #636e72;
}
/* 通称标题： */
.novels-title {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid #2d3436;
  color: #2d3436;
}
</style>
