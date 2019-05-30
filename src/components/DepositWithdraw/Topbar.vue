<template>
  <!-- depositwithdraw topbar -->
  <div class="app-depositwithdrawTopbar">
      <div class="topbar-container">
        <div class="back">
          <img src="~img/back-arrow32x32.png" alt="back icon">
        </div>
        <div class="title text-align">
          <p v-if="$route.path === '/deposit'">입출금</p>
          <p v-else-if="$route.path === '/deposit/coin-transaction'">NEO 입출금</p>
          <p v-else-if="$route.path === '/deposit/wallet'">NEO 입금하기</p>
          <p v-else-if="$route.path === '/deposit/new-address'">NEO 입금하기</p>
          <p v-else-if="$route.path === '/deposit/withdraw'">NEO 입금하기</p>
        </div>
        <div class="home-icon">
         <router-link to="/">
          <img src="~img/home32x32.png" alt="home icon">
        </router-link>
      </div>
     <div class="menu-icon" v-on:click="toggleSidebar">
        <img src="~img/menu.png" alt="menu icon" >
      </div>
    </div>
    <sidebar v-show="!showSidebar"></sidebar>
  </div>
</template>

<script>
import Sidebar from '../Globals/Sidebar'
export default {
  name: 'InvestmentTopbar',
  components: {
    'sidebar': Sidebar
  },
  data () {
    return {
      showSidebar: true
    }
  },
  methods: {
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/deposit/topbar.scss';
</style>
