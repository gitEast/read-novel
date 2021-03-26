<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 最终完成的首页的两个小说卡片，暂定十本小说，其实应该是二十本，而且想换字体
 * @Date: 2021-03-15 21:18:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-26 20:07:26
-->
<template>
  <div class="book-cards">
    <div class="left-book-card">
      <book-card>
        <template v-slot:novels-title>
          <span>原创小说</span>
        </template>
        <book-card-item v-for="item in novels"
                        :key="item.id"
                        :item="item">
        </book-card-item>
      </book-card>
    </div>
    <div class="right-book-card">
      <book-card>
        <template v-slot:novels-title>
          <span>衍生小说</span>
        </template>
        <book-card-item v-for="item in novels"
                        :key="item.id"
                        :item="item">
        </book-card-item>
      </book-card>
    </div>
  </div>
</template>
<script>
import BookCard from 'components/common/bookcard/BookCard'
import BookCardItem from 'components/common/bookcard/BookCardItem'

export default {
  name: 'FinishedBookCard',
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
  },
  components: {
    BookCard,
    BookCardItem
  }
}
</script>
<style scoped>
/* 整个小说推荐列表（两部分）：宽度，水平居中，flex布局 */
.book-cards {
  width: 1100px;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
