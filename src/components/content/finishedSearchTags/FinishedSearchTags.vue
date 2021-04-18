<!--
 * @Author: your name
 * @Date: 2021-04-04 15:39:28
 * @LastEditTime: 2021-04-11 02:34:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\components\content\finishedSearchTags\FinishedSearchTags.vue
-->
<template>
  <div class="finished-search-tags">
    <search-tags :tags="scheduleTags" @clickTagChange="changeScheduleTags">
      <template v-slot:tag-name>
        <div class="tag-title">进度：</div>
      </template>
    </search-tags>
    <search-tags :tags="originalTags" @clickTagChange="getOriginalTags">
      <template v-slot:tag-name>
        <div class="tag-title">原创：</div>
      </template>
    </search-tags>
    <search-tags :tags="timeTags" @clickTagChange="changeTagsTime">
      <template v-slot:tag-name>
        <div class="tag-title">时代：</div>
      </template>
    </search-tags>
    <search-tags :tags="styleTags" @clickTagChange="changeStyleTags">
      <template v-slot:tag-name>
        <div class="tag-title">风格：</div>
      </template>
    </search-tags>
    <search-tags :tags="featureTags" @clickTagChange="changeFeatureTags">
      <template v-slot:tag-name>
        <div class="tag-title">特点：</div>
      </template>
    </search-tags>
    <div class="search"><button type="button" class="searchBtn" @click="search">搜索</button></div>
  </div>
</template>
<script>
import SearchTags from 'components/common/searchtags/SearchTags'

export default {
  name: 'FinishedSearchTags',
  data() {
    return {
      scheduleTags: [
        {
          label: '连载中',
          checked: 0
        }, 
        {
          label: '已完结',
          checked: 0
        }
      ],
      originalTags: [
        {
          label: '原创',
          checked: 0
        }, 
        {
          label: '衍生',
          checked: 0
        }
      ],
      timeTags: [
        {
          label: '古代',
          checked: 0
        }, 
        {
          label: '近代',
          checked: 0
        }, 
        {
          label: '现代',
          checked: 0
        }, 
        {
          label: '未来',
          checked: 0
        }
      ],
      styleTags: [
        {
          label: '正剧',
          checked: 0
        }, 
        {
          label: '悲剧',
          checked: 0
        }, 
        {
          label: '喜剧',
          checked: 0
        }
      ],
      featureTags: [
        {
          id: 0,
          label: '盗墓',
          checked: 0
        }, 
        {
          id: 1,
          label: '快穿',
          checked: 0
        }, 
        {
          id: 2,
          label: '星际',
          checked: 0
        }, 
        {
          id: 3,
          label: '西幻',
          checked: 0
        }, 
        {
          id: 4,
          label: '修真',
          checked: 0
        }, 
        {
          id: 5,
          label: '武侠',
          checked: 0
        }, 
        {
          id: 6,
          label: '血族',
          checked: 0
        }, 
        {
          id: 7,
          label: '宅斗',
          checked: 0
        }, 
        {
          id: 8,
          label: '科举',
          checked: 0
        }, 
        {
          id: 9,
          label: '种田',
          checked: 0
        }, 
        {
          id: 10,
          label: '校园',
          checked: 0
        }, 
        {
          id: 11,
          label: '职场',
          checked: 0
        }, 
        {
          id: 12,
          label: '美食',
          checked: 0
        }, 
        {
          id: 13,
          label: '玄学',
          checked: 0
        }, 
        {
          id: 14,
          label: '虐恋',
          checked: 0
        }, 
        {
          id: 15,
          label: '机甲',
          checked: 0
        }
      ],
      allNovels: [],
      realNovels: []
    }
  },
  components: {
    SearchTags
  },
  methods: {
    /* 接收子组件传来的tag切换，我不知道如何让父组件函数也有值加入 */
    changeScheduleTags() {
      let index = arguments[0]
      let checked = arguments[1]
      this.scheduleTags[index].checked = checked
    },
    getOriginalTags() {
      let index = arguments[0]
      let checked = arguments[1]
      this.originalTags[index].checked = checked
    },
    changeTagsTime() {
      let index = arguments[0]
      let checked = arguments[1]
      this.timeTags[index].checked = checked
    },
    changeStyleTags() {
      let index = arguments[0]
      let checked = arguments[1]
      this.styleTags[index].checked = checked
    },
    changeFeatureTags() {
      let index = arguments[0]
      let checked = arguments[1]
      this.featureTags[index].checked = checked
    },
    // 获取真正符合条件的novel对象，即包含feature的tag
    getRealNovels() {
      this.realNovels = []
      // 判断是否有feature被选中
      let flag = this.featureTags.some(item => {
        if (item.checked) {
          return true
        }
      })
      // 如果没有，则直接返回
      if (!flag) {
        this.realNovels = this.allNovels
        return
      }
      // 如果有
      let feature = []
      // 获取所有选中的feature的tag
      this.featureTags.forEach(tag => {
        if (tag.checked) {
          let id = tag.id.toString()
          feature.push(id)
        }
      });
      // 获取真正符合条件的novel
      feature.forEach(id => {
        this.allNovels.forEach(novel => {
          if (novel.nfeature !== null) {
            if ((novel.nfeature.indexOf(id) !== -1) && (this.realNovels.indexOf(novel) === -1)) {
              this.realNovels.push(novel)
            }
          }
        });
      });
    },
    search() {
      const config = {
        nschedule: '(nschedule = 0 OR nschedule = 1)',
        noriginal: '(noriginal = 0 OR noriginal = 1)',
        ntime: '(ntime = 0 OR ntime = 1 OR ntime = 2 OR ntime = 3)',
        nstyle: '(nstyle = 0 OR nstyle = 1 OR nstyle = 2)'
      }
      // 进度
      let nschedule = []
      if (this.scheduleTags[0].checked) {
        nschedule.push('nschedule = 0')
      }
      if (this.scheduleTags[1].checked) {
        nschedule.push('nschedule = 1')
      }
      if (nschedule.length === 1) {
        config.nschedule = '(' + nschedule[0] + ')'
      }
      // 原创
      let noriginal = []
      if (this.originalTags[0].checked) {
        noriginal.push('noriginal = 0')
      }
      if (this.originalTags[1].checked) {
        noriginal.push('noriginal = 1')
      }
      if (noriginal.length === 1) {
        config.noriginal = '(' + noriginal[0] + ')'
      }
      // 时代
      let ntime = []
      if (this.timeTags[0].checked) {
        ntime.push('ntime = 0')
      }
      if (this.timeTags[1].checked) {
        ntime.push('ntime = 1')
      }
      if (this.timeTags[2].checked) {
        ntime.push('ntime = 2')
      }
      if (this.timeTags[3].checked) {
        ntime.push('ntime = 3')
      }
      if (ntime.length === 1) {
        config.ntime = '(' + ntime[0] + ')'
      } else if (ntime.length > 1) {
        config.ntime = '(' + ntime.join(' OR ') + ')'
      }
      // 风格
      let nstyle = []
      if (this.styleTags[0].checked) {
        nstyle.push('nstyle = 0')
      }
      if (this.styleTags[1].checked) {
        nstyle.push('nstyle = 1')
      }
      if (this.styleTags[0].checked) {
        nstyle.push('nstyle = 1')
      }
      if (nstyle.length === 1) {
        config.nstyle = '(' + nstyle[0] + ')'
      } else if (nstyle.length > 1) {
        config.nstyle = '(' + nstyle.join(' OR ') + ')'
      }
      this.$post('/novel/searchall', config)
        .then(res => {
          this.allNovels = res
          this.getRealNovels()
          this.$emit('getNovels', this.realNovels)
          this.$bus.emit('novels', this.realNovels)
        })
    }
  },
  created() {
    this.search()
  },
}
</script>
<style scoped>
/* 整个组件的CSS属性：宽度，间距（为了水平居中），边框，边框弧度，内间距 */
.finished-search-tags {
  width: 1060px;
  margin: 0 auto;
  border: 1px solid #aaaaaa;
  border-radius: 15px;
  padding: 20px 20px 10px;
}

/* 设置title：使其与tags同一行，鼠标形状 */
.tag-title {
  display: inline-block;
  cursor: default;
}

/* 按钮CSS：宽、高，设置为块级元素 + margin使其水平居中，边框弧度，选中时不显示外边框，边框，背景颜色，字体颜色，字体大小 */
.searchBtn {
  width: 60%;
  height: 40px;
  display: block;
  margin: 20px auto 10px;
  border-radius: 13px;
  outline: none;
  border: 1px solid #aaaaaa;
  background-color: #888;
  color: #fff;
  font-size: 1.3rem;
}
/* 被hover的按钮：背景颜色 */
.searchBtn:hover {
  background-color: #636e72;
}
/* 被选中的按钮：背景颜色 */
.searchBtn:active {
  background-color: #666;
}
</style>
