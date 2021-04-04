<!--
 * @Author: your name
 * @Date: 2021-04-04 14:55:36
 * @LastEditTime: 2021-04-04 19:28:20
 * @LastEditors: Please set LastEditors
 * @Description: 搜索的tag的组件
 * @FilePath: \read-novel\src\components\common\searchtags\SearchTags.vue
-->
<template>
  <div class="search-tags">
    <slot name="tag-name"></slot>
    <el-tag
    v-for="(tag, index) in tags"
    :key="tag.label"
    type="info"
    :effect="tagEffect(tag.checked)"
    size="small"
    class="reset-tag"
    @click="clickTag(index)">
    {{ tag.label }}
  </el-tag>
  </div>
</template>
<script>
export default {
  name: 'SearchTags',
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // tags: this.ptags
    }
  },
  methods: {
    // 设置el-tag的effect值（是否选中）
    tagEffect(checked) {
      if (checked === 1) {
        return 'dart'
      }
      return 'plain'
    },
    // 点击tag，切换是否选中状态（在父组件中修改是否选中状态）
    clickTag(index) {
      let checked = 0
      this.tags[index].checked === 1? (checked = 0): (checked = 1)
      this.$emit('clickTagChange', index, checked)
    }
  }
}
</script>
<style scoped>
/* 顶部间距 */
.search-tags {
  margin-bottom: 10px;
}

/* 重置tag的某些属性：右间距，字体颜色，边框颜色，鼠标形状 */
.reset-tag {
  margin-right: 15px;
  color: #636e72;
  border-color: #636e72;
  cursor: pointer;
}

/* 重置tag被选中的属性：背景颜色，字体颜色 */
.el-tag--dart {
  background-color: #999;
  color: #fff;
}
</style>
