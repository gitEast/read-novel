<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 导航栏最终呈现
 * @Date: 2021-02-28 22:43:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-10 15:17:29
-->
<template>
  <div>
    <nav-bar>
      <template v-slot:logo><img class="reset-img" src="~assets/img/logo.png" alt="logo图片" @click="jumpTo('/home')"></template>
      <template v-slot:right>
        <nav-bar-right>
          <template v-slot:right-01><div @click="jumpTo('/library')">Library</div></template>
          <template v-slot:right-02><div @click="jumpTo('/discuss')">Discuss</div></template>
          <template v-slot:right-03>
            <div v-if="!ifLogin" @click="jumpTo('/login')">Login</div>
            <div v-else-if="ifUser" @click="jumpTo('/userprofile')">Profile</div>
            <div v-else @click="jumpTo('/adminprofile')">Profile</div>
          </template>
        </nav-bar-right>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import NavBarRight from 'components/common/navbar/NavBarRight'

export default {
  name: 'FinishedNavBar',
  data() {
    return {
      ifLogin: false,
      ifUser: true
    }
  },
  components: {
    NavBar,
    NavBarRight
  },
  methods: {
    jumpTo(path) {
      this.$router.push(path)
    },
    // 获取登录者身份
    getRole() {
      let role = localStorage.getItem('role')
      if (role === 'user') {
        this.ifLogin = true
        this.ifUser = true
      } else if (role === 'admin') {
        this.ifLogin = true
        this.ifUser = false
      } else {
        this.ifLogin = false
      }
    }
  },
  watch: {
    $route(to) {
      console.log(to.path);
      // if (localStorage.getItem('act') === "") {
      //   this.ifLogin = true
      // }
      this.getRole()
    }
  },
  mounted() {
    
  }
}
</script>
<style scoped>
.reset-img {
  cursor: pointer;
}
</style>
