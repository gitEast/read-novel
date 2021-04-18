<!--
 * @Author: your name
 * @Date: 2021-04-12 01:28:28
 * @LastEditTime: 2021-04-12 22:01:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\library\Search.vue
-->
<template>
  <div class="search">
    <search-bar></search-bar>
    <div class="result">
      <div class="card" v-if="!(novels.length === 0)">
        <el-card 
          v-for="novel in novels" 
          :key="novel.nid"
          style="width: 1050px; margin: 30px auto;">
          <div class="flex">
            <div 
              class="flex-item" 
              @click="jumpTo(novel.nid)"
              style="cursor: pointer;">
              标题：{{ novel.ntitle }}
            </div>
            <div class="flex-item">创建时间：{{ novel.ncreate }}</div>
            <div class="flex-item">作者：{{ novel.nauthor }}</div>
            <div class="flex-item">时代：{{ novel.ntime }}</div>
            <div class="flex-item">进度：{{ novel.nschedule }}</div>
            <div class="flex-item">风格：{{ novel.nstyle }}</div>
          </div>
        </el-card>
      </div>
      <div v-else>
        <el-empty description="抱歉，没有您想要的小说"></el-empty>
      </div>
    </div>
  </div>
</template>
<script>
import SearchBar from 'components/common/searchbar/SearchBar'

export default {
  name: 'Search',
  data() {
    return {
      novels: []
    }
  },
  components: {
    SearchBar
  },
  methods: {
    jumpTo(nid) {
      this.$router.push('/novel/' + nid)
    },
    formatNovels(data) {
      this.novels = data
      if (this.novels === undefined || this.novels === null) {
        return
      }
      this.novels.forEach(novel => {
        console.log((typeof novel));
        if (novel === undefined) {
          return 
        }
        if ((typeof novel) === 'number') {
          return
        }
        console.log(novel);
        console.log(typeof novel.nschedule);
        novel.nschedule===1? novel.nschedule='已完结': novel.nschedule='连载中'
        novel.noriginal===1? novel.noriginal='衍生': novel.noriginal='原创'
        switch (novel.ntime) {
          case 0:
            novel.ntime = '古代'
            break;
          case 1:
            novel.ntime = '近代'
            break;
          case 2:
            novel.ntime = '现代'
            break;
          case 3:
            novel.ntime = '未来'
            break;
          default:
            break;
        }
        switch (novel.nstyle) {
          case 0:
            novel.nstyle = '正剧'
            break;
          case 1:
            novel.nstyle = '悲剧'
            break;
          case 2:
            novel.nstyle = '喜剧'
            break;
          default:
            break;
        }
      });
    }
  },
  mounted() {
    this.$bus.on('results', res => {
      this.formatNovels(res)
    })
  },
}
</script>
<style scoped>
.result {
  width: 1100px;
  border: 1px solid #aaaaaa;
  border-radius: 20px;
  padding: 10px 0px;
  margin: auto;
}
.flex {
  width: 900px;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  cursor: default;
}
.flex-item {
  width: 400px;
  margin: 5px 0;
}
</style>
