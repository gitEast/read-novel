<!--
 * @Author: your name
 * @Date: 2021-04-04 15:39:28
 * @LastEditTime: 2021-04-04 19:32:19
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
    <div class="search"><button type="button" class="searchBtn">搜索</button></div>
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
          label: '盗墓',
          checked: 0
        }, 
        {
          label: '快穿',
          checked: 0
        }, 
        {
          label: '星际',
          checked: 0
        }, 
        {
          label: '西幻',
          checked: 0
        }, 
        {
          label: '修真',
          checked: 0
        }, 
        {
          label: '武侠',
          checked: 0
        }, 
        {
          label: '血族',
          checked: 0
        }, 
        {
          label: '宅斗',
          checked: 0
        }, 
        {
          label: '科举',
          checked: 0
        }, 
        {
          label: '种田',
          checked: 0
        }, 
        {
          label: '校园',
          checked: 0
        }, 
        {
          label: '职场',
          checked: 0
        }, 
        {
          label: '美食',
          checked: 0
        }, 
        {
          label: '玄学',
          checked: 0
        }, 
        {
          label: '虐恋',
          checked: 0
        }, 
        {
          label: '机甲',
          checked: 0
        }
      ]
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
    }
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
