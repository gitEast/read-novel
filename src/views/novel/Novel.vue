<!--
 * @Author: your name
 * @Date: 2021-04-11 03:59:06
 * @LastEditTime: 2021-04-11 22:17:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \read-novel\src\views\novel\Novel.vue
-->
<template>
  <div class="novel">
    <div class="novel-info">
      <div class="header">
        <i class="el-icon-reading" style="margin-right: 8px;"></i>小说详情
      </div>
      <div class="novel-main">
        <el-card>
          <el-form 
            ref="nform" 
            :model="nform" 
            label-width="100px" 
            size="mini">
            <el-form-item label="小说名：">{{ novel.ntitle }}</el-form-item>
          </el-form>
          <el-form 
            ref="nform" 
            :model="nform" 
            label-width="100px"
            style="margin: 0;">
            <el-form-item label="作者：">{{ novel.nauthor }}</el-form-item>
          </el-form>
          <el-form ref="nform" :model="nform" label-width="100px">
            <el-form-item label="创建时间：">{{ novel.ncreate }}</el-form-item>
          </el-form>
          <el-form ref="nform" :model="nform" label-width="100px">
            <el-form-item label="进度：">{{ novel.nschedule }}</el-form-item>
          </el-form>
          <el-form ref="nform" :model="nform" label-width="100px">
            <el-form-item label="原创：">{{ novel.noriginal }}</el-form-item>
          </el-form>
          <el-form ref="nform" :model="nform" label-width="100px">
            <el-form-item label="时代：">{{ novel.ntime }}</el-form-item>
          </el-form>
          <el-form ref="nform" :model="nform" label-width="100px">
            <el-form-item label="风格：">{{ novel.nstyle }}</el-form-item>
          </el-form>
          <el-form>
            <el-button 
              type="primary" 
              size="small" 
              @click="firstChapter" 
              style="margin: 0 10px 0 100px;">
              开始阅读
            </el-button>
            <el-button 
              type="success" 
              size="small"
              @click="lastChapter">
              最新章节
            </el-button>
            <!-- <el-button 
              type="danger" 
              size="small"
              @click="downloadPdf"
              v-if="ifLogin">
              下载pdf
            </el-button> -->
          </el-form>
        </el-card>
      </div>
    </div>
    <!-- 章节目录 -->
    <div class="chapter-info">
      <div class="header">
        <i class="el-icon-s-fold" style="margin-right: 8px;"></i>章节目录
      </div>
      <div class="main">
        <el-card>
          <el-table :data="chapters">
            <el-table-column
              prop="cid"
              label="章节"
              width="200">
              <template #default="scope">
                <el-button 
                  type="text"  
                  style="color: #606266;" 
                  @click="toChapter(scope.row.cid)">
                  Chapter{{ scope.row.cid }}
                </el-button>
              </template>
            </el-table-column>
            <el-table-column
            prop="ctitle"
              label="标题"
              width="300">
              <template #default="scope">
                <el-button 
                  type="text"  
                  style="color: #606266;" 
                  @click="toChapter(scope.row.cid)">
                  {{ scope.row.ctitle }}
                </el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="ccreate"
              label="创建时间">
            </el-table-column>
            <el-table-column
              prop="cclick"
              label="点击数">
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Novel',
  data() {
    return {
      novel: {
        nid: '',
        ntitle: '',
        nauthor: '',
        ncreate: '',
        nschedule: '',
        noriginal: '',
        ntime: '',
        nstyle: ''
      },
      nid: '',
      chapters: [],
      ifLogin: false
    }
  },
  methods: {
    // 获取novel对象和对应的chapter对象
    init() {
      const config = { nid: this.nid }
      this.$post('/novel/bynid', config)
        .then(async (res) => {
          this.novel = res
          // console.log(res);
          this.formatNovel()
          try {
            let chapters = await this.$post('chapter/all', config)
            this.chapters = chapters
          } catch (error) {
            console.log(error);
          }
        })
    },
    // 对novel对象进行格式化
    formatNovel() {
      console.log(this.novel);
      if (this.novel === undefined) {
        return
      }
      this.novel.nschedule === '1'? this.novel.nschedule='已完结': this.novel.nschedule='连载中'
      this.novel.noriginal === '1'? this.novel.noriginal='衍生': this.novel.noriginal='原创'
      switch (this.novel.ntime) {
        case '0':
          this.novel.ntime = '古代'
          break;
        case '1':
          this.novel.ntime = '近代'
          break;
        case '2':
          this.novel.ntime = '现代'
          break;
        case '3':
          this.novel.ntime = '未来'
          break;
        default:
          break;
      }
      switch (this.novel.nstyle) {
        case '0':
          this.novel.nstyle = '正剧'
          break;
        case '1':
          this.novel.nstyle = '悲剧'
          break;
        case '2':
          this.novel.nstyle = '喜剧'
          break;
        default:
          break;
      }
    },
    // 开始阅读
    firstChapter() {
      console.log(typeof this.chapters);
      if (this.chapters === []) {
        return
      }
      let url = {
        path: '/chapter', 
        query: {
          nid: this.novel.nid, 
          cindex: 0
        }
      }
      this.$router.push(url)
    },
    // 最新章节
    lastChapter() {
      let url = {
        path: '/chapter', 
        query: {
          nid: this.novel.nid, 
          cindex: -1
        }
      }
      this.$router.push(url)
    },
    // 跳转到某一章节
    toChapter(cid) {
      let id = 0
      for (let i = 0; i < this.chapters.length; i++) {
        if (this.chapters[i].cid === cid) {
          id = i
          break
        }
      }
      let url = {
        path: '/chapter', 
        query: {
          nid: this.novel.nid, 
          cindex: id
        }
      }
      this.$router.push(url)
    },
    // 下载pdf
    // downloadPdf() {
    //   const config = {
    //     nid: this.novel.nid,
    //     ntitle: this.novel.ntitle,
    //     nauthor: this.novel.nauthor
    //   }
    //   this.$post('/download', config)
    //     .then(res => {
    //       console.log(res);
    //     })
    // }
  },
  created() {
    this.nid = this.$route.params.nid
    this.init()
    let role = localStorage.getItem('role')
    this.ifLogin = false
    if (role === 'user' || role === 'admin') {
      this.ifLogin = true
    }
  },
}
</script>
<style scoped>
.novel {
  width: 1040px;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #aaaaaa;
  border-radius: 20px;
}
.novel-info {
  cursor: default;
}
.header {
  font-size: 20px;
  margin-bottom: 20px;
}
.chapter-info {
  margin-top: 30px;
}
.reset-a {
  text-decoration: none;
  color: #606266;
}
.main {
  cursor: default;
}
</style>
