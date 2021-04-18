<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 最终完成的首页的两个小说卡片，暂定十本小说，其实应该是二十本，而且想换字体
 * @Date: 2021-03-15 21:18:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-12 02:17:14
-->
<template>
  <div class="book-cards">
    <div class="left-book-card">
      <book-card>
        <template v-slot:novels-title>
          <span>原创小说</span>
        </template>
        <book-card-item 
          v-for="item in onovels"
          :key="item.nid"
          :item="item">
        </book-card-item>
      </book-card>
    </div>
    <div class="right-book-card">
      <book-card>
        <template v-slot:novels-title>
          <span>衍生小说</span>
        </template>
        <book-card-item 
          v-for="item in nonovels"
          :key="item.nid"
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
      onovels: [],
      nonovels: []
    }
  },
  components: {
    BookCard,
    BookCardItem
  },
  created() {
    this.$post('/novel/recommend_original', {})
      .then(async (res) => {
        this.onovels = res
        try {
          let res02 = await this.$post('/novel/recommend_noriginal', {})
          this.nonovels = res02
        } catch (error) {
          console.log(error);
        }
      })
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
