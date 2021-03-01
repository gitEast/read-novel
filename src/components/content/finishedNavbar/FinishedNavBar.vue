<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: 导航栏最终呈现
 * @Date: 2021-02-28 22:43:30
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-28 22:54:02
-->
<template>
  <div>
    <nav-bar>
      <template v-slot:logo><img src="~assets/img/logo.png" alt="logo图片"></template>
      <template v-slot:right>
        <nav-bar-right>
          <template v-slot:right-01>Library</template>
          <template v-slot:right-02>Discuss</template>
          <template v-slot:right-03>Login</template>
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
  components: {
    NavBar,
    NavBarRight
  }
}
</script>
<style scoped>
</style>
